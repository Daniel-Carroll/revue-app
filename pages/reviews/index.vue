<template>
    <div>
        <h1>Reviews</h1>
        <v-container fluid grid-list-md>
          <v-layout v-if="!reviewsLoading" row wrap>
            <v-flex v-for="review in reviews" v-bind:key="review.id">
              <ReviewCard v-bind:reviews="review"/>
            </v-flex>
          </v-layout>
        </v-container>
    </div>
</template>

<script>
  import ReviewCard from '~/components/ReviewCard.vue'
  import {mapActions, mapGetters} from 'vuex'
  import axios from 'axios'

  export default {
   mounted() {
     this.$store.dispatch("reviews/retrieveReviews")
   },
    components:{
        ReviewCard
    },
    computed: {
      binding (){
        const binding = {}
        binding.column = false;
        return binding
      },
      reviewsLoading () {
        return this.$store.state.reviews.reviewsLoading;
      },
      reviews () {
        console.log(this.$store.state.reviews.reviews)
        return this.$store.state.reviews.reviews;
        }
    }
  }
</script>