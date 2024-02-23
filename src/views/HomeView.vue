<!-- eslint-disable prettier/prettier -->
<template>
   <v-card elevation="2" class="mx-auto">
      <v-card-title class="headline">Actions</v-card-title>
      <v-card-text class="d-flex flex-column">
        <v-btn color="primary" class="mb-2" @click="handleEntrance">Entrée</v-btn>
        <v-btn color="primary" class="mb-2" @click="handleExit">Sortie</v-btn>
        <v-btn color="primary" class="mb-2" @click="handleStock">Stock</v-btn>
        <v-btn color="primary" class="mb-2" @click="handleHistory">Historique</v-btn>
      </v-card-text>
    </v-card>
</template>
<script>
export default {
  name: "HomeView",

  methods: {
    handleEntrance() {
      // Navigate to EntreePage component
      this.$router.push('/entree');
    },

    handleExit() {
      // Navigate to SortiePage component
      this.$router.push('/sortie');
    },

    handleStock() {
      // Navigate to StockPage component
      this.$router.push('/stock');
    },

    handleHistory() {
      // Navigate to HistoriquePage component
      this.$router.push('/stock');
    }
  }
};
</script>
