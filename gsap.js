
var tl = gsap.timeline()





tl.from(".nav-logo h1,.nav h3,.button button ",{
y:-100,
duration:1,
delay:0.5,
opacity:0,
stagger:0.2

})

tl.from(".content h1",{
y:-100,
// scale:0.5,
opacity:1,
// stagger:,
delay:1,
duration:1



})



tl.from(".scroll-bt h5",{
scale:0,
opacity:0

})

tl.to(".scroll-bt h5",{
y:40,
repeat:-1,
duration:0.8,
yoyo:true


})