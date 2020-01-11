/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import site from "codedrills_proto/io/codedrills/proto/site/content_view_service_grpc_web_pb";
var site_proto = proto.io.codedrills.proto.site;
var content_proto = proto.io.codedrills.proto.content;

const siteService = new site.ContentViewServicePromiseClient(
  "http://site.staging.codedrills.io:80",
  null,
  null
);

const state = {
  loading: false,
  title: "",
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
  ],
  judgingMode: false,
  solved: false
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
  async fetchProblem({ commit, state, getters, dispatch }, { url }) {
    console.log("TRYING TO FETCH");
    commit("toggleLoading", true);

    return dispatch("ensureToken").then(__ => {
      var getContentRequest = new site_proto.GetContentRequest();
      var contentId = new content_proto.ContentId();
      var contentAddress = new content_proto.ContentAddress();
      contentAddress.setContentType(
        proto.io.codedrills.proto.content.ContentType.PROBLEM
      );
      contentAddress.setUrl(url);
      contentId.setContentAddress(contentAddress);
      getContentRequest.setContentId(contentId);

      return siteService
        .getContent(getContentRequest, { "auth-token": getters.userToken })
        .then(res => {
          console.log("SUCCESS", res.toObject());
          commit("setProblem", res.toObject().contentView);
        })
        .catch(err => {
          console.log("ERROR", err);
        })
        .finally(() => {
          commit("toggleLoading", false);
        });
    });
  }
};

const getters = {
  userToken: function(state, getters, rootState, rootGetters) {
    console.log("rootGetters", rootGetters);
    return rootGetters["user/userToken"];
  },
  types: function() {
    return Object.keys(proto.io.codedrills.proto.content.ContentType);
  }
};

const mutations = {
  toggleLoading(state, content) {
    state.loading = content;
  },

  setProblem(state, content) {
    state.title = content.title;
    var problemView = content.dataView.problemView;
    var statement = problemView.statementView; // TODO: set this as the statement
    var problemMeta = problemView.problemMeta;
    var problemStats = problemMeta.problemStats;
    //state.rating = content.metaData.rating; //TODO: This is causing an error
    var tags = [];
    var companies = [];
    for (var i = 0; i < content.metaData.tagsList.length; ++i) {
      var t = content.metaData.tagsList[i];
      var parts = t.split("/");
      // TODO: titlecase parts[1]
      if (parts[0] === "topic") tags.push(parts[1]);
      else companies.push(parts[1]);
    }
    state.tags = tags;
    state.companies = companies;
    state.customInputs = problemMeta.argsList.map(a => ({
      name: a.name,
      type: "int[]",
      inputType: "text"
    }));
    state.accuracy = problemStats.accuracy; // TODO: Format as xx.yy%
    state.difficulty = ["Easy", "Medium", "Hard"][problemStats.difficulty];
    state.frequency = "Often";
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
