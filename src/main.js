import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Lakshmi Murugappan",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["DevOps", "Continuous Integration", "Continuous Delivery"],
    // Which CI/CD tools do you use in your project?
    tools: "Jenkins, maybe?",
    // What do you want to learn in this workshop?
    expectations: ["Learn more about CI/CD", "Learn how to use Jenkins"],
  },
});
 