
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "GoogleSatellite_0": {
            "type": "raster",
            "tiles": ["https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "Mapa_densidad_1": {
            "type": "geojson",
            "data": json_Mapa_densidad_1
        }
                    ,
        "Mapa_Rep_mas65_2": {
            "type": "geojson",
            "data": json_Mapa_Rep_mas65_2
        }
                    ,
        "Mapa_Rep_menos25_3": {
            "type": "geojson",
            "data": json_Mapa_Rep_menos25_3
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_GoogleSatellite_0_0",
            "type": "raster",
            "source": "GoogleSatellite_0"
        },
        {
            "id": "lyr_Mapa_densidad_1_0",
            "type": "fill",
            "source": "Mapa_densidad_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'Densidad_P'], 7483.67], ['<=', ['get', 'Densidad_P'], 7483.67]], 0.75, ['all', ['>', ['get', 'Densidad_P'], 7483.67], ['<=', ['get', 'Densidad_P'], 13722.19]], 0.75, ['all', ['>', ['get', 'Densidad_P'], 13722.19], ['<=', ['get', 'Densidad_P'], 21014.15]], 0.75, ['all', ['>', ['get', 'Densidad_P'], 21014.15], ['<=', ['get', 'Densidad_P'], 29209.98]], 0.75, ['all', ['>', ['get', 'Densidad_P'], 29209.98], ['<=', ['get', 'Densidad_P'], 35858.71]], 0.75, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'Densidad_P'], 7483.67], ['<=', ['get', 'Densidad_P'], 7483.67]], '#fff5f0', ['all', ['>', ['get', 'Densidad_P'], 7483.67], ['<=', ['get', 'Densidad_P'], 13722.19]], '#fdbea5', ['all', ['>', ['get', 'Densidad_P'], 13722.19], ['<=', ['get', 'Densidad_P'], 21014.15]], '#fc7050', ['all', ['>', ['get', 'Densidad_P'], 21014.15], ['<=', ['get', 'Densidad_P'], 29209.98]], '#d42020', ['all', ['>', ['get', 'Densidad_P'], 29209.98], ['<=', ['get', 'Densidad_P'], 35858.71]], '#67000d', '#ffffff']}
        }
,
        {
            "id": "lyr_Mapa_Rep_mas65_2_0",
            "type": "fill",
            "source": "Mapa_Rep_mas65_2",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'Rep_mas65'], 13.51], ['<=', ['get', 'Rep_mas65'], 13.51]], 0.75, ['all', ['>', ['get', 'Rep_mas65'], 13.51], ['<=', ['get', 'Rep_mas65'], 20.66]], 0.75, ['all', ['>', ['get', 'Rep_mas65'], 20.66], ['<=', ['get', 'Rep_mas65'], 22.39]], 0.75, ['all', ['>', ['get', 'Rep_mas65'], 22.39], ['<=', ['get', 'Rep_mas65'], 23.98]], 0.75, ['all', ['>', ['get', 'Rep_mas65'], 23.98], ['<=', ['get', 'Rep_mas65'], 26.05]], 0.75, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'Rep_mas65'], 13.51], ['<=', ['get', 'Rep_mas65'], 13.51]], '#f7fbff', ['all', ['>', ['get', 'Rep_mas65'], 13.51], ['<=', ['get', 'Rep_mas65'], 20.66]], '#c8ddf0', ['all', ['>', ['get', 'Rep_mas65'], 20.66], ['<=', ['get', 'Rep_mas65'], 22.39]], '#73b3d8', ['all', ['>', ['get', 'Rep_mas65'], 22.39], ['<=', ['get', 'Rep_mas65'], 23.98]], '#2879b9', ['all', ['>', ['get', 'Rep_mas65'], 23.98], ['<=', ['get', 'Rep_mas65'], 26.05]], '#08306b', '#ffffff']}
        }
,
        {
            "id": "lyr_Mapa_Rep_menos25_3_0",
            "type": "fill",
            "source": "Mapa_Rep_menos25_3",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'Rep_men25'], 19.33], ['<=', ['get', 'Rep_men25'], 19.33]], 0.75, ['all', ['>', ['get', 'Rep_men25'], 19.33], ['<=', ['get', 'Rep_men25'], 20.42]], 0.75, ['all', ['>', ['get', 'Rep_men25'], 20.42], ['<=', ['get', 'Rep_men25'], 21.37]], 0.75, ['all', ['>', ['get', 'Rep_men25'], 21.37], ['<=', ['get', 'Rep_men25'], 22.58]], 0.75, ['all', ['>', ['get', 'Rep_men25'], 22.58], ['<=', ['get', 'Rep_men25'], 26.85]], 0.75, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'Rep_men25'], 19.33], ['<=', ['get', 'Rep_men25'], 19.33]], '#f7fcf5', ['all', ['>', ['get', 'Rep_men25'], 19.33], ['<=', ['get', 'Rep_men25'], 20.42]], '#caeac3', ['all', ['>', ['get', 'Rep_men25'], 20.42], ['<=', ['get', 'Rep_men25'], 21.37]], '#7bc87c', ['all', ['>', ['get', 'Rep_men25'], 21.37], ['<=', ['get', 'Rep_men25'], 22.58]], '#2a924a', ['all', ['>', ['get', 'Rep_men25'], 22.58], ['<=', ['get', 'Rep_men25'], 26.85]], '#00441b', '#ffffff']}
        }
],
}