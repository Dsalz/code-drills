<template>
  <div>
    <Navbar />
    <Loader v-if="loading" />
    <NotFoundText v-if="!loading && !title" item="problem" />
    <section
      v-if="!loading && title"
      class="problem-section-header gen-padding grey-bg"
    >
      <div class="d-flex problem-section-title align-items-center">
        <h1>
          {{ title }}
          <img src="../assets/images/Crown.svg" />
        </h1>
      </div>
      <div class="problem-section-tags">
        <span class="problem-section-tag" v-for="tag in tags" :key="tag">{{
          tag
        }}</span>
      </div>
      <div class="problem-section-title-info d-flex">
        <div>
          <h5>Difficulty</h5>
          <p>{{ difficulty }}</p>
        </div>
        <div>
          <h5>Accuracy</h5>
          <p>{{ accuracy }}</p>
        </div>
        <div>
          <h5>Frequency</h5>
          <p>{{ frequency }}</p>
        </div>
        <div>
          <h5>Rating</h5>
          <div class="d-flex">
            <div class="site-rating-wrapper">
              <div class="site-rating-empty"></div>
              <div class="site-rating-full" :style="styles"></div>
            </div>
          </div>
        </div>
        <div>
          <h5>Companies</h5>
          <span
            class="problem-section-tag"
            v-for="company in companies"
            :key="company"
            >{{ company }}</span
          >
        </div>
      </div>
    </section>
    <section
      class="problem-premium-block-wrapper gen-padding white-bg"
      v-if="premiumBlock"
    >
      <div
        class="problem-premium-block d-flex justify-content-between align-items-center"
      >
        <div class="problem-premium-block-info white-bg">
          <h2>Premium Problem</h2>
          <p>
            Subscribe to gain access to the premium problem and many more
            benefits
          </p>
          <button class="site-btn green-btn">Get Premium</button>
        </div>
        <div class="problem-premium-block-img">
          <img src="../assets/images/Premium.svg" />
        </div>
      </div>
    </section>
    <section
      v-if="!loading && title && !premiumBlock"
      class="problem-section-info gen-padding white-bg"
    >
      <div class="problem-section-tabs d-flex- align-items-center">
        <a
          :class="{ active: activeTab === 'description' }"
          @click="() => changeTab('description')"
          >Description</a
        >
        <a
          :class="{ active: activeTab === 'submission' }"
          @click="() => changeTab('submission')"
          >Submission</a
        >
        <a
          :class="{ active: activeTab === 'editorial' }"
          @click="() => changeTab('editorial')"
          >Editorial</a
        >
      </div>

      <div class="problem-section-description">
        <div
          class="problem-section-submission white-bg"
          v-if="activeTab === 'submission'"
        >
          <h2 class="section-header">Submission History</h2>
          <table>
            <thead class="white-bg">
              <tr>
                <td>Submission Date</td>
                <td>Status</td>
                <td>Time Limit</td>
                <td>Memory Limit</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>4 months ago</td>
                <td>Accepted</td>
                <td>3 MS</td>
                <td>37MB</td>
                <td>
                  <a class="green-link" href="#">View Details</a>
                </td>
              </tr>
              <tr>
                <td>4 months ago</td>
                <td>Accepted</td>
                <td>3 MS</td>
                <td>38MB</td>
                <td>
                  <a class="green-link" href="#">View Details</a>
                </td>
              </tr>
              <tr>
                <td>4 months ago</td>
                <td>Accepted</td>
                <td>3 MS</td>
                <td>36MB</td>
                <td>
                  <a class="green-link" href="#">View Details</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="problem-section-description-info"
          v-if="activeTab === 'description' || activeTab === 'editorial'"
        >
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
          <img
            class="constraint-img"
            src="../assets/images/constraint-img.png"
          />

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
            \, Gary's hike can be drawn as:
          </p>
          <p>He enters and leaves one valley.</p>
        </div>
        <Editor
          :editorialMode="activeTab === 'editorial'"
          :submissionMode="activeTab === 'submission'"
          :submissionData="submissionData"
          :code="code"
          :onCodeChange="onCmCodeChange"
        />
        <div
          class="problem-section-editor-options"
          v-if="activeTab === 'description'"
        >
          <label class="d-flex align-items-center">
            <input class="site-checkbox" type="checkbox" />
            Add custom input
          </label>
          <div class="problem-section-editor-btns">
            <button disabled class="site-btn grey-btn">Run</button>
            <button disabled class="site-btn green-btn">Submit</button>
          </div>
          <div
            v-if="!judgingMode && !solved"
            class="problem-section-custom-inputs d-flex"
          >
            <div v-for="customInput in customInputs" :key="customInput.name">
              <h6>{{ customInput.type }} {{ customInput.name }}</h6>
              <input
                :type="customInput.inputType"
                placeholder="Test against custom input"
              />
            </div>
          </div>
          <div
            v-if="judgingMode"
            class="problem-section-judging white-bg d-flex justify-content-between"
          >
            <div>
              <h3>Judging...</h3>
              <p>We're processing against the test cases</p>
            </div>
            <img :src="require('./../assets/images/judgingImg.svg')" />
          </div>
        </div>
        <div
          class="problem-section-editor-editorial d-flex"
          v-if="activeTab === 'editorial'"
        >
          <p>Did you find this useful?</p>
          <svg
            width="18px"
            height="16px"
            viewBox="0 0 18 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Problem-Page---Editorial"
                transform="translate(-305.000000, -2000.000000)"
                fill="#CCCCCC"
                fill-rule="nonzero"
              >
                <g
                  id="Thumbs-Up"
                  transform="translate(305.000000, 2000.000000)"
                >
                  <path
                    d="M0,15.9843444 L3.26632272,15.9843444 L3.26632272,6.40313112 L0,6.40313112 L0,15.9843444 Z M17.964775,7.20156556 C17.964775,6.32328767 17.2298523,5.60469667 16.3316136,5.60469667 L11.1871553,5.60469667 L12.003736,1.93189824 C12.003736,1.85205479 12.003736,1.77221135 12.003736,1.69236791 C12.003736,1.37299413 11.8404199,1.05362035 11.6771357,0.81409002 L10.778865,0.0156555773 L5.38943249,5.2853229 C5.06280021,5.52485323 4.89948408,5.92407045 4.89948408,6.40313112 L4.89948408,14.3874755 C4.89948408,15.2657534 5.63440669,15.9843444 6.53264544,15.9843444 L13.8818716,15.9843444 C14.5351361,15.9843444 15.1067426,15.5851272 15.3517168,15.0262231 L17.8014588,9.35730724 C17.8831169,9.19762035 17.8831169,8.95809002 17.8831169,8.79840313 L17.8831169,7.20153425 L17.964775,7.20153425 C17.964775,7.281409 17.964775,7.20156556 17.964775,7.20156556 Z"
                    id="Shape"
                  />
                </g>
              </g>
            </g>
          </svg>
          <svg
            width="18px"
            height="16px"
            viewBox="0 0 18 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Problem-Page---Editorial"
                transform="translate(-331.000000, -2000.000000)"
                fill="#CCCCCC"
                fill-rule="nonzero"
              >
                <g
                  id="Thumbs-Down"
                  transform="translate(331.000000, 2000.000000)"
                >
                  <path
                    d="M0,15.9843444 L3.26632272,15.9843444 L3.26632272,6.40313112 L0,6.40313112 L0,15.9843444 Z M17.964775,7.20156556 C17.964775,6.32328767 17.2298523,5.60469667 16.3316136,5.60469667 L11.1871553,5.60469667 L12.003736,1.93189824 C12.003736,1.85205479 12.003736,1.77221135 12.003736,1.69236791 C12.003736,1.37299413 11.8404199,1.05362035 11.6771357,0.81409002 L10.778865,0.0156555773 L5.38943249,5.2853229 C5.06280021,5.52485323 4.89948408,5.92407045 4.89948408,6.40313112 L4.89948408,14.3874755 C4.89948408,15.2657534 5.63440669,15.9843444 6.53264544,15.9843444 L13.8818716,15.9843444 C14.5351361,15.9843444 15.1067426,15.5851272 15.3517168,15.0262231 L17.8014588,9.35730724 C17.8831169,9.19762035 17.8831169,8.95809002 17.8831169,8.79840313 L17.8831169,7.20153425 L17.964775,7.20153425 C17.964775,7.281409 17.964775,7.20156556 17.964775,7.20156556 Z"
                    id="Shape"
                    transform="translate(8.982387, 8.000000) scale(-1, -1) translate(-8.982387, -8.000000) "
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div class="problem-section-solved white-bg" v-if="solved">
          <div
            class="problem-section-solved-header d-flex justify-content-between"
          >
            <div class="problem-section-solved-header-info">
              <h3 class="marg-0">Congratulations</h3>
              <p>Whoaa! You solved this challenge.</p>
              <div class="problem-section-solved-stats d-flex">
                <div>
                  <h6 class="marg-0">Time Taken</h6>
                  <p class="marg-0">{{ timeTaken }}</p>
                </div>
                <div>
                  <h6 class="marg-0">Memory Consumed</h6>
                  <p class="marg-0">{{ memoryConsumed }}</p>
                </div>
              </div>
            </div>
            <img :src="require('./../assets/images/Congratulations.svg')" />
          </div>
          <div class="problem-section-test-cases active">
            <h4 class="marg-0">Test Case 1</h4>
            <div class="problem-section-test-case">
              <p><b>Input</b>(stdin)</p>
              <div>
                <p>The first line</p>
                <p>The second line</p>
              </div>
            </div>
            <div class="problem-section-test-case">
              <p><b>Input</b>(stdin)</p>
              <div>
                <p>The first line</p>
                <p>The second line</p>
              </div>
            </div>
            <div class="problem-section-test-case">
              <p><b>Input</b>(stdin)</p>
              <div>
                <p>The first line</p>
                <p>The second line</p>
              </div>
            </div>
          </div>
          <div class="problem-section-test-cases">
            <h4 class="marg-0">Test Case 2</h4>
            <div class="problem-section-test-case">
              <p><b>Input</b>(stdin)</p>
              <div>
                <p>The first line</p>
                <p>The second line</p>
              </div>
            </div>
            <div class="problem-section-test-case">
              <p><b>Input</b>(stdin)</p>
              <div>
                <p>The first line</p>
                <p>The second line</p>
              </div>
            </div>
            <div class="problem-section-test-case">
              <p><b>Input</b>(stdin)</p>
              <div>
                <p>The first line</p>
                <p>The second line</p>
              </div>
            </div>
          </div>
          <div
            class="problem-section-solved-footer d-flex justify-content-between"
          >
            <div class="d-flex">
              <p>Share</p>
              <a href>
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="96.124px"
                  height="96.123px"
                  viewBox="0 0 96.124 96.123"
                  style="enable-background:new 0 0 96.124 96.123;"
                  xml:space="preserve"
                >
                  <g>
                    <path
                      d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803
		c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654
		c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246
		c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z"
                    />
                  </g>
                </svg>
              </a>
              <a href="#">
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  style="enable-background:new 0 0 512 512;"
                  xml:space="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M363.273,0H148.728C66.719,0,0,66.719,0,148.728v214.544C0,445.281,66.719,512,148.728,512h214.544
			C445.281,512,512,445.281,512,363.273V148.728C512,66.719,445.281,0,363.273,0z M472,363.272C472,423.225,423.225,472,363.273,472
			H148.728C88.775,472,40,423.225,40,363.273V148.728C40,88.775,88.775,40,148.728,40h214.544C423.225,40,472,88.775,472,148.728
			V363.272z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M256,118c-76.094,0-138,61.906-138,138s61.906,138,138,138s138-61.906,138-138S332.094,118,256,118z M256,354
			c-54.037,0-98-43.963-98-98s43.963-98,98-98s98,43.963,98,98S310.037,354,256,354z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <circle cx="396" cy="116" r="20" />
                    </g>
                  </g>
                </svg>
              </a>
              <a href="#">
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  style="enable-background:new 0 0 512 512;"
                  xml:space="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016
			c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992
			c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056
			c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152
			c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792
			c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44
			C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568
			C480.224,136.96,497.728,118.496,512,97.248z"
                      />
                    </g>
                  </g>
                </svg>
              </a>
              <a href="#">
                <svg
                  id="Bold"
                  enable-background="new 0 0 24 24"
                  height="512"
                  viewBox="0 0 24 24"
                  width="512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z"
                  />
                  <path d="m.396 7.977h4.976v16.023h-4.976z" />
                  <path
                    d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z"
                  />
                </svg>
              </a>
            </div>
            <button class="site-btn green-btn">Next Challenge</button>
          </div>
        </div>
        <div class="problem-section-solved white-bg" v-if="runtimeError">
          <div
            class="problem-section-solved-header d-flex justify-content-between"
          >
            <div class="problem-section-solved-header-info">
              <h3 class="marg-0">Run Time Error</h3>
              <p>
                There was a runtime error hen runningone of the tests. Some
                details are displayed
              </p>
              <div class="problem-section-solved-stats d-flex">
                <div>
                  <h6 class="marg-0">Time Taken</h6>
                  <p class="marg-0">{{ timeTaken }}</p>
                </div>
                <div>
                  <h6 class="marg-0">Memory Consumed</h6>
                  <p class="marg-0">{{ memoryConsumed }}</p>
                </div>
              </div>
            </div>
            <img :src="require('./../assets/images/Error.svg')" />
          </div>
          <div class="problem-section-test-cases active">
            <h4 class="marg-0">Test Case 1</h4>
            <div class="problem-section-test-case">
              <p>
                <b>Compiler Message</b>
              </p>
              <div>
                <p>The first line</p>
                <p>The second line</p>
              </div>
            </div>
            <div class="problem-section-test-case">
              <p><b>Input</b>(stdin)</p>
              <div class="error-bg">
                <p>The first line</p>
                <p>The second line</p>
              </div>
            </div>
            <div class="problem-section-test-case">
              <p>
                <b>Expected Output</b>
              </p>
              <div>
                <p>The first line</p>
                <p>The second line</p>
              </div>
            </div>
          </div>
          <div class="problem-section-test-cases">
            <h4 class="marg-0">Test Case 2</h4>
            <div class="problem-section-test-case">
              <p>
                <b>Compiler Message</b>
              </p>
              <div>
                <p>The first line</p>
                <p>The second line</p>
              </div>
            </div>
            <div class="problem-section-test-case">
              <p><b>Input</b>(stdin)</p>
              <div class="error-bg">
                <p>The first line</p>
                <p>The second line</p>
              </div>
            </div>
            <div class="problem-section-test-case">
              <p>
                <b>Expected Output</b>
              </p>
              <div>
                <p>The first line</p>
                <p>The second line</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Editor from "../components/Editor";
import NotFoundText from "../components/NotFoundText";
import Loader from "../components/Loader";
export default {
  data() {
    return {
      activeTab: "description"
    };
  },
  components: {
    Navbar,
    Footer,
    Editor,
    NotFoundText,
    Loader
  },
  computed: {
    ...mapState("problem", [
      "title",
      "tags",
      "companies",
      "difficulty",
      "accuracy",
      "frequency",
      "rating",
      "code",
      "customInputs",
      "judgingMode",
      "solved",
      "loading",
      "premiumOnly",
      "runtimeError",
      "timeTaken",
      "memoryConsumed",
      "submissionData"
    ]),
    ...mapState("user", ["hasPremiumAccess"]),
    premiumBlock() {
      return this.premiumOnly && !this.hasPremiumAccess;
    },
    styles() {
      return { width: `${this.rating * 20}%` };
    }
  },
  methods: {
    ...mapActions({
      getProblem: "problem/fetchProblem",
      getProblems: "problem/fetchProblems"
    }),
    onCmCodeChange(newCode) {
      this.code = newCode;
    },
    changeTab(tab) {
      this.activeTab = tab;
    }
  },
  created() {
    this.getProblems();
    this.getProblem({ url: this.$route.params.name });
  }
};
</script>

<style scoped>
.problem-section-header,
.problem-section-editor-editorial p {
  color: #1c2330;
}

.problem-section-info,
.problem-section-header {
  padding-top: 50px;
  padding-bottom: 40px;
}

.problem-section-title h1 {
  font-size: 50px;
  margin: 0;
}

.problem-section-title img {
  height: 30px;
  margin-left: 10px;
}

.problem-section-tags {
  margin-bottom: 16px;
}

.problem-section-tag {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.27);
  background: #fff;
  border: 1px solid #eeeeee;
  padding: 4px;
  border-radius: 5px;
  margin-right: 8px;
}

.problem-section-title-info > div {
  margin-right: 50px;
}

.problem-section-title-info div h5,
.problem-section-title-info div p,
.problem-section-description p,
.problem-section-description h5,
.problem-section-editor-editorial p,
.problem-section-judging p,
.problem-section-solved-footer p {
  font-size: 14px;
  margin: 0;
}

.problem-section-title-info .site-rating-wrapper {
  margin-top: -5px;
}

.problem-section-title-info div h5,
.problem-section-description h5 {
  margin-bottom: 2px;
}

.problem-section-title-info div p,
.problem-section-description p {
  font-weight: 300;
}

.problem-section-title-info img {
  margin-right: 4px;
}

.problem-section-info .constraint-img {
  height: 70px;
}

.problem-section-description-info {
  max-width: 85%;
}

.problem-section-tabs {
  height: 40px;
  background: #eeeeee;
  border-radius: 5px;
  padding: 4px 6px;
  display: inline-flex;
  margin-bottom: 30px;
}

.problem-section-tabs a {
  font-size: 14px;
  font-weight: 300;
  padding: 6px;
  margin-right: 6px;
  border-radius: 5px;
  cursor: pointer;
}

.problem-section-tabs a:last-of-type {
  margin-right: 0;
}

.problem-section-tabs a.active {
  background: #fff;
}
.problem-section-editor-options {
  margin: -20px 0 0;
  color: #000;
  font-weight: 300;
  position: relative;
}

.problem-section-editor-options label input {
  margin-right: 8px;
}

.problem-section-editor-btns {
  position: absolute;
  top: 0;
  right: 0;
}

.problem-section-editor-btns .site-btn:first-of-type {
  margin-right: 16px;
}

.problem-section-custom-inputs {
  margin-top: 14px;
}

.problem-section-custom-inputs div {
  margin-right: 24px;
  width: 200px;
}
.problem-section-custom-inputs div h6 {
  margin: 4px 0;
}

.problem-section-custom-inputs div input {
  display: block;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 10px 9px;
  width: 100%;
  box-sizing: border-box;
}

.problem-section-custom-inputs div input,
.problem-section-custom-inputs div h6 {
  font-style: inherit;
  font-weight: 300;
}

.problem-section-custom-inputs div input,
.problem-section-custom-inputs div h6,
.problem-section-editor-options,
.problem-section-solved p,
.problem-section-solved h6,
.problem-section-test-cases h4,
.problem-section-test-cases p,
.problem-premium-block-info p,
.problem-section-submission table {
  font-size: 14px;
}

.problem-section-editor-editorial svg {
  margin: 0 6px;
  width: 18px;
  height: 16px;
  fill: #eeeeee;
}

.problem-section-editor-editorial svg:last-of-type {
  margin-left: 0;
}

.problem-section-editor-editorial {
  margin-bottom: 180px;
}

.problem-section-judging {
  padding: 20px 30px;
  width: 100%;
  box-sizing: border-box;
  margin: 80px 0;
  border-radius: 5px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12);
}

.problem-section-judging h3 {
  font-size: 24px;
  margin: 0 0 5px;
}

.problem-section-judging div {
  margin-right: 10px;
}

.problem-section-judging img {
  width: 120px;
}

.problem-section-solved {
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12);
  margin: 70px 0;
  position: relative;
}

.problem-section-solved h3 {
  font-size: 24px;
}

.problem-section-judging h3,
.problem-section-solved h3,
.problem-section-solved h6,
.problem-section-test-case > p b,
.problem-section-test-cases h4,
.problem-premium-block-info h2,
.problem-section-submission table thead,
.problem-section-title-info div h5,
.problem-section-description h5,
.problem-section-submission table tbody tr a {
  font-weight: 500;
}

.problem-section-solved-stats div {
  margin-right: 30px;
}

.problem-section-solved img {
  width: 110px;
}

.problem-section-solved-header-info > p {
  margin: 4px 0 16px;
}

.problem-section-test-cases {
  border: 1px solid #cccccc;
  border-radius: 5px;
  width: calc(100% - 150px);
  padding: 10px;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23CCC%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat, repeat;
  background-position: right 18px top 14px, 0 0;
  background-size: 0.65em auto, 100%;
  box-sizing: border-box;
}

.problem-section-test-case,
.problem-section-test-cases {
  margin: 20px 0;
}

.problem-section-test-case > p {
  margin: 0px 0 10px;
}

.problem-section-test-case div {
  background: #fbfbfb;
}

.problem-section-test-case div.error-bg {
  background: rgba(208, 2, 27, 0.05);
}

.problem-section-test-cases.active {
  padding: 15px;
}

.problem-section-test-cases .problem-section-test-case {
  display: none;
}

.problem-section-test-cases.active .problem-section-test-case {
  display: block;
}

.problem-section-solved-footer {
  position: absolute;
  bottom: -50px;
  width: 100%;
  left: 0;
}

.problem-section-solved-footer p {
  margin-right: 8px;
}

.problem-section-solved-footer a {
  margin: 0 1px;
}

.problem-section-solved-footer a svg {
  height: 16px;
  width: 20px;
  fill: #cccccc;
}

.problem-premium-block-wrapper {
  min-height: calc(100vh - 550px);
  padding-top: 60px;
}

.problem-premium-block {
  max-width: 585px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12);
  padding: 30px;
}

.problem-premium-block-info {
  width: 270px;
  max-width: 100vw;
  font-weight: 300;
  margin-right: 10px;
}

.problem-premium-block-info img {
  height: 110px;
}

.problem-premium-block-info h2 {
  font-size: 24px;
}

.problem-premium-block-info h2,
.problem-premium-block-info p {
  margin: 0 0 4px;
}

.problem-premium-block-info button {
  margin-top: 12px;
}

.error-bg {
  background-color: rgba(208, 2, 27, 0.05);
}

.problem-section-submission {
  border-radius: 5px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12);
  padding: 30px;
}

.problem-section-submission table {
  text-align: center;
  max-width: 100vw;
  font-weight: 300;
}

.problem-section-submission table tbody {
  border-radius: 5px;
  border: 1px solid #cccccc;
  box-shadow: 0 0 0 1px #cccccc;
}

.problem-section-submission table tbody tr:nth-of-type(odd) {
  background: #fbfbfb;
}

.problem-section-submission table td {
  padding: 12px 2vw;
}

@media screen and (max-width: 1000px) {
  .problem-section-custom-inputs div input,
  .problem-section-custom-inputs div h6,
  .problem-section-editor-options {
    font-size: 12px;
  }
  .problem-section-custom-inputs div {
    margin-right: 0.5vw;
    width: 170px;
  }
  .problem-section-custom-inputs,
  .problem-section-title-info {
    flex-wrap: wrap;
  }

  .problem-section-tags {
    margin-bottom: 0;
  }

  .problem-section-title-info > div,
  .problem-section-custom-inputs div {
    margin-top: 20px;
  }
}

@media screen and (max-width: 800px) {
  .problem-section-title-info > div {
    margin-right: 25px;
  }
  .problem-section-title h1 {
    font-size: 30px;
  }

  .problem-section-title img {
    height: 20px;
    margin-left: 5px;
  }

  .problem-section-tag {
    font-size: 10px;
    margin-right: 4px;
  }
  .problem-section-title-info div h5,
  .problem-section-title-info div p,
  .problem-section-description p,
  .problem-section-description h5,
  .problem-section-tabs a {
    font-size: 12px;
  }

  .problem-section-info,
  .problem-section-header {
    padding-top: 30px;
    padding-bottom: 20px;
  }

  .problem-section-tabs {
    height: 30px;
  }
  .problem-section-description-info {
    max-width: 100%;
  }
  .problem-section-judging h3 {
    font-size: 18px;
  }
  .problem-section-judging img {
    width: 80px;
  }
  .problem-section-test-cases {
    width: 100%;
  }
  .problem-section-solved img {
    display: none;
  }
  .problem-section-solved {
    padding: 20px;
  }
  .problem-section-submission {
    overflow-y: auto;
  }
  .problem-section-submission table {
    padding-right: 30px;
  }
}

@media screen and (max-width: 400px) {
  .problem-section-custom-inputs {
    justify-content: center;
  }
  .problem-section-title h1 {
    font-size: 22px;
  }
  .problem-premium-block-info h2 {
    font-size: 18px;
  }
  .problem-premium-block-info p {
    font-size: 12px;
  }
}
</style>
