const regions_title = document.querySelectorAll('.region-name')
const regions_map = document.querySelectorAll('.japan-region')
const region_locations = document.querySelectorAll('.region-locations')
const next_showcase_region = document.querySelector(".next-button-showcase")
const prev_showcase_region = document.querySelector(".prev-button-showcase")
const region_showcase = document.querySelectorAll('.region-showcase')
let region_order = ['hokkaido', 'tohoku', 'kanto', 'chubu', 'kansai', 'chugoku', 'shikoku', 'kyushu', 'okinawa']
let region_order_index = null;
var last_region = null
var last_region_title = null
var last_showcase = null

regions_map.forEach(region => region.addEventListener('mouseenter', (event)=>{
    var index = 0
    next_showcase_region.style.opacity = '1'
    next_showcase_region.style.webkitOpacity = '1'
    next_showcase_region.style.pointerEvents = 'auto'
    prev_showcase_region.style.opacity = '1'
    prev_showcase_region.style.webkitOpacity = '1'
    prev_showcase_region.style.pointerEvents = 'auto'
    region_order_index = region_order.indexOf(region.id.replace('-region',''));
    for(let i = 0; i<regions_title.length; i++){
        if (region.id.includes(regions_title[i].id.replace('-region-name', ''))){
            index = i
            break
        }
    }
    /*since after hovering the region, it don't always changes its color back to normal due to a certain condition that
    the region color would only return to normal if the relatedTarget in mouseleave which is the  element that you 
    hovered after hovering out to the first element, is a region as well, hovering to marker or outside the regions,
    would trigger the mouseleave, that said, since they are not a region, we would just save the index of the region title
    and region itself, these two below utilizes those indexes if the relatedTarget is not a region; such as marker,
    or the white background, and we hovered after to a region, the index of the previous region and title is saved and can be 
    changed.*/ 
    if (last_region === null && last_region_title ===null){
        region.style.fill = 'rgb(38, 173, 38,0.5)';
        regions_title[index].style.transform = 'scale(' + 1.2 + ')';
        regions_title[index].style.webkitTransform = 'scale(' + 1.2 + ')';
        last_region = Array.from(regions_map).findIndex(element => element.id === region.id)
        last_region_title= index;
        for(let i=0; i<region_showcase.length;i++){
            if(region.id.includes(region_showcase[i].id.replace('-showcase', ''))){
                last_showcase = i
            }
        }
        region_showcase[last_showcase].style.opacity = '1' ;
        region_showcase[last_showcase].style.webkitOpacity = '1' ;
        region_showcase[last_showcase].style.pointerEvents  = 'auto';
    }
    else if(event.relatedTarget === null && region.id === regions_map[last_region].id && regions_title[last_region_title].id === regions_title[index].id){
        return
    }
    //if we came from a different application
    else if(event.relatedTarget === null){
        region.style.fill = 'rgb(38, 173, 38,0.5)';
        regions_title[index].style.transform = 'scale(' + 1.2 + ')';
        regions_title[index].style.webkitTransform = 'scale(' + 1.2 + ')';
        regions_title[last_region_title].style.transform = 'scale(' + 1 + ')'
        regions_title[last_region_title].style.webkitTransform = 'scale(' + 1 + ')'
        regions_map[last_region].style.fill = 'rgb(200,228,180)';
        last_region = Array.from(regions_map).findIndex(element => element.id === region.id)
        last_region_title= index
        region_showcase[last_showcase].style.opacity = '0'
        region_showcase[last_showcase].style.webkitOpacity = '0'
        region_showcase[last_showcase].style.pointerEvents  = 'none'
        for(let i=0; i<region_showcase.length;i++){
            if(region.id.includes(region_showcase[i].id.replace('-showcase', ''))){
                last_showcase = i
            }
        }
        region_showcase[last_showcase].style.opacity = '1' ;
        region_showcase[last_showcase].style.webkitOpacity = '1' ;
        region_showcase[last_showcase].style.pointerEvents  = 'auto';
    }
    //this applies to when you hovered to the whitebackground, marker, title and you wentback to the same region before you hover them
    else if (regions_map[last_region].id == region.id && regions_title[last_region_title] === regions_title[index]){
        return
    }
    //if we hover from a region to region without going through the marker or whitebackground
    else if(event.relatedTarget.id.includes('region')){
        region.style.fill = 'rgb(38, 173, 38,0.5)';
        regions_title[index].style.transform = 'scale(' + 1.2 + ')';
        regions_title[index].style.webkitTransform = 'scale(' + 1.2 + ')';
        last_region = Array.from(regions_map).findIndex(element => element.id === region.id)
        last_region_title= index
        region_showcase[last_showcase].style.opacity = '0'
        region_showcase[last_showcase].style.webkitOpacity = '0'
        region_showcase[last_showcase].style.pointerEvents  = 'none'
        for(let i=0; i<region_showcase.length;i++){
            if(region.id.includes(region_showcase[i].id.replace('-showcase', ''))){
                last_showcase = i
            }
        }
        region_showcase[last_showcase].style.opacity = '1' ;
        region_showcase[last_showcase].style.webkitOpacity = '1' ;
        region_showcase[last_showcase].style.pointerEvents  = 'auto';
    }
    //if we hover to another region from a marker or whitebackground
    else if(!event.relatedTarget.id.includes('region')){
        region.style.fill = 'rgb(38, 173, 38,0.5)';
        regions_title[index].style.transform = 'scale(' + 1.2 + ')';
        regions_title[index].style.webkitTransform = 'scale(' + 1.2 + ')';
        regions_title[last_region_title].style.transform = 'scale(' + 1 + ')'
        regions_title[last_region_title].style.webkitTransform = 'scale(' + 1 + ')'
        regions_map[last_region].style.fill = 'rgb(200,228,180)';
        last_region = Array.from(regions_map).findIndex(element => element.id === region.id)
        last_region_title= index;
        region_showcase[last_showcase].style.opacity = '0'
        region_showcase[last_showcase].style.webkitOpacity = '0'
        region_showcase[last_showcase].style.pointerEvents  = 'none'
        for(let i=0; i<region_showcase.length;i++){
            if(region.id.includes(region_showcase[i].id.replace('-showcase', ''))){
                last_showcase = i
            }
        }
        region_showcase[last_showcase].style.opacity = '1' ;
        region_showcase[last_showcase].style.webkitOpacity = '1' ;
        region_showcase[last_showcase].style.pointerEvents  = 'auto';
    }
}))

regions_map.forEach(region => region.addEventListener('mouseleave', (event)=>{
    var index = 0
    
    /*Since in some cases mouseleave trigger due to hovering to the marker or whitebackground, we need to save
    the index of the last region that trigger the mouseleave, so when we enter a different region through hovering
    the whitebackground or the marker, we can still change the region color to its default value*/
    for(let i = 0; i<regions_title.length; i++){
        if (region.id.includes(regions_title[i].id.replace('-region-name', ''))){
            index = i
            /*since we determined the index of the region title, we can save it to the last_region_title,
            we need this since, if next element that we're hovering to is not a region, it won't change back to its
            normal size. We save this so if we hover another region from notrelatedTarget (marker, whitebackground)
            we have its indexes that we can change */
            break
        }
    }
    //we need this condition statement, so if the marker and other elements that is not a region won't change 
    //the color of the region back to normal and we we will just return the region back to normal if
    //we hover to a different region, since the name's id have region in it (my fault), we need to
    //also check if it belongs to the region we just hovered out (we're currently hovering the name),
    //if it does, nothing will be done.

    //if we leave using alt tab or switching different app
    if (event.relatedTarget===null){
        return
    }
    else if (event.relatedTarget.id.includes('region')&&event.relatedTarget.id !=regions_title[index].id){
        region.style.fill = 'rgb(200,228,180)';
        regions_title[index].style.transform = 'scale(' + 1 + ')';
        regions_title[index].style.webkitTransform = 'scale(' + 1 + ')';
    }
} ))

regions_title.forEach(title => title.addEventListener('mouseenter', (event)=>{
    var index = 0
    next_showcase_region.style.opacity = '1'
    next_showcase_region.style.webkitOpacity = '1'
    next_showcase_region.style.pointerEvents = 'auto'
    prev_showcase_region.style.opacity = '1'
    prev_showcase_region.style.webkitOpacity = '1'
    prev_showcase_region.style.pointerEvents = 'auto'
    region_order_index = region_order.indexOf(title.id.replace('-region-name',''));
    for(let i=0; i<regions_map.length;i++){
        if (regions_map[i].id.includes(title.id.replace('-region-name', ''))){
            index = i
            break
        }
    }
    //if we first hovered on the name of the region instead of the map
    if(last_region_title === null && last_region ===null){
        title.style.transform = 'scale(' + 1.2 + ')';
        title.style.webkitTransform = 'scale(' + 1.2 + ')';
        regions_map[index].style.fill = 'rgb(38, 173, 38,0.5)';
        last_region_title = Array.from(regions_title).findIndex(element_title => element_title.id === title.id)
        last_region = index
        for(let i=0; i<region_showcase.length;i++){
            if(title.id.includes(region_showcase[i].id.replace('-showcase', ''))){
                last_showcase = i
            }
        }
        region_showcase[last_showcase].style.opacity = '1' ;
        region_showcase[last_showcase].style.webkitOpacity = '1' ;
        region_showcase[last_showcase].style.pointerEvents  = 'auto';
    }
    else if(event.relatedTarget === null && regions_map[index].id === regions_map[last_region].id && title.id === regions_title[last_region_title].id){
        return
    }
    //if we came from other application
    else if(event.relatedTarget === null){
        regions_title[last_region_title].style.transform = 'scale(' + 1 + ')'
        regions_title[last_region_title].style.webkitTransform = 'scale(' + 1 + ')'
        regions_map[last_region].style.fill = 'rgb(200,228,180)'; //we turn the last region we hovered to its default color
        title.style.transform = 'scale(' + 1.2 + ')';
        title.style.webkitTransform = 'scale(' + 1.2 + ')';
        regions_map[index].style.fill = 'rgb(38, 173, 38,0.5)'; 
        last_region_title = Array.from(regions_title).findIndex(element_title => element_title.id === title.id)
        last_region = index
        region_showcase[last_showcase].style.opacity = '0'
        region_showcase[last_showcase].style.webkitOpacity = '0'
        region_showcase[last_showcase].style.pointerEvents  = 'none'
        for(let i=0; i<region_showcase.length;i++){
            if(title.id.includes(region_showcase[i].id.replace('-showcase', ''))){
                last_showcase = i
            }
        }
        region_showcase[last_showcase].style.opacity = '1' ;
        region_showcase[last_showcase].style.webkitOpacity = '1' ;
        region_showcase[last_showcase].style.pointerEvents  = 'auto';

    }
    //if we go through the white background or marker
    else if(!event.relatedTarget.id.includes('region')){
        regions_title[last_region_title].style.transform = 'scale(' + 1 + ')'
        regions_title[last_region_title].style.webkitTransform = 'scale(' + 1 + ')'
        regions_map[last_region].style.fill = 'rgb(200,228,180)'; //we turn the last region we hovered to its default color
        title.style.transform = 'scale(' + 1.2 + ')';
        title.style.webkitTransform = 'scale(' + 1.2 + ')';
        regions_map[index].style.fill = 'rgb(38, 173, 38,0.5)'; 
        last_region_title = Array.from(regions_title).findIndex(element_title => element_title.id === title.id)
        last_region = index
        region_showcase[last_showcase].style.opacity = '0'
        region_showcase[last_showcase].style.webkitOpacity = '0'
        region_showcase[last_showcase].style.pointerEvents  = 'none'
        for(let i=0; i<region_showcase.length;i++){
            if(title.id.includes(region_showcase[i].id.replace('-showcase', ''))){
                last_showcase = i
            }
        }
        region_showcase[last_showcase].style.opacity = '1' ;
        region_showcase[last_showcase].style.webkitOpacity = '1' ;
        region_showcase[last_showcase].style.pointerEvents  = 'auto';
    }
    else if(event.relatedTarget.id === regions_map[index].id){
        return
    }
    //if we manage to go to a regions name through a different regions map
    else if(event.relatedTarget.id.includes('region') && event.relatedTarget.id!=regions_map[index].id){
        title.style.transform = 'scale(' + 1.2 + ')';
        title.style.webkitTransform = 'scale(' + 1.2 + ')';
        regions_map[index].style.fill = 'rgb(38, 173, 38,0.5)'; 
        last_region_title = Array.from(regions_title).findIndex(element_title => element_title.id === title.id)
        last_region = index
        region_showcase[last_showcase].style.opacity = '0'
        region_showcase[last_showcase].style.webkitOpacity = '0'
        region_showcase[last_showcase].style.pointerEvents  = 'none'
        for(let i=0; i<region_showcase.length;i++){
            if(title.id.includes(region_showcase[i].id.replace('-showcase', ''))){
                last_showcase = i
            }
        }
        region_showcase[last_showcase].style.opacity = '1' ;
        region_showcase[last_showcase].style.webkitOpacity = '1' ;
        region_showcase[last_showcase].style.pointerEvents  = 'auto';
    }
}))


regions_title.forEach(title => title.addEventListener('mouseleave', (event)=>{
    var index = 0
    for(let i=0; i<regions_map.length;i++){
        if (regions_map[i].id.includes(title.id.replace('-region-name', ''))){
            index = i
            break
        }
    }
    //since we only return the regions normal color and its name when we hover to other regions
    //the second condition is that to prevent when we hover the region name and went back to the region,
    //it won't change the color and the name size, only if we hover to a new region.
    if(event.relatedTarget === null){
        return 
    }
    else if (event.relatedTarget.id.includes('region') && event.relatedTarget.id!=regions_map[index].id){
        regions_map[index].style.fill = 'rgb(200,228,180)';
        title.style.transform = 'scale(' + 1+ ')';
        title.style.webkitTransform = 'scale(' + 1+ ')';
    }
}))

prev_showcase_region.addEventListener("click", ()=>{
    regions_map[last_region].style.fill = 'rgb(200,228,180)';
    regions_title[last_region_title].style.transform = 'scale(' + 1+ ')';
    regions_title[last_region_title].style.webkitTransform = 'scale(' + 1+ ')';
    region_showcase[last_showcase].style.opacity = '0'
    region_showcase[last_showcase].style.webkitOpacity = '0'
    region_showcase[last_showcase].style.pointerEvents  = 'none'
    if(region_order_index===0){
        region_order_index=region_order.length-1
    }
    else{
        region_order_index= region_order.indexOf(regions_map[last_region].id.replace('-region', '')) -1
    }
    for (let i=0; i<regions_map.length;i++){
        if(regions_map[i].id.includes(region_order[region_order_index])){
            last_region = i
        }
    }
    for (let i=0; i<regions_title.length;i++){
        if(regions_title[i].id.replace('-region-name', '').includes(region_order[region_order_index])){
            last_region_title = i
        }
    }
    for (let i=0;i<region_showcase.length;i++){
        if(region_showcase[i].id.replace('-showcase', '').includes(region_order[region_order_index])){
            last_showcase = i
        }
    }
    regions_map[last_region].style.fill = 'rgb(38, 173, 38,0.5)';
    regions_title[last_region_title].style.transform = 'scale(' + 1.2+ ')';
    regions_title[last_region_title].style.webkitTransform = 'scale(' + 1.2+ ')';
    region_showcase[last_showcase].style.opacity = '1'
    region_showcase[last_showcase].style.webkitOpacity = '1'
    region_showcase[last_showcase].style.pointerEvents  = 'auto'

})

next_showcase_region.addEventListener("click", ()=>{
    regions_map[last_region].style.fill = 'rgb(200,228,180)';
    regions_title[last_region_title].style.transform = 'scale(' + 1+ ')';
    regions_title[last_region_title].style.webkitTransform = 'scale(' + 1+ ')';
    region_showcase[last_showcase].style.opacity = '0'
    region_showcase[last_showcase].style.webkitOpacity = '0'
    region_showcase[last_showcase].style.pointerEvents  = 'none'
    if(region_order_index===region_order.length-1){
        region_order_index = 0
    }
    else{
        region_order_index = region_order.indexOf(regions_map[last_region].id.replace('-region', '')) + 1
    }
    for (let i=0; i<regions_map.length;i++){
        if(regions_map[i].id.includes(region_order[region_order_index])){
            last_region = i
        }
    }
    for (let i=0; i<regions_title.length;i++){
        if(regions_title[i].id.replace('-region-name', '').includes(region_order[region_order_index])){
            last_region_title = i
        }
    }
    for (let i=0;i<region_showcase.length;i++){
        if(region_showcase[i].id.replace('-showcase', '').includes(region_order[region_order_index])){
            last_showcase = i
        }
    }
    regions_map[last_region].style.fill = 'rgb(38, 173, 38,0.5)';
    regions_title[last_region_title].style.transform = 'scale(' + 1.2+ ')';
    regions_title[last_region_title].style.webkitTransform = 'scale(' + 1.2+ ')';
    region_showcase[last_showcase].style.opacity = '1'
    region_showcase[last_showcase].style.webkitOpacity = '1'
    region_showcase[last_showcase].style.pointerEvents  = 'auto'
})