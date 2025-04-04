document.addEventListener('DOMContentLoaded',()=>{
  const totalMenuIcon=document.querySelector('.totalmenubar')
  // totalMenuIcon.style.border='solid 3px yellow'
  const totalMenu=document.querySelector('#totalmenu_wrap')
  const closeBtn=document.querySelector('.close_btn')
  const totalMenuList=document.querySelectorAll('#totalmenu_list>li')
  let selectedMenu=null

  totalMenuIcon.addEventListener('click',showTotalMenu)
  closeBtn.addEventListener('click',hideTotalMenu)

  for(const item of totalMenuList){
    item.addEventListener('mouseenter',activeMenu)
  }

  function showTotalMenu(){
    gsap.set(totalMenu,{display:'block'})
    document.body.style.overflow = 'hidden';
  }
  function hideTotalMenu(){
    gsap.set(totalMenu,{display:'none'})
    document.body.style.overflow = '';
  }
  function activeMenu(){
    if(selectedMenu!=null && selectedMenu!=this){
      selectedMenu.classList.remove('selected')
    }
    if(selectedMenu!=this){
      selectedMenu=this
      selectedMenu.classList.add('selected')
    }
  }

  
})