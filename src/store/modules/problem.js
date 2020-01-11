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
  premiumOnly: false,
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
  submissionData: {
    result: "Accepted",
    time: "2 MS",
    timeLimit: "5 MS",
    memoryLimit: "37 MB",
    passedCases: "29"
  },
  judgingMode: false,
  solved: false,
  runtimeError: false,
  timeTaken: "2 MS",
  memoryConsumed: "38.1 MB",
  problemDescription: `
          <p>
            Gary is an avid hiker. He tracks his hikes meticulously, paying
            close attention to small details like topography. During his last
            hike he took exactly steps. For every step he took, he noted if it
            was an uphill, , or a downhill, step. Gary's hikes start and end at
            sea level and each step up or down represents a unit change in
            altitude. We define the following terms:
          </p>
          <br />
          <p>
            · A mountain is a sequence of consecutive steps above sea level,
            starting with a step up from sea level and ending with a step down
            to sea level.
          </p>
          <p>
            · A valley is a sequence of consecutive steps below sea level,
            starting with a step down from sea level and ending with a step up
            to sea level.
          </p>
          <br />

          <p>
            Given Gary's sequence of up and down steps during his last hike,
            find and print the number of valleys he walked through. For example,
            if Gary's path is , he first enters a valley units deep. Then he
            climbs out an up onto a mountain units high. Finally, he returns to
            sea level and ends his hike.
          </p>
          <br />

          <h5>Function Description</h5>
          <p>
            Complete the countingValleys function in the editor below. It must
            return an integer that denotes the number of valleys Gary traversed.
          </p>
          <br />

          <p>countingValleys has the following parameter(s):</p>
          <p>· n: the number of steps Gary takes</p>
          <p>· s: a string describing his path</p>

          <br />

          <h5>Input Format</h5>
          <p>
            The first line contains an integer , the number of steps in Gary's
            hike.
          </p>
          <p>
            The second line contains a single string , of characters that
            describe his path.
          </p>
          <br />

          <h5>Constraints</h5>
          <img class="constraint-img" src="../assets/images/constraint-img.png" />

          <br />

          <h5>Output Format</h5>
          <p>
            Print a single integer that denotes the number of valleys Gary
            walked through during his hike.
          </p>
          <br />
          <h5>Sample Input</h5>
          <p>1</p>
          <br />

          <h5>Explanation</h5>
          <p>
            If we represent _ as sea level, a step up as /, and a step down as
            , Gary's hike can be drawn as:
          </p>
          <p>He enters and leaves one valley.</p>
  `
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
    state.companies = companies.filter(Boolean);
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
