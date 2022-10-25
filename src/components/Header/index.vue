<template>
  <h1>{{ title }}</h1>
  <header>
    <div id="nav" class="wrapper">
      <router-link to="/">Home</router-link>
    </div>
    <input
      v-if="showSearch"
      type="text"
      v-model="search"
      placeholder="Search by title"
      @change="this.$emit('emitInputValue', this.search)"
    />
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
    showSearch: Boolean,
  },
  data() {
    return {
      search: "",
    };
  },
};
</script>


<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

input {
  display: block;
  width: 350px;
  margin: 20px auto;
  padding: 10px 45px;
  background: white url("../../assets/search-icon.svg") no-repeat 15px center;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
</style>
