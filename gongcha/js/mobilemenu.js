window.addEventListener('load',()=>{
    const menubtn=document.querySelector('.mobilemenu_btn')
    const menuwrap=document.querySelector('#mobilemenu')
    const menuLi=document.querySelectorAll('.mobilemenu_list>li')

    let menuWrapWidth=window.innerWidth
    let menuHeight=null
    let isOpen=false
    let isActive=false

    // 메뉴랩 초기설정
    gsap.set(menuwrap,{right:-menuWrapWidth})

    menubtn.style.border='solid 2px red'
    menubtn.addEventListener('click',mobileMenuOpen)
    menubtn.addEventListener('focus',mobileMenuOpen)

    for (const item of menuLi){
        const menuTitle=item.querySelector('button')
        menuTitle.addEventListener('click',()=>{subMenuOpen(item, menuTitle)})
        menuTitle.addEventListener('focus',()=>{subMenuOpen(item,menuTitle)})
    }

    function mobileMenuOpen(){
        if(isOpen == false){
            menubtn.style.backgroundImage = "url('/gongcha/images/mobilemenu_x.svg')";
            gsap.set('body,html',{overflow:'hidden'})
            gsap.set(menuwrap, {display:'block'})
            gsap.to(menuwrap,{right:0,duration:0.2,ease:'power1.out', onComplete:()=>{
                isOpen=true
            }})
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
        if(!item.classList.contains('active')){
            activeSubMenu(item, menuTitle)
        }else{
            unActiveSubMenu(item, menuTitle)
        }
    }

    // 모바일서브메뉴 ul의 길이조절방식
    function activeSubMenu(item, menuTitle){
        const submenu=item.querySelector('.mobilesubmenu_list');
        submenu.style.height = 'auto';
        const submenuHeight=submenu.scrollHeight;

        item.classList.add('open')
        gsap.set(submenu,{height:0,overflow:'hidden'})
        gsap.to(submenu, {height:submenuHeight, duration:0.3, ease:'power1.out', onComplete:()=>{
            item.classList.add('active')
            menuTitle.setAttribute('aria-expanded', 'true')
        }})

    }
    function unActiveSubMenu(item, menuTitle){
        const submenu=item.querySelector('.mobilesubmenu_list');
        gsap.to(submenu, {height:0, duration:0.3, ease:'power1.out', onComplete:()=>{
            item.classList.remove('active')
            menuTitle.setAttribute('aria-expanded','false')
        }})
    }


    // 모바일메뉴의 li가 열리는 방식

    // function activeSubMenu(item, menuTitle){
    //     menuHeight=item.scrollHeight;
    //     gsap.set(item,{height:60})
    //     gsap.to(item,{height:menuHeight,duration:0.3,ease:'power1.out',onComplete:()=>{
    //         item.classList.add('active')
    //         menuTitle.setAttribute('aria-expanded', 'true')
    //     }})
    // }
    // function unActiveSubMenu(item, menuTitle){
    //     gsap.to(item,{height:60,duration:0.3,ease:'power1.out',onComplete:()=>{
    //         item.classList.remove('active')
    //         menuTitle.setAttribute('aria-expanded', 'false')
    //     }})
    // }

})