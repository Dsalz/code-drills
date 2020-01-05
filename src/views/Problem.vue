<template>
  <div>
    <Navbar />
    <section class="problem-section-header gen-padding grey-bg">
      <div class="d-flex problem-section-title align-items-center">
        <h1>
          {{ title }}
          <img src="../assets/images/Crown.svg" />
        </h1>
      </div>
      <div class="problem-section-tags">
        <span class="problem-section-tag" v-for="tag in tags" :key="tag">
          {{
          tag
          }}
        </span>
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
            <img
              v-for="(item, i) in Array(rating).fill(undefined)"
              :key="i"
              src="../assets/images/FilledStar.svg"
            />
            <img
              v-for="(item, i) in Array(5 - rating).fill(undefined)"
              :key="10 - i"
              src="../assets/images/EmptyStar.svg"
            />
          </div>
        </div>
        <div>
          <h5>Companies</h5>
          <span
            class="problem-section-tag"
            v-for="company in companies"
            :key="company"
          >{{ company }}</span>
        </div>
      </div>
    </section>
    <section class="problem-section-info gen-padding white-bg">
      <div class="problem-section-tabs d-flex- align-items-center">
        <a
          :class="{ active: activeTab === 'description' }"
          @click="() => changeTab('description')"
        >Description</a>
        <a
          :class="{ active: activeTab === 'submission' }"
          @click="() => changeTab('submission')"
        >Submission</a>
        <a
          :class="{ active: activeTab === 'editorial' }"
          @click="() => changeTab('editorial')"
        >Editorial</a>
      </div>

      <div class="problem-section-description">
        <div class="problem-section-description-info">
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
            \, Gary's hike can be drawn as:
          </p>
          <p>He enters and leaves one valley.</p>
        </div>
        <Editor
          :editorialMode="activeTab === 'editorial'"
          :code="code"
          :onCodeChange="onCmCodeChange"
        />
        <div class="problem-section-editor-options" v-if="activeTab === 'description'">
          <label class="d-flex align-items-center">
            <input class="site-checkbox" type="checkbox" />
            Add custom input
          </label>
          <div class="problem-section-editor-btns">
            <button disabled class="site-btn grey-btn">Run</button>
            <button disabled class="site-btn green-btn">Submit</button>
          </div>
          <div v-if="!judgingMode && !solved" class="problem-section-custom-inputs d-flex">
            <div>
              <h6>string murderRoom</h6>
              <input type="text" placeholder="Test against custom input" />
            </div>
            <div>
              <h6>integer murderTime</h6>
              <input type="text" placeholder="Test against custom input" />
            </div>
            <div>
              <h6>tuple Integer eventTime</h6>
              <input type="text" placeholder="Test against custom input" />
            </div>
            <div>
              <h6>integer murderTime</h6>
              <input type="text" placeholder="Test against custom input" />
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
        <div class="problem-section-editor-editorial d-flex" v-if="activeTab === 'editorial'">
          <p>Did you find this useful?</p>
          <svg
            width="18px"
            height="16px"
            viewBox="0 0 18 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                id="Problem-Page---Editorial"
                transform="translate(-305.000000, -2000.000000)"
                fill="#CCCCCC"
                fill-rule="nonzero"
              >
                <g id="Thumbs-Up" transform="translate(305.000000, 2000.000000)">
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
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                id="Problem-Page---Editorial"
                transform="translate(-331.000000, -2000.000000)"
                fill="#CCCCCC"
                fill-rule="nonzero"
              >
                <g id="Thumbs-Down" transform="translate(331.000000, 2000.000000)">
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
          <div class="problem-section-solved-header d-flex justify-content-between">
            <div class="problem-section-solved-header-info">
              <h3 class="marg-0">Congratulations</h3>
              <p>Whoaa! You solved this challenge.</p>
              <div class="problem-section-solved-stats d-flex">
                <div>
                  <h6 class="marg-0">Time Taken</h6>
                  <p class="marg-0">2 MS</p>
                </div>
                <div>
                  <h6 class="marg-0">Memory Consumed</h6>
                  <p class="marg-0">38.1 MB</p>
                </div>
              </div>
            </div>
            <img :src="require('./../assets/images/Congratulations.svg')" />
          </div>
          <div class="problem-section-test-cases active">
            <h4 class="marg-0">Test Case 1</h4>
            <div class="problem-section-test-case">
              <p>
                <b>Input</b>(stdin)
              </p>
              <div>
                <p>The first line</p>
                <p>The second line</p>
              </div>
            </div>
            <div class="problem-section-test-case">
              <p>
                <b>Input</b>(stdin)
              </p>
              <div>
                <p>The first line</p>
                <p>The second line</p>
              </div>
            </div>
            <div class="problem-section-test-case">
              <p>
                <b>Input</b>(stdin)
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
                <b>Input</b>(stdin)
              </p>
              <div>
                <p>The first line</p>
                <p>The second line</p>
              </div>
            </div>
            <div class="problem-section-test-case">
              <p>
                <b>Input</b>(stdin)
              </p>
              <div>
                <p>The first line</p>
                <p>The second line</p>
              </div>
            </div>
            <div class="problem-section-test-case">
              <p>
                <b>Input</b>(stdin)
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
import { mapActions } from "vuex";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Editor from "../components/Editor";
export default {
  data() {
    return {
      title: "Counting Valleys",
      tags: ["dp", "graphs", "category"],
      companies: ["Google", "Facebook", "Microsoft"],
      difficulty: "Easy",
      accuracy: "87%",
      frequency: "Often",
      rating: 3,
      code: "const a = 10",
      activeTab: "description",
      judgingMode: false,
      solved: true
    };
  },
  components: {
    Navbar,
    Footer,
    Editor
  },
  methods: {
    ...mapActions({
      getProblem: "problem/fetchProblem"
    }),
    onCmCodeChange(newCode) {
      this.code = newCode;
    },
    changeTab(tab) {
      this.activeTab = tab;
    }
  },
  created() {
    this.getProblem();
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
.problem-section-judging p {
  font-size: 14px;
  margin: 0;
}

.problem-section-title-info div h5,
.problem-section-description h5 {
  font-weight: 500;
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
.problem-section-test-cases p {
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
}

.problem-section-solved h3 {
  font-size: 24px;
}

.problem-section-judging h3,
.problem-section-solved h3,
.problem-section-solved h6,
.problem-section-test-case > p b,
.problem-section-test-cases h4 {
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

.problem-section-test-cases.active {
  padding: 15px;
}

.problem-section-test-cases .problem-section-test-case {
  display: none;
}

.problem-section-test-cases.active .problem-section-test-case {
  display: block;
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
}

@media screen and (max-width: 400px) {
  .problem-section-custom-inputs {
    justify-content: center;
  }
  .problem-section-title h1 {
    font-size: 22px;
  }
}
</style>
