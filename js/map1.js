mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zaWUwOTIzMTAiLCJhIjoiY20xNDBuejgzMWo1bzJpcTJ1YjBjbXpncCJ9.0iHQV9BxlqBxfklfiR_lKQ';
const map = new mapboxgl.Map({
    container: 'map1',
    style: 'mapbox://styles/josie092310/cm79h6n84001r01p76td4bxbd',
    center: [0, 0],
    zoom: 1.5
});


map.on('load', function () {

    // This is the function that finds the first symbol layer
let layers = map.getStyle().layers;
let firstSymbolId;
    for (var i = 0; i < layers.length; i++) {
    console.log(layers[i].id); // This is the line of code that we are adding
    if (layers[i].type === 'symbol') {
        firstSymbolId = layers[i].id;
        break;
    }
}
    map.addLayer({
        'id': 'asian_population',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': './data/final_congo_fixed_world_diet.geojson'  
        },
        'paint': {
            'fill-color': [
                 'step', ['get', 'calories'], 
                 '#ffffff',   
                 2463, '#f1eef6',     
                 2807, '#bdc9e1',
                 3050, '#74a9cf',
                 3366, '#0570b0' 
             ]
            
        }
    } ,'admin-0-boundary');



    


});
