<template>
  <div>
    <Navbar />
    <section
      class="profile-section-header gen-padding grey-bg d-flex justify-content-between align-items-center"
    >
      <div class="profile-section-avatar">
        <img class="br-50" :src="image" />
        <button class="br-50 green-circle">
          <svg viewBox="0 0 492.49284 492" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m304.140625 82.472656-270.976563 270.996094c-1.363281 1.367188-2.347656 3.09375-2.816406 4.949219l-30.035156 120.554687c-.898438 3.628906.167969 7.488282 2.816406 10.136719 2.003906 2.003906 4.734375 3.113281 7.527344 3.113281.855469 0 1.730469-.105468 2.582031-.320312l120.554688-30.039063c1.878906-.46875 3.585937-1.449219 4.949219-2.8125l271-270.976562zm0 0"
            />
            <path
              d="m476.875 45.523438-30.164062-30.164063c-20.160157-20.160156-55.296876-20.140625-75.433594 0l-36.949219 36.949219 105.597656 105.597656 36.949219-36.949219c10.070312-10.066406 15.617188-23.464843 15.617188-37.714843s-5.546876-27.648438-15.617188-37.71875zm0 0"
            />
          </svg>
        </button>
      </div>
      <div class="profile-section-info d-flex justify-content-between align-items-center">
        <div class="profile-section-info-text">
          <h1>{{ name }}</h1>
          <div>
            <p>{{ job }}</p>
            <p>{{ location }}</p>
          </div>
          <p>{{ number }} | {{ email }}</p>
        </div>
        <div class="profile-section-info-img">
          <img :src="images[level]" />
        </div>
      </div>
    </section>
    <section class="profile-section-data white-bg gen-padding">
      <div class="profile-section-about bordered white-bg">
        <h3 class="profile-section-data-header">About</h3>
        <p>
          {{ about }}
          <a href="#" class="green-link">Read More</a>
        </p>
      </div>
      <div class="profile-section-exp bordered white-bg">
        <h3 class="profile-section-data-header">Experience</h3>
        <div class="profile-section-btns">
          <button class="br-50 green-circle">
            <svg viewBox="0 0 492.49284 492" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m304.140625 82.472656-270.976563 270.996094c-1.363281 1.367188-2.347656 3.09375-2.816406 4.949219l-30.035156 120.554687c-.898438 3.628906.167969 7.488282 2.816406 10.136719 2.003906 2.003906 4.734375 3.113281 7.527344 3.113281.855469 0 1.730469-.105468 2.582031-.320312l120.554688-30.039063c1.878906-.46875 3.585937-1.449219 4.949219-2.8125l271-270.976562zm0 0"
              />
              <path
                d="m476.875 45.523438-30.164062-30.164063c-20.160157-20.160156-55.296876-20.140625-75.433594 0l-36.949219 36.949219 105.597656 105.597656 36.949219-36.949219c10.070312-10.066406 15.617188-23.464843 15.617188-37.714843s-5.546876-27.648438-15.617188-37.71875zm0 0"
              />
            </svg>
          </button>
          <button class="br-50 green-circle">
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 94.49 94.49"
              style="enable-background:new 0 0 94.49 94.49;"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M92.49,35.284H59.206V2c0-1.104-0.896-2-2-2H37.284c-1.104,0-2,0.896-2,2v33.284H2c-1.104,0-2,0.896-2,2v19.922
		c0,1.104,0.896,2,2,2h33.284V92.49c0,1.104,0.896,2,2,2h19.922c1.104,0,2-0.896,2-2V59.206H92.49c1.104,0,2-0.896,2-2V37.284
		C94.49,36.18,93.596,35.284,92.49,35.284z"
                />
              </g>
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
            </svg>
          </button>
        </div>
        <div class="profile-info-block-item d-flex" v-for="item in experience" :key="item.company">
          <img :src="item.companyUrl" :alt="item.company" />
          <div class="profile-info-block-info">
            <h4>{{ item.company }}</h4>
            <div v-for="job in item.jobs" :key="job.title" class="profile-info-block-data">
              <p>{{ job.title }}</p>
              <p>{{ job.duration }}</p>
              <p>{{ job.location }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="profile-section-exp bordered white-bg">
        <h3 class="profile-section-data-header">Education</h3>
        <div class="profile-section-btns">
          <button class="br-50 green-circle">
            <svg viewBox="0 0 492.49284 492" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m304.140625 82.472656-270.976563 270.996094c-1.363281 1.367188-2.347656 3.09375-2.816406 4.949219l-30.035156 120.554687c-.898438 3.628906.167969 7.488282 2.816406 10.136719 2.003906 2.003906 4.734375 3.113281 7.527344 3.113281.855469 0 1.730469-.105468 2.582031-.320312l120.554688-30.039063c1.878906-.46875 3.585937-1.449219 4.949219-2.8125l271-270.976562zm0 0"
              />
              <path
                d="m476.875 45.523438-30.164062-30.164063c-20.160157-20.160156-55.296876-20.140625-75.433594 0l-36.949219 36.949219 105.597656 105.597656 36.949219-36.949219c10.070312-10.066406 15.617188-23.464843 15.617188-37.714843s-5.546876-27.648438-15.617188-37.71875zm0 0"
              />
            </svg>
          </button>
          <button class="br-50 green-circle">
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 94.49 94.49"
              style="enable-background:new 0 0 94.49 94.49;"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M92.49,35.284H59.206V2c0-1.104-0.896-2-2-2H37.284c-1.104,0-2,0.896-2,2v33.284H2c-1.104,0-2,0.896-2,2v19.922
		c0,1.104,0.896,2,2,2h33.284V92.49c0,1.104,0.896,2,2,2h19.922c1.104,0,2-0.896,2-2V59.206H92.49c1.104,0,2-0.896,2-2V37.284
		C94.49,36.18,93.596,35.284,92.49,35.284z"
                />
              </g>
            </svg>
          </button>
        </div>
        <div class="profile-info-block-item d-flex" v-for="item in education" :key="item.school">
          <img :src="item.schoolUrl" :alt="item.school" />
          <div class="profile-info-block-info">
            <h4>{{ item.school }}</h4>
            <div v-for="course in item.courses" :key="course.title" class="profile-info-block-data">
              <p>{{ course.title }}</p>
              <p>{{ course.duration }}</p>
              <p>{{ course.location }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="profile-section-skills white-bg">
        <h3 class="profile-section-data-header">Skills</h3>
        <div class="profile-section-skill-items d-flex">
          <article class="profile-section-skill-item d-flex" v-for="(skill, i) in skills" :key="i">
            <img :src="skill.image" />
            <p>
              {{ skill.title }}
              <svg
                v-if="skill.verified"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="hovered-paths"
              >
                <g>
                  <path
                    d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm129.75 201.75-138.667969 138.664062c-4.160156 4.160157-9.621093 6.253907-15.082031 6.253907s-10.921875-2.09375-15.082031-6.253907l-69.332031-69.332031c-8.34375-8.339843-8.34375-21.824219 0-30.164062 8.339843-8.34375 21.820312-8.34375 30.164062 0l54.25 54.25 123.585938-123.582031c8.339843-8.34375 21.820312-8.34375 30.164062 0 8.339844 8.339843 8.339844 21.820312 0 30.164062zm0 0"
                    data-original="#000000"
                    class="hovered-path active-path"
                    data-old_color="#000000"
                    fill="#72DFD4"
                  />
                </g>
              </svg>
            </p>
          </article>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import beginnerImg from "@/assets/images/Beginner.svg";
export default {
  data() {
    return {
      images: {
        beginner: beginnerImg
      }
    };
  },
  components: {
    Navbar,
    Footer
  },
  computed: {
    ...mapState("profile", [
      "name",
      "job",
      "location",
      "number",
      "email",
      "image",
      "about",
      "experience",
      "education",
      "skills",
      "level"
    ])
  },
  methods: {}
};
</script>

<style scoped>
.profile-section-header {
  color: #1c2330;
}

.profile-section-header {
  padding-top: 50px;
  padding-bottom: 40px;
}

.profile-section-avatar {
  width: 170px;
  position: relative;
}

.profile-section-avatar img {
  width: 100%;
}

.profile-section-avatar button {
  position: absolute;
  bottom: 20px;
  right: 10px;
}

.profile-section-info {
  width: calc(100% - 200px);
}

.profile-section-info-text {
  font-size: 14px;
  font-weight: 300;
}

.profile-section-info-text h1 {
  font-size: 45px;
}
.profile-section-info-text div {
  margin: 0 0 12px;
}

.profile-section-info-text h1,
.profile-section-info-text p,
.profile-section-data-header,
.bordered p,
.profile-info-block-info h4 {
  margin: 0;
}

.profile-section-info-text div p:first-of-type {
  font-weight: 500;
}

.profile-section-info-img {
  width: 100px;
}

.profile-section-info-text h1 {
  margin-top: -20px;
}

.bordered {
  padding: 30px;
  max-width: 970px;
  margin: 50px 0;
  position: relative;
}

.bordered,
.profile-section-skill-item {
  border-radius: 5px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12);
  color: #1c2330;
}

.bordered p {
  font-size: 14px;
  font-weight: 300;
}

.profile-section-data {
  padding-bottom: 180px;
}

.profile-section-data-header {
  font-size: 24px;
  margin-bottom: 5px;
  font-weight: 500;
}

.profile-info-block-item {
  margin-bottom: 50px;
}

.profile-info-block-data {
  margin-bottom: 24px;
}

.profile-info-block-item:last-of-type,
.profile-info-block-data:last-of-type {
  margin-bottom: 0;
}

.profile-info-block-item {
  margin-top: 26px;
}

.profile-info-block-item img {
  width: 50px;
  height: 50px;
  margin-right: 16px;
}

.profile-info-block-info h4 {
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 5px;
}

.profile-info-block-data p:last-of-type {
  color: rgba(0, 0, 0, 0.54);
}

.profile-section-btns {
  position: absolute;
  top: 24px;
  right: 24px;
}

.profile-section-btns button {
  display: block;
  margin-bottom: 16px;
  cursor: pointer;
}

.profile-section-skill-items {
  flex-wrap: wrap;
}

.profile-section-skill-item {
  padding: 18px 45px 18px 18px;
  margin: 30px 30px 0 0;
  min-width: 270px;
}

.profile-section-skill-item img {
  width: 50px;
  height: 50px;
  margin-right: 8px;
}

.profile-section-skill-item p {
  font-size: 24px;
  font-weight: 500;
  position: relative;
  margin: 0;
}

.profile-section-skill-item svg {
  position: absolute;
  top: 5px;
  right: -30px;
  width: 24px;
  height: 24px;
}

@media screen and (max-width: 1000px) {
  .profile-section-header,
  .profile-section-info {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }
  .profile-section-info,
  .profile-section-info-text {
    width: 100%;
  }

  .profile-section-info {
    margin-top: 30px;
  }

  .profile-section-info-text {
    margin-bottom: 30px;
  }
  .profile-section-skill-items {
    justify-content: center;
  }
}

@media screen and (max-width: 600px) {
  .profile-section-info-text h1 {
    font-size: 28px;
  }
  .profile-section-info-text {
    font-size: 12px;
  }
  .profile-info-block-info h4 {
    font-size: 18px;
  }
  .profile-section-skill-item {
    margin: 20px 0;
    min-width: 80%;
  }
  .profile-section-btns {
    top: 16px;
  }
  .profile-section-btns button {
    margin-bottom: 8px;
  }
}
</style>
