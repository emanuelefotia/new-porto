<template>
  <v-container>
      <v-row justify="center" class="mt-md-10">
        <v-col align="center" cols="12" md="6">
          <p class="secondary--text text-h3 text-md-left text-md-h1">
            Ristorante <br />
            PORTO <br />
            Fish & <br />
            Chips
          </p>
          <br />
          <v-row justify="center">
            <v-col cols="12" align="center" class="mr-md-10">
              <v-btn large rounded color="secondary" class="mr-md-4 elevated"
                >Chiama ora</v-btn
              >
              <v-btn rounded large class="elevated" color="primary"
                >Prenota</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="11" md="6" align="center">
          <v-carousel
            cycle
            hide-delimiter-background
            show-arrows-on-hover
            style="border-radius: 1.5rem; border: 3px solid #002b54"
            :show-arrows="false"
            class="elevated"
          >
            <v-carousel-item
              v-for="(item, i) in cibo"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      <v-row justify="center">
        <!-- <v-col cols="4">
        <v-divider class="primary"></v-divider>
      </v-col> -->
        <v-col align="center" cols="12" class="">
          <p class="secondary--text text-h5 mb-0 shadow">RECENSIONI</p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col align="center" cols="12" md="8">
          <v-row justify="center">
            <v-col cols="11" md="4" align="center">
              <v-card rounded="lg" class="elevation-16 mx-auto" width="300">
                <v-card-title class="text-h5 primary--text">
                  Mario Rossi
                </v-card-title>
                <v-card-text class="secondary--text">
                  Ristorante ottimo! Personale cortese, tempi brevi, piatti di
                  qualità.

                  <div class="text-center mt-8">
                    <v-rating
                      color="yellow darken-3"
                      background-color="grey darken-1"
                      value="3"
                      half-increments
                      hover
                    ></v-rating>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="11" md="4" align="center">
              <v-card rounded="lg" class="elevation-16 mx-auto" width="300">
                <v-card-title class="text-h5 primary--text">
                  Serena T.
                </v-card-title>
                <v-card-text class="secondary--text">
                  Ristorante ottimo! Personale cortese, tempi brevi, piatti di
                  qualità.

                  <div class="text-center mt-8">
                    <v-rating
                      color="yellow darken-3"
                      background-color="grey darken-1"
                      value="4"
                      half-increments
                      hover
                    ></v-rating>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="11" md="4" align="center">
              <v-card rounded="lg" class="elevation-16 mx-auto" width="300">
                <v-card-title class="text-h5 primary--text">
                  Paolo G.
                </v-card-title>
                <v-card-text class="secondary--text">
                  Ristorante ottimo! Personale cortese, tempi brevi, piatti di
                  qualità.

                  <div class="text-center mt-8">
                    <v-rating
                      color="yellow darken-3"
                      background-color="grey darken-1"
                      value="5"
                      half-increments
                      hover
                    ></v-rating>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <!---->
      <v-row justify="center" class="mt-md-10 mb-md-5">
        <v-col align="center" cols="11" md="8">
          <v-row justify="center">
            <v-col align="center" cols="11" md="4">
              <v-btn large rounded color="secondary">
                SCRIVI UNA RECENSIONE
              </v-btn>
            </v-col>
            <v-col align="center" cols="11" md="4">
              <v-btn large rounded color="primary"> PRENOTA UN TAVOLO </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row justify="center">
        <!-- <v-col align="center" cols="12">
        <v-date-picker v-model="date"></v-date-picker>
      </v-col> -->
      </v-row>
      <!---->
      <v-row justify="center">
        <!-- <v-col cols="4">
        <v-divider class="primary" style="border: 1px solid"></v-divider>
      </v-col> -->
        <v-col align="center" cols="12" class="">
          <p class="secondary--text text-h5 mb-0 shadow">GALLERIA</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(foto, i) in locale"
          :key="i"
          class="d-flex child-flex"
          cols="4"
        >
          <v-img :src="foto.src" aspect-ratio="1" class="grey lighten-2">
          </v-img>
        </v-col>
      </v-row>
      <v-row justify="center">
        <!-- <v-col cols="8">
        <v-divider class="primary"></v-divider>
      </v-col> -->
        <v-col align="center" cols="12" class="">
          <p class="secondary--text text-h5 mb-0 shadow">TROVACI</p>
        </v-col>
        <v-col cols="12"> <v-img contain :src="maps"> </v-img> </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="11">
          <v-divider class="secondary"></v-divider>
        </v-col>
        <v-col align="center" cols="12" md="4">
          <p class="primary--text text-h6">Contatti</p>
          <p class="secondary--text">06 xxxx 12x4</p>
          <v-btn outlined color="primary" fab>
            <v-icon color="secondary">mdi-phone</v-icon></v-btn
          >
        </v-col>
        <v-col align="center" cols="12" md="4">
          <p class="primary--text text-h6">Indirizzo</p>
          <p class="secondary--text">
            Via Crescenzio, 56 <br />
            00193 Roma RM <br />
            Italia
          </p>
          <v-btn outlined color="primary" fab>
            <v-icon color="secondary">mdi-arrow-right-top-bold</v-icon></v-btn
          >
        </v-col>
        <v-col align="center" cols="12" md="4">
          <p class="primary--text text-h6">Orario</p>
          <p class="secondary--text">lun-dom: &nbsp 12:30–15:15, 18:00–23:30</p>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      maps: require("@/assets/img/maps.png"),
      cibo: [
        {
          src: require("@/assets/img/cibo1.jpeg"),
        },
        {
          src: require("@/assets/img/cibo2.jpeg"),
        },
        {
          src: require("@/assets/img/cibo3.jpeg"),
        },
        {
          src: require("@/assets/img/cibo4.jpeg"),
        },
      ],
      locale: [
        {
          src: "https://lh3.googleusercontent.com/p/AF1QipN1XZR3lPdaPJwb4b6xnZ4yTa4ZVJ_Gr5MV--d9=w960-h960-n-o-k-v1",
        },
        {
          src: "https://lh3.googleusercontent.com/p/AF1QipN5O5k2H7xLe12dSym2w8zPbW_tjOjKK61oUNV2=w960-h960-n-o-k-v1",
        },
        {
          src: "https://lh3.googleusercontent.com/p/AF1QipNomA3vQ_QaW79IGKRizk1kP7SGHoY7iLROODB-=w960-h960-n-o-k-v1",
        },
        {
          src: "https://lh3.googleusercontent.com/p/AF1QipOTPkqSaNr2r3Cz2ccE1x1ONhHLvD_aCG8MMVJs=w960-h960-n-o-k-v1",
        },
        {
          src: "https://lh3.googleusercontent.com/p/AF1QipPBeGjxtlp5IpXGv16zpIuSyG400YrOc1-8DjDC=w960-h960-n-o-k-v1",
        },
        {
          src: "https://lh3.googleusercontent.com/p/AF1QipM_xIBcWiMEMDbBAL2Rhtaj0SaQwJFuzi58K_C2=w960-h960-n-o-k-v1",
        },
        {
          src: "https://lh3.googleusercontent.com/p/AF1QipMwBy0t_M2TWTtq8lJtzeF_iHky-9dmi0UhcKC3=w960-h960-n-o-k-v1",
        },
        {
          src: "https://lh3.googleusercontent.com/p/AF1QipPmAX_u3useXao5Y-1sp2wOrYyNmI-MfZpyD-LE=w960-h960-n-o-k-v1",
        },
        {
          src: "https://lh3.googleusercontent.com/p/AF1QipMV7vWnk017_IDrejnxojOdZT_N1U3isCm19UXA=w960-h960-n-o-k-v1",
        },
      ],
    };
  },
};
</script>

<style scoped>
.shadow {
  background-color: #5f9acecd;
  border-radius: 2rem;
}
.elevated {
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0) !important;
}
</style>
