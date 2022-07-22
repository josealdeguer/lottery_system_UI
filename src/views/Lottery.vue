<template>
  <div class="container lottery">
    <v-row class="mb-6 mt-6" justify="center">
      <v-list flat>
        <v-subheader>Lotteries</v-subheader>
        <v-list-item-group
          color="primary"
        >
          <v-list-item
            v-for="item in lotteries"
            :key="item.id"
          >
            <v-list-item-icon>
              <v-icon v-if="item.status === 'ACTIVE'">mdi-lock-open-variant-outline</v-icon>
              <v-icon v-else>mdi-cancel</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.name"></v-list-item-title>
              <v-list-item-subtitle v-html="item.finishDate"></v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action v-if="item.status === 'ACTIVE'">
              <v-btn icon>
                <v-dialog
                  :retain-focus="false"
                  max-width="600px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="grey lighten-1"
                      v-bind="attrs"
                      v-on="on"
                    >
                      mdi-ticket
                    </v-icon>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">Enter your email to participate</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12">
                            <v-text-field
                              label="Email*"
                              required
                              v-model="email"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                      <small>* Indicates required field {{item.id}}</small>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="blue darken-1"
                        text
                        v-on:click="participate(item.id, email)"
                      >
                        Participate
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-row>
  </div>
</template>

<script>

export default {
  name: "Lottery",
  components: {
  },

  data() {
    return {
      lotteries: [],
      email: null,
    }
  },
  methods: {
    participate(id, email) {

      this.$api
        .post("lotteries/" + id + "/participants", {
          email: email
        })
        .then(response => {
          console.log(response.data);
      })

    },
  },
  created() {
    this.$api
      .get("lotteries")
      .then(response => {
        var i
        for(i=0; i<response.data.length;i++) {
          this.lotteries = response.data
        }
        console.log(response.data);
    })
  }
};
</script>

<style scoped>
.lottery {
  margin-top: 50px;
  max-width: 1200px;
  background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("https://www.johnsflaherty.com/i/1627069169236/n/uploads/raffle_tickets.jpg");
}
</style>
