<template>
  <div class="form-layout form-layout-1">
    <div class="row mg-b-25">
      <div class="col-lg-3">
        <div class="form-group">
          <label class="form-control-label">
            Nama:
            <span class="tx-danger">*</span>
          </label>
          <input
            class="form-control"
            :class="{ 'is-invalid': $v.modul.nama.$error }"
            type="text"
            v-model.trim="$v.modul.nama.$model"
            placeholder="Nama Modul"
          />
        </div>
      </div>
      <!-- col-4 -->
      <div class="col-lg-3">
        <div class="form-group">
          <label class="form-control-label">
            path/url:
            <span class="tx-danger">*</span>
          </label>
          <input
            class="form-control"
            :class="{ 'is-invalid': $v.modul.url.$error }"
            type="text"
            v-model.trim="$v.modul.url.$model"
            placeholder="url / path modul"
          />
        </div>
      </div>
      <!-- col-4 -->
      <div class="col-lg-2">
        <div class="form-group">
          <label class="form-control-label">
            icon:
            <span class="tx-danger">*</span>
          </label>
          <input class="form-control" type="text" v-model="modul.icon" placeholder="icon Modul" />
        </div>
      </div>
      <div class="col-lg-1">
        <div class="form-group mg-b-10-force">
          <label class="form-control-label">
            Type:
            <span class="tx-danger">*</span>
          </label>
          <select
            class="form-control select2"
            :class="{ 'is-invalid': $v.modul.type.$error }"
            type="text"
            v-model.trim="$v.modul.type.$model"
            data-placeholder="Choose country"
          >
            <option label="--"></option>
            <option value="parent">Parent</option>
            <option value="child">child</option>
          </select>
        </div>
      </div>

      <div class="col-lg-3" v-if="parentBoolean">
        <div class="form-group mg-b-10-force">
          <label class="form-control-label">
            Parent:
            <span class="tx-danger">*</span>
          </label>
          <select class="form-control" v-model="modul.parent_id" data-placeholder="Choose country">
            <option label="Choose country"></option>
            <option value="USA">United States of America</option>
            <option value="UK">United Kingdom</option>
            <option value="China">China</option>
            <option value="Japan">Japan</option>
          </select>
        </div>
      </div>
      <!-- col-4 -->
    </div>
    <!-- row -->

    <div class="form-layout-footer">
      <button class="btn btn-info" @click="ToDatabase()">Submit Form</button>
      <button class="btn btn-secondary">Cancel</button>
    </div>
  </div>
</template>
<script>
import { required, minLength, between } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      modul: {
        role_modul_id: null,
        nama: null,
        url: null,
        icon: null,
        parent_id: 0,
        type: null
      },
      parentBoolean: false
    };
  },
  validations: {
    modul: {
      nama: {
        required
      },
      url: {
        required
      },
      type: {
        required
      }
    }
  },
  methods: {
    ToDatabase() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("error");
      } else {
        console.log("tidak error");
      }
    }
  }
};
</script>