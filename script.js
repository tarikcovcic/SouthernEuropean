
const yearElement = document.getElementById('year');
if(yearElement){
  yearElement.textContent = new Date().getFullYear().toString();
}


function adjustTabletHeroTitle() {
  const width = window.innerWidth;
  const heroTitle = document.querySelector('.hero-panel h1');
  
  if (width >= 768 && width <= 1023 && heroTitle) {
    
    heroTitle.setAttribute('style', heroTitle.getAttribute('style') + '; font-size: clamp(98px,12.8vw,158px) !important;');
    
    
    const tabletCSS = `
      @media screen and (min-width: 768px) and (max-width: 1023px) {
        .hero-panel h1 {
          font-size: clamp(98px,12.8vw,158px) !important;
        }
      }
    `;
    
    
    if (!document.getElementById('tablet-hero-title-css')) {
      const style = document.createElement('style');
      style.id = 'tablet-hero-title-css';
      style.textContent = tabletCSS;
      document.head.appendChild(style);
    }
  }
}


window.addEventListener('load', adjustTabletHeroTitle);
window.addEventListener('resize', adjustTabletHeroTitle);


document.addEventListener('DOMContentLoaded', adjustTabletHeroTitle);

const observer = new IntersectionObserver((entries)=>{
  for(const entry of entries){
    if(entry.isIntersecting){
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }
},{threshold:0.12});

for(const el of document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up, .reveal-zoom')){observer.observe(el)}

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href');
    if(id.length>1){
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({behavior:'smooth'});
    }
  });
});



function adjustIconSizeForTablet() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const icons = document.querySelectorAll('.card-icon');
  
  // Ne dirati desktop verziju (1025px+)
  if (width >= 1025) {
    return;
  }
  
  const isIPadAir = (width === 820 && height === 1180) || (width === 1180 && height === 820);
  const isIPadPro11 = (width === 834 && height === 1194) || (width === 1194 && height === 834);
  const isIPadPro129 = (width === 1024 && height === 1366) || (width === 1366 && height === 1024);
  const isTabletRange = (width >= 768 && width <= 900);

  if (isTabletRange || isIPadAir || isIPadPro11 || (isIPadPro129 && width < 1350)) {
    icons.forEach(icon => {
      icon.style.width = '160px';
      icon.style.height = '160px';
      icon.style.minWidth = '160px';
      icon.style.minHeight = '160px';
      icon.style.maxWidth = '160px';
      icon.style.maxHeight = '160px';
      icon.style.top = '-70px';
      icon.style.transform = 'translateX(-50%)';
      icon.style.left = '50%';
      icon.style.position = 'absolute';
      icon.style.objectFit = 'contain';
    });

    const airGrid = document.querySelector('#what .grid-3, .what .grid-3');
    if (airGrid) {
      airGrid.style.setProperty('margin-top', '130px', 'important');
    }

    const airCards = document.querySelectorAll('#what .card, .what .card, section.what .card, article.card');
    airCards.forEach((card, index) => {
      card.style.setProperty('padding', '120px 30px 30px 30px', 'important');
      if (index === 0) {
        card.style.setProperty('margin-top', '0px', 'important');
      } else {
        card.style.setProperty('margin-top', '140px', 'important');
      }
    });
    
    const airH3 = document.querySelectorAll('#what h3, .what h3, section.what h3, .card h3');
    airH3.forEach(h3 => {
      h3.style.setProperty('font-size', '48px', 'important');
      h3.style.setProperty('line-height', '1.2', 'important');
    });
    
    const airList = document.querySelectorAll('#what ul, #what li, .what ul, .what li, .card ul, .card li');
    airList.forEach(el => {
      el.style.setProperty('font-size', '38px', 'important');
      el.style.setProperty('line-height', '1.7', 'important');
    });
    
  } else if (width > 900 && width <= 1366) {
    icons.forEach(icon => {
      icon.style.width = '195px';
      icon.style.height = '195px';
      icon.style.minWidth = '195px';
      icon.style.minHeight = '195px';
      icon.style.maxWidth = '195px';
      icon.style.maxHeight = '195px';
      icon.style.top = '-97.5px';
      icon.style.transform = 'translateX(-50%)';
      icon.style.left = '50%';
      icon.style.position = 'absolute';
      icon.style.objectFit = 'contain';
      icon.style.aspectRatio = '1 / 1';
    });
    
    const proGrid = document.querySelector('#what .grid-3, .what .grid-3');
    if (proGrid) {
      proGrid.style.setProperty('margin-top', '150px', 'important');
    }
    
    const proCards = document.querySelectorAll('#what .card, .what .card, section.what .card, article.card');
    proCards.forEach((card, index) => {
      card.style.setProperty('padding', '140px 30px 30px 30px', 'important');
      if (index === 0) {
        card.style.setProperty('margin-top', '0px', 'important');
      } else {
        card.style.setProperty('margin-top', '150px', 'important');
      }
    });
    
    const proH3 = document.querySelectorAll('#what h3, .what h3, section.what h3, .card h3');
    proH3.forEach(h3 => {
      h3.style.setProperty('font-size', '56px', 'important');
      h3.style.setProperty('line-height', '1.2', 'important');
    });
    
    const proList = document.querySelectorAll('#what ul, #what li, .what ul, .what li, .card ul, .card li');
    proList.forEach(el => {
      el.style.setProperty('font-size', '46px', 'important');
      el.style.setProperty('line-height', '1.8', 'important');
    });
  } else if (width < 768) {

    icons.forEach(icon => {
      icon.style.width = '130px';
      icon.style.height = '130px';
      icon.style.top = '-65px';
      icon.style.transform = 'translateX(-50%)';
      icon.style.left = '50%';
      icon.style.position = 'absolute';
    });
  } else {
    

    icons.forEach(icon => {
      icon.style.width = '195px';
      icon.style.height = '195px';
      icon.style.top = '-97.5px';
      icon.style.transform = 'translateX(-50%)';
      icon.style.left = '50%';
      icon.style.position = 'absolute';
    });
  }
}

window.addEventListener('load', () => {
  setTimeout(adjustIconSizeForTablet, 100);
});
window.addEventListener('resize', adjustIconSizeForTablet);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(adjustIconSizeForTablet, 100);
  });
} else {
  setTimeout(adjustIconSizeForTablet, 100);
}


function getLineCount(el){
  const cs = window.getComputedStyle(el);
  let lineHeight = parseFloat(cs.lineHeight);
  if(isNaN(lineHeight)){
    const fontSize = parseFloat(cs.fontSize) || 16;
    lineHeight = fontSize * 1.2;
  }
  const lines = Math.round(el.scrollHeight / lineHeight);
  return lines;
}

function fitLinesDown(el, targetLines, minPx){
  const cs = window.getComputedStyle(el);
  let fontSize = parseFloat(cs.fontSize) || 16;
  const original = fontSize;
  
  let safety = 40;
  while(getLineCount(el) > targetLines && fontSize > minPx && safety-- > 0){
    fontSize = Math.max(minPx, fontSize * 0.96);
    el.style.fontSize = fontSize + 'px';
  }
  return {from: original, to: fontSize};
}

function adjustDesktopTypography(){
  const w = window.innerWidth;
  if(w < 1000) return; 

  
  const heroH1 = document.querySelector('.hero-panel h1');
  if(heroH1){
    heroH1.style.whiteSpace = 'pre-line';
    heroH1.style.wordBreak = 'keep-all';
    
    const result = fitLinesDown(heroH1, 3, 16);
    if(getLineCount(heroH1) > 3){
      
      const cs = window.getComputedStyle(heroH1);
      const ws = parseFloat(cs.wordSpacing) || 0;
      heroH1.style.wordSpacing = Math.max(-2, ws - 2) + 'px';
      fitLinesDown(heroH1, 3, 16);
    }
  }

  
  const statementTitle = document.querySelector('.statement .title-lg');
  if(statementTitle){
    fitLinesDown(statementTitle, 2, 28);
  }

  
  const whoLede = document.querySelector('.who .lede');
  const whoMuted = document.querySelector('.who .muted');
  if(whoLede && whoMuted){
    
    const getTotalLines = () => getLineCount(whoLede) + getLineCount(whoMuted);
    let cs = window.getComputedStyle(whoLede);
    let fsL = parseFloat(cs.fontSize) || 20;
    cs = window.getComputedStyle(whoMuted);
    let fsM = parseFloat(cs.fontSize) || 20;
    let safety = 40;
    while(getTotalLines() > 4 && (fsL > 16 || fsM > 16) && safety-- > 0){
      fsL = Math.max(16, fsL * 0.96);
      fsM = Math.max(16, fsM * 0.96);
      whoLede.style.fontSize = fsL + 'px';
      whoMuted.style.fontSize = fsM + 'px';
    }
  }
}

const adjustDesktopTypographyDebounced = (()=>{
  let t; return ()=>{ clearTimeout(t); t = setTimeout(adjustDesktopTypography, 100); };
})();

window.addEventListener('load', adjustDesktopTypography);
window.addEventListener('resize', adjustDesktopTypographyDebounced);


function adjustStatementMobile(){
  const title = document.querySelector('.statement .title-lg');
  if(!title) return;
  const w = window.innerWidth;
  const isMobile = w <= 767;
  if(isMobile){
    if(!title.dataset.originalTitle){
      title.dataset.originalTitle = title.innerHTML;
    }
    title.innerHTML = 'We build<br/>partnerships<br/>between<br/>SMEs and<br/>the world.';
  } else if(title.dataset.originalTitle){
    title.innerHTML = title.dataset.originalTitle;
  }
}

const adjustStatementMobileDebounced = (()=>{ let t; return ()=>{ clearTimeout(t); t = setTimeout(adjustStatementMobile, 100); }; })();

window.addEventListener('load', adjustStatementMobile);
window.addEventListener('resize', adjustStatementMobileDebounced);



function adjustWhatGridCenter(){
  const w = window.innerWidth;
  if(w < 1350) return; 
  
  return;
  /*
  const grid = document.querySelector('.what .grid-3');
  if(!grid) return;
  const cards = grid.querySelectorAll('.card');
  if(cards.length < 3) return;

  const csGrid = getComputedStyle(grid);
  const gap = parseFloat(csGrid.columnGap || csGrid.gap || '0') || 0;
  const cardWidth = cards[0].offsetWidth; 
  if(!cardWidth) return;

  
  const contentWidth = 3 * cardWidth + 2 * gap;
  const leftPad = Math.max(0, Math.round((w - contentWidth) / 2));
  grid.style.setProperty('padding-left', leftPad + 'px', 'important');
  grid.style.setProperty('padding-right', leftPad + 'px', 'important');

  
  let attempts = 0;
  while(attempts++ < 4){
    const r2 = cards[1].getBoundingClientRect();
    const c2 = (r2.left + r2.right) / 2;
    const d = Math.round(w / 2 - c2);
    if(Math.abs(d) <= 1) break;
    const currentTx = parseFloat((grid.style.transform.match(/translateX\(([-0-9.]+)px\)/)||[])[1]||'0') || 0;
    grid.style.setProperty('will-change', 'transform');
    grid.style.setProperty('transform', `translateX(${currentTx + d}px)`, 'important');
  }
  */
}



function applySafariSizing(){
  const ua = navigator.userAgent;
  const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
  const w = window.innerWidth;
  if(!isSafari || w < 1350) return;
  
  return;
  /*
  const container = document.querySelector('section#what .container, .what .container');
  const grid = document.querySelector('.what .grid-3');
  if(!grid) return;
  const cards = grid.querySelectorAll('.card');
  if(cards.length < 3) return;
  const desiredWidth = Math.floor(w * 0.8);
  const gap = parseFloat(getComputedStyle(grid).columnGap || getComputedStyle(grid).gap || '40') || 40;
  const cardWidth = Math.floor((desiredWidth - 2 * gap) / 3);

  
  container && container.style.setProperty('width', desiredWidth + 'px', 'important');
  grid.style.setProperty('width', desiredWidth + 'px', 'important');
  grid.style.setProperty('left', '50%', 'important');
  grid.style.setProperty('transform', 'translateX(-50%)', 'important');
  grid.style.setProperty('gap', gap + 'px', 'important');
  grid.style.setProperty('padding', '0px', 'important');

  
  const height = Math.floor(cardWidth * 16 / 15);
  cards.forEach(card => {
    card.style.setProperty('width', cardWidth + 'px', 'important');
    card.style.setProperty('height', height + 'px', 'important');
  });
  */
}

const adjustWhatGridCenterDebounced = (()=>{ let t; return ()=>{ clearTimeout(t); t = setTimeout(adjustWhatGridCenter, 50); }; })();

window.addEventListener('load', ()=>{ requestAnimationFrame(adjustWhatGridCenter); });
window.addEventListener('resize', adjustWhatGridCenterDebounced);
window.addEventListener('orientationchange', adjustWhatGridCenterDebounced);


document.fonts && document.fonts.ready && document.fonts.ready.then(adjustWhatGridCenter);
window.addEventListener('load', ()=> setTimeout(adjustWhatGridCenter, 200));


const applySafariSizingDebounced = (()=>{ let t; return ()=>{ clearTimeout(t); t = setTimeout(applySafariSizing, 50); }; })();
window.addEventListener('load', applySafariSizing);
window.addEventListener('resize', applySafariSizingDebounced);



function applySafariTypography(){
  const ua = navigator.userAgent;
  const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
  if(!isSafari) return;
  const w = window.innerWidth;
  
  // Ne dirati desktop verziju (1025px+)
  if(w >= 1025) return;
  
  if(w < 1000) return; 
  
  if(w >= 1350) return;
  const h3Size = w >= 1367 ? 32 : 30; 
  const liSize = w >= 1367 ? 20 : 18; 
  document.querySelectorAll('#what .card h3, .what .card h3, .cards h3').forEach(h=>{
    h.style.setProperty('font-size', h3Size + 'px', 'important');
    h.style.setProperty('line-height', '1.25', 'important');
  });
  document.querySelectorAll('#what .card ul, #what .card li, .what .card ul, .what .card li, .cards ul, .cards li').forEach(el=>{
    el.style.setProperty('font-size', liSize + 'px', 'important');
    el.style.setProperty('line-height', '1.6', 'important');
    el.style.setProperty('overflow-wrap', 'break-word', 'important');
  });
}

const applySafariTypographyDebounced = (()=>{ let t; return ()=>{ clearTimeout(t); t = setTimeout(applySafariTypography, 50); }; })();
window.addEventListener('load', applySafariTypography);
window.addEventListener('resize', applySafariTypographyDebounced);

function adjustContactTitle(){
  const title = document.querySelector('#contact .title-xl, section#contact .title-xl, .contact .title-xl');
  if(!title) return;
  const w = window.innerWidth;
  const isMobileOrTablet = w <= 1024; // desktop počinje iznad 1024
  if(isMobileOrTablet){
    if(!title.dataset.originalTitle){
      title.dataset.originalTitle = title.innerHTML;
    }
    
    title.innerHTML = 'Get in<br/>touch.';
    title.style.setProperty('display', 'block', 'important');
    title.style.setProperty('white-space', 'normal', 'important');
  } else if(title.dataset.originalTitle){
    title.innerHTML = title.dataset.originalTitle;
    title.style.removeProperty('display');
    title.style.removeProperty('white-space');
  }
}

const adjustContactTitleDebounced = (()=>{ let t; return ()=>{ clearTimeout(t); t = setTimeout(adjustContactTitle, 100); }; })();


if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', adjustContactTitle);
} else {
  adjustContactTitle();
}

window.addEventListener('load', adjustContactTitle);
window.addEventListener('resize', adjustContactTitleDebounced);


setTimeout(adjustContactTitle, 50);
setTimeout(adjustContactTitle, 200);


// Ensure contact title never wraps on desktop by shrinking font-size as needed
function enforceSingleLineContactTitle(){
  const w = window.innerWidth;
  if(w < 1025) return; // desktop only
  const title = document.querySelector('.contact .title-xl');
  if(!title) return;
  // Force no wrapping
  title.style.setProperty('white-space','nowrap','important');
  title.style.setProperty('word-break','keep-all','important');
  title.style.setProperty('overflow-wrap','normal','important');

  const container = title.closest('.col') || title.parentElement;
  let availableWidth = container ? container.clientWidth : title.clientWidth;
  if(container){
    const cs = window.getComputedStyle(container);
    const padL = parseFloat(cs.paddingLeft)||0;
    const padR = parseFloat(cs.paddingRight)||0;
    availableWidth = Math.max(0, availableWidth - padL - padR);
  }
  if(!availableWidth) return;

  // Start from CSS baseline (12vh) mapped to px
  const baselinePx = Math.min(window.innerHeight * 0.12, window.innerWidth * 0.06);
  title.style.fontSize = baselinePx + 'px';
  title.style.display = 'inline-block';
  title.style.maxWidth = availableWidth + 'px';

  let safety = 100;
  while(safety-- > 0){
    const current = parseFloat(getComputedStyle(title).fontSize) || 16;
    const lh = parseFloat(getComputedStyle(title).lineHeight) || current * 1.1;
    const lines = getLineCount(title);
    const tooWide = title.scrollWidth > availableWidth + 0.5; // tolerance
    const tooTall = lines > 1 || title.scrollHeight > lh * 1.2;
    if(!tooWide && !tooTall) break;
    const next = Math.max(24, current * 0.96); // ne ispod 24px na desktopu
    if(Math.abs(next - current) < 0.25) break;
    title.style.fontSize = next + 'px';
  }
}

const enforceSingleLineContactTitleDebounced = (()=>{ let t; return ()=>{ clearTimeout(t); t = setTimeout(enforceSingleLineContactTitle, 80); }; })();

window.addEventListener('load', enforceSingleLineContactTitle);
window.addEventListener('resize', enforceSingleLineContactTitleDebounced);
document.fonts && document.fonts.ready && document.fonts.ready.then(enforceSingleLineContactTitle);

function forceIPadProLayout(){
  const w = window.innerWidth;
  const h = window.innerHeight;
  
  
  const isIPadPro = (w === 1024 && h === 1366) || (w === 1366 && h === 1024) || w === 1024;
  
  if(isIPadPro){
    
    const whatGrid = document.querySelector('#what .grid-3, .what .grid-3');
    if(whatGrid){
      whatGrid.style.setProperty('grid-template-columns', '1fr', 'important');
      whatGrid.style.setProperty('width', '100%', 'important');
      whatGrid.style.setProperty('position', 'static', 'important');
      whatGrid.style.setProperty('left', 'auto', 'important');
      whatGrid.style.setProperty('transform', 'none', 'important');
    }
    
    
    const heroGrid = document.querySelector('.hero-grid');
    if(heroGrid){
      heroGrid.style.setProperty('display', 'flex', 'important');
      heroGrid.style.setProperty('flex-direction', 'column', 'important');
    }
    
    
    const contactGrid = document.querySelector('#contact .contact-grid, .contact .contact-grid');
    if(contactGrid){
      contactGrid.style.setProperty('display', 'flex', 'important');
      contactGrid.style.setProperty('flex-direction', 'column', 'important');
    }
  }
}

window.addEventListener('load', forceIPadProLayout);
window.addEventListener('resize', forceIPadProLayout);
document.addEventListener('DOMContentLoaded', forceIPadProLayout);