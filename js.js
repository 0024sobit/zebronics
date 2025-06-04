const productScrollContainer = document.querySelector('.productlist');
const productScrollLine = document.querySelector('.scroll');

productScrollContainer.addEventListener('scroll', () => {
    const scrollLeft = productScrollContainer.scrollLeft;
    const maxScroll = productScrollContainer.scrollWidth - productScrollContainer.clientWidth;

    const scrollPercent = scrollLeft / maxScroll;
    const barWidth = 20 + (scrollPercent * 80);

    productScrollLine.style.width = barWidth + '%';
});



    // {
    //     "image"     : "",
    //     "name"      : "",
    //     "price"     : "",
    //     "product"   : "",
    //     "features"  : ""
    // }


const productScrollContainer = document.querySelector('.productlist');
const productScrollLine = document.querySelector('.scroll');

productScrollContainer.addEventListener('scroll', () => {
    const scrollLeft = productScrollContainer.scrollLeft;
    const maxScroll = productScrollContainer.scrollWidth - productScrollContainer.clientWidth;

    const scrollPercent = scrollLeft / maxScroll;
    const barWidth = 20 + (scrollPercent * 80);

    productScrollLine.style.width = barWidth + '%';
});



        <section class="parttwo">
            <div class="scrolpad">
                <div class="scrolling-text-wrapper">
                <div class="scrolling-text">This is your animated text moving left infinitely.</div>
                </div>
            </div>
        </section>


.scrolling-text-wrapper {
  overflow: hidden;
  white-space: nowrap;
  width: 100%; /* or set a specific width */
}

.scrolling-text {
  display: inline-block;
  font-size: 32px;
  padding-left: 100%; /* push it off-screen to the right initially */
  animation: scroll-left 10s linear infinite;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}




' fbfgdf fgs sc sd df dfsd dfdd df dc vxzsdf dfadsf dfdf  fdsadf df dsad f a ds cxzv c dfasdf  df fa sd  fdfa fsd ds sdf df df';
' sdfsd sdfd'