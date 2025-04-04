document.addEventListener('DOMContentLoaded',()=>{

    const headerWrap=document.querySelector('#header_wrap')
    const header=document.querySelector('header')
    const mainMenu=document.querySelectorAll('#mainmenu_list>li')
    const subMenu=document.querySelectorAll('.submenu_list>li')

    let selectedMenu=null
    let activatedMenu=null

    for(item of mainMenu){
        // item.style.border='solid 3px yellow'
        item.addEventListener('mouseenter',showSubmenu)
        item.addEventListener('focus',showSubmenu)
    }
    for(item of subMenu){
        // item.style.border='solid 2px pink'
        item.addEventListener('mouseenter',menuActive)
        item.addEventListener('mouseleave',menuUnactive)
        item.addEventListener('focus',menuActive)
    }

    header.addEventListener('mouseleave',hideSubmenu)

    function showSubmenu(){
        gsap.to(headerWrap,{height:280,duration:0.2,ease:'power1.out'})
        gsap.set(subMenu,{display:'block'})
        gsap.to(subMenu,{opacity:1,delay:0.3,duration:0.2,ease:'power1.out'})
        if(selectedMenu!=null&&selectedMenu!=this){
            selectedMenu.classList.remove('selected')
        }
        if(selectedMenu!=this){
            selectedMenu=this
            selectedMenu.classList.add('selected')
        }
    }
    function hideSubmenu(){
        gsap.set(subMenu,{opacity:0, display:'none'})
        gsap.to(headerWrap,{height:88,duration:0.2,ease:'power1.out'})
        if(selectedMenu!=null){
            selectedMenu.classList.remove('selected')
            selectedMenu=null
        }
    }

    function menuActive(){
        if(activatedMenu!=null && activatedMenu!=this){
            activatedMenu.classList.remove('activated')
        }
        if(activatedMenu!=this){
            activatedMenu=this
            activatedMenu.classList.add('activated')
        }
    }
    function menuUnactive(){
        activatedMenu.classList.remove('activated')
        activatedMenu=null
    }




})