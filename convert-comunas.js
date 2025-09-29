import shapefile from 'shapefile';
import fs from 'fs';
import path from 'path';

async function convertComunasShapefile() {
  try {
    const shapefilePath = '/Users/olga/Downloads/DPA_2023/COMUNAS/COMUNAS_v1.shp';
    const outputPath = './public/santiago-comunas.json';
    
    console.log('Reading Shapefile...');
    const source = await shapefile.open(shapefilePath);
    
    const features = [];
    const santiagoFeatures = [];
    let result;
    let totalCount = 0;
    
    while (!(result = await source.read()).done) {
      const feature = result.value;
      totalCount++;
      
      // Filter for Santiago Metropolitan Region (CUT_REG = "13")
      if (feature.properties.CUT_REG === "13") {
        // Fix comuna names with proper encoding
        const fixComunaName = (name) => {
          // Handle specific problematic names
          const nameMap = new Map([
            ['Ã\u2018uÃ±oa', 'Ñuñoa'],
            ['MaipÃº', 'Maipú'],
            ['EstaciÃ³n Central', 'Estación Central'],
            ['San RamÃ³n', 'San Ramón'],
            ['San JoaquÃ­n', 'San Joaquín'],
            ['San JosÃ© de Maipo', 'San José de Maipo'],
            ['AlhuÃ©', 'Alhué'],
            ['CuracavÃ­', 'Curacaví'],
            ['MarÃ­a Pinto', 'María Pinto'],
            ['PeÃ±aflor', 'Peñaflor'],
            ['PeÃ±alolÃ©n', 'Peñalolén'],
            ['ConchalÃ­', 'Conchalí']
          ]);
          
          return nameMap.get(name) || name;
        };

        // Simplify geometry to reduce file size
        const simplifiedFeature = {
          type: 'Feature',
          properties: {
            comuna: fixComunaName(feature.properties.COMUNA),
            provincia: feature.properties.PROVINCIA,
            cut_com: feature.properties.CUT_COM,
            superficie: feature.properties.SUPERFICIE
          },
          geometry: feature.geometry
        };
        santiagoFeatures.push(simplifiedFeature);
        
        console.log(`Found Santiago comuna: ${feature.properties.COMUNA}`);
      }
    }
    
    const geojson = {
      type: 'FeatureCollection',
      features: santiagoFeatures
    };
    
    // Write to file
    fs.writeFileSync(outputPath, JSON.stringify(geojson, null, 2));
    
    console.log(`\n✅ Successfully converted ${santiagoFeatures.length} Santiago comunas from ${totalCount} total comunas`);
    console.log(`📄 Output: ${outputPath}`);
    
    // Show all Santiago comunas found
    if (santiagoFeatures.length > 0) {
      console.log('\n📍 Santiago comunas found:');
      santiagoFeatures.forEach(f => console.log(`  - ${f.properties.comuna}`));
    }
    
  } catch (error) {
    console.error('❌ Error converting Shapefile:', error);
  }
}

convertComunasShapefile();
