<template>
  <div class="container">
    <Header
      title="Coda Products"
      :showSearch="false"
    />
    <section class="wrapper">
      <div class="flex-col">
        <img class="flex-col--2" :src="product?.logoLocation" alt="" />
        <div class="flex-col--2">
          <h2>{{ product?.productTitle }}</h2>
          <p>Voucher Type: {{ product?.voucherTypeName }}</p>
          <p>Price Min Amount: ${{ product?.variableDenomPriceMinAmount }}</p>
          <a v-bind:href="product?.orderUrl"> Order Now </a>
        </div>
      </div>

      <div class="container">
        <p v-html="product?.shortDescription"></p>
      </div>

      <h3>Detailed Description</h3>
      <div class="container">
        <p v-html="product?.longDescription"></p>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "../../components/Header/index.vue";

export default {
  name: "ProductDetails",
  components: {
    Header,
  },
  data() {
    return {
      product: this.$store.getters.product(this.$route.params.id),
    };
  },
};
</script>

<style scoped>
.flex-col {
  display: flex;
  align-items: flex-start;
}
.flex-col--2 {
  width: 50%;
  padding: 16px;
}
</style>