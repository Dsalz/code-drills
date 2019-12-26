<template>
  <div>
    <Navbar />
    <section class="problem-section-header gen-padding grey-bg">
      <div class="d-flex problem-section-title align-items-center">
        <h1>{{ title }} <img src="../assets/images/Crown.svg" /></h1>
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
            >{{ company }}</span
          >
        </div>
      </div>
    </section>
    <section class="problem-section-info gen-padding white-bg">
      <div class="problem-section-tabs d-flex- align-items-center">
        <a class="active">Description</a>
        <a>Submission</a>
        <a>Editorial</a>
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
        <Editor :code="code" :onCodeChange="onCmCodeChange" />
        <div class="problem-section-editor-options">
          <label class="d-flex align-items-center">
            <input class="site-checkbox" type="checkbox" />
            Add custom input
          </label>
          <div class="problem-section-editor-btns">
            <button disabled class="site-btn grey-btn">Run</button>
            <button disabled class="site-btn green-btn">Submit</button>
          </div>
          <div class="problem-section-custom-inputs d-flex">
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
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
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
      code: "const a = 10"
    };
  },
  components: {
    Navbar,
    Footer,
    Editor
  },
  methods: {
    onCmCodeChange(newCode) {
      //   console.log("this is new code", newCode);
      this.code = newCode;
    }
  }
};
</script>

<style scoped>
.problem-section-header {
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
.problem-section-description h5 {
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
  font-size: 14px;
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
  font-size: 14px;
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
