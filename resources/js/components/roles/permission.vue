<template>
  <div>
    <div class="br-pagebody">
      <div class="br-section-wrapper" v-loading="isLoading.fullPage">
        <h1>{{nama}}</h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nama: null,
      page: {
        parent: true,
        name: "Access Control List Modul",
        crud: {
          url: "/roles/modul",
          type: "temp"
        }
      },
      isLoading: {
        fullPage: true
      }
    };
  },
  computed: {
    breadcums() {
      return this.$store.state.breadcums;
    }
  },
  mounted() {
    this.$store.dispatch("StoreDatabase", this.page.crud).then(scs => {
      this.nama = scs;
    });
    this.isLoading = false;
    this.$parent.page.parent = false;
    this.$parent.page.name = "Access Control List Permission";
  }
};
</script>