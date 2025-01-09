const markers = document.querySelectorAll('.location-marker-link');
const location_name = document.querySelectorAll('.map-location-name')
const regions_map = document.querySelectorAll('.japan-region')


markers.forEach(marker=> marker.addEventListener('mouseenter', ()=>{
    var index = 0
    for(let i =0; i<location_name.length; i++){
        if (marker.id.includes(location_name[i].id)){
            index  = i
            break
        }
    }
    marker.style.transform = 'scale(' + 1.3 + ')';
    location_name[index].style.transform = 'scale(' + 1.2 + ')';
    location_name[index].style.color = 'red'
}))


markers.forEach(marker=> marker.addEventListener('mouseleave', ()=>{
    var index = 0
    for(let i =0; i<location_name.length; i++){
        if (marker.id.includes(location_name[i].id)){
            index  = i
            break
        }
    }

    marker.style.transform = 'scale(' + 1 + ')';
    location_name[index].style.transform = 'scale(' + 1 + ')';
    location_name[index].style.color = 'black'
}))

location_name.forEach(name=>name.addEventListener('mouseenter', ()=>{
    var index = 0
    for(let i =0; i<markers.length; i++){
        if (markers[i].id.includes(name.id)){
            index  = i
            break
        }
    }
    name.style.transform = 'scale(' + 1.2 + ')';
    name.style.color ='red'
    markers[index].style.transform = 'scale(' + 1.3 + ')';
}))


location_name.forEach(name=>name.addEventListener('mouseleave', ()=>{
    var index = 0
    for(let i =0; i<markers.length; i++){
        if (markers[i].id.includes(name.id)){
            index  = i
            break
        }
    }
    name.style.transform = 'scale(' + 1 + ')';
    name.style.color ='black'
    markers[index].style.transform = 'scale(' + 1 + ')';
}))