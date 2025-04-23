document.addEventListener('DOMContentLoaded',()=>{

    const tabMenu=document.querySelectorAll('.sectionmenu_list>li>button')
    const menuWrap=document.querySelector('#menu_container')

    let selectedMenu=tabMenu[0]

    tabMenu.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            tabEvents(index)
        })
    })

    function tabEvents(index){
        // alert(index)
        showCards(index)
        btnActive(index)
    }

    function showCards(index){
        axios.get(`/gongcha/axios/menucard_0${index}.html`).then((res)=>{
            menuWrap.innerHTML=res.data

            new Swiper(".mySwiper", {
                slidesPerView: 'auto',
                spaceBetween: 16,
                // 기타 옵션들
            });
        })
    }

    function btnActive(index){
        if(selectedMenu!=tabMenu[index]){
            selectedMenu.parentElement.classList.remove('active')
            selectedMenu=tabMenu[index]
            selectedMenu.parentElement.classList.add('active')
        }
    }


})