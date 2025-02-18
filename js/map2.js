mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zaWUwOTIzMTAiLCJhIjoiY20xNDBuejgzMWo1bzJpcTJ1YjBjbXpncCJ9.0iHQV9BxlqBxfklfiR_lKQ';
const map = new mapboxgl.Map({
    container: 'map2',
    style: 'mapbox://styles/josie092310/cm79l9pjz002v01s1de5bb8bv',
    center: [0, 0],
    zoom: 1.1
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
                 'interpolate', ['linear'], ['get', 'calories'],
                 1775, '#f1eef6',
                 2202.2, '#bdc9e1',
                 2629.4, '#74a9cf',
                 3056.6, '#2b8cbe',
                 3483.8, '#045a8d'
             ]
            
        }
    },'admin-0-boundary' );



    


});
