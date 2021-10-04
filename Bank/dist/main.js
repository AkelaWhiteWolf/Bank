(()=>{"use strict";(()=>{const e=document.querySelector(".new-bank");let t=new class{constructor(e){this.wrapper=e.parentElement,this.modal=e,this.btnCancel=e.querySelector(".button-bank_red"),this.btnOk=e.querySelector(".button-bank_green"),this.btnCancel.addEventListener("click",(e=>{e.preventDefault(),this.toggleModal()}))}toggleModal(){this.wrapper.toggleAttribute("data-invisible")}showConsole(){console.log(this.modal)}}(document.querySelector("#modal-new-bank"));t.createNewBank=function(){const t=this.modal.querySelector("#new-bank-name"),n=this.modal.querySelector("#new-bank-url"),r=this.modal.querySelector("#new-bank-money");let o=document.querySelector(".bank").cloneNode(!0),c=o.querySelector(".bank__name"),a=o.querySelector(".bank__logo"),l=o.querySelector(".bank__money-count");c.textContent=`${t.value}`,a.setAttribute("src",`${n.value}`),l.textContent=`${r.value}`,o.removeAttribute("data-invisible"),e.before(o),t.value="",n.value="",r.value="",this.toggleModal()},t.btnOk.addEventListener("click",(function(e){e.preventDefault(),t.createNewBank()})),e.addEventListener("click",(e=>{e.preventDefault(),t.toggleModal()}))})(),(()=>{const e=document.querySelector(".section-banks");let t={menu:document.querySelector(".contextmenu"),get btnDeleteBank(){return this.menu.querySelector(".contextmenu__delete")},show(e,t){this.menu.style.left=`${e}px`,this.menu.style.top=`${t}px`,this.menu.removeAttribute("data-invisible"),this.btnDeleteBank.addEventListener("click",this.deleteBank),document.body.addEventListener("click",this.hideMenu,{once:!0})},hideMenu(){t.menu.setAttribute("data-invisible","")},deleteBank(){t.bank.remove()}};e.addEventListener("contextmenu",(e=>{e.target.closest(".bank")&&(e.preventDefault(),t.show(e.clientX,e.clientY),t.bank=e.target.closest(".bank"))}))})(),(()=>{class e{constructor(e){this.bank=e,this.moneyCount=e.querySelector(".bank__money-count")}putMoney(e){let t=Number(this.moneyCount.textContent);t+=Number(e),this.moneyCount.textContent=`${t}`}takeMoney(e){let t=Number(this.moneyCount.textContent);t-e>=0?(t-=e,this.moneyCount.textContent=`${t}`):alert("Невозможно снять больше, чем есть на счету.")}}document.querySelector(".section-banks").addEventListener("click",(t=>{if(t.target.closest(".bank")&&t.target.matches(".button-bank")){let n=t.target,r=t.target.closest(".bank"),o=new e(r),c=prompt("Введите сумму.");n.matches(".button-bank_green")?o.putMoney(c):o.takeMoney(c)}}))})(),(()=>{const e=document.querySelector("#btn-switch-to-carousel"),t=document.querySelector("#btn-switch-to-calendar");function n(e,t){if(!t.hasAttribute("data-is-active"))return!1;const n=document.querySelector(".carousel-container"),r=document.querySelectorAll(".btn-switch");for(let e of r)e.setAttribute("data-is-active","");t.removeAttribute("data-is-active"),n.style.marginLeft="to-calendar"===e?"calc(-100% - 2rem)":""}e.addEventListener("click",(e=>{n("to-carousel",e.target)})),t.addEventListener("click",(e=>{n("to-calendar",e.target)}))})(),(async()=>{const e=document.querySelector('.btn-carousel[data-flip="left"]'),t=document.querySelector('.btn-carousel[data-flip="right"]');let n=document.querySelector(".carousel-content"),r=document.querySelector(".carousel-container");const o=["USD","EUR","GBP","JPY","CHF","CNY"];let c=[],a=0,l=!0,s=await fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json");class i{constructor(e,t){this.currency=e,this.rate=t}get domElement(){let e=document.querySelector(".carousel-content__elem").cloneNode(!0);return e.innerHTML=`${this.currency} <span class="rate">${this.rate}</span>`,e.removeAttribute("data-invisible"),e}pushCard(){n.append(this.domElement)}}try{s=await s.json()}catch(e){console.error(e)}for(let e of s)for(let t of o)e.cc===t&&c.push(new i(e.cc,e.rate));function u(e){"left"===e?(a--,a<0&&(a=5),n.style.flexDirection="row-reverse",c[a].pushCard(),n.firstElementChild.style.marginRight="-100%"):(a++,a>5&&(a=0),n.style.flexDirection="row",c[a].pushCard(),n.firstElementChild.style.marginLeft="-100%"),setTimeout((()=>{n.firstElementChild.remove()}),500)}c[0].pushCard(),n.firstElementChild.remove(),e.addEventListener("click",(()=>u("left"))),t.addEventListener("click",(()=>u("right"))),r.addEventListener("pointerover",(()=>l=!1)),r.addEventListener("pointerleave",(()=>l=!0)),setInterval((()=>{l&&u("right")}),3e3)})(),(async()=>{document.querySelector(".choose-currency-container__input-currency"),document.querySelector("#choose-currency-calendar")})()})();