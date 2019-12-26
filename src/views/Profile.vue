<template>
  <div>
    <Navbar />
    <section
      class="profile-section-header gen-padding grey-bg d-flex justify-content-between align-items-center"
    >
      <div class="profile-section-avatar">
        <img class="br-50" :src="image" />
        <button class="br-50">
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
      <div
        class="profile-section-info d-flex justify-content-between align-items-center"
      >
        <div class="profile-section-info-text">
          <h1>{{ name }}</h1>
          <div>
            <p>
              <b>{{ job }}</b>
            </p>
            <p>{{ location }}</p>
          </div>
          <p>{{ number }} | {{ email }}</p>
        </div>
        <div class="profile-section-info-img">
          <img :src="levelImage" />
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
export default {
  data() {
    return {
      name: "Balajiganapathi",
      job: "SDE 2 at Uber India",
      location: "Bengaluru, Karnataka, India",
      number: "+91 9876543210",
      email: "www.myemailid@provider.com",
      image: "https://placehold.it/100",
      levelImage: "https://placehold.it/100",
      about:
        "I have a knack for solving interesting, challenging problems using cutting edge technologies. I was part of the core tech teams at 3 startups at Directi - Zeta, Flock and FlockMail. I helped design and ramp up their core services. I completed my masters in computer science from IIT Bombay. I have represented my college at International Collegiate Programming Contest (ICPC) world finals 2014 held at Ekaterinberg, Russia. I have also been on the problem setting and judging panel of the Indian regionals of ICPC.",
      experience: [
        {
          company: "Uber India Systems Private Limited",
          companyUrl: "https://placehold.it",
          jobs: [
            {
              title: "SDE 2",
              duration: "Feb 2019 - Present | 8 mos",
              location: "Bengaluru, India"
            }
          ]
        },
        {
          company: "Directi",
          companyUrl: "https://placehold.it",
          jobs: [
            {
              title: "Sr. Platform Engineer",
              duration: "Jul 2018 - Feb 2019 | 8 mos",
              location: "Bengaluru, India"
            },

            {
              title: "Platform Engineer",
              duration: "Jul 2015 - Jun 2018 | 3 yrs",
              location: "Bengaluru, India"
            }
          ]
        }
      ]
    };
  },
  components: {
    Navbar,
    Footer
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
  background: #72dfd4;
  width: 30px;
  height: 30px;
  padding: 5px;
  text-align: center;
  border: none;
}

.profile-section-avatar button svg {
  height: 10px;
  fill: #fff;
}

.profile-section-info {
  width: calc(100% - 200px);
}

.profile-section-info-text {
  font-size: 14px;
  font-weight: 300;
}

.profile-section-info-text h1 {
  font-size: 50px;
}
.profile-section-info-text div {
  margin: 20px 0;
}

.profile-section-info-text h1,
.profile-section-info-text p {
  margin: 0;
}

.profile-section-info-img {
  width: 100px;
}
</style>
