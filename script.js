
const yearElement = document.getElementById('year');
if(yearElement){
  yearElement.textContent = new Date().getFullYear().toString();
}

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
  const icons = document.querySelectorAll('.card-icon');

  if (width >= 768 && width <= 900) {
    icons.forEach(icon => {
      icon.style.width = '160px';
      icon.style.height = '160px';
      icon.style.minWidth = '160px';
      icon.style.minHeight = '160px';
      icon.style.maxWidth = '160px';
      icon.style.maxHeight = '160px';
      icon.style.top = '-70px'; // Smanjeno da ne overlapuje
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
    console.log('DESKTOP MODE - ikone 195px'); // DEBUG

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
