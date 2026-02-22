import{a as v,S as b,i as f}from"./assets/vendor-B5nsgUv9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const S="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.81%200.219C6.95056%200.0787966%207.14097%204.21785e-05%207.3395%200L16.6605%200C16.859%204.21785e-05%2017.0494%200.0787966%2017.19%200.219L23.781%206.81C23.9212%206.95056%2024%207.14097%2024%207.3395V16.6605C24%2016.859%2023.9212%2017.0494%2023.781%2017.19L17.19%2023.781C17.0494%2023.9212%2016.859%2024%2016.6605%2024H7.3395C7.14097%2024%206.95056%2023.9212%206.81%2023.781L0.219%2017.19C0.0787966%2017.0494%204.21785e-05%2016.859%200%2016.6605L0%207.3395C4.21785e-05%207.14097%200.0787966%206.95056%200.219%206.81L6.81%200.219ZM7.65%201.5L1.5%207.65V16.35L7.65%2022.5H16.35L22.5%2016.35V7.65L16.35%201.5H7.65Z'%20fill='%23FAFAFB'%20/%3e%3cpath%20d='M6.969%206.969C7.03867%206.89916%207.12143%206.84374%207.21255%206.80593C7.30366%206.76812%207.40135%206.74866%207.5%206.74866C7.59865%206.74866%207.69633%206.76812%207.78745%206.80593C7.87857%206.84374%207.96133%206.89916%208.031%206.969L12%2010.9395L15.969%206.969C16.0387%206.89927%2016.1215%206.84395%2016.2126%206.80622C16.3037%206.76848%2016.4014%206.74905%2016.5%206.74905C16.5986%206.74905%2016.6963%206.76848%2016.7874%206.80622C16.8785%206.84395%2016.9613%206.89927%2017.031%206.969C17.1007%207.03873%2017.156%207.12152%2017.1938%207.21263C17.2315%207.30374%2017.2509%207.40139%2017.2509%207.5C17.2509%207.59862%2017.2315%207.69627%2017.1938%207.78738C17.156%207.87849%2017.1007%207.96127%2017.031%208.031L13.0605%2012L17.031%2015.969C17.1007%2016.0387%2017.156%2016.1215%2017.1938%2016.2126C17.2315%2016.3037%2017.2509%2016.4014%2017.2509%2016.5C17.2509%2016.5986%2017.2315%2016.6963%2017.1938%2016.7874C17.156%2016.8785%2017.1007%2016.9613%2017.031%2017.031C16.9613%2017.1007%2016.8785%2017.156%2016.7874%2017.1938C16.6963%2017.2315%2016.5986%2017.2509%2016.5%2017.2509C16.4014%2017.2509%2016.3037%2017.2315%2016.2126%2017.1938C16.1215%2017.156%2016.0387%2017.1007%2015.969%2017.031L12%2013.0605L8.031%2017.031C7.96127%2017.1007%207.87848%2017.156%207.78737%2017.1938C7.69626%2017.2315%207.59861%2017.2509%207.5%2017.2509C7.40138%2017.2509%207.30373%2017.2315%207.21262%2017.1938C7.12151%2017.156%207.03873%2017.1007%206.969%2017.031C6.89927%2016.9613%206.84395%2016.8785%206.80621%2016.7874C6.76847%2016.6963%206.74905%2016.5986%206.74905%2016.5C6.74905%2016.4014%206.76847%2016.3037%206.80621%2016.2126C6.84395%2016.1215%206.89927%2016.0387%206.969%2015.969L10.9395%2012L6.969%208.031C6.89915%207.96133%206.84374%207.87857%206.80593%207.78745C6.76812%207.69633%206.74866%207.59865%206.74866%207.5C6.74866%207.40135%206.76812%207.30367%206.80593%207.21255C6.84374%207.12143%206.89915%207.03867%206.969%206.969Z'%20fill='%23FAFAFB'%20/%3e%3c/svg%3e",B="https://pixabay.com/api/",q="54668256-0f9ad4fc1d3dae74ee970a003";async function m(e,o){const s={key:q,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o};try{return(await v.get(B,{params:s})).data}catch(a){throw a}}const h=document.querySelector(".gallery"),g=document.querySelector(".loader"),y=document.querySelector(".loadmore-btn"),P=new b(".gallery a",{captionsData:"alt",captionDelay:250});function x(e){return`
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img
          class="gallery-image"
          src="${e.webformatURL}"
          alt="${e.tags}"
          loading="lazy"
        />
      </a>

      <div class="info">
        <p class="info-item">
          <span class="info-title">Likes</span>
          <span class="info-value">${e.likes}</span>
        </p>

        <p class="info-item">
          <span class="info-title">Views</span>
          <span class="info-value">${e.views}</span>
        </p>

        <p class="info-item">
          <span class="info-title">Comments</span>
          <span class="info-value">${e.comments}</span>
        </p>

        <p class="info-item">
          <span class="info-title">Downloads</span>
          <span class="info-value">${e.downloads}</span>
        </p>
      </div>
    </li>
  `}function C(e){const o=e.map(x).join("");h.insertAdjacentHTML("beforeend",o),P.refresh()}function A(){h.innerHTML=""}function L(){g.classList.add("is-open")}function w(){g.classList.remove("is-open")}function p(){y.classList.add("is-open")}function l(){y.classList.remove("is-open")}const E=document.querySelector(".form"),M=document.querySelector(".loadmore-btn");let n=1,c="",d=0;M.addEventListener("click",async e=>{try{l(),L(),n++;const s=(await m(c,n)).hits;if(!s||s.length===0){l(),f.info({message:"No more images found.",position:"topRight"});return}C(s);const a=document.querySelector(".gallery-item");if(a){const i=a.getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}if(n*15>=d){l(),f.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}p()}catch{n--,u("Something went wrong. Please try again later."),n*15<d&&p()}finally{w()}});E.addEventListener("submit",R);async function R(e){if(e.preventDefault(),c=e.currentTarget.elements["search-text"].value.trim(),!c){u("Please enter a search query.");return}n=1,A(),l(),L();try{const o=await m(c,n);d=o.totalHits;let s=o.hits;if(s.length===0){u("Sorry, there are no images matching your search query. Please try again!");return}if(C(s),d>s.length)p();else{f.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}}catch{u("Something went wrong. Please try again later.")}finally{w()}}function u(e){f.error({message:e,position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb",iconUrl:S,close:!0,closeOnClick:!0,timeout:5e3,progressBarColor:"#b51b1b",class:"custom-error-toast"})}
//# sourceMappingURL=index.js.map
