<template>
  <div class="ingredientform">
      <v-card>
          <v-card-title>
              Créer un ingrédient
          </v-card-title>
          <v-card-text>
              <v-text-field
                name="name"
                label="Nom de l'ingredient"
                v-model="ingredient.name"
                ></v-text-field>
          </v-card-text>
          <v-card-actions>
              <v-btn @click="createIngredient()">Créer</v-btn>
          </v-card-actions>
      </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IngredientModel } from '@/models/ingredientModel';
import { IngredientService } from '@/services/ingredientService';

@Component
export default class IngredientForm extends Vue {
    private ingredient: IngredientModel = new IngredientModel();

    private ingredientService: IngredientService = new IngredientService();

    private createIngredient() {
        console.log(this.ingredient)
        this.ingredientService.createIngredient(this.ingredient);
    }

}
</script>

