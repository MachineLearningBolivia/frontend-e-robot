<template>
  <br><br><br><br>
  <div v-if="isPageLoaded" class="fixed inset-0 z-50 flex items-center justify-center h-screen bg-white">
    <SfLoaderCircular size="4xl" />
  </div>
  <div class="flex flex-col md:flex-row gap-6 max-w-screen-xl bg-primary-600">
    <div class="relative flex-1">
      <a class="absolute w-full h-full z-1 focus:outline-none rounded-lg" :aria-label="itemsDisplayRandom.name"
        href="#"></a>
      <div class="flex overflow-hidden">
        <div class="flex flex-col justify-center items-start p-6 lg:p-10 max-w-1/2">
          <h2 class="mb-4 mt-2 font-bold text-2xl text-white">
            🌟 Haz Tu Pedido en el Momento Perfecto! ⌛
          </h2>
          <p class="text-base text-white">
            Queremos asegurarnos de estar disponibles cuando más nos necesitas. Por eso, te compartimos nuestros horarios
            de atención para que puedas planificar tus compras con facilidad:<br>
            🕒 Horarios de Atención:<br>

            🌞 Lunes a Viernes:<br>

            Mañanas: 9:00 am - 1:00 pm<br>
            Tardes: 2:00 pm - 6:00 pm<br>
          </p>
        </div>
      </div>
    </div>

    <div class="relative flex-1 bg-white ">
      <div class="flex flex-row-reverse overflow-hidden">
        <div class="flex flex-col justify-center items-start p-6 lg:p-10 max-w-1/2">
          <p class="uppercase text-xs font-bold tracking-widest">
            Tambien te puede interesar
          </p>
          <h2 class="mb-4 mt-2 font-bold text-3xl">
            {{ itemsDisplayRandom.name }}
          </h2>
          <p class="text-base mb-4">
            {{ itemsDisplayRandom.description }}
          </p>
          <SfButton class="bg-black">
            <router-link :to="{ name: 'producto', params: { id: idItemsDisplayRandom } }">Saber más</router-link>
          </SfButton>
        </div>
        <img :src="itemsDisplayRandom.image" alt="{{ itemsDisplayRandom.name }}" class="w-1/2 self-end object-contain" />
      </div>
    </div>
  </div>
  <div class="flex flex-col md:flex-row gap-6 max-w-screen-xl bg-primary-800">
    <div class="flex justify-center items-center p-6 lg:p-10 max-w-1/2 text-white my-auto">
      <div class="mr-4">
        <h2 class="mb-4 mt-2 font-bold text-2xl">
          🛍️ ¿Listo para hacer tu pedido? ¡Te lo haremos fácil y rápido!
        </h2>
        <p class="text-base text-white">
          👋 Estamos emocionados de ayudarte a conseguir el producto que deseas. Realizar un pedido es muy sencillo, solo
          sigue estos simples pasos
        </p>
        <p class="text-base mb-4 text-white">
          ¡Listo para disfrutar! Una vez confirmado el pedido, solo queda esperar a que lleguen tus productos y
          disfrutar de la calidad que ofrecemos.<br>
          ¡No dudes en preguntar si necesitas ayuda o tienes alguna pregunta adicional! Estamos aquí para hacer tu
          experiencia de compra lo más placentera posible. 😊🚚<br>
        </p>
      </div>
      <div>
        <h3 class="mb-4 mt-2 font-bold text-base">
          Explora nuestra selección
        </h3>
        <p class="text-base mb-4 text-white">
          Echa un vistazo a nuestro catalogo para descubrir nuestros
          productos de alta calidad y selecciona lo que te encanta.<br>
        </p>
        <h3 class="mb-4 mt-2 font-bold text-base">
          Presionna el boton "🛒Pedir producto"
        </h3>
        <p class="text-base mb-4 text-white">
          Envíanos un mensaje con los productos que deseas junto con la cantidad y
          tu nombre
        </p>
        <h3 class="mb-4 mt-2 font-bold text-base">
          Confirmación de pedido
        </h3>
        <p class="text-base mb-4 text-white">
          Te responderemos lo antes posible para confirmar tu pedido y coordinar los detalles de
          entrega y pago.
        </p>
      </div>
    </div>
  </div>
  <div>
    <SfScrollable
      class="m-auto py-4 items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      buttons-placement="floating" drag>
      <template #previousButton="defaultProps">
        <SfButton v-bind="defaultProps" class="absolute !rounded-full z-10 left-4 bg-white hidden md:block"
          :class="{ '!hidden': defaultProps.disabled }" variant="secondary" size="lg" square>
          <SfIconChevronLeft />
        </SfButton>
      </template>
      <div v-for="{ id, name, price, image } in itemsDisplayCarrusel" :key="id"
        class="first:ms-auto last:me-auto border border-neutral-200 shrink-0 rounded-md hover:shadow-lg w-[148px] lg:w-[192px]">
        <div class="relative">
          <router-link :to="{ name: 'producto', params: { id: id } }">
            <SfLink href="#" class="block">
              <img :src="image" :alt="name"
                class="block object-cover h-auto rounded-md aspect-square lg:w-[190px] lg:h-[190px]" width="146"
                height="146" />
            </SfLink>
            <SfButton variant="tertiary" size="sm" square
              class="absolute bottom-0 right-0 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full"
              aria-label="Add to wishlist">
              <SfIconFavorite size="sm" />
            </SfButton>
          </router-link>
        </div>
        <div class="p-2 border-t border-neutral-200 typography-text-sm">
          <SfLink href="#" variant="secondary" class="no-underline">{{ name }}</SfLink>
          <span class="block mt-2 font-bold">{{ price }}</span>
        </div>
      </div>
      <template #nextButton="defaultProps">
        <SfButton v-bind="defaultProps" class="absolute !rounded-full z-10 right-4 bg-white hidden md:block"
          :class="{ '!hidden': defaultProps.disabled }" variant="secondary" size="lg" square>
          <SfIconChevronRight />
        </SfButton>
      </template>
    </SfScrollable>
  </div>
  <div class="flex mt-4">
    <div class="float-left ml-3 mr-3 hidden sm:block">
      <SfAccordionItem v-model="open2" class=" md:max-w-[276px] ">
        <template #summary>
          <div class="flex justify-between p-2 mb-2 bg-primary-600 rounded-t-lg ">
            <p class="text-white text-xl font-semibold">Categorias</p>
            <SfIconChevronLeft :class="{ 'rotate-90': open2, '-rotate-90': !open2, 'text-white': true }" />
          </div>
        </template>
        <ul class="mt-2 mb-6 border-2 border-neutral-500 border-primary-600 rounded-lg">
          <div v-if="isPageLoaded" class="flex items-center justify-center h-screen">
            <SfLoaderCircular size="4xl" />
          </div>
          <li v-for="(category, index) in categories" :key="category.key">
            <SfListItem @mouseover="showProducts(category.id)" @mouseout="hideProducts" size="sm" tag="a"
              :href="category.link" :class="[
                'first-of-type:mt-2 rounded-md active:bg-primary-100',
                { 'bg-primary-100 hover:bg-primary-100 active:bg-primary-100 font-medium': index === selectedCategory },
              ]" @click="categoryFilter(category.id)">
              <template #suffix>
                <SfIconCheck v-if="index === selectedCategory" size="sm" class="text-primary-700" />
              </template>
              <div>
                <span class="flex items-center tex-lg font-semibold">
                  {{ category.name }}
                </span>
              </div>
            </SfListItem>
          </li>
        </ul>
      </SfAccordionItem>
    </div>
    <div v-if="!hoveredCategory" role="alert" :style="{ top: `${hoverPositionTop}px`, left: `${hoverPositionLeft}px` }"
      class=" absolute bg-neutral-100 max-w-[600px] shadow-md pr-2 pl-4 ring-1 ring-neutral-300 typography-text-sm md:typography-text-base py-1 rounded-md ">
      <p class="py-2">{{ categoryProducts }}</p>
      <div v-for="({ name, id }, index) in itemsDisplayCategorized" :key="`${name}-${index}`">
        <p class="font-medium typography-text-base">{{ name }}</p>
      </div>
    </div>
    <div>
      <div class="mb-4">
        <form ref="referenceRef" role="search" class="relative" @submit.prevent="submit">
          <div class="flex">
            <SfInput ref="inputRef" v-model="inputModel"
              wrapper-class="w-full !ring-0 active:!ring-0 hover:!ring-0 focus-within:!ring-0 border-y border-l border-neutral-200 rounded-r-none hover:border-primary-800 active:border-primary-700 active:border-y-2 active:border-l-2 focus-within:border-y-2 focus-within:border-l-2 focus-within:border-primary-700"
              aria-label="Search" placeholder="Buscar..." @focus="open" @keydown="handleInputKeyDown">
              <template #prefix>
                <SfIconSearch />
              </template>
              <template #suffix>
                <button v-if="inputModel" type="button" aria-label="Reset search"
                  class="flex rounded-md focus-visible:outline focus-visible:outline-offset" @click="reset">
                  <SfIconCancel />
                </button>
              </template>
            </SfInput>
            <SfButton type="submit" square aria-label="Search for a specific phrase on the page" class="rounded-l-none">
              <SfIconSearch />
            </SfButton>
          </div>
          <div v-if="isOpen" ref="floatingRef" :style="style" class="left-0 right-0">
            <div v-if="isLoadingSnippets"
              class="flex items-center justify-center w-full h-screen sm:h-20 py-2 bg-white sm:border sm:border-solid sm:rounded-md sm:border-neutral-100 sm:drop-shadow-md">
              <SfLoaderCircular />
            </div>
            <ul v-else-if="snippets.length > 0" ref="dropdownListRef"
              class="py-2 bg-white h-screen sm:h-auto sm:border sm:border-solid sm:rounded-md sm:border-neutral-100 sm:drop-shadow-md">
              <li v-for="{ highlight, rest, product } in snippets" :key="product.id">
                <SfListItem tag="button" type="button" class="flex justify-start !py-4 sm:!py-2"
                  @click="() => selectValue(product.name)" @keydown.enter.space.prevent="selectValue(product.name)">
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
      <div>
        <div class="flex flex-wrap gap-4 lg:gap-6 justify-center">
          <div v-for="({ image, name, description, button, id }, index) in itemsDisplay" :key="`${name}-${index}`"
            v-show="showCard[index]"
            class="flex flex-col items-center border border-neutral-200 rounded-md hover:shadow-2xl transition-all duration-500 ease-in-out mb-4 lg:w-1/4 lg:mx-0"
            :style="{ 'animation-delay': `${index * 100}ms` }">
            <a class="absolute inset-0 z-1 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-md"
              href="#" style="position: relative;" />
            <img :src="image" :alt="name" class="object-cover h-auto rounded-t-md aspect-video" />
            <div class="flex flex-col items-start p-4 grow">
              <p class="font-medium typography-text-base">{{ name }}</p>
              <p class="mt-1 mb-4 font-normal typography-text-sm text-neutral-700">{{ description }}</p>
              <SfButton size="sm" variant="tertiary" class="relative mt-auto text-primary-900 bg-primary-600">
                <router-link :to="{ name: 'producto', params: { id: id } }">{{ button || 'Saber más' }}</router-link>
              </SfButton>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap justify-center w-full">
          <SfButton v-if="!allItemsLoaded" class="w-80 mt-4 mb-4" @click="loadMore"> Mostrar Más </SfButton>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
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
  SfAccordionItem,
  SfCounter,
  SfIconArrowBack,
  SfIconCheck,
  SfIconChevronLeft,
  SfLink,
  SfIconFavorite,
  SfIconChevronRight,
  SfScrollable,
} from '@storefront-ui/vue';
//catalogo
import { type Ref, ref, onMounted, watch, nextTick } from "vue";
import { getProduct } from "../../api/product.js"
//category
import { getCategoriesRequest } from "../../api/category.js"
import Footer from '../components/Footer.vue';
//catalogo var
const items = ref([]);
const load = ref(true);
const itemsDisplay = ref([]);
const itemsDisplayRandom = ref([]);
const idItemsDisplayRandom = ref(0);
const itemsDisplayCarrusel = ref([]);
const showCard = ref([]);
const displayedItems = ref([]);
const allItemsLoaded = ref(false);
//categories var
const categoriesItems = ref([]);
const selectedCategory = ref(-1);
const imgInicial = ref("h");
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
    //console.log(itemsDisplay.value[2].image);
    imgInicial.value = itemsDisplay.value[2].image;
  } catch (error) {
    console.error("Error al cargar datos", error);
  }
  try {
    const resCat = await getCategoriesRequest();
    categoriesItems.value = resCat.data;
    categories.value = categoriesItems.value.data;
    //console.log(categories.value);
    //console.log(categories);

  } catch (error) {
    console.error("Error al cargar datos", error);
  }
  const itemsByCategories = ref([]);
  for (let index = 1; index <= categories.value.length; index++) {
    //Ver productosFiltrados
    const itemsDisplayLocal = ref([]);
    itemsDisplayLocal.value = items.value.data;
    const productosFiltrados = itemsDisplayLocal.value;
    // Filtrar productos de la categoría 

    const productoFiltrado = productosFiltrados.filter(producto => producto.category_id === index);
    // Seleccionar un producto aleatorio de la categoría
    const productoAleatorio = productoFiltrado[Math.floor(Math.random() * productoFiltrado.length)];
    // Añadir el producto aleatorio a la lista
    itemsByCategories.value.push(productoAleatorio);
  }
  //console.log(itemsByCategories);
  itemsDisplay.value = itemsByCategories.value;
  itemsDisplayCarrusel.value = itemsByCategories.value;
  const productoAleatorio = itemsDisplay.value[Math.floor(Math.random() * itemsDisplay.value.length)];
  itemsDisplayRandom.value = productoAleatorio;
  idItemsDisplayRandom.value = productoAleatorio.id;
  isPageLoaded.value = false;
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
  }
}
//buscador
const inputModel = ref('');
const inputRef = ref();
const dropdownListRef = ref();
const isLoadingSnippets = ref(true);
const isPageLoaded = ref(true);
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
const categories = ref([
  {
    key: 'CLOTHING',
    label: 'Clothing',
    counter: 30,
    link: '#',
  },
  {
    key: 'SHOES',
    label: 'Shoes',
    counter: 28,
    link: '#',
  },
  {
    key: 'ACCESSORIES',
    label: 'Accessories',
    counter: 56,
    link: '#',
  },
  {
    key: 'WEARABLES',
    label: 'Wearables',
    counter: 12,
    link: '#',
  },
  {
    key: 'FOOD_DRINKS',
    label: 'Food & Drinks',
    counter: 52,
    link: '#',
  },
]);
//filtro de categorias
const open2 = ref(false);
const categoryFilterFlag = ref(true);
const categoryFilter = async (phrase: string) => {
  // Convertir la cadena a un número
  const categoryId = parseInt(phrase, 10);
  if (categoryFilterFlag.value || (categoryId != (selectedCategory.value + 1))) {
    const itemsDisplayLocal = ref([]);
    itemsDisplayLocal.value = items.value.data;
    //console.log(itemsDisplayLocal);
    //console.log(categoryId);

    const productosFiltrados = itemsDisplayLocal.value;
    // Filtrar productos de la categoría 

    const productoFiltrado = productosFiltrados.filter(producto => producto.category_id === categoryId);
    //console.log(productoFiltrado);
    itemsDisplay.value = productoFiltrado;
    selectedCategory.value = categoryId - 1;
    categoryFilterFlag.value = false;
  } else {
    categoryFilterFlag.value = true;
    selectedCategory.value = -1;
    itemsDisplay.value = items.value.data;
  };
};
//minipantalla de categorias
const categoryProducts = ref([]);
const hoverPositionTop = ref([]);
const hoverPositionLeft = ref([]);
const hoveredCategory = ref([]);
hoveredCategory.value = true;
const itemsDisplayCategorized = ref([]);

const showProducts = async (phrase: string) => {
  hoveredCategory.value = false;
  categoryProducts.value = "Productos disponibles";
  hoverPositionTop.value = event.currentTarget.offsetTop;
  hoverPositionLeft.value = event.currentTarget.offsetLeft + event.currentTarget.offsetHeight + 200;
  //Ver productosFiltrados
  const itemsDisplayLocal = ref([]);
  itemsDisplayLocal.value = items.value.data;
  // Convertir la cadena a un número
  const categoryId = parseInt(phrase, 10);

  const productosFiltrados = itemsDisplayLocal.value;
  // Filtrar productos de la categoría 

  const productoFiltrado = productosFiltrados.filter(producto => producto.category_id === categoryId);
  itemsDisplayCategorized.value = productoFiltrado;
  //console.log(itemsDisplayCategorized);
}
const hideProducts = async () => {
  categoryProducts.value = "";
  hoveredCategory.value = true;
}
</script>
