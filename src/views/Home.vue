<template>
  <div class="container home">
    <v-layout row>
      <v-flex md6>
        <v-card shaped class="mx-auto" max-width="550">
          <v-img
           class="white--text align-end"
           height="350px"
           src="https://www.johnsflaherty.com/i/1627069169236/n/uploads/raffle_tickets.jpg"
           gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,.7)"
          >
            <v-card-title class="headline font-weight-bold blue--text text--lighten-5">Lotteries</v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0">Search for available lotteries to participate</v-card-subtitle>
          <v-card-actions>
            <router-link :to="{ name: 'lottery' }">
              <v-btn color="blue" text>
                <v-icon>mdi-chart-line</v-icon>
                Participate
              </v-btn>
            </router-link>
          </v-card-actions>
         </v-card>
      </v-flex>
      <v-flex md6>
        <v-card shaped class="mx-auto" max-width="550">
          <v-img
           class="white--text align-end"
           height="350px"
           src="https://as1.ftcdn.net/v2/jpg/00/66/36/58/1000_F_66365886_K53Q8jBwjFRb3C5ruGYllcPpfwGI96rK.jpg"
           gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,.7)"
          >
            <v-card-title class="headline font-weight-bold blue--text text--lighten-5 ">Winners</v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0">Are you the lucky one? Check who won past lotteries</v-card-subtitle>
          <v-card-actions>
            <router-link :to="{ name: 'winner' }">
              <v-btn color="blue" text>
                <v-icon>mdi-chart-line</v-icon>
                Check winners
              </v-btn>
            </router-link>
          </v-card-actions>
         </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {
  }
};
</script>

<style scoped>
.home {
  margin-top: 100px;
  max-width: 1200px;
}
a {
  text-decoration: none;
}
</style>
