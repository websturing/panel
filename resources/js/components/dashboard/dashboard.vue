<template>
  <div class="mg-t-120">
    <div class="br-pagebody">
      <el-row class="pd-5" :gutter="10">
        <el-col :md="24" class="mg-b-20">
          <el-row :gutter="10">
            <el-col :md="8">
              <el-card v-loading="page.isLoading">
                <div class="pd-5 d-flex align-items-center">
                  <ion-icon name="layers-outline" class="tx-50 tx-primary"></ion-icon>
                  <div class="mg-l-20">
                    <p
                      class="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10"
                    >BERITA TERPOPULER</p>
                    <p
                      class="tx-24 tx-lato tx-bold mg-b-2 lh-1"
                      v-if="topBerita"
                    >{{topBerita.dibaca}}</p>
                    <span class="tx-11 tx-roboto tx-primary" v-if="topBerita">{{topBerita.judul}}</span>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :md="8">
              <el-card v-loading="page.isLoading">
                <div class="pd-5 d-flex align-items-center">
                  <ion-icon name="document-text-outline" class="tx-50 tx-primary"></ion-icon>
                  <div class="mg-l-20">
                    <p
                      class="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10"
                    >BERITA TERPOPULER</p>
                    <p
                      class="tx-24 tx-lato tx-bold mg-b-2 lh-1"
                      v-if="topBerita"
                    >{{topBerita.dibaca}}</p>
                    <span class="tx-11 tx-roboto tx-primary" v-if="topBerita">{{topBerita.judul}}</span>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :md="8">
              <el-card v-loading="page.isLoading">
                <div class="pd-5 d-flex align-items-center">
                  <ion-icon name="layers-outline" class="tx-50 tx-primary"></ion-icon>
                  <div class="mg-l-20">
                    <p
                      class="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10"
                    >BERITA TERPOPULER</p>
                    <p
                      class="tx-24 tx-lato tx-bold mg-b-2 lh-1"
                      v-if="topBerita"
                    >{{topBerita.dibaca}}</p>
                    <span class="tx-11 tx-roboto tx-primary" v-if="topBerita">{{topBerita.judul}}</span>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-row class="mg-t-20">
            <el-card>
              <pre>{{chartOptions}}</pre>
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
          var berita = this.berita.slice(0, 30);
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
