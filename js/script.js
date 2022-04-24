
window.addEventListener("scroll", function ()
{
   let offset = window.pageYOffset;
   parallax.style.backgroundPositionY = offset * 0.7 + "px";
});


const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
  });




// parallax finish
let cursor = document.querySelector('.cursor');
document.addEventListener('mousemove',(e) =>{
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})

let btn = document.querySelector('.get-in');

btn.addEventListener('mouseover',(e)=>{
    cursor.style = "background:transparent; border:none";
    btn.style ="background:#000; color:#fff"
  
});
btn.addEventListener('mouseleave',(e)=>{
    cursor.style = "background: #ffff";
    btn.style ="background:transparent; color:#000"
});

 