<template>
  <div class="container winner">
  <v-row class="mb-6 mt-6" justify="center">
    <v-card>
      <v-card-subtitle class="subtitle-2 font-weight-medium">
        Select a date to check the winners
      </v-card-subtitle>

      <v-date-picker
        v-model="picker"
        :allowed-dates="allowedDates"
      >
      </v-date-picker>
      <v-card-actions>
        <v-btn
          color="blue"
          text
          @click="getWinners"
        >
          Check winners
        </v-btn>
      </v-card-actions>

    </v-card>
    <v-list flat v-if="lotteries.length">
      <v-subheader>Lottery winners</v-subheader>
      <v-list-item-group
        color="primary"
      >
        <v-list-item
          v-for="item in lotteries"
          :key="item.id"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
            <v-list-item-subtitle v-html="item.finishDate"></v-list-item-subtitle>
            <v-list-item-subtitle v-html="item.winner.email"></v-list-item-subtitle>
          </v-list-item-content>

        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-row>
  </div>
</template>

<script>

export default {
  name: "Winner",
  components: {
  },

  data() {
    return {
      picker: new Date(new Date().setDate(new Date().getDate()-1)).toISOString().substr(0, 10),
      lotteries: [],
    }
  },
  methods: {
    allowedDates(val) {
       return val < new Date().toISOString().substr(0, 10)
    },
    getWinners() {
      this.$api
        .get("lotteries", {
          params: {
            finishDate: this.picker
          }
        })
        .then(response => {
          this.lotteries = response.data;
          console.log(this.lotteries);
        })
    }
  },
  created() {
  }
};
</script>

<style scoped>
.winner {
  margin-top: 50px;
  max-width: 1200px;
  background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("https://as1.ftcdn.net/v2/jpg/00/66/36/58/1000_F_66365886_K53Q8jBwjFRb3C5ruGYllcPpfwGI96rK.jpg");
}
</style>
