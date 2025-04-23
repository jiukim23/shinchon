document.addEventListener('DOMContentLoaded',()=>{

    const sectionWrap=document.querySelector('#section_wrap')
    const menuBtn=document.querySelectorAll('.menubtn_list>li>button')
    const beverageBtn=document.querySelectorAll('#beveragebtn_list>li>button')
    const dessertBtn=document.querySelectorAll('#dessertbtn_list>li>button')
    const mdBtn=document.querySelectorAll('#mdbtn_list>li>button')
    let selectedMenu=menuBtn[0]

    const menuImg=document.querySelectorAll('.menu_img')
    const viewBox=document.createElement('div')
    viewBox.classList.add('view_box')
    viewBox.innerHTML='<p>자세히보기</p><span></span>'

    menuImg.forEach((item)=>{
        item.addEventListener('mouseenter',()=>{
            item.append(viewBox)
        })
        item.addEventListener('mouseleave',()=>{
            viewBox.remove()
        })
    })

    menuBtn.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            btnSelected(index)
        })
    })
    beverageBtn.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            showListBeverage(index)
        })
    })
    dessertBtn.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            showListDessert(index)
        })
    })
    mdBtn.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            showListMd(index)
        })
    })

    function btnSelected(index){
        if(selectedMenu!=menuBtn[index]){
            selectedMenu.parentElement.classList.remove('selected')
            selectedMenu=menuBtn[index]
            selectedMenu.parentElement.classList.add('selected')
        }
    }
    function showListBeverage(index){
        axios.get(`/gongcha/axios/beverage0${index}.html`).then((res)=>{
            sectionWrap.innerHTML=res.data
        })
    }
    function showListDessert(index){
        axios.get(`/gongcha/axios/dessert0${index}.html`).then((res)=>{
            sectionWrap.innerHTML=res.data
        })
    }
    function showListMd(index){
        axios.get(`/gongcha/axios/md0${index}.html`).then((res)=>{
            sectionWrap.innerHTML=res.data
        })
    }


})