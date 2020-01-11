import ProblemPage from "../views/Problem.vue";

const problemRoutes = [
  {
    path: "problems/:name",
    name: "Problem",
    component: ProblemPage
  }
];

export default problemRoutes;
