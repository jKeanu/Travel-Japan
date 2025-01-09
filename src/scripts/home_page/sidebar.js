const sidebar_close = document.querySelector('.sidebar-close-button');
const sidebar = document.querySelector('.sidebar-container');
const sidebar_overlay = document.querySelector('.sidebar-overlay')
const open_sidebar = document.querySelector('.sidebar-button')
const header = document.querySelector('.header1')
var scrollbar_width =  window.innerWidth - document.documentElement.clientWidth;



open_sidebar.addEventListener('click', ()=>{
    sidebar.style.right = '0';
    sidebar_overlay.style.display = 'block';
    sidebar_overlay.style.pointerEvents = 'auto';
    sidebar_overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = scrollbar_width + 'px';
    header.style.paddingRight = scrollbar_width + 'px';
})

sidebar_close.addEventListener('click', ()=>{
    sidebar.style.right = '-15rem';
    sidebar_overlay.style.pointerEvents = 'none';
    sidebar_overlay.style.backgroundColor = 'transparent';
    setTimeout(function(){
        document.body.style.margin = "";
        document.body.style.height = "";
        document.body.style.overflow = "";
        document.body.style.paddingRight = '0'
        header.style.paddingRight = '0';
    }, 280)
})

sidebar_overlay.addEventListener('click', ()=>{
    sidebar.style.right = '-15rem';
    sidebar_overlay.style.pointerEvents = 'none';
    sidebar_overlay.style.backgroundColor = 'transparent';
    setTimeout(function(){
        document.body.style.margin = "";
        document.body.style.height = "";
        document.body.style.overflow = "";
        document.body.style.paddingRight = '0'
        header.style.paddingRight = '0';
    }, 280)
})