/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import site from "codedrills_proto/io/codedrills/proto/site/content_view_service_grpc_web_pb";

const siteService = new site.ContentViewServicePromiseClient(
  "http://site.staging.codedrills.io:80",
  null,
  null
);

const state = {
  userContents: null /* All user contents */,
  current: null /* Content being currently edited */,
  errorCreateContent: null,
  errorUpdateContent: null,
  title: "Counting Valleys",
  tags: ["dp", "graphs", "category"],
  companies: ["Google", "Facebook", "Microsoft"],
  difficulty: "Easy",
  accuracy: "87%",
  frequency: "Often",
  rating: 3,
  code: "const a = 10",
  customInputs: [
    {
      name: "murderRoom",
      type: "string",
      inputType: "text"
    },
    {
      name: "murderTime",
      type: "integer",
      inputType: "text"
    },
    {
      name: "eventTime",
      type: "tupple Integer",
      inputType: "text"
    },
    {
      name: "murderTime",
      type: "integer",
      inputType: "text"
    }
  ]
};

const actions = {
  async ensureToken({ commit, state, getters, dispatch }) {
    return new Promise(resolve => resolve("fjfjjfjf"));
    // var tokenPromise;
    // if (getters.userToken) {
    //   tokenPromise = new Promise(resolve => {
    //     resolve(getters.userToken);
    //   });
    // } else {
    //   tokenPromise = dispatch("user/fetchUserToken", null, { root: true });
    // }
    // return tokenPromise;
  },
  async fetchProblems({ commit, state, getters, dispatch }) {
    console.log("TRYING TO FETCH");
    return dispatch("ensureToken").then(__ => {
      var listContentRequest = new proto.io.codedrills.proto.site.ListContentRequest();
      listContentRequest.setContentType(
        proto.io.codedrills.proto.content.ContentType.PROBLEM
      );
      return siteService
        .listContent(listContentRequest, { "auth-token": getters.userToken })
        .then(res => {
          console.log("SUCCESS", res);
        })
        .catch(err => {
          console.log("ERROR", err);
        });
    });
  },
  async fetchProblem({ commit, state, getters, dispatch }) {
    console.log("TRYING TO FETCH");
    console.log(commit);
    return dispatch("ensureToken").then(__ => {
      var listContentRequest = new proto.io.codedrills.proto.site.ListContentRequest();
      listContentRequest.setContentType(
        proto.io.codedrills.proto.content.ContentType.PROBLEM
      );
      return siteService
        .listContent(listContentRequest, { "auth-token": getters.userToken })
        .then(res => {
          console.log("SUCCESS", res);
        })
        .catch(err => {
          console.log("ERROR", err);
        });
    });
  },
  async fetchCurrent({ commit, state, getters, dispatch }, data) {
    var req = new proto.ai.codedrills.ContentRequest();
    var typeAndUrl = new proto.ai.codedrills.TypeAndUrl();
    typeAndUrl.setType(
      proto.ai.codedrills.ContentType[data.type.toUpperCase()]
    );
    typeAndUrl.setUrl(data.url);
    req.setTypeAndUrl(typeAndUrl);
    return dispatch("ensureToken").then(_ => {
      orbService.get(req, { "auth-token": getters.userToken }).then(content => {
        console.log("Got content", content.toObject());
        commit("setCurrent", content.toObject());
      });
    });
  },
  async updateContent({ commit, state }, content) {
    commit("setCurrent", content);
  },
  async createContent({ commit, state, dispatch, getters }, contentData) {
    var createContent = new proto.ai.codedrills.CreateContent();
    createContent.setTitle(contentData.title);
    createContent.setType(proto.ai.codedrills.ContentType[contentData.type]);
    return orbService
      .create(createContent, { "auth-token": getters.userToken })
      .then(res => {
        return dispatch("fetchContents");
      });
  }
};

const getters = {
  userContents: state => {
    return state.userContents;
  },
  current: state => {
    return state.current;
  },
  userToken: function(state, getters, rootState, rootGetters) {
    console.log("rootGetters", rootGetters);
    return rootGetters["user/userToken"];
  },
  types: function() {
    return Object.keys(proto.io.codedrills.proto.content.ContentType);
  }
};

const mutations = {
  setUserContents(state, contents) {
    state.userContents = contents;
  },
  setCurrent(state, current) {
    state.current = current;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
