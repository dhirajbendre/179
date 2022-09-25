let coordinates={}
$(document).ready(function(){
    get_coordinates();

})
function get_coordinates(){
    let searchparams =new URLSearchParams(window.location.search)
    if(searchparams.has('source')&& searchparams.has('destination')){
        let source=searchparams.get('source')
        let destination=searchparams.get('destination')
        coordinates.source_latitude=source.split(";")[0]
        coordinates.source_longitude=source.split(";")[1]
    }
    else{
        alert("coordinates are not selected")
        window.history.back();
    }
}