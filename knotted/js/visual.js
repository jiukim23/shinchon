window.addEventListener('load',()=>{

    // 비디오영역
    const videoWrap=document.querySelector('#video_section')
    const videoImg=document.querySelector('#video_section>img')
    let videoWidth=null

    // 슬라이드영역
    const visualWrap=document.querySelector('#visual_section')
    const visualInner=document.querySelector('#visual_section_inner')
    const visualList=document.querySelector('.visual_list')
    const visualLi=document.querySelectorAll('.visual_list>li')
    const visualImg=document.querySelectorAll('.visual_list>li>img')
    let visualLength=visualLi.length
    let visualWidth=null
    let currentIndex=0
    let nextIndex=1
    let timer=null

    visualReset()
    init()
    initEvent()
    autoPlay()

    function visualReset(){
        // 비디오영역
        videoWidth=videoWrap.offsetWidth
        gsap.set(videoImg, {width:videoWidth})
        gsap.set(videoWrap, {height:videoImg.offsetHeight})
        // 슬라이드영역
        visualWidth=visualWrap.offsetWidth
        gsap.set(visualLi, {width:visualWidth})
        gsap.set(visualImg, {width:visualWidth})
        gsap.set(visualWrap, {height:visualImg[0].offsetHeight})        
    }

    function init(){
        gsap.set(visualLi, {width:visualWidth})
        gsap.set(visualLi[0], {left:0})
    }

    function initEvent(){
        window.addEventListener('resize',visualReset)
    }

    function autoPlay(){
        timer=setInterval(slideNextImg,2500)
    }

    function slideNextImg(){
        nextIndex=currentIndex+1
        if(nextIndex>=visualLi.length){
            nextIndex=0
        }
        gsap.to(visualLi[currentIndex], {left:-visualWidth, duration:0.5, ease:'power1.out'})
        gsap.set(visualLi, {left:visualWidth})
        gsap.to(visualLi[nextIndex], {left:0, duration:0.5, ease:'power1.out', onComplete:()=>{
            gsap.to(visualLi[nextIndex], {duration:0.5, ease:'power1.out'})
        }})
        currentIndex=nextIndex
    }

    function slidePrevtImg(){
        nextIndex=currentIndex-1
        if(nextIndex<=0){
            nextIndex=visualLength-1
        }
        gsap.to(visualLi[currentIndex], {left:visualWidth, opacity:0, duration:0.5, ease:'power1.out'})
        gsap.set(visualLi, {left:-visualWidth, opacity:0})
        gsap.to(visualLi[nextIndex], {left:0, opacity:1, duration:0.5, ease:'power1.out'})
        currentIndex=nextIndex
    }
    
})