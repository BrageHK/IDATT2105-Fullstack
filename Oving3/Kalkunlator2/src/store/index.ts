import { createStore } from "vuex"

export default createStore({
    state: {
        feedback: {
            name: "",
            email: "",
            message: "",
            rating: 0
        }
    },
    mutations: {
        SET_FEEDBACK_INFO(state, payload) {
            state.feedback.name = payload.navn;
            state.feedback.email = payload.epost;
            state.feedback.message = payload.tekst;
            state.feedback.rating = payload.rating;
        },
    },
    actions: {
        setFeedbackInfo({ commit }, payload) {
            commit("SET_FEEDBACK_INFO", payload);
            console.log("PAYLOAD", payload);
        }
    },
    modules: {}
})