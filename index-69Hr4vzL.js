import{a as y,S as m,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="42560476-9b1970eba27c0bb9e34ff4d9e",h="https://pixabay.com/api/";async function b(i){const r={key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await y.get(h,{params:r})).data.hits}let l;function L(i){const r=document.querySelector(".gallery"),o=i.map(({webformatURL:a,largeImageURL:e,tags:t,likes:s,views:p,comments:f,downloads:d})=>`
      <li class="gallery-item">
        <a href="${e}" class="gallery-link">
          <img src="${a}" alt="${t}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${s}</p>
          <p><b>Views:</b> ${p}</p>
          <p><b>Comments:</b> ${f}</p>
          <p><b>Downloads:</b> ${d}</p>
        </div>
      </li>`).join("");r.insertAdjacentHTML("beforeend",o),l?l.refresh():l=new m(".gallery a",{captionsData:"alt",captionDelay:250})}function q(){document.querySelector(".gallery").innerHTML=""}const S=document.querySelector(".form"),c=document.querySelector("#search-input"),u=document.querySelector(".loader");S.addEventListener("submit",async i=>{i.preventDefault();const r=c.value.trim();if(q(),!r){n.warning({title:"Warning",message:"Please enter a search query",position:"topRight"});return}v();try{const o=await b(r);o.length===0?n.error({title:"No results",message:"Sorry, there are no images matching your search query.",position:"topRight"}):L(o)}catch(o){n.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"}),console.error(o)}finally{w(),c.value=""}});function v(){u.style.display="block"}function w(){u.style.display="none"}
//# sourceMappingURL=index-69Hr4vzL.js.map
