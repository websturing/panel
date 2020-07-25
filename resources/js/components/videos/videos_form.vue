<template>
  <div class="form-layout form-layout-1" v-loading="isLoading" element-loading-text="Loading...">
    <el-form :model="form" ref="berita_form" label-position="top">
      <div class="row">
        <div class="form-group col-md-5">
          <el-form-item
            label="judul"
            prop="judul"
            :rules="{ required: true, message: 'field tidak boleh kosong', trigger: 'blur' }"
          >
            <el-input
              placeholder="Nama Modul"
              v-model="form.judul"
              @input="formDiasbled()"
              clearable
            ></el-input>
          </el-form-item>
        </div>
        <div class="form-group col-md-3">
          <el-form-item
            prop="id_kategori"
            label="Kategori"
            :rules="{ required: true, message: 'field tidak boleh kosong', trigger: 'change'}"
          >
            <el-select
              v-model="form.id_kategori"
              clearable
              placeholder="Pilih Kategori"
              :disabled="disabled"
              @change="GetSubKategori()"
            >
              <el-option
                v-for="item in kategori"
                :key="item.id_kategori"
                :label="item.nama_kategori"
                :value="item.id_kategori"
              ></el-option>
            </el-select>
          </el-form-item>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <el-form-item
            label="Tanggal Publish"
            prop="tgl_publish"
            :disabled="disabled"
            :rules="{ required: true, message: 'field tidak boleh kosong', trigger: 'change' }"
          >
            <el-date-picker
              :disabled="disabled"
              v-model="form.tgl_publish"
              type="date"
              value-format="dd-MM-yyyy"
              format="dd-MM-yyyy"
              placeholder="Pick a day"
            ></el-date-picker>
          </el-form-item>
        </div>

        <div class="col-md-3">
          <el-form-item
            label="#hastag"
            label-width="100%"
            prop="tag"
            :rules="{ required: true, message: 'field tidak boleh kosong', trigger: 'blur' }"
          >
            <el-col :span="24">
              <el-select
                :disabled="disabled"
                v-model="form.tag"
                multiple
                filterable
                allow-create
                default-first-option
                placeholder="#hastag"
              >
                <el-option v-for="item in hastag" :key="item" :label="item" :value="item"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
        </div>
        <div class="col-md-1">
          <el-form-item label="headline">
            <el-switch
              v-model="form.headline"
              active-value="true"
              inactive-value="false"
              :disabled="disabled"
            ></el-switch>
          </el-form-item>
        </div>
        <div class="col-md-1">
          <el-form-item label="Publish">
            <el-switch
              v-model="form.publish"
              active-value="true"
              inactive-value="false"
              :disabled="disabled"
            ></el-switch>
          </el-form-item>
        </div>
      </div>
    </el-form>

    <div class="form-layout-footer">
      <button class="btn btn-info" @click="ToDatabase()">Simpan</button>
    </div>
  </div>
</template>
<script>
import { required, minLength, between } from "vuelidate/lib/validators";
import urlBase from "@/js/url";

export default {
  data() {
    return {
      page: {
        submitType: "store",
      },
      isLoading: false,
      form: {
        id_berita: null,
        id_kategori: null,
        id_subkategori: 0,
        id_user: null,
        judul: null,
        judul_seo: null,
        judul_highlight: null,
        isi_berita: null,
        tgl_posting: null,
        tgl_publish: moment().format("DD-MM-YYYY"),
        jam: null,
        gambar: null,
        ket_gambar: null,
        dibaca: null,
        tag: [],
        headline: null,
        redaksi: null,
        aktif: null,
        publish: null,
        status: null,
      },
      select: {
        kategori: false,
        subKategori: true,
      },
      image: {
        showPreview: false,
        imagePreview: "",
      },
      kategori: [],
      subKategori: [],
      hastag: [],
      disabled: true,
    };
  },
  validations: {
    modul: {
      nama: {
        required,
      },
      url: {
        required,
      },
      type: {
        required,
      },
    },
  },
  mounted() {
    this.$parent.page.title = "Penambahan Data inilahnews";
    this.$parent.page.show = false;
    if (this.$route.query.v) {
      this.getData(this.$route.query.v);
      this.page.submitType = "update";
    }
    this.getSelect();
  },
  methods: {
    typeOnChange() {
      if (this.modul.type == "child") {
        this.parentBoolean = true;
      } else {
        this.parentBoolean = false;
      }
    },
    ToDatabase() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.isLoading = true;
        this.axios
          .post(urlBase.web + "/roles/modul", {
            type: this.page.submitType,
            data: this.modul,
          })
          .then(
            (r) => (this.isLoading = false),

            this.toParentPage()
          );
      }
    },
    getData(id) {
      this.axios
        .post(urlBase.web + "/roles/modul", {
          type: "dataById",
          data: id,
        })
        .then((r) => (this.modul = r.data));
    },
    getSelect() {
      this.axios
        .post(urlBase.web + "/roles/modul", {
          type: "select",
        })
        .then((r) => (this.select = r.data));
    },
    toParentPage() {
      this.$v.$reset,
        this.$parent.refresh(),
        this.$router.push({
          name: "roles-modul",
        });
      this.$parent.page.show = true;
    },
  },
};
</script>
<style>
.modal-xl {
  width: 1440px !important;
}
</style>