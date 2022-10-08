import { c as create_ssr_component, d as add_attribute } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1prrbx6{width:100%;height:100vh;padding:0;box-sizing:border-box;position:absolute}video.svelte-1prrbx6{display:block;margin:20px auto;border:solid gray 1px}canvas.svelte-1prrbx6{display:block;margin:20px auto;border:solid blueviolet 2px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let videoEl;
  let canvasEl;
  $$result.css.add(css);
  return `<main class="${"svelte-1prrbx6"}"><h3>Video </h3>
    
<video class="${"svelte-1prrbx6"}"${add_attribute("this", videoEl, 0)}><track kind="${"captions"}"></video>
<h4>CANVAS </h4>
<canvas class="${"svelte-1prrbx6"}"${add_attribute("this", canvasEl, 0)}></canvas></main>`;
});
export {
  Page as default
};
