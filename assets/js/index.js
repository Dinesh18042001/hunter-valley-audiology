let nav = document.querySelector(".navbar");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
};

$('.brand_slide').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});





document.addEventListener('scroll', function() {
    const article = document.querySelector('.blog-article');
    const progressBar = document.querySelector('.nav__scroll-bar');
  
    const articleRect = article.getBoundingClientRect();
    const articleTop = articleRect.top;
    const articleHeight = articleRect.height;
  
    const windowHeight = window.innerHeight;
    const totalScroll = articleHeight - windowHeight;
  
    if (articleTop < 0 && Math.abs(articleTop) <= totalScroll) {
      const progress = (Math.abs(articleTop) / totalScroll) * 100;
      progressBar.style.width = `${progress}%`;
    } else if (Math.abs(articleTop) > totalScroll) {
      progressBar.style.width = '100%';
    } else {
      progressBar.style.width = '0%';
    }
  });



  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
  