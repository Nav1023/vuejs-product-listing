<template>
  <div class="container">
    <Header
      title="Coda Products"
      :showSearch="true"
      @emitInputValue="filterValue"
    />
    <Products :products="products" />
  </div>
</template>
../components/Products/Products.vue
<script>
import Header from "../../components/Header/index.vue";
import Products from "../../components/Products/index.vue";
import ProductsData from "../../../products.json";

export default {
  name: "Home",
  components: {
    Header,
    Products,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    filterValue(value) {
      if (!!value) {
        this.products = ProductsData.products.filter((val) =>
          val.productTagline.toLowerCase().includes(value.toLowerCase())
        );
      } else {
        this.products = ProductsData.products;
      }
    },
  },
  created() {
    this.products = ProductsData.products;
  },
  emits: ["emitInputValue"],
};
</script>
