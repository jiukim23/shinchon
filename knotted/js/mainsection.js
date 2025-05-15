window.addEventListener('load',()=>{

    const section=document.querySelectorAll('.contents_inner>section')

    const menuWrap=document.querySelectorAll('.menusection_inner')
    const menuList=document.querySelector('.newmenu_list')
    const menuLi=document.querySelectorAll('.newmenu_list>li')
    
    const shopWrap=document.querySelector('.shopsection_inner')
    const shopList=document.querySelector('.shopmenu_list')
    const shopLi=document.querySelectorAll('.shopmenu_list>li')
    
    const prevBtn=document.querySelector('.newprev_btn')
    const nextBtn=document.querySelector('.newnext_btn')

    let menuWidth=null
    let menuHeight=null
    let sectionHeight=null
    let gap=16
    let menuFirstChild=menuLi[0]
    let menuLastChild=menuLi[menuLi.length-1]
    let shopFirstChild=shopLi[0]
    let newTimer=null
    let shopTimer=null
    let isSlide=false
    
    menuReset()
    initEvent()
    autoPlayNewMenu()
    autoPlayShopMenu()

    function initEvent(){
        window.addEventListener('resize',menuReset)
        prevBtn.addEventListener('click',slidePrevNewMenu)
        prevBtn.addEventListener('mouseenter',stopAutoPlayNewMenu)
        prevBtn.addEventListener('mouseleave',autoPlayNewMenu)
        nextBtn.addEventListener('click',slideNextNewMenu)
        nextBtn.addEventListener('mouseenter',stopAutoPlayNewMenu)
        nextBtn.addEventListener('mouseleave',autoPlayNewMenu)
        for(item of menuWrap){
            item.addEventListener('mouseenter',stopAutoPlayNewMenu)
            item.addEventListener('mouseleave',autoPlayNewMenu)
        }
    }

    function menuReset(){
        //메뉴슬라이드 높이 리셋
        menuWidth=menuLi[0].offsetWidth
        menuHeight=menuLi[0].offsetHeight
        gsap.set(menuWrap, {height:menuHeight+12})
        // gsap.set(btnWrap, {height:menuHeight})
        
        //샵메뉴슬라이드 높이 리셋 
        let shopHeight=shopLi[0].offsetHeight
        gsap.set(shopWrap, {height:shopHeight+12})
        
        // //섹션 높이 리셋
        // sectionHeight=section.offsetHeight/2+106
        // gsap.set(prevBtn, {top:sectionHeight})
    }

    function autoPlayNewMenu(){
        newTimer=setInterval(slideNextNewMenu,1700)
    }
    function stopAutoPlayNewMenu(){
        clearInterval(newTimer)
    }
    function autoPlayShopMenu(){
        shopTimer=setInterval(slideNextShopMenu,1700)
    }
    function stopAutoPlayShopMenu(){
        clearInterval(shopTimer)
    }

    function slideNextNewMenu(){
        if(isSlide==false){
            isSlide=true
            menuFirstChild = menuList.querySelectorAll('li')[0]
            gsap.to(menuList,{left:-(menuWidth+gap), duration:0.3, ease:'power1.out', onComplete:()=>{
                menuList.append(menuFirstChild)
                gsap.set(menuList, {left:0})
                menuFirstChild = menuList.querySelectorAll('li')[0]
                isSlide=false
            }})
        }
    }
    function slidePrevNewMenu(){
        if(isSlide==false){
            isSlide=true
            menuLastChild = menuList.querySelectorAll('li')[menuLi.length-1]
            gsap.set(menuList, {left:-(menuWidth+gap)})
            menuList.prepend(menuLastChild)
            gsap.to(menuList,{left:0, duration:0.3, ease:'power1.out', onComplete:()=>{
                isSlide=false
            }})

        }
    }

    function slideNextShopMenu(){
        gsap.to(shopList,{left:-(menuWidth+gap), duration:0.3, ease:'power1.out', onComplete:()=>{
            shopList.append(shopFirstChild)
            gsap.set(shopList, {left:0})
            shopFirstChild = shopList.querySelectorAll('li')[0]
        }})
    }


})