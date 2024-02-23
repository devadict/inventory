<template>
    <div>
      <v-card elevation="2" class="mx-auto w-100">
        <v-card-title class="headline">Entrée de produit</v-card-title>
        <v-card-text class="d-flex flex-column">
          <v-text-field v-model="fournisseur" label="Fournisseur"></v-text-field>
          <v-text-field v-model="produit" label="Produit"></v-text-field>
          <v-text-field v-model.number="quantite" label="Quantité (Kg)" type="number"></v-text-field>
          <v-text-field v-model.number="prixUnitaire" label="Prix unitaire" type="number"></v-text-field>  
          <v-btn color="primary" @click="dialog = true">Valider</v-btn>
        </v-card-text>
      </v-card>
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-text>
            Fournisseur: {{ fournisseur }} <br>
            Produit: {{ produit }} <br>
            Quantité (Kg): {{ quantite }} <br>
            Prix unitaire (MRU): {{ prixUnitaire }} <br>
            Prix total (MRU) : {{ quantite * prixUnitaire / 10 }} MRU
          </v-card-text>
          <v-card-actions>
            <v-btn @click="dialog = false">Fermer</v-btn>
            <v-btn color="primary" @click="submitForm">Confirmer</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dialog: false,
        fournisseur: '',
        produit: '',
        quantite: null,
        prixUnitaire: null
      };
    },
    methods: {
      submitForm() {
        // Handle form submission
        console.log('Form submitted!');
        // Close dialog
        this.dialog = false;
      }
    }
  };
  </script>
  