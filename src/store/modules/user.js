/* eslint-disable no-unused-vars */
import firebase from "firebase";

const state = {
  user: null,
  loginError: null,
  userToken: null
};

const getters = {
  user: state => {
    return state.user;
  },
  loginError: state => {
    return state.loginError;
  },
  userToken: state => {
    return state.userToken;
  }
};

const actions = {
  async login({ commit, state }, creds) {
    return firebase
      .auth()
      .signInWithEmailAndPassword(creds.email, creds.password)
      .then(
        __ => {
          commit("setLoginError", null);
        },
        __ => {
          commit("setUser", null);
          commit("setLoginError", "Incorrect username or password");
        }
      );
  },
  async logout({ commit, state }) {
    return firebase.auth().signOut();
  },
  async fetchUserToken({ commit, state }) {
    if (state.user) {
      return firebase
        .auth()
        .currentUser.getIdToken()
        .then(token => {
          commit("setUserToken", token);
        });
    }
  },
  userLoggedIn({ commit, dispatch }, data) {
    commit("setUser", data.user);
    return dispatch("fetchUserToken");
  },
  userLoggedOut({ commit }) {
    commit("setUser", null);
    commit("setUserToken", null);
  }
};

const mutations = {
  setUser(state, user) {
    state.user = JSON.parse(JSON.stringify(user)); //https://stackoverflow.com/questions/38365075/vuex-vuejs-do-not-mutate-vuex-store-state-outside-mutation-handlers
  },
  setLoginError(state, error) {
    state.loginError = error;
  },
  setUserToken(state, token) {
    state.userToken = token;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
