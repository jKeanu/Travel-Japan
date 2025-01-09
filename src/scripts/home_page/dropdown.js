// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';


let swiper3 = new Swiper(".right-dslides", {
    grabCursor: true,
    effect: "creative",
    loop: true,   
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });


const main_dropdown = document.querySelector('.dropdown-main-container');
const dropdown_right_section =  document.querySelectorAll('.section-right-dsection')
const section_button = document.querySelectorAll('.dsection-button')
const slides = document.querySelectorAll('.right-dslides')
const header_button = document.querySelectorAll('.button-link')
const main_contents = document.querySelectorAll('.dropdown-main-section-container')
let last_content = null
let last_section = null
let last_highlight = null



main_dropdown.addEventListener('mouseleave', (event)=>{
    //if we change apps while hovering the dropdown menu
    if(event.relatedTarget===null){
        main_dropdown.style.webkitTransform = 'scaleY(0)'
        main_dropdown.style.transform = 'scaleY(0)'
        //we need to check this since, if youre hovering way too fast, there are cases that the main dropdown menu has not yet cameback yet totally to zero scaleY(0) since,
        //it has a delay 0f 0.4s it might overlap.
        if (last_content!==null){
            last_content.style.display ='none'
            last_content = null
        }
        if (last_section!==null){
            try{
                last_section.querySelector('.right-dslides').swiper.autoplay.stop()
            }
            catch(err){
            }
            last_section.style.display = 'none'
            last_section = null
            last_highlight.style.color ='black'
            last_highlight = null
        }
    }

    //if we hover header buttons after we hover the dropdown menuin which we don't need to remove the dropdown menu, except the about us and blog buttons
    else if(event.relatedTarget.id.includes('button-link')){
        if(event.relatedTarget.id.includes('about-us') || event.relatedTarget.id.includes('blog') ){
            main_dropdown.style.webkitTransform = 'scaleY(0)'
            main_dropdown.style.transform = 'scaleY(0)'
            if (last_content!==null){
                last_content.style.display ='none'
                last_content = null
            }
            if (last_section!==null){
                try{
                    last_section.querySelector('.right-dslides').swiper.autoplay.stop()
                }
                catch(err){

                }
                last_section.style.display = 'none'
                last_section = null
                last_highlight.style.color ='black'
                last_highlight = null
            }
        }
        //if we don't do this, when we hovered to a different header button then hovered back to the same button again
        //it will have the last section shown, we don't want that since it has a slide although the slide is hidden
        //its count is moving, that said when display is none the image are not moving which will cause overlapping.
        //and we also do this for appearance.----------------------------------------------
        if (last_section!==null){
            try{
                last_section.querySelector('.right-dslides').swiper.autoplay.stop()
            }
            catch(err){
            }
            last_section.style.display = 'none'
            last_section = null
            last_highlight.style.color ='black'
            last_highlight = null
        }
        //since we already have a function on where once a button link with drop down has been hovered; causing the last dropdown contents to display
        //none, and show the corresponding dopdowncontents of the hovered link, we just need to return in this case
        return
    }
    else{
        //if we hoverout from the dropdown menu that is not a button-link and not changing apps.
        if (last_content !== null){
            last_content.style.display = 'none'
        }
        main_dropdown.style.webkitTransform = 'scaleY(0)'
        main_dropdown.style.transform = 'scaleY(0)'
        last_content = null
        if (last_section!==null){
            try{
                last_section.querySelector('.right-dslides').swiper.autoplay.stop()
            }
            catch(err){
            }
            last_section.style.display = 'none'
            last_section = null
            last_highlight.style.color ='black'
            last_highlight = null
        }
    }
})

header_button.forEach(hbutton => hbutton.addEventListener('mouseenter', (event)=>{
    for(let i = 0; i<main_contents.length; i++){
        //checking the corresponding dropdown contents based on the innerhtml. We can use id but idk why I did this, well it works.
        if(main_contents[i].id.includes(hbutton.innerHTML.replace(/ /g, '-').toLowerCase())){
            //if we hovered from the browser itself, such as from the bookmarks, since they are both on top
            if(event.relatedTarget===null){
                last_content = main_contents[i]
                main_dropdown.style.webkitTransform = 'scaleY(1)'
                main_dropdown.style.transform = 'scaleY(1)'
                main_contents[i].style.display = 'flex'
            }
            //for time hovering to the button
            else if(last_content === null){
                last_content = main_contents[i]
                main_dropdown.style.webkitTransform = 'scaleY(1)'
                main_dropdown.style.transform = 'scaleY(1)'
                main_contents[i].style.display = 'flex'
            }
            //if we hovered from the dropdown menu
            else if(event.relatedTarget === main_dropdown){
                if (last_content === main_contents[i]){
                    return
                }
                else{
                    last_content.style.display = 'none'
                    last_content = main_contents[i]
                    main_contents[i].style.display = 'flex'
                    main_dropdown.style.webkitTransform = 'scaleY(1)'
                    main_dropdown.style.transform = 'scaleY(1)'
                }
            }
            //if we hovered from another header button
            else if(event.relatedTarget.id.includes('button-link')){
                last_content = main_contents[i]
                main_contents[i].style.display = 'flex'
                main_dropdown.style.webkitTransform = 'scaleY(1)'
                main_dropdown.style.transform = 'scaleY(1)'
            }
            return
        }
    }
}))


header_button.forEach(hbutton => hbutton.addEventListener('mouseleave', (event)=>{
    for(let i = 0; i<main_contents.length; i++){
        if(main_contents[i].id.includes(hbutton.innerHTML.replace(/ /g, '-').toLowerCase())){
            //if we alttab or go to a different location or, go to the settings of the browser, such as bookmark
            if(event.relatedTarget === null){
                main_contents[i].style.display = 'none'
                main_dropdown.style.webkitTransform = 'scaleY(0)'
                main_dropdown.style.transform = 'scaleY(0)'
                last_content = null
            }
            //hovering from a different header button00
            else if(event.relatedTarget.id.includes('button-link')){
                //we don't have blog and abous us dropdown contents.
                if(event.relatedTarget.id.includes('about-us') || event.relatedTarget.id.includes('blog') ){
                    
                    main_dropdown.style.transform = 'scaleY(0)'
                    main_dropdown.style.webkitTransform = 'scaleY(0)'
                    if (last_content!== null){
                        last_content.style.display = 'none'
                    }
                    last_content = null
                    return
                }
                main_contents[i].style.display = 'none'
            }
            else if(event.relatedTarget === main_dropdown){
                return 
            }
            else{
                if(last_content!==null){
                    last_content.style.display='none'
                }

                main_dropdown.style.webkitTransform = 'scaleY(0)'
                main_dropdown.style.transform = 'scaleY(0)'
                last_content = null
            }
            return
        }
    }
}))

section_button.forEach(button=> button.addEventListener('mouseenter', (event)=>{
    for(let i = 0; i<dropdown_right_section.length; i++){
        if(dropdown_right_section[i].id.includes(button.id.replace('-dbutton', ''))){
            //dropdown_right_section[i].style.display = 'flex'  --------------------------
            if(last_section === null){
                last_section = dropdown_right_section[i];
                dropdown_right_section[i].style.display = 'flex'
                last_highlight = button
                button.style.color = 'red'
                try{
                    //setting up the delay elsewhere, such as during when the slide have display none won't change its
                    //delay, that's why when you optimize the swiper3 with the delay and autoplay is on, it would interfere
                    //with the autoplay.start() and autoplay.stop() since during that time the slides have display none.
                    //WHEN YOU DISPLAY NONE, ALL ANIMATIONS WILL BE PAUSED AND LAYOUT CHANGE AND RENDER
                    dropdown_right_section[i].querySelector('.right-dslides').swiper.params.autoplay.delay = 3000
                    dropdown_right_section[i].querySelector('.right-dslides').swiper.autoplay.start(); 
                }
                catch(err){
                }
            }
            //if we hover to the white background after hovering to the section button then came back to the same section button
            else if(last_section === dropdown_right_section[i]){
                return
            }
            //if we came from a different section button
            else if(event.relatedTarget.id.includes('-dbutton')){
                last_highlight = button
                button.style.color = 'red'
                last_section = dropdown_right_section[i];
                dropdown_right_section[i].style.display = 'flex';
                try{
                    dropdown_right_section[i].querySelector('.right-dslides').swiper.params.autoplay.delay = 3000
                    dropdown_right_section[i].querySelector('.right-dslides').swiper.autoplay.start();
                }
                catch(err){

                }
            }
            //if we came from the white background
            else{
                last_highlight.style.color  = 'black'
                last_highlight = button
                button.style.color = 'red'
                try{
                    last_section.querySelector('.right-dslides').swiper.autoplay.stop()
                }
                catch(err){

                }
                last_section.style.display = 'none';
                last_section = dropdown_right_section[i];
                dropdown_right_section[i].style.display = 'flex';
                try{
                    dropdown_right_section[i].querySelector('.right-dslides').swiper.params.autoplay.delay = 3000
                    dropdown_right_section[i].querySelector('.right-dslides').swiper.autoplay.start();
                }
                catch(err){
                }
            }
            return

        }
    }
}))

section_button.forEach(button=> button.addEventListener('mouseleave', (event)=>{
    for(let i = 0; i<dropdown_right_section.length; i++){
        if(dropdown_right_section[i].id.includes(button.id.replace('-dbutton', ''))){
            if(event.relatedTarget.id.includes('right-dsection')){
                return
            }
            else if(event.relatedTarget.id.includes('-dbutton')){
                dropdown_right_section[i].style.display = 'none' 
                button.style.color = 'black'
                try{
                    dropdown_right_section[i].querySelector('.right-dslides').swiper.autoplay.stop()
                }
                catch{}
            }
            else{
                return
            }
            return
            
        }
    }
}))
