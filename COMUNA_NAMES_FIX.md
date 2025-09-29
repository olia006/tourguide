# Santiago Comunas Name Mapping Fix

## Issue
The shapefile data contains UTF-8 encoding issues where Spanish characters are incorrectly encoded:
- ñ appears as Ã±
- á appears as Ã¡
- é appears as Ã©
- í appears as Ã­
- ó appears as Ã³
- ú appears as Ãº

## Solution Implemented

### 1. Exact Name Mappings
Created mappings for all 52 comunas organized by province:

**Province of Santiago (32 comunas)**
- All major comunas including Las Condes, Providencia, Santiago Centro, etc.

**Province of Chacabuco (3 comunas)**
- Colina, Lampa, Tiltil

**Province of Cordillera (3 comunas)**
- Puente Alto, Pirque, San José de Maipo

**Province of Maipo (4 comunas)**
- Buin, Calera de Tango, Paine, San Bernardo

**Province of Melipilla (5 comunas)**
- Melipilla, Alhué, Curacaví, María Pinto, San Pedro

**Province of Talagante (5 comunas)**
- Talagante, El Monte, Isla de Maipo, Padre Hurtado, Peñaflor

### 2. UTF-8 Encoding Variants
Added exact mappings for the encoded versions from the GeoJSON:

```javascript
const encodedMappings = {
  'AlhuÃ©': 'alhue',
  'ConchalÃ­': 'conchali',
  'CuracavÃ­': 'curacavi',
  'EstaciÃ³n Central': 'estacion-central',
  'MaipÃº': 'maipu',
  'MarÃ­a Pinto': 'maria-pinto',
  'Ã'uÃ±oa': 'nunoa',
  'PeÃ±aflor': 'penaflor',
  'PeÃ±alolÃ©n': 'penalolen',
  'San JoaquÃ­n': 'san-joaquin',
  'San JosÃ© de Maipo': 'san-jose-de-maipo',
  'San RamÃ³n': 'san-ramon'
};
```

### 3. Normalization Function
Kept the `normalizeComunaName` function as a fallback that:
- Removes accents using NFD normalization
- Converts to lowercase
- Replaces spaces with hyphens

## Result
All 52 comunas are now properly mapped and interactive on the map, regardless of encoding issues in the source shapefile.
