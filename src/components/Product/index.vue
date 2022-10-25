<template>
  <div class="product">
    <h3>{{ product.productTagline }}</h3>
    <p>{{ product.name }}</p>
    <p>{{ product.productTitle }}</p>
    <router-link
      :to="{
        name: 'productDetails',
        params: { url: product.productUrl, id: product.id },
      }"
    >
      <div>View Details</div>
    </router-link>
  </div>
</template>
  
  <script>
export default {
  name: "Product",
  props: {
    product: Object,
  },
};
</script>
  
<style scope>
.product {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.product h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
