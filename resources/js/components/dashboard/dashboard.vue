<template>
  <div class="mg-t-120">
    <div class="br-pagebody">
      <el-row class="pd-5" :gutter="10">
        <el-col :md="24" class="mg-b-20">
          <el-row :gutter="10">
            <el-col :md="8">
              <el-card v-loading="page.isLoading">
                <div class="pd-5 d-flex align-items-center">
                  <ion-icon
                    name="layers-outline"
                    class="tx-50 tx-primary"
                  ></ion-icon>
                  <div class="mg-l-20">
                    <p
                      class="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10"
                    >
                      BERITA TERPOPULER
                    </p>
                    <p
                      class="tx-24 tx-lato tx-bold mg-b-2 lh-1"
                      v-if="topBerita"
                    >
                      {{ topBerita.dibaca }}
                    </p>
                    <span class="tx-11 tx-roboto tx-primary" v-if="topBerita">{{
                      topBerita.judul
                    }}</span>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :md="8">
              <el-card v-loading="page.isLoading">
                <div class="pd-5 d-flex align-items-center">
                  <ion-icon
                    name="document-text-outline"
                    class="tx-50 tx-primary"
                  ></ion-icon>
                  <div class="mg-l-20">
                    <p
                      class="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10"
                    >
                      BERITA TERPOPULER
                    </p>
                    <p
                      class="tx-24 tx-lato tx-bold mg-b-2 lh-1"
                      v-if="topBerita"
                    >
                      {{ topBerita.dibaca }}
                    </p>
                    <span class="tx-11 tx-roboto tx-primary" v-if="topBerita">{{
                      topBerita.judul
                    }}</span>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :md="8">
              <el-card v-loading="page.isLoading">
                <div class="pd-5 d-flex align-items-center">
                  <ion-icon
                    name="layers-outline"
                    class="tx-50 tx-primary"
                  ></ion-icon>
                  <div class="mg-l-20">
                    <p
                      class="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10"
                    >
                      BERITA TERPOPULER
                    </p>
                    <p
                      class="tx-24 tx-lato tx-bold mg-b-2 lh-1"
                      v-if="topBerita"
                    >
                      {{ topBerita.dibaca }}
                    </p>
                    <span class="tx-11 tx-roboto tx-primary" v-if="topBerita">{{
                      topBerita.judul
                    }}</span>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-row class="mg-t-20" :gutter="10">
            <el-col :md="18">
              <el-card style="border-radius: 8px; padding: 20px">
                <div
                  class="d-flex align-items-center justify-content-between mg-b-30"
                >
                  <div>
                    <h6
                      class="tx-15 tx-uppercase tx-inverse tx-semibold tx-spacing-1"
                    >
                      DATA BERITA YANG DI PUBLISH
                    </h6>
                    <p class="mg-b-0 tx-gray-600">
                      jumlah data {{ berita.length }}
                    </p>
                  </div>
                  <div class="wd-230">
                    <el-input
                      placeholder="Cari Data Permohonan ..."
                      prefix-icon="el-icon-search"
                      v-model="paging.search"
                    ></el-input>
                  </div>
                </div>
                <table
                  class="table-custom table-valign-middle mg-b-0 table-hover"
                >
                  <thead>
                    <tr>
                      <th>Judul Berita</th>
                      <th>dibaca</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(i, Index) in berita.slice(
                        paging.list,
                        paging.end
                      )"
                      :key="Index"
                    >
                      <td class="pd-l-0-force">
                        <div class="tx-13 tx-bold mg-b-0">
                          {{ Index + 1 }}. &nbsp;&nbsp; {{ i.judul }}
                        </div>
                      </td>
                      <td class="pd-l-0-force">
                        <div class="tx-13 tx-bold mg-b-0">
                          {{ i.dibaca }}
                        </div>
                      </td>
                      <td class="pd-l-0-force">
                        <el-tooltip
                          content="Publish / unPublish Berita"
                          placement="top"
                        >
                          <el-switch
                            v-model="i.publish"
                            active-color="#13ce66"
                            inactive-color="#ff4949"
                            active-value="true"
                            inactive-value="false"
                          >
                          </el-switch>
                        </el-tooltip>
                        <el-button
                          size="small"
                          type="text"
                          icon="el-icon-delete-solid"
                        ></el-button>
                        <el-button
                          size="large"
                          icon="el-icon-open"
                          type="text"
                        ></el-button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <el-row justify="end" type="flex">
                  <el-col :md="10">
                    <el-pagination
                      style="float: right"
                      background
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page.sync="paging.page"
                      :page-size="paging.size"
                      :page-count="paging.pagecount"
                      layout="total, prev, pager, next"
                      :total="berita.length"
                    ></el-pagination>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
            <el-col :md="6">
              <el-card style="border-radius: 8px; background: #c9f7f5">
                <h6
                  class="tx-15 tx-uppercase tx-inverse tx-semibold tx-spacing-1 mg-b-20"
                >
                  TERPOPULER MINGGU INI
                </h6>
                <div
                  class="d-flex align-items-center mg-b-20"
                  v-for="i in 4"
                  :key="i"
                >
                  <div class="wd-40">
                    <div class="numbering">1</div>
                  </div>
                  <div class="mg-l-15">
                    <div class="tx-inverse">Katherine Lumaad</div>
                    <span class="tx-12">klumaad@themepixels.me</span>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-row class="mg-t-20">
            <el-card>
              <highcharts :options="chartOptions"></highcharts>
            </el-card>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import urlBase from "@/js/url";
import { Chart } from "highcharts-vue";
export default {
  data() {
    return {
      page: {
        isLoading: true,
      },
      url: {
        assets: urlBase.web + "/images",
      },
      berita: [],
      paging: {
        list: 0,
        end: 10,
        search: null,
        size: 10,
        page: 1,
      },
      chartOptions: {
        chart: {
          type: "column",
        },

        xAxis: {
          categories: [],
        },

        series: [
          {
            data: [],
          },
        ],
      },
    };
  },
  created() {
    this.getpermohonan();
  },
  computed: {
    topBerita() {
      if (this.berita.length == 0) return;
      return this.berita.reduce((a, b) =>
        Number(a.dibaca) > Number(b.dibaca) ? a : b
      );
    },
  },
  methods: {
    handleSizeChange(val) {
      console.log(`${val} items per page`);
    },
    handleCurrentChange(val) {
      var start = Math.max(0, val - 1);
      var end = this.paging.size;
      var newstart = Math.max(0, start * end);
      var newend = val * end;

      this.paging.list = newstart;
      this.paging.end = newend;

      console.log(`current page: ${val}`);
    },
    getpermohonan() {
      this.page.isLoading = true;
      this.axios
        .post(urlBase.web + "/Masterberita", {
          type: "RangeDate",
        })
        .then((r) => {
          this.berita = r.data;
          this.page.isLoading = false;
          // this.chartOptions.series = r.data;
          var berita = this.berita.slice(0, 10);
          for (let i = 0; i < berita.length; i++) {
            this.chartOptions.series[0].data.push({
              name: this.berita[i].judul,
              y: this.berita[i].dibaca,
            });
            this.chartOptions.xAxis.categories.push(this.berita[i].judul);
          }
        });
    },
  },
  components: {
    highcharts: Chart,
  },
};
</script>
<style>
.numbering {
  border-radius: 8px;
  background-color: #1bc5bd;
  text-align: center;
  height: 100%;
  font-size: 25px;
  font-weight: bold;
  color: #c9f7f5;
}
.table-custom {
  width: 100%;
  padding: 20px;
}
.table-custom td {
  padding: 5px 5px 5px 5px;
}
.table-custom th {
  padding: 15px;
  background-color: #f3f6f9;
  border-radius: 8px;
}
</style>
