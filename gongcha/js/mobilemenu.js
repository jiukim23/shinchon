window.addEventListener('load',()=>{
    const header=document.querySelector('header')
    const menuwrap=document.querySelector('#mobilemenu')
    const menubtn=document.querySelector('.mobilemenu_btn')
    const menuLi=document.querySelectorAll('.mobilemenu_list>li')

    let menuWrapWidth=window.innerWidth
    let menuHeight=null
    let isOpen=false
    let isActive=null


    // 메뉴랩 초기설정
    gsap.set(menuwrap,{right:-menuWrapWidth})

    menubtn.addEventListener('click',mobileMenuOpen)
    menubtn.addEventListener('focus',mobileMenuOpen)

    for (const item of menuLi){
        const menuTitle=item.querySelector('button')
        menuTitle.addEventListener('click',()=>{subMenuOpen(item, menuTitle)})
        memiTitle.addEventListener('focus',()=>{subMenuOpen(item,menuTitle)})
    }

    function mobileMenuOpen(){
        if(isOpen == false){
            menubtn.style.backgroundImage = "url('/gongcha/images/mobilemenu_x.svg')";
            gsap.set('body,html',{overflow:'hidden'})
            gsap.set(menuwrap, {display:'block'})
            gsap.to(menuwrap,{right:0,duration:0.2,ease:'power1.out'})
            isOpen=true
        }else if(isOpen == true){
            menubtn.style.backgroundImage="url('/gongcha/images/mobilemenu_btn.svg')"
            gsap.to(menuwrap, {right:-menuWrapWidth,duration:0.2,ease:'power1.out', onComplete:()=>{
                gsap.set(menuwrap,{display:'none'})
                gsap.set('body,html',{overflow:'visible'})
                menuLi.forEach((item) => {
                    unActiveSubMenu(item)
                  })
                isOpen=false
            }})
        }
    }

    function subMenuOpen(item, menuTitle){
        isActive=item.classList.contains('active')

        if(!isActive){
            activeSubMenu(item, menuTitle)

        }else if(isActive){
            unActiveSubMenu(item, menuTitle)
        }
    }

    function activeSubMenu(item, menuTitle){
        item.classList.add('active')
        menuHeight=item.scrollHeight;
        gsap.set(item,{height:60})
        gsap.to(item,{height:menuHeight,duration:0.3,ease:'power1.out'})
        menuTitle.setAttribute('aria-expanded', 'true')

    }
    function unActiveSubMenu(item, menuTitle){
        gsap.to(item,{height:60,duration:0.3,ease:'power1.out',onComplete:()=>{
            item.classList.remove('active')
            menuTitle.setAttribute('aria-expanded', 'false')
        }})
    }
})