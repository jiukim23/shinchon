document.addEventListener('DOMContentLoaded',()=>{

    const headerWrap=document.querySelector('#header_wrap')
    const header=document.querySelector('header')
    const mainMenu=document.querySelectorAll('#mainmenu_list>li>a')
    const subMenu=document.querySelectorAll('.submenu_list>li')

    let selectedMenu=null


    for(item of mainMenu){
        // item.style.border='solid 2px yellow'
        item.parentElement.addEventListener('mouseenter',showSubMenu)
        item.addEventListener('focus',showSubMenu)
    }

    header.addEventListener('mouseleave',hideSubMenu)

    function showSubMenu(){
        gsap.to(headerWrap,{height:280,duration:0.2,ease:'power1.out'})
        gsap.set(subMenu,{display:'block'})
        gsap.to(subMenu,{opacity:1,delay:0.2,duration:0.2,ease:'power1.out'})

        if(selectedMenu!=null&&selectedMenu!=this){
            selectedMenu.classList.remove('selected')
        }
        if(selectedMenu!=this){
            selectedMenu=this
            selectedMenu.classList.add('selected')
        }
    }

    function hideSubMenu(){
        gsap.to(subMenu,{opacity:0,duration:0.2,ease:'power1.out',onComplete:()=>{
            gsap.set(subMenu,{display:'none'})
        }})
        gsap.to(headerWrap,{height:88,duration:0.2,ease:'power1.out'})

       // if(selectedMenu!=null){
            selectedMenu?.classList.remove('selected')
            selectedMenu=null
        //}

        
    }

})