window.addEventListener('load',()=>{

    const visualWrap=document.querySelector('#visual_wrap')
    const visualList=document.querySelector('#visual_list')
    const visualLi=document.querySelectorAll('#visual_list>li')


    let timer=null
    let visualWidth=visualWrap.offsetWidth
    let visualLength=visualLi.length

    let currentIndex=0
    let nextIndex=null

    
    function autoPlay(){
        timer=setInterval(slideNext,2000)
    }

    function slideNext(){

        nextIndex=currentIndex+1
        if(nextIndex>=visualLength){
            nextIndex=0
        }
        gsap.to(visualLi[currentIndex],{left:-visualWidth,duration:0.2,ease:'power1.out'})
        gsap.set(visualLi[nextIndex],{left:visualWidth})
    }
})