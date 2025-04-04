document.addEventListener('DOMContentLoaded',()=>{

    const container=document.querySelector('#menu_container')
    const cardSlider=document.querySelector('.menucard_list')
    const menucard=document.querySelectorAll('.menucard_list>li')

    let pressed=false
    let x=null
    let startX=null

    cardSlider.style.left='0px';

    container.addEventListener('mousedown',(e)=>{
        pressed=true
        // startX=e.offsetX-cardSlider.offsetLeft
        const containerRect = container.getBoundingClientRect();
        startX = e.clientX - containerRect.left - cardSlider.offsetLeft;
        
    })

    container.addEventListener('mousemove',(e)=>{
        if(!pressed) return
        e.preventDefault()
        // x=e.offsetX
        const containerRect = container.getBoundingClientRect();
        x = e.clientX - containerRect.left;

        cardSlider.style.left=`${x-startX}px`
        checkboundary()
    })

    window.addEventListener('mouseup',(e)=>{
        pressed=false;
    })

    function checkboundary(){
        let outer = container.getBoundingClientRect()
        let inner = cardSlider.getBoundingClientRect()

        if(parseInt(cardSlider.style.left)>0){
            cardSlider.style.left='0px'
        }else if(inner.right<outer.right){
            cardSlider.style.left=`${inner.width-outer.width}px`
        }
    }
})