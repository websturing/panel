<template>
  <div>
    <div class="br-pageheader pd-y-15 pd-l-20">
      <nav class="breadcrumb pd-0 mg-0 tx-12">{{breadcums}}</nav>
    </div>
    <!-- br-pageheader -->

    <div class="br-msg-header d-flex justify-content-between">
      <div class="media align-items-center">
        <div class="media-body mg-l-10">
          <h4 class="tx-gray-800 mg-b-5">{{page.name}}</h4>
        </div>
        <!-- media-body -->
      </div>
      <!-- media -->
      <nav class="nav nav-inline tx-size-24 mg-b-0 lh-0" v-if="page.parent">
        <router-link to="roles/permission" class="btn btn-primary btn-with-icon">
          <div class="ht-40 justify-content-between">
            <span class="pd-x-15">Tambah Data</span>
            <span class="icon wd-40">
              <i class="fa fa-file-text-o"></i>
            </span>
          </div>
        </router-link>
      </nav>
    </div>

    <div class="br-pagebody" v-if="page.parent">
      <div class="br-section-wrapper" v-loading="isLoading.fullPage">
        <form-modul></form-modul>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>
<script>
import urlBase from "@/js/url";
const form = () =>
  import(/* webpackChunkName: "roles" */ "@/js/components/roles/modul_form");
export default {
  data() {
    return {
      page: {
        parent: true,
        name: "Access Control List Modul",
        crud: {
          url: "/roles/modul",
          type: "modul"
        }
      },
      isLoading: {
        fullPage: true
      },
      modul: {
        role_modul_id: null,
        nama: null,
        url: null,
        icon: null,
        parent_id: null,
        type: null
      }
    };
  },
  mounted() {
    this.isLoading.fullPage = false;
    this.data();
  },
  computed: {
    breadcums() {
      return this.$store.state.breadcums;
    }
  },
  methods: {
    data() {
      this.$store.dispatch("StoreDatabase", this.page.crud);
    }
  },
  components: {
    "form-modul": form
  }
};
</script>