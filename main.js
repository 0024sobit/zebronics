
document.querySelectorAll('#sixcontainer').forEach((scrollContainer) => {
    const parent = scrollContainer.closest('section'); 
    const scrollLine = parent.querySelector('.scrolll');

    if (scrollLine) {
        scrollContainer.addEventListener('scroll', () => {
            const scrollLeft = scrollContainer.scrollLeft;
            const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

            const scrollPercent = maxScroll > 0 ? scrollLeft / maxScroll : 0;
            const barWidth = 25 + (scrollPercent * 75);

            scrollLine.style.width = barWidth + '%';
        });
    }
});



window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

function checkScroll() {
    const header = document.querySelector('.headpad');
    if (window.scrollY > 500) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
}
 
fetch('mainone.json')
  .then(res => res.json())
  .then(data => {
    console.log('Data loaded:', data);
    headPhone(data);
  })
  .catch(err => console.error('Failed to load JSON:', err));

function headPhone(alldata) {
    const sixProduct = document.getElementById('sixproduct');
    sixProduct.innerHTML = '';

    alldata.forEach(product => {
        const productHTML = `
             <div class="product">
                <div class="items">
                    <div class="new"><span>New</span></div>
                    <div class="productimg">
                        <img src="${product.image}"
                            alt="">
                    </div>
                    <div class="productpara justpara">
                        <div class="nameprice">
                            <span class="pname">${product.name}</span>
                            <span class="pprice">${product.price}</span>
                        </div>
                        <small>${product.product}</small>
                        <p>${product.features}</p>
                    </div>
                </div>
            </div>
        `;
         sixProduct.innerHTML += productHTML;
    })
}

fetch('maintwo.json')
  .then(res => res.json())
  .then(data => {
    console.log('Data loaded', data);
    audioData(data); 
  })
  .catch(err => console.error('Failed to load JSON:', err));

function audioData(products) {
  const eightProduct = document.getElementById('eightproduct');
  eightProduct.innerHTML = '';

  products.forEach(product => {
    const eightHTML = `
      <div class="product">
        <div class="items">
          <div class="new"><span>New</span></div>
          <div class="productimg">
            <img src="${product.image}" alt="">
          </div>
          <div class="productpara audiopara">
            <div class="nameprice">
               <span class="pname">${product.name}</span>
              <span class="pprice">${product.price}</span>
            </div>
            <small>${product.product}</small>
            <p>${product.features}</p>
          </div>
        </div>
      </div>
    `;
    eightProduct.innerHTML += eightHTML;
  });
}

fetch('mainthree.json')
  .then(res => res.json())
  .then(data => {
    console.log('Data loaded', data);
    vedioData(data); 
  })
  .catch(err => console.error('Failed to load JSON:', err));

function vedioData(products) {
  const nineProduct = document.getElementById('nineproduct');
  nineProduct.innerHTML = '';

  products.forEach(product => {
    const nineHTML = `
      <div class="product">
        <div class="items">
          <div class="new"><span>New</span></div>
          <div class="productimg">
            <img src="${product.image}" alt="">
          </div>
          <div class="productpara vediopad">
            <div class="nameprice">
              <span class="pname">${product.name}</span>
              <span class="pprice">${product.price}</span>
            </div>
            <small>${product.product}</small>
            <p>${product.features}</p>
          </div>
        </div>
      </div>
    `;
    nineProduct.innerHTML += nineHTML;
  });
}

fetch('mainfour.json')
  .then(res => res.json())
  .then(data => {
    console.log('Data loaded', data);
    itData(data); 
  })
  .catch(err => console.error('Failed to load JSON:', err));

function itData(products) {
  const tenProduct = document.getElementById('tenproduct');
  tenProduct.innerHTML = '';

  products.forEach(product => {
    const tenHTML = `
      <div class="product">
        <div class="items">
          <div class="new"><span>New</span></div>
          <div class="productimg">
            <img src="${product.image}" alt="">
          </div>
          <div class="productpara itproduct">
            <div class="nameprice">
              <span class="pname">${product.name}</span>
              <span class="pprice">${product.price}</span>
            </div>
            <small>${product.product}</small>
            <p>${product.features}</p>
          </div>
        </div>
      </div>
    `;
    tenProduct.innerHTML += tenHTML;
  });
}


fetch('mainfive.json')
  .then(res => res.json())
  .then(data => {
    console.log('Data loaded', data);
    lifeData(data); 
  })
  .catch(err => console.error('Failed to load JSON:', err));

function lifeData(products) {
  const oneProduct = document.getElementById('oneproduct');
  oneProduct.innerHTML = '';

  products.forEach(product => {
    const oneHTML = `
      <div class="product">
        <div class="items">
          <div class="new"><span>New</span></div>
          <div class="productimg">
            <img src="${product.image}" alt="">
          </div>
          <div class="productpara lifepara">
            <div class="nameprice">
              <span class="pname">${product.name}</span>
              <span class="pprice">${product.price}</span>
            </div>
            <small>${product.product}</small>
            <p>${product.features}</p>
          </div>
        </div>
      </div>
    `;
    oneProduct.innerHTML += oneHTML;
  });
}

fetch('mainsix.json')
  .then(res => res.json())
  .then(data => {
    console.log('Data loaded', data);
    smartData(data); 
  })
  .catch(err => console.error('Failed to load JSON:', err));

function smartData(products) {
  const twoProduct = document.getElementById('twoproduct');
  twoProduct.innerHTML = '';

  products.forEach(product => {
    const twoHTML = `
      <div class="product">
        <div class="items">
          <div class="new"><span>New</span></div>
          <div class="productimg">
            <img src="${product.image}" alt="">
          </div>
          <div class="productpara smartpad">
            <div class="nameprice">
              <span class="pname">${product.name}</span>
              <span class="pprice">${product.price}</span>
            </div>
            <small>${product.product}</small>
            <p>${product.features}</p>
          </div>
        </div>
      </div>
    `;
    twoProduct.innerHTML += twoHTML;
  });
}



function initSlideshow() {
  const slides = document.querySelectorAll('.slidebox');
  const buttons = document.querySelectorAll('.numbtn');
  let currentIndex = 0;
  let timer;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index); 
    });
    buttons.forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
    });
  }

  function slideTo(index) {
    clearInterval(timer);
    currentIndex = index;
    showSlide(currentIndex);
    timer = setInterval(nextSlide, 7000);
  }

  function nextSlide() {
    slideTo((currentIndex + 1) % slides.length);
  }

  buttons.forEach((btn, i) => {
    btn.addEventListener('click', () => slideTo(i));  
  });

  showSlide(currentIndex);
  timer = setInterval(nextSlide, 7500);
}


document.addEventListener('DOMContentLoaded', initSlideshow);





'sd f sd f sd fs';
' re  wer'