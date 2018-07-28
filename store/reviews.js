import constants from '~/assets/constants.js'
import axios from 'axios'

const state = () => ({
    reviews: [],
    reviewsLoading: false,
    reviewsError: null
})

const getters = {
    getReviews: state => {
        return state.reviews;
    }
};

const actions = {
    async retrieveReviews({ commit }){
        console.log("commiting retrieveReviews")
        commit("retrieveReviews")
        const reviews = await axios.get(
            constants.urlConstants.getReviews
        );
        console.log(reviews)
        commit("retrieveReviewsSuccess", reviews.data)
    }
}

const mutations = {
    retrieveReviews(state){
        state.reviews = [],
        state.reviewsLoading = true,
        state.reviewsError = null
    },
    retrieveReviewsSuccess(state, reviews){
        state.reviews = reviews,
        state.reviewsLoading = false,
        state.reviewsError = false
    },
    retrieveReviewsFailure(state, error){
        state.reviews = [],
        state.reviewsLoading = false,
        state.reviewsError = error
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}