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
  name: "Balajiganapathi",
  job: "SDE 2 at Uber India",
  location: "Bengaluru, Karnataka, India",
  number: "+91 9876543210",
  email: "www.myemailid@provider.com",
  image: "https://placehold.it/100",
  level: "beginner",
  about:
    "I have a knack for solving interesting, challenging problems using cutting edge technologies. I was part of the core tech teams at 3 startups at Directi - Zeta, Flock and FlockMail. I helped design and ramp up their core services. I completed my masters in computer science from IIT Bombay. I have represented my college at International Collegiate Programming Contest (ICPC) world finals 2014 held at Ekaterinberg, Russia. I have also been on the problem setting and judging panel of the Indian regionals of ICPC.",
  experience: [
    {
      company: "Uber India Systems Private Limited",
      companyUrl: "https://placehold.it/100",
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
      companyUrl: "https://placehold.it/100",
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
  ],
  education: [
    {
      school: "Indian Institute of Engineering, Bombay",
      schoolUrl: "https://placehold.it/100",
      courses: [
        {
          title: "Master of Technology (M.Tech), Computer Science",
          duration: "2013 - 2015",
          location: "Mumbai, India"
        }
      ]
    },
    {
      school: "Pillai's Institute of Information Technology",
      schoolUrl: "https://placehold.it/100",
      courses: [
        {
          title: "Bachelor of Engineering, Electronics and Telecommunication",
          duration: "2009 - 2012",
          location: "Navi Mumbai, India"
        }
      ]
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
  ]
};

const actions = {};

const getters = {};

const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
