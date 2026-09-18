(() => {
 'use strict';
 const motion=matchMedia('(prefers-reduced-motion: reduce)'),fine=matchMedia('(pointer:fine)'),running=new Set();
 function play(el,frames,options={}){if(!el||motion.matches||!el.animate)return;const a=el.animate(frames,{duration:750,easing:'cubic-bezier(.16,1,.3,1)',...options});running.add(a);a.finished.catch(()=>{}).finally(()=>running.delete(a));return a;}
 const rise=(el,delay=0)=>play(el,[{opacity:0,transform:'translateY(26px)'},{opacity:1,transform:'translateY(0)'}],{delay,fill:'backwards'});
 document.getElementById('year').textContent=new Date().getFullYear();
 const toggle=document.querySelector('.menu-toggle'),menu=document.getElementById('mobile-nav');
 function closeMenu(){menu.hidden=true;toggle.setAttribute('aria-expanded','false');}
 toggle.addEventListener('click',()=>{menu.hidden=!menu.hidden;toggle.setAttribute('aria-expanded',String(!menu.hidden));if(!menu.hidden)menu.querySelectorAll('a').forEach((a,i)=>rise(a,i*40));});
 menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden){closeMenu();toggle.focus();}});
 matchMedia('(min-width:1151px)').addEventListener('change',closeMenu);
 const progress=document.createElement('div');progress.className='reading-progress';progress.setAttribute('aria-hidden','true');document.body.append(progress);
 const header=document.getElementById('siteHeader');let queued=false;
 const update=()=>{queued=false;header.classList.toggle('scrolled',scrollY>25);const total=document.documentElement.scrollHeight-innerHeight;progress.style.transform='scaleX('+(total>0?Math.min(1,Math.max(0,scrollY/total)):0)+')';};
 addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(update);}},{passive:true});addEventListener('resize',update);update();
 document.querySelectorAll('.faq-details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)play(d.querySelector('.faq-content'),[{opacity:0,transform:'translateY(-6px)'},{opacity:1,transform:'translateY(0)'}],{duration:300});}));
 rise(document.querySelector('.hero-pretitle'),50);
 document.querySelectorAll('.hero-title-line').forEach((el,i)=>play(el,[{opacity:0,transform:'translateY(35px)',clipPath:'inset(0 0 100% 0)'},{opacity:1,transform:'translateY(0)',clipPath:'inset(0 0 0% 0)'}],{duration:850,delay:100+i*110,fill:'backwards'}));
 ['.hero-description','.hero-actions-group','.hero-location-bar'].forEach((selector,i)=>rise(document.querySelector(selector),270+i*90));
 ['.visual-card-primary','.visual-card-secondary'].forEach((selector,i)=>play(document.querySelector(selector),[{opacity:0,transform:'translateY(35px) rotate('+ (i?3:-2) +'deg) scale(.96)'},{opacity:1,transform:'translateY(0) rotate(0) scale(1)'}],{duration:1000,delay:120+i*170,fill:'backwards'}));
 rise(document.querySelector('.visual-badge-pill'),530);
 if(window.IntersectionObserver){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;observer.unobserve(entry.target);const candidates=[...entry.target.querySelectorAll('.section-kicker,.section-title,.section-desc,.product-card,.mix-item,.category-list article,.delivery-steps li,.editorial-image,.shop-photo,.faq-details,.location-content,.social-wordmark')];const elements=candidates.filter(el=>!candidates.some(parent=>parent!==el&&parent.contains(el)));elements.forEach((el,i)=>{if(el.matches('.editorial-image,.shop-photo'))play(el,[{opacity:0,transform:'translateY(32px) scale(.98)'},{opacity:1,transform:'translateY(0) scale(1)'}],{duration:950});else rise(el,Math.min(i*65,325));});}),{threshold:.04,rootMargin:'0px 0px -25px 0px'});
 document.querySelectorAll('main>section:not(#hero)').forEach(el=>observer.observe(el));
 const nav=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)document.querySelectorAll('.desktop-nav a').forEach(a=>{if(a.hash==='#'+e.target.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}),{rootMargin:'-15% 0px -60% 0px'});
 document.querySelectorAll('main>section[id]').forEach(el=>nav.observe(el));
 }
 const visual=document.querySelector('.hero-visual-col'),composition=document.querySelector('.visual-composition-wrap');let pointerFrame;
 visual.addEventListener('pointermove',e=>{if(!fine.matches||motion.matches)return;cancelAnimationFrame(pointerFrame);pointerFrame=requestAnimationFrame(()=>{const r=visual.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;composition.style.transform='perspective(1200px) rotateX('+(-y*2)+'deg) rotateY('+(x*2)+'deg) translate('+(x*5)+'px,'+(y*5)+'px)';});});
 visual.addEventListener('pointerleave',()=>{cancelAnimationFrame(pointerFrame);composition.style.transition='transform .6s cubic-bezier(.16,1,.3,1)';composition.style.transform='';});
 visual.addEventListener('pointerenter',()=>{composition.style.transition='transform .15s ease-out';});
 motion.addEventListener('change',()=>{if(motion.matches){running.forEach(a=>a.cancel());cancelAnimationFrame(pointerFrame);composition.style.transform='';}});
})();
