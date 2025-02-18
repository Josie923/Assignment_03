mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zaWUwOTIzMTAiLCJhIjoiY20xNDBuejgzMWo1bzJpcTJ1YjBjbXpncCJ9.0iHQV9BxlqBxfklfiR_lKQ';
const map = new mapboxgl.Map({
    container: 'map3',
    style: 'mapbox://styles/josie092310/cm79lgyop002h01p7ey55hp5d',
    center: [60, 20],
    zoom: 2.0,
    projection: 'globe'
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
                '#f7fcf0', 2057.66,   // 0–2057.66
                '#ccebc5', 2420.52,   // 2057.66–2420.52
                '#7bccc4', 2802.56,   // 2420.52–2802.56
                '#2b8cbe', 3189.17,   // 2802.56–3189.17
                '#084081'             // ≥3189.17
            ],
            'fill-opacity': 1
        }
    }, );



    


});
