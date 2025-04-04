document.addEventListener('DOMContentLoaded',()=>{
  // history.scrollRestoration="manual"
        // window.scrollTo(0, 0);
  const mainMenu=document.querySelectorAll('#mainmenu_list>li>a')
  const subMenuList=document.querySelectorAll('.submenu_list')
  const headerWrap=document.querySelector('#header_wrap')
  let selectedMenu=null
  
  for(const item of mainMenu){
    item.addEventListener('mouseenter',showSubMenu)
  }
  for(const item of subMenuList){
    item.addEventListener('mouseenter',showSubMenu)
  }
  
  headerWrap.addEventListener('mouseleave',hideSubMenu)

  function showSubMenu(){
    headerWrap.classList.add('selected')
    gsap.to(headerWrap,{height:240,duration:0.3,ease:'power1.out'})
    gsap.set(subMenuList,{display:'block'})
    gsap.to(subMenuList,{opacity:1,delay:0.1,duration:0.3,ease:'power1.out'})
    if(selectedMenu!=null && selectedMenu!=this.parentElement){
      selectedMenu.classList.remove('selected')
    }
    if(selectedMenu!=this){
      selectedMenu=this.parentElement
      selectedMenu.classList.add('selected')
    }
  }
  function hideSubMenu(){
    gsap.set(subMenuList,{display:'none',opacity:0})
    gsap.to(headerWrap,{height:90,duration:0.3,ease:'power1.out'})
    if(selectedMenu!=null && selectedMenu!=this.parentElement){
      selectedMenu.classList.remove('selected')
      selectedMenu=null
    }
    headerWrap.classList.remove('selected')
    }
})