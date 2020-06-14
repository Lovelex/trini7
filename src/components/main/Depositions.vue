<template>
  <div id="main-depositions">
    <v-container>
      <div class="brand-padding">
        <h2 class="mb-12">DEPOIMENTOS DAQUELES QUE CONFIAM EM NÓS</h2>
        <p class="mb-12">A jornada é dura, mas não solitária. Veja alguns depoimentos daqueles que dividiram seus sonhos conosco, fazendo com que a caminhada fosse bem mais leve.</p>
        <Carousel :perPage="perPage.quantity">
          <Slide :key="i" v-for="(image, i) in images">
            <div class="mx-1 elevation-3 d-flex flex-column align-center">
              <v-img
                
                :width="perPage.size.w"
                :height="perPage.size.h"
                :src="image.imageUrl"
              ></v-img>
              <div class="deposition-text-wrapper">
                <p class="caption">{{ image.text }}</p>
              </div>
            </div>
          </Slide>
        </Carousel>
      </div>
    </v-container>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import { db } from '../../plugins/firebase';

export default {
  components: { Carousel, Slide },
  data: () => ({
    images: []
  }),
  computed: {
    perPage() {
      if(this.$vuetify.breakpoint.xs) {
        return {
          size: {
            h: 400,
            w: 323
          },
          quantity: 1
        }
      }
      if(this.$vuetify.breakpoint.smOnly) {
        return {
          size: {
            h: 328,
            w: 272
          },
          quantity: 2
        }
      }
      if(this.$vuetify.breakpoint.mdAndUp) {
        return {
          size: {
            h: 328,
            w: 280
          },
          quantity: 4
        }
      }
    }
  },
  firestore: {
    images: db.collection('depositions')
  }
};
</script>

<style scoped lang=scss>
#main-depositions {
  background-color: #dfdae5;
}
p {
  
  max-width: 870px;
}
.deposition-text-wrapper {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  padding: 12px;
  background-color: #fff;
  min-height: 180px;
}
</style>