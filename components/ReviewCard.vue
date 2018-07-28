<template>
      <v-card style="margin:20px">
        <v-card-media
          :src="review.cover_image"
          height="200px"
          contain="true"
        ></v-card-media>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{review.title}}</h3>
            <div>{{review.subtitle}}</div>
            <div>Rating: {{review.rating}}/10</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Read</v-btn>
        </v-card-actions>
      </v-card>
</template>

<script>
    export default {
        props: ['reviews'],
        data() {
            return {
                review: this.reviews
            }
        }
    }
</script>