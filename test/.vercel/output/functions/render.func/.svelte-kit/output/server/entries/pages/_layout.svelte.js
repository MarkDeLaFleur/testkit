import { c as create_ssr_component } from "../../chunks/index.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav><a href="${"/"}">Home <br></a>
    <a href="${"/opencv"}">Opencv <br></a>
    <a href="${"/media"}">See Media Devices</a></nav>
  
  ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
