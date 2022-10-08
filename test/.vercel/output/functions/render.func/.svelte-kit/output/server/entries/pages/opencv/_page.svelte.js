import { c as create_ssr_component, e as escape } from "../../../chunks/index.js";
import cv from "@techstark/opencv-js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".build-info.svelte-m3979v{width:600px;height:400px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let buildInfo = "";
  window.setTimeout(
    () => {
      window.cv = cv;
      buildInfo = cv.getBuildInformation();
    },
    1e3
  );
  $$result.css.add(css);
  return `<h1>opencv is fun to do</h1>

<textarea class="${"build-info svelte-m3979v"}">${"  " + escape(buildInfo, true) + "\r\n  \r\n"}</textarea>

<p></p>`;
});
export {
  Page as default
};
