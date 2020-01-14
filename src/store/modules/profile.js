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
  userDetails: {
    firstName: "Balajiganapathi",
    lastName: "",
    job: "SDE 2 at Uber India",
    country: "India",
    state: "Karnataka",
    city: "Bengaluru",
    number: "+91 9876543210",
    email: "www.myemailid@provider.com",
    image: "https://placehold.it/100",
    level: "beginner",
    about:
      "I have a knack for solving interesting, challenging problems using cutting edge technologies. I was part of the core tech teams at 3 startups at Directi - Zeta, Flock and FlockMail. I helped design and ramp up their core services. I completed my masters in computer science from IIT Bombay. I have represented my college at International Collegiate Programming Contest (ICPC) world finals 2014 held at Ekaterinberg, Russia. I have also been on the problem setting and judging panel of the Indian regionals of ICPC."
  },
  experience: [
    {
      company: "Uber India Systems Private Limited",
      companyUrl: "https://placehold.it/100",
      job: {
        title: "SDE 2",
        duration: "Feb 2019 - Present | 8 mos",
        location: "Bengaluru, India",
        startMonth: "Feb",
        startYear: 2019,
        endMonth: "",
        endYear: "",
        currentlyWorkHere: true
      }
    },
    {
      company: "Directi",
      companyUrl: "https://placehold.it/100",
      job: {
        title: "Sr. Platform Engineer",
        duration: "Jul 2018 - Feb 2019 | 8 mos",
        location: "Bengaluru, India",
        startMonth: "Jul",
        startYear: 2018,
        endMonth: "Feb",
        endYear: 2019,
        currentlyWorkHere: false
      }
    },
    {
      company: "Directi",
      companyUrl: "https://placehold.it/100",
      job: {
        title: "Platform Engineer",
        duration: "Jul 2015 - Jun 2018 | 3 yrs",
        location: "Bengaluru, India",
        startMonth: "Jul",
        startYear: 2015,
        endMonth: "Jun",
        endYear: 2018,
        currentlyWorkHere: false
      }
    }
  ],
  education: [
    {
      school: "Indian Institute of Engineering, Bombay",
      schoolUrl: "https://placehold.it/100",
      course: {
        title: "Master of Technology (M.Tech), Computer Science",
        duration: "2013 - 2015",
        location: "Mumbai, India",
        startMonth: "Jul",
        startYear: 2013,
        endMonth: "Jun",
        endYear: 2015,
        currentlySchoolHere: false
      }
    },
    {
      school: "Pillai's Institute of Information Technology",
      schoolUrl: "https://placehold.it/100",
      course: {
        title: "Bachelor of Engineering, Electronics and Telecommunication",
        duration: "2013 - 2015",
        location: "Navi Mumbai, India",
        startMonth: "Jul",
        startYear: 2009,
        endMonth: "Jun",
        endYear: 2012,
        currentlySchoolHere: false
      }
    }
  ],
  skills: [
    {
      image: "https://placehold.it/100",
      title: "Tree",
      verified: true
    },
    {
      image: "https://placehold.it/100",
      title: "Maths",
      verified: true
    },
    {
      image: "https://placehold.it/100",
      title: "Geometry",
      verified: false
    }
  ],
  editingOverview: false,
  editingExperience: false,
  addExperience: false,
  editingEducation: false,
  addEducation: false
};

const actions = {
  editSection({ commit }, section) {
    commit("TOGGLE_EDIT_SECTION", { section, value: true });
  },
  closeEditSection({ commit }, section) {
    commit("TOGGLE_EDIT_SECTION", { section, value: false });
  },
  addExperienceAction({ commit }, payload) {
    commit("ADD_EXPERIENCE", payload);
  },
  addEducationAction({ commit }, payload) {
    commit("ADD_EDUCATION", payload);
  }
};

const getters = {};

const mutations = {
  TOGGLE_EDIT_SECTION(state, { section, value }) {
    state[section] = value;
  },
  ADD_EXPERIENCE(state, payload) {
    const newExp = { ...payload, companyUrl: "https://placehold.it/100" };
    state.experience = payload.job.currentlyWorkHere
      ? [newExp, ...state.experience]
      : [...state.experience, newExp];
  },
  ADD_EDUCATION(state, payload) {
    const newEdu = { ...payload, schoolUrl: "https://placehold.it/100" };
    state.education = payload.course.currentlySchoolHere
      ? [newEdu, ...state.education]
      : [...state.education, newEdu];
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
