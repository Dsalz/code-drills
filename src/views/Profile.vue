<template>
  <div>
    <Navbar />
    <section
      class="profile-section-header gen-padding grey-bg d-flex justify-content-between align-items-center"
    >
      <div class="profile-section-avatar">
        <img class="br-50" :src="userDetails.image" />
        <button class="br-50 green-circle" @click="() => editSection('editingOverview')">
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
          <h1>{{ userDetails.firstName }} {{ userDetails.lastName }}</h1>
          <div>
            <p>{{ userDetails.job }}</p>
            <p>{{ userDetails.state }}, {{ userDetails.city }}, {{ userDetails.country }}</p>
          </div>
          <p>{{ userDetails.number }} | {{ userDetails.email }}</p>
        </div>
        <div class="profile-section-info-img">
          <img :src="images[userDetails.level]" />
        </div>
      </div>
    </section>
    <section class="profile-section-data white-bg gen-padding">
      <div v-if="!editingOverview" class="profile-section-about bordered white-bg">
        <h3 class="profile-section-data-header">About</h3>
        <p>
          {{ formatAbout }}
          <a
            v-if="shouldShortenAbout"
            @click="() => this.toggleShortenedAbout(false)"
            class="green-link"
          >Read More</a>
        </p>
      </div>
      <div v-if="editingOverview" class="profile-section-edit-section bordered white-bg">
        <h3 class="profile-section-data-header">Overview</h3>
        <div class="d-flex profile-input-row">
          <div class="profile-input">
            <label for="firstName">First Name</label>
            <input
              placeholder="eg. Damola"
              id="firstName"
              type="text"
              v-model="userDetails.firstName"
            />
          </div>
          <div class="profile-input">
            <label for="lastName">Last Name</label>
            <input
              placeholder="eg. Salisu"
              id="lastName"
              type="text"
              v-model="userDetails.lastName"
            />
          </div>
        </div>
        <div class="d-flex profile-input-row">
          <div class="profile-input">
            <label for="phone">Phone</label>
            <input placeholder="eg. 000XXXXXX" id="phone" type="text" v-model="userDetails.number" />
          </div>
          <div class="profile-input">
            <label for="email">Email</label>
            <input
              placeholder="eg. salisu.damola@yahoo.com"
              id="email"
              type="text"
              v-model="userDetails.email"
            />
          </div>
        </div>
        <div class="d-flex profile-input-row">
          <div class="profile-input">
            <label for="country">Country</label>
            <input placeholder="eg. India" id="country" type="text" v-model="userDetails.country" />
          </div>
          <div class="profile-input">
            <label for="state">State</label>
            <input placeholder="eg. Karnataka" id="state" type="text" v-model="userDetails.state" />
          </div>
          <div class="profile-input">
            <label for="city">City</label>
            <input placeholder="eg. Bengaluru" id="city" type="text" v-model="userDetails.city" />
          </div>
        </div>
        <div class="profile-input-row">
          <div class="profile-input profile-textarea-input">
            <label for="about">About</label>
            <textarea id="about" v-model="userDetails.about"></textarea>
          </div>
        </div>
        <div class="profile-edit-submit d-flex justify-content-end">
          <button class="site-btn green-btn" @click="() => closeEditSection('editingOverview')">Save</button>
        </div>
      </div>
      <div v-if="addExperience" class="profile-section-edit-section bordered white-bg">
        <h3 class="profile-section-data-header">Add new experience</h3>
        <form @submit.prevent="saveExperience">
          <div class="d-flex profile-input-row">
            <div class="profile-input">
              <label for="company">Company</label>
              <input
                placeholder="eg. Google"
                id="company"
                type="text"
                v-model="newExperience.company"
                required
              />
            </div>
            <div class="profile-input">
              <label for="title">Title</label>
              <input
                placeholder="eg. Staff Engineer"
                id="title"
                type="text"
                v-model="newExperience.job.title"
                required
              />
            </div>
            <div class="profile-input">
              <label for="location">Location</label>
              <input
                placeholder="eg. London, United Kingdom"
                id="location"
                type="text"
                v-model="newExperience.job.location"
                required
              />
            </div>
          </div>
          <div class="d-flex profile-input-row">
            <div class="profile-input">
              <label for="phone">Start Date</label>
              <div class="d-flex justify-content-between">
                <select required class="site-select" v-model="newExperience.job.startMonth">
                  <option disabled value>Month</option>
                  <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
                </select>
                <select required class="site-select" v-model="newExperience.job.startYear">
                  <option disabled value>Year</option>
                  <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                </select>
              </div>
            </div>
            <div class="profile-input">
              <label for="phone">End Date</label>
              <div
                v-if="!newExperience.job.currentlyWorkHere"
                class="d-flex justify-content-between"
              >
                <select required class="site-select" v-model="newExperience.job.endMonth">
                  <option disabled value>Month</option>
                  <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
                </select>
                <select required class="site-select" v-model="newExperience.job.endYear">
                  <option disabled value>Year</option>
                  <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                </select>
              </div>
              <label class="profile-edit-checkbox d-flex align-items-center">
                <input
                  class="site-checkbox"
                  type="checkbox"
                  v-model="newExperience.job.currentlyWorkHere"
                />
                I currently work here
              </label>
            </div>
          </div>
          <div class="profile-edit-submit d-flex justify-content-end">
            <button type="submit" class="site-btn green-btn">Save</button>
          </div>
        </form>
      </div>
      <div v-if="editingExperience" class="profile-section-edit-section bordered white-bg">
        <h3 class="profile-section-data-header">Edit experience</h3>
        <form @submit.prevent="updateExperience">
          <div
            class="profile-form-input-wrapper"
            v-for="exp in experience"
            :key="`${exp.company}-${exp.job.title}`"
          >
            <div class="d-flex profile-input-row">
              <div class="profile-input">
                <label for="company">Company</label>
                <input
                  required
                  placeholder="eg. Google"
                  id="company"
                  type="text"
                  v-model="exp.company"
                />
              </div>
              <div class="profile-input">
                <label for="title">Title</label>
                <input
                  placeholder="eg. Staff Engineer"
                  id="title"
                  type="text"
                  v-model="exp.job.title"
                  required
                />
              </div>
              <div class="profile-input">
                <label for="location">Location</label>
                <input
                  placeholder="eg. London, United Kingdom"
                  id="location"
                  type="text"
                  v-model="exp.job.location"
                  required
                />
              </div>
            </div>
            <div class="d-flex profile-input-row">
              <div class="profile-input">
                <label for="phone">Start Date</label>
                <div class="d-flex justify-content-between">
                  <select required class="site-select" v-model="exp.job.startMonth">
                    <option disabled value>Month</option>
                    <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
                  </select>
                  <select required class="site-select" v-model="exp.job.startYear">
                    <option disabled value>Year</option>
                    <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                  </select>
                </div>
              </div>
              <div class="profile-input">
                <label for="phone">End Date</label>
                <div v-if="!exp.job.currentlyWorkHere" class="d-flex justify-content-between">
                  <select class="site-select" v-model="exp.job.endMonth">
                    <option disabled value>Month</option>
                    <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
                  </select>
                  <select class="site-select" v-model="exp.job.endYear">
                    <option disabled value>Year</option>
                    <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                  </select>
                </div>
                <label class="profile-edit-checkbox d-flex align-items-center">
                  <input class="site-checkbox" type="checkbox" v-model="exp.job.currentlyWorkHere" />
                  I currently work here
                </label>
              </div>
            </div>
          </div>
          <div class="profile-edit-submit d-flex justify-content-end">
            <button class="site-btn green-btn" type="submit">Save</button>
          </div>
        </form>
      </div>
      <div v-if="!editingExperience" class="profile-section-exp bordered white-bg">
        <h3 class="profile-section-data-header">Experience</h3>
        <div class="profile-section-btns">
          <button class="br-50 green-circle" @click="() => editSection('editingExperience')">
            <svg viewBox="0 0 492.49284 492" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m304.140625 82.472656-270.976563 270.996094c-1.363281 1.367188-2.347656 3.09375-2.816406 4.949219l-30.035156 120.554687c-.898438 3.628906.167969 7.488282 2.816406 10.136719 2.003906 2.003906 4.734375 3.113281 7.527344 3.113281.855469 0 1.730469-.105468 2.582031-.320312l120.554688-30.039063c1.878906-.46875 3.585937-1.449219 4.949219-2.8125l271-270.976562zm0 0"
              />
              <path
                d="m476.875 45.523438-30.164062-30.164063c-20.160157-20.160156-55.296876-20.140625-75.433594 0l-36.949219 36.949219 105.597656 105.597656 36.949219-36.949219c10.070312-10.066406 15.617188-23.464843 15.617188-37.714843s-5.546876-27.648438-15.617188-37.71875zm0 0"
              />
            </svg>
          </button>
          <button class="br-50 green-circle" @click="() => editSection('addExperience')">
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
        <div
          class="profile-info-block-item d-flex"
          v-for="item in groupExperience"
          :key="item.company"
        >
          <img :src="item.companyUrl" :alt="item.company" />
          <div class="profile-info-block-info">
            <h4>{{ item.company }}</h4>
            <div v-for="job in item.jobs" :key="job.title" class="profile-info-block-data">
              <p>{{ job.title }}</p>
              <p>{{ job.startMonth }} {{ job.startYear }} - {{ job.currentlyWorkHere ? 'present' : `${job.endMonth} ${job.endYear}`}}</p>
              <p>{{ job.location }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="addEducation" class="profile-section-edit-section bordered white-bg">
        <h3 class="profile-section-data-header">Add new education</h3>
        <form @submit.prevent="saveEducation">
          <div class="d-flex profile-input-row">
            <div class="profile-input">
              <label for="school">School</label>
              <input
                placeholder="eg. Havard"
                id="school"
                type="text"
                v-model="newEducation.school"
                required
              />
            </div>
            <div class="profile-input">
              <label for="title">Degree</label>
              <input
                placeholder="eg. Bachelor of Engineering, Computer Engineering"
                id="title"
                type="text"
                v-model="newEducation.course.title"
                required
              />
            </div>
            <div class="profile-input">
              <label for="location">Location</label>
              <input
                placeholder="eg. London, United Kingdom"
                id="location"
                type="text"
                v-model="newEducation.course.location"
                required
              />
            </div>
          </div>
          <div class="d-flex profile-input-row">
            <div class="profile-input">
              <label for="phone">Start Date</label>
              <div class="d-flex justify-content-between">
                <select required class="site-select" v-model="newEducation.course.startMonth">
                  <option disabled value>Month</option>
                  <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
                </select>
                <select required class="site-select" v-model="newEducation.course.startYear">
                  <option disabled value>Year</option>
                  <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                </select>
              </div>
            </div>
            <div class="profile-input">
              <label for="phone">End Date</label>
              <div
                v-if="!newEducation.course.currentlySchoolHere"
                class="d-flex justify-content-between"
              >
                <select required class="site-select" v-model="newEducation.course.endMonth">
                  <option disabled value>Month</option>
                  <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
                </select>
                <select required class="site-select" v-model="newEducation.course.endYear">
                  <option disabled value>Year</option>
                  <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                </select>
              </div>
              <label class="profile-edit-checkbox d-flex align-items-center">
                <input
                  class="site-checkbox"
                  type="checkbox"
                  v-model="newEducation.course.currentlySchoolHere"
                />
                I currently attend here
              </label>
            </div>
          </div>
          <div class="profile-edit-submit d-flex justify-content-end">
            <button type="submit" class="site-btn green-btn">Save</button>
          </div>
        </form>
      </div>
      <div v-if="editingEducation" class="profile-section-edit-section bordered white-bg">
        <h3 class="profile-section-data-header">Edit education</h3>
        <form @submit.prevent="updateEducation">
          <div
            class="profile-form-input-wrapper"
            v-for="edu in education"
            :key="`${edu.school}-${edu.course.title}`"
          >
            <div class="d-flex profile-input-row">
              <div class="profile-input">
                <label for="school">School</label>
                <input
                  required
                  placeholder="eg. Harvard"
                  id="school"
                  type="text"
                  v-model="edu.school"
                />
              </div>
              <div class="profile-input">
                <label for="title">Degree</label>
                <input
                  placeholder="eg. Bachelor of Engineering, Computer Engineering"
                  id="title"
                  type="text"
                  v-model="edu.course.title"
                  required
                />
              </div>
              <div class="profile-input">
                <label for="location">Location</label>
                <input
                  placeholder="eg. London, United Kingdom"
                  id="location"
                  type="text"
                  v-model="edu.course.location"
                  required
                />
              </div>
            </div>
            <div class="d-flex profile-input-row">
              <div class="profile-input">
                <label for="phone">Start Date</label>
                <div class="d-flex justify-content-between">
                  <select required class="site-select" v-model="edu.course.startMonth">
                    <option disabled value>Month</option>
                    <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
                  </select>
                  <select required class="site-select" v-model="edu.course.startYear">
                    <option disabled value>Year</option>
                    <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                  </select>
                </div>
              </div>
              <div class="profile-input">
                <label for="phone">End Date</label>
                <div v-if="!edu.course.currentlySchoolHere" class="d-flex justify-content-between">
                  <select class="site-select" v-model="edu.course.endMonth">
                    <option disabled value>Month</option>
                    <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
                  </select>
                  <select class="site-select" v-model="edu.course.endYear">
                    <option disabled value>Year</option>
                    <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                  </select>
                </div>
                <label class="profile-edit-checkbox d-flex align-items-center">
                  <input
                    class="site-checkbox"
                    type="checkbox"
                    v-model="edu.course.currentlySchoolHere"
                  />
                  I currently attend here
                </label>
              </div>
            </div>
          </div>
          <div class="profile-edit-submit d-flex justify-content-end">
            <button class="site-btn green-btn" type="submit">Save</button>
          </div>
        </form>
      </div>
      <div v-if="!editingEducation" class="profile-section-exp bordered white-bg">
        <h3 class="profile-section-data-header">Education</h3>
        <div class="profile-section-btns">
          <button class="br-50 green-circle" @click="() => editSection('editingEducation')">
            <svg viewBox="0 0 492.49284 492" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m304.140625 82.472656-270.976563 270.996094c-1.363281 1.367188-2.347656 3.09375-2.816406 4.949219l-30.035156 120.554687c-.898438 3.628906.167969 7.488282 2.816406 10.136719 2.003906 2.003906 4.734375 3.113281 7.527344 3.113281.855469 0 1.730469-.105468 2.582031-.320312l120.554688-30.039063c1.878906-.46875 3.585937-1.449219 4.949219-2.8125l271-270.976562zm0 0"
              />
              <path
                d="m476.875 45.523438-30.164062-30.164063c-20.160157-20.160156-55.296876-20.140625-75.433594 0l-36.949219 36.949219 105.597656 105.597656 36.949219-36.949219c10.070312-10.066406 15.617188-23.464843 15.617188-37.714843s-5.546876-27.648438-15.617188-37.71875zm0 0"
              />
            </svg>
          </button>
          <button class="br-50 green-circle" @click="() => editSection('addEducation')">
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
        <div
          class="profile-info-block-item d-flex"
          v-for="item in groupEducation"
          :key="item.school"
        >
          <img :src="item.schoolUrl" :alt="item.school" />
          <div class="profile-info-block-info">
            <h4>{{ item.school }}</h4>
            <div v-for="course in item.courses" :key="course.title" class="profile-info-block-data">
              <p>{{ course.title }}</p>
              <p>{{ course.startMonth }} {{ course.startYear }} - {{ course.currentlySchoolHere ? 'present' : `${course.endMonth} ${course.endYear}`}}</p>
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
import { mapState, mapActions } from "vuex";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import beginnerImg from "@/assets/images/Beginner.svg";
export default {
  data() {
    return {
      months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      images: {
        beginner: beginnerImg
      },
      shortenedAbout: true,
      newExperience: {
        company: "",
        job: {
          title: "",
          location: "",
          startMonth: "",
          startYear: "",
          endMonth: "",
          endYear: "",
          currentlySchoolHere: false
        }
      },
      newEducation: {
        school: "",
        course: {
          title: "",
          location: "",
          startMonth: "",
          startYear: "",
          endMonth: "",
          endYear: "",
          currentlyWorkHere: false
        }
      }
    };
  },
  components: {
    Navbar,
    Footer
  },
  computed: {
    ...mapState("profile", [
      "userDetails",
      "experience",
      "education",
      "skills",
      "level",
      "editingOverview",
      "editingExperience",
      "addExperience",
      "editingEducation",
      "addEducation"
    ]),
    shouldShortenAbout() {
      const { shortenedAbout, userDetails } = this;
      return shortenedAbout && userDetails.about.length > 250;
    },
    formatAbout() {
      const { userDetails } = this;
      return this.shouldShortenAbout
        ? `${userDetails.about.substring(0, 250)}...`
        : userDetails.about;
    },
    groupExperience() {
      const companies = Array.from(
        new Set(this.experience.map(c => c.company))
      );
      return companies.map(c => {
        const companyData = this.experience.filter(e => e.company === c);
        const companyJobs = companyData.reduce(
          (acc, curr) => acc.concat(curr.job),
          []
        );
        return { ...companyData[0], jobs: companyJobs };
      });
    },
    groupEducation() {
      const schools = Array.from(new Set(this.education.map(c => c.school)));
      return schools.map(s => {
        const schoolData = this.education.filter(e => e.school === s);
        const schoolCourses = schoolData.reduce(
          (acc, curr) => acc.concat(curr.course),
          []
        );
        return { ...schoolData[0], courses: schoolCourses };
      });
    }
  },
  methods: {
    ...mapActions({
      editSection: "profile/editSection",
      closeEditSection: "profile/closeEditSection",
      addEducationAction: "profile/addEducationAction",
      addExperienceAction: "profile/addExperienceAction"
    }),
    toggleShortenedAbout(val) {
      this.shortenedAbout = val;
    },
    saveExperience() {
      this.addExperienceAction(this.newExperience);
      this.closeEditSection("addExperience");
    },
    saveEducation() {
      this.addEducationAction(this.newEducation);
      this.closeEditSection("addEducation");
    },
    updateExperience() {
      this.closeEditSection("editingExperience");
    },
    updateEducation() {
      this.closeEditSection("editingEducation");
    }
  },
  created() {
    this.years = Array(100)
      .fill(undefined)
      .map((val, i) => new Date().getFullYear() - i);
  }
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
  cursor: pointer;
}

.profile-section-info {
  width: calc(100% - 200px);
}

.profile-section-info-text {
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

.profile-input-row {
  flex-wrap: wrap;
}

.profile-input {
  margin: 0 30px 30px 0;
  width: 270px;
}

.profile-input label {
  margin-bottom: 2px;
  font-weight: 300;
}

.profile-input input[type="text"],
.profile-input textarea {
  background: transparent;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  width: 100%;
  display: block;
  padding: 10px 8px;
}

.profile-input input[type="text"] {
  height: 20px;
}

.profile-section-edit-section .profile-section-data-header {
  margin-bottom: 16px;
}

.profile-textarea-input,
.profile-input textarea,
.profile-input label {
  width: 100%;
  margin-right: 0;
}

.profile-textarea-input,
.profile-input textarea {
  display: block;
}

.profile-input textarea {
  height: 120px;
  resize: none;
  box-sizing: border-box;
}

.profile-edit-submit button {
  width: 55px;
  height: 40px;
}

.profile-input select.site-select {
  width: 48%;
  min-width: 48%;
  border-color: #eee;
}

.profile-edit-checkbox {
  margin-top: 8px;
}

.profile-input input.site-checkbox {
  margin-right: 8px;
}

.profile-input label,
.profile-input input,
.profile-input textarea {
  font-weight: 300;
}

.profile-section-info-text,
.bordered p,
.profile-input label,
.profile-input input,
.profile-input textarea {
  font-size: 14px;
}

.profile-form-input-wrapper {
  padding-top: 15px;
  margin-top: 15px;
  border-top: 1px solid #72dfd4;
}

.profile-form-input-wrapper:first-of-type {
  margin-top: 0;
  padding-top: 0;
  border-top: none;
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
