<template>
  <br><br><br>
  <div class="mb-4">
    <h2>Catálogo de Productos</h2>
    <form ref="referenceRef" role="search" class="relative" @submit.prevent="submit">
    <div class="flex">
      <SfInput
        ref="inputRef"
        v-model="inputModel"
        wrapper-class="w-full !ring-0 active:!ring-0 hover:!ring-0 focus-within:!ring-0 border-y border-l border-neutral-200 rounded-r-none hover:border-primary-800 active:border-primary-700 active:border-y-2 active:border-l-2 focus-within:border-y-2 focus-within:border-l-2 focus-within:border-primary-700"
        aria-label="Search"
        placeholder="Buscar 'Maquina de' or 'Cortadora de'..."
        @focus="open"
        @keydown="handleInputKeyDown"
      >
        <template #prefix><SfIconSearch /></template>
        <template #suffix>
          <button
            v-if="inputModel"
            type="button"
            aria-label="Reset search"
            class="flex rounded-md focus-visible:outline focus-visible:outline-offset"
            @click="reset"
          >
            <SfIconCancel />
          </button>
        </template>
      </SfInput>
      <SfButton type="submit" square aria-label="Search for a specific phrase on the page" class="rounded-l-none">
        <SfIconSearch />
      </SfButton>
    </div>
    <div v-if="isOpen" ref="floatingRef" :style="style" class="left-0 right-0">
      <div
        v-if="isLoadingSnippets"
        class="flex items-center justify-center w-full h-screen sm:h-20 py-2 bg-white sm:border sm:border-solid sm:rounded-md sm:border-neutral-100 sm:drop-shadow-md"
      >
        <SfLoaderCircular />
      </div>
      <ul
        v-else-if="snippets.length > 0"
        ref="dropdownListRef"
        class="py-2 bg-white h-screen sm:h-auto sm:border sm:border-solid sm:rounded-md sm:border-neutral-100 sm:drop-shadow-md"
      >
        <li v-for="{ highlight, rest, product } in snippets" :key="product.id">
          <SfListItem
            tag="button"
            type="button"
            class="flex justify-start !py-4 sm:!py-2"
            @click="() => selectValue(product.name)"
            @keydown.enter.space.prevent="selectValue(product.name)"
          >
            <p class="text-left">
              <span>{{ highlight }}</span>
              <span class="font-medium">{{ rest }}</span>
            </p>
            <p class="text-left typography-text-xs text-neutral-500">{{ product.category }}</p>
          </SfListItem>
        </li>
      </ul>
    </div>
  </form>

  </div>
  <div class="flex flex-wrap gap-4 lg:gap-6 justify-center">
    <div
      v-for="({ image, name, description, button }, index) in itemsDisplay"
      :key="`${name}-${index}`"
      v-show="showCard[index]"
      class="flex flex-col items-center border border-neutral-200 rounded-md hover:shadow-xl transition-all duration-500 ease-in-out mb-4 lg:w-1/4 lg:mx-0"
      :style="{ 'animation-delay': `${index * 100}ms` }"
    >
      <a
        class="absolute inset-0 z-1 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-md"
        href="#"
        style="position: relative;"
      />
      <img :src="image" :alt="name" class="object-cover h-auto rounded-t-md aspect-video" />
      <div class="flex flex-col items-start p-4 grow">
        <p class="font-medium typography-text-base">{{ name }}</p>
        <p class="mt-1 mb-4 font-normal typography-text-sm text-neutral-700">{{ description }}</p>
        <SfButton size="sm" variant="tertiary" class="relative mt-auto" >
          <router-link :to="{ name: 'producto', params: { id: name }}">{{ button || 'Saber más' }}</router-link>
        
        </SfButton>
      </div>
    </div>
    <SfButton v-if="!allItemsLoaded" class="w-full mt-4" @click="loadMore"> Mostrar Más </SfButton>
  </div>
</template>
<script lang="ts" setup>
// Importa useRouter desde vue-router
import { useRoute, useRouter } from 'vue-router';
//buscador
import { offset } from '@floating-ui/vue';
import { watchDebounced } from '@vueuse/shared';
import { unrefElement } from '@vueuse/core';
import {
  SfButton,
  SfIconCancel,
  SfIconSearch,
  SfInput,
  SfListItem,
  SfLoaderCircular,
  useDisclosure,
  useDropdown,
  useTrapFocus,
} from '@storefront-ui/vue';
//catalogo
import { type Ref, ref, onMounted, watch, nextTick } from "vue";
import { getProduct } from "../../api/product.js"

const items = ref([]);
const load = ref(true);
const itemsDisplay = ref([]);
const showCard = ref([]);
const displayedItems = ref([]);
const allItemsLoaded = ref(false);

async function loadData() {
  try {
    const res = await getProduct();
    items.value = res.data;
    itemsDisplay.value = items.value.data;
    showCard.value = Array(itemsDisplay.value.length).fill(false);
    showCard.value.fill(true, 0, 3);
    load.value = false;
    // Filtrar los productos según el término de búsqueda actual
    filterProducts(inputModel.value);
  } catch (error) {
    console.error("Error al cargar datos", error);
  }
}
//filtrar itemsDisplay
async function filterProducts(phrase: string) {
  try {
    const data = await mockAutocompleteRequest(phrase);
    itemsDisplay.value = data.map(result => result.product);
  } catch (error) {
    console.error("Error al filtrar productos", error);
  }
}
async function loadMore() {
  const startIndex = displayedItems.value.length;
  const endIndex = startIndex + 10; // Cargar 10 tarjetas adicionales (ajusta según sea necesario)
  displayedItems.value = displayedItems.value.concat(itemsDisplay.value.slice(startIndex, endIndex));
  showCard.value.fill(false, startIndex, endIndex);

  // Mostrar las tarjetas progresivamente
  for (let index = startIndex; index < endIndex; index++) {
    await nextTick();
    showCard.value[index] = true;
  }

  // Verificar si todas las tarjetas han sido cargadas
  if (endIndex >= itemsDisplay.value.length) {
    allItemsLoaded.value = true;
  }
}

onMounted(() => {
  loadData();
});

watch(
  () => showCard.value,
  () => {
    window.addEventListener("scroll", handleScroll);
  }
);

function handleScroll() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
    // Se está acercando al final de la página, cargar más tarjetas
    loadMore();
  }
}
//buscador
const inputModel = ref('');
const inputRef = ref();
const dropdownListRef = ref();
const isLoadingSnippets = ref(false);
const snippets = ref<{ highlight: string; rest: string; product: Product }[]>([]);
const { isOpen, close, open } = useDisclosure();
const { referenceRef, floatingRef, style } = useDropdown({
  isOpen,
  onClose: close,
  placement: 'bottom-start',
  middleware: [offset(4)],
});
const { focusables: focusableElements } = useTrapFocus(dropdownListRef as Ref<HTMLElement>, {
  trapTabs: false,
  arrowKeysUpDown: true,
  activeState: isOpen,
  initialFocus: false,
});

const submit = () => {
  close();
};

const focusInput = () => {
  const inputEl = unrefElement(inputRef)?.querySelector('input');
  inputEl?.focus();
};

const reset = () => {
  inputModel.value = '';
  snippets.value = [];
  close();
  focusInput();
};

const selectValue = (phrase: string) => {
  inputModel.value = phrase;
  close();
  focusInput();
};

const handleInputKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') reset();
  if (event.key === 'ArrowUp') {
    open();
    if (isOpen && focusableElements.value.length > 0) {
      focusableElements.value[focusableElements.value.length - 1].focus();
    }
  }
  if (event.key === 'ArrowDown') {
    open();
    if (isOpen && focusableElements.value.length > 0) {
      focusableElements.value[0].focus();
    }
  }
};

watch(inputModel, () => {
  if (inputModel.value === '') {
    reset();
  }
filterProducts(inputModel.value);
});

watchDebounced(
  inputModel,
  () => {
    if (inputModel.value) {
      const getSnippets = async () => {
        open();
        isLoadingSnippets.value = true;
        try {
          const data = await mockAutocompleteRequest(inputModel.value);
          snippets.value = data;
        } catch (error) {
          close();
          console.error(error);
        }
        isLoadingSnippets.value = false;
      };

      getSnippets();
    }
  },
  { debounce: 500 },
);

interface Product {
  id: string;
  name: string;
}
const mockProducts: Product[] = [
  { id: 'ip-14', name: 'iPhone 14' },
  { id: 'ip-14-pro', name: 'iPhone 14 Pro' },
  { id: 'ip-14-pro-max', name: 'iPhone 14 Pro Max' },
  { id: 'ip-14-plus', name: 'iPhone 14 Plus' },
  { id: 'ip-13', name: 'iPhone 13' },
  { id: 'ip-13-mini', name: 'iPhone 13 mini' },
  { id: 'ip-12', name: 'iPhone 12' },
  { id: 'ip-11', name: 'iPhone 11' },
  { id: 'mb-air', name: 'MacBook Air' },
  { id: 'mb-pro-13', name: 'MacBook Pro 13"' },
  { id: 'mb-pro-14', name: 'MacBook Pro 14"' },
  { id: 'mb-pro-16', name: 'MacBook Pro 16"' },
];
const mockAutocompleteRequest = async (phrase: string) => {
  try {
    const res = await getProduct({ searchTerm: phrase }); // Llama a tu API real con el término de búsqueda
    // Accede directamente al array de productos (data) dentro de la respuesta JSON
    const dataArray = res.data?.data || [];
    // Filtra los resultados según el término de búsqueda
    const results = dataArray
      .filter(product => product.name.toLowerCase().includes(phrase.toLowerCase()))
      .map((product) => {
        // Ajusta la lógica para resaltar la parte coincidente del nombre del producto
        const index = product.name.toLowerCase().indexOf(phrase.toLowerCase());
        const highlight = product.name.substring(0, index + phrase.length);
        const rest = product.name.substring(index + phrase.length);
        return { highlight, rest, product };
      });
   // console.log(results); 
    return results;
  } catch (error) {
    console.error("Error al obtener sugerencias de autocompletado", error);
    return [];
  }
  };
</script>
