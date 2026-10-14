var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_googleSatellite_1 = new ol.layer.Tile({
            'title': 'google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Zonesturn_out_areas__turn_out_areas_2 = new ol.format.GeoJSON();
var features_Zonesturn_out_areas__turn_out_areas_2 = format_Zonesturn_out_areas__turn_out_areas_2.readFeatures(json_Zonesturn_out_areas__turn_out_areas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonesturn_out_areas__turn_out_areas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonesturn_out_areas__turn_out_areas_2.addFeatures(features_Zonesturn_out_areas__turn_out_areas_2);
var lyr_Zonesturn_out_areas__turn_out_areas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonesturn_out_areas__turn_out_areas_2, 
                style: style_Zonesturn_out_areas__turn_out_areas_2,
                popuplayertitle: 'Zones — turn_out_areas__turn_out_areas',
                interactive: true,
                title: '<img src="styles/legend/Zonesturn_out_areas__turn_out_areas_2.png" /> Zones — turn_out_areas__turn_out_areas'
            });
var format_estimated_bld_count_3 = new ol.format.GeoJSON();
var features_estimated_bld_count_3 = format_estimated_bld_count_3.readFeatures(json_estimated_bld_count_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_estimated_bld_count_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_estimated_bld_count_3.addFeatures(features_estimated_bld_count_3);
var lyr_estimated_bld_count_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_estimated_bld_count_3, 
                style: style_estimated_bld_count_3,
                popuplayertitle: 'estimated_bld_count',
                interactive: true,
                title: '<img src="styles/legend/estimated_bld_count_3.png" /> estimated_bld_count'
            });
var format_PopulationMaleandFemaleExport_4 = new ol.format.GeoJSON();
var features_PopulationMaleandFemaleExport_4 = format_PopulationMaleandFemaleExport_4.readFeatures(json_PopulationMaleandFemaleExport_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PopulationMaleandFemaleExport_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PopulationMaleandFemaleExport_4.addFeatures(features_PopulationMaleandFemaleExport_4);
var lyr_PopulationMaleandFemaleExport_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PopulationMaleandFemaleExport_4, 
                style: style_PopulationMaleandFemaleExport_4,
                popuplayertitle: 'Population Male and FemaleExport',
                interactive: true,
                title: '<img src="styles/legend/PopulationMaleandFemaleExport_4.png" /> Population Male and FemaleExport'
            });
var format_FireStations_5 = new ol.format.GeoJSON();
var features_FireStations_5 = format_FireStations_5.readFeatures(json_FireStations_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FireStations_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FireStations_5.addFeatures(features_FireStations_5);
var lyr_FireStations_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FireStations_5, 
                style: style_FireStations_5,
                popuplayertitle: 'FireStations',
                interactive: true,
                title: '<img src="styles/legend/FireStations_5.png" /> FireStations'
            });
var format_FireHydrants_6 = new ol.format.GeoJSON();
var features_FireHydrants_6 = format_FireHydrants_6.readFeatures(json_FireHydrants_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FireHydrants_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FireHydrants_6.addFeatures(features_FireHydrants_6);
var lyr_FireHydrants_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FireHydrants_6, 
                style: style_FireHydrants_6,
                popuplayertitle: 'FireHydrants',
                interactive: true,
                title: '<img src="styles/legend/FireHydrants_6.png" /> FireHydrants'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_googleSatellite_1.setVisible(true);lyr_Zonesturn_out_areas__turn_out_areas_2.setVisible(true);lyr_estimated_bld_count_3.setVisible(true);lyr_PopulationMaleandFemaleExport_4.setVisible(true);lyr_FireStations_5.setVisible(true);lyr_FireHydrants_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_googleSatellite_1,lyr_Zonesturn_out_areas__turn_out_areas_2,lyr_estimated_bld_count_3,lyr_PopulationMaleandFemaleExport_4,lyr_FireStations_5,lyr_FireHydrants_6];
lyr_Zonesturn_out_areas__turn_out_areas_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'desc_': 'desc_', 'zone': 'zone', });
lyr_estimated_bld_count_3.set('fieldAliases', {'fid': 'fid', 'count': 'count', });
lyr_PopulationMaleandFemaleExport_4.set('fieldAliases', {'Region': 'Region', 'name': 'name', 'Area__km_': 'Area__km_', 'Pop1980': 'Pop1980', 'Pop1991': 'Pop1991', 'Pop2002': 'Pop2002', 'Pop2012': 'Pop2012', 'PopDensity': 'PopDensity', 'Pop2022': 'Pop2022', 'Pop_Den': 'Pop_Den', 'Field': 'Field', 'Males2002': 'Males2002', 'Total2002': 'Total2002', 'Males2012': 'Males2012', 'Female2012': 'Female2012', 'Total2012': 'Total2012', 'female2022': 'female2022', 'Male2022': 'Male2022', 'Total2022': 'Total2022', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_FireStations_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Zone': 'Zone', 'Condition': 'Condition', 'photo': 'photo', 'Lat': 'Lat', 'Long': 'Long', 'Desc': 'Desc', });
lyr_FireHydrants_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Zone': 'Zone', 'Condition': 'Condition', 'photo': 'photo', 'Lat': 'Lat', 'Long': 'Long', 'Desc': 'Desc', });
lyr_Zonesturn_out_areas__turn_out_areas_2.set('fieldImages', {'OBJECTID': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'fid': '', 'desc_': '', 'zone': '', });
lyr_estimated_bld_count_3.set('fieldImages', {'fid': '', 'count': '', });
lyr_PopulationMaleandFemaleExport_4.set('fieldImages', {'Region': 'TextEdit', 'name': 'TextEdit', 'Area__km_': 'TextEdit', 'Pop1980': 'TextEdit', 'Pop1991': 'TextEdit', 'Pop2002': 'TextEdit', 'Pop2012': 'TextEdit', 'PopDensity': 'TextEdit', 'Pop2022': 'TextEdit', 'Pop_Den': 'TextEdit', 'Field': 'TextEdit', 'Males2002': 'TextEdit', 'Total2002': 'TextEdit', 'Males2012': 'TextEdit', 'Female2012': 'TextEdit', 'Total2012': 'TextEdit', 'female2022': 'TextEdit', 'Male2022': 'TextEdit', 'Total2022': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_FireStations_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Zone': 'TextEdit', 'Condition': 'TextEdit', 'photo': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Desc': 'TextEdit', });
lyr_FireHydrants_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Zone': 'TextEdit', 'Condition': 'TextEdit', 'photo': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Desc': 'TextEdit', });
lyr_Zonesturn_out_areas__turn_out_areas_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'desc_': 'hidden field', 'zone': 'hidden field', });
lyr_estimated_bld_count_3.set('fieldLabels', {'fid': 'hidden field', 'count': 'inline label - visible with data', });
lyr_PopulationMaleandFemaleExport_4.set('fieldLabels', {'Region': 'inline label - visible with data', 'name': 'hidden field', 'Area__km_': 'hidden field', 'Pop1980': 'hidden field', 'Pop1991': 'hidden field', 'Pop2002': 'hidden field', 'Pop2012': 'hidden field', 'PopDensity': 'inline label - visible with data', 'Pop2022': 'inline label - visible with data', 'Pop_Den': 'hidden field', 'Field': 'hidden field', 'Males2002': 'hidden field', 'Total2002': 'hidden field', 'Males2012': 'hidden field', 'Female2012': 'hidden field', 'Total2012': 'hidden field', 'female2022': 'hidden field', 'Male2022': 'hidden field', 'Total2022': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_FireStations_5.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Zone': 'hidden field', 'Condition': 'hidden field', 'photo': 'hidden field', 'Lat': 'hidden field', 'Long': 'hidden field', 'Desc': 'inline label - visible with data', });
lyr_FireHydrants_6.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Zone': 'hidden field', 'Condition': 'inline label - visible with data', 'photo': 'hidden field', 'Lat': 'hidden field', 'Long': 'hidden field', 'Desc': 'hidden field', });
lyr_FireHydrants_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});