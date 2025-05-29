import{S as l,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const d=new l(".gallery a");function u(o){const t=document.querySelector(".gallery");t.innerHTML=o.map(r=>`
    <div class="photo-card">
    <a href="${r.largeImageURL}" target="_blank">
        <img class="image" src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
      </a>
      <div class="info">
       <div class="info-item"><p><i class="img-text">Likes </i><span class="span-text">${r.likes}</span></p></div>
        <div class="info-item"><p><i class="img-text">Views </i><span class="span-text">${r.views}</span></p></div>
        <div class="info-item"><p><i class="img-text">Comments </i><span class="span-text">${r.comments}</span></p></div>
        <div class="info-item"><p><i class="img-text">Downloads </i><span class="span-text">${r.downloads}</span></p></div>
      </div>
    </div>
  `).join(""),d.refresh()}const p="42560476-9b1970eba27c0bb9e34ff4d9e";function f(o){const t=document.querySelector(".loader"),r=document.querySelector(".input-btn");function i(){t.style.display="block"}r.addEventListener("click",function(){i()}),fetch(`https://pixabay.com/api/?key=${p}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error("Failed to fetch images");return e.json()}).then(e=>{console.log(e),t.style.display="none",e.hits.length===0?a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):u(e.hits)}).catch(e=>{console.error("Error fetching images:",e),t.style.display="none",a.error({title:"Error",message:"Failed to fetch images. Please try again later."})})}const m=document.querySelector("#search-form"),c=document.querySelector("#search-input");m.addEventListener("submit",o=>{o.preventDefault();const t=c.value.trim();if(!t){a.warning({title:"Warning",message:"Please enter a search query"});return}f(t),c.value=""});
//# sourceMappingURL=index-XV2OM9eX.js.map
