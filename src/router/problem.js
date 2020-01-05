import ProblemPage from "../views/Problem.vue";

const problemRoutes = [
  {
    path: "problem/:name",
    name: "Problem",
    component: ProblemPage
  }
];

export default problemRoutes;
