
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { useLanguage } from '../contexts/LanguageContext';
import { AlertTriangle, Shield, MapPin, Info } from 'lucide-react';
import MapboxConfig from '../utils/mapboxConfig';
import MapProtection from '../utils/mapProtection';
import 'mapbox-gl/dist/mapbox-gl.css';

// Protected Mapbox configuration
const mapboxConfig = MapboxConfig.getInstance();

// Initialize protection
MapProtection.protectConsole();

interface ComunaData {
  id: string;
  name: {
    en: string;
    ru: string;
  };
  riskLevel: 'low' | 'medium' | 'high' | 'very-high' | 'safest';
  description: {
    en: string;
    ru: string;
  };
  risks: {
    en: string[];
    ru: string[];
  };
  recommendations: {
    en: string[];
    ru: string[];
  };
}

// Function to normalize comuna names (handle encoding issues)
const normalizeComunaName = (name: string): string => {
  // Remove accents and special characters for matching
  return name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, '-');
};

// Map comuna names from GeoJSON to our data
// Only include ASCII names without special characters
const comunaNameMapping: { [key: string]: string } = {
  // Province of Santiago (32) - without special characters
  'Cerrillos': 'cerrillos',
  'Cerro Navia': 'cerro-navia',
  'El Bosque': 'el-bosque',
  'Huechuraba': 'huechuraba',
  'Independencia': 'independencia',
  'La Cisterna': 'la-cisterna',
  'La Florida': 'la-florida',
  'La Granja': 'la-granja',
  'La Pintana': 'la-pintana',
  'La Reina': 'la-reina',
  'Las Condes': 'las-condes',
  'Lo Barnechea': 'lo-barnechea',
  'Lo Espejo': 'lo-espejo',
  'Lo Prado': 'lo-prado',
  'Macul': 'macul',
  'Pedro Aguirre Cerda': 'pedro-aguirre-cerda',
  'Providencia': 'providencia',
  'Pudahuel': 'pudahuel',
  'Quilicura': 'quilicura',
  'Quinta Normal': 'quinta-normal',
  'Recoleta': 'recoleta',
  'Renca': 'renca',
  'San Miguel': 'san-miguel',
  'Santiago': 'santiago-centro',
  'Vitacura': 'vitacura',
  // Province of Chacabuco (3)
  'Colina': 'colina',
  'Lampa': 'lampa',
  'Tiltil': 'tiltil',
  // Province of Cordillera (3)
  'Puente Alto': 'puente-alto',
  'Pirque': 'pirque',
  // Province of Maipo (4)
  'Buin': 'buin',
  'Calera de Tango': 'calera-de-tango',
  'Paine': 'paine',
  'San Bernardo': 'san-bernardo',
  // Province of Melipilla (5)
  'Melipilla': 'melipilla',
  'San Pedro': 'san-pedro',
  // Province of Talagante (5)
  'Talagante': 'talagante',
  'El Monte': 'el-monte',
  'Isla de Maipo': 'isla-de-maipo',
  'Padre Hurtado': 'padre-hurtado'
  // Note: Names with special characters (ñ, á, é, í, ó, ú) are handled by normalization
};

const comunasData: ComunaData[] = [
  {
    id: 'las-condes',
    name: {
      en: 'Las Condes',
      ru: 'Лас-Кондес'
    },
    riskLevel: 'safest',
    description: {
      en: 'Best area for staying, walking, dining, and nightlife. Strong infrastructure, policing, and services.',
      ru: 'Лучший район для проживания, прогулок, ресторанов и ночной жизни. Сильная инфраструктура, полиция и услуги.'
    },
    risks: {
      en: ['Occasional pickpocketing in crowded areas', 'Higher prices target tourists'],
      ru: ['Редкие карманные кражи в людных местах', 'Завышенные цены для туристов']
    },
    recommendations: {
      en: ['Generally safe for tourists', 'Good area for shopping and dining', 'Reliable public transport'],
      ru: ['В целом безопасен для туристов', 'Хорошая зона для шопинга и ресторанов', 'Надёжный общественный транспорт']
    }
  },
  {
    id: 'vitacura',
    name: {
      en: 'Vitacura',
      ru: 'Витакура'
    },
    riskLevel: 'safest',
    description: {
      en: 'Best area for staying, walking, dining, and nightlife. Strong infrastructure, policing, and services.',
      ru: 'Лучший район для проживания, прогулок, ресторанов и ночной жизни. Сильная инфраструктура, полиция и услуги.'
    },
    risks: {
      en: ['Very low crime rates', 'Mainly minor property crimes'],
      ru: ['Очень низкий уровень преступности', 'В основном незначительные имущественные преступления']
    },
    recommendations: {
      en: ['Excellent for tourists and business travelers', 'Safe at all hours', 'High-end shopping and dining'],
      ru: ['Отлично для туристов и деловых путешественников', 'Безопасно в любое время', 'Элитный шопинг и рестораны']
    }
  },
  {
    id: 'providencia',
    name: {
      en: 'Providencia',
      ru: 'Провиденсия'
    },
    riskLevel: 'safest',
    description: {
      en: 'Best area for staying, walking, dining, and nightlife. Strong infrastructure, policing, and services.',
      ru: 'Лучший район для проживания, прогулок, ресторанов и ночной жизни. Сильная инфраструктура, полиция и услуги.'
    },
    risks: {
      en: ['Minor petty theft', 'Tourist-targeted scams'],
      ru: ['Незначительные мелкие кражи', 'Мошенничество, нацеленное на туристов']
    },
    recommendations: {
      en: ['Excellent for tourists', 'Safe for evening activities', 'Good restaurant and nightlife scene'],
      ru: ['Отлично подходит для туристов', 'Безопасно для вечерних мероприятий', 'Хорошие рестораны и ночная жизнь']
    }
  },
  {
    id: 'santiago-centro',
    name: {
      en: 'Santiago Centro',
      ru: 'Сантьяго Сентро'
    },
    riskLevel: 'medium',
    description: {
      en: 'Historic core vibrant by day, more risk after dark. Mixed safety levels in different areas.',
      ru: 'Исторический центр оживленный днем, больше риска после наступления темноты. Смешанный уровень безопасности в разных районах.'
    },
    risks: {
      en: ['Pickpocketing common', 'Some areas unsafe at night', 'Street vendor scams'],
      ru: ['Частые карманные кражи', 'Некоторые районы небезопасны ночью', 'Мошенничество уличных торговцев']
    },
    recommendations: {
      en: ['Stay alert in crowded areas', 'Avoid displaying valuables', 'Take registered taxis'],
      ru: ['Будьте бдительны в людных местах', 'Не демонстрируйте ценности', 'Используйте официальные такси']
    }
  },
  {
    id: 'la-pintana',
    name: {
      en: 'La Pintana',
      ru: 'Ла-Пинтана'
    },
    riskLevel: 'very-high',
    description: {
      en: 'Consistently higher crime rates, weak infrastructure, few reasons for tourists to visit.',
      ru: 'Постоянно высокий уровень преступности, слабая инфраструктура, мало причин для посещения туристами.'
    },
    risks: {
      en: ['High violent crime rate', 'Gang activity', 'Armed robberies', 'Drug trafficking'],
      ru: ['Высокий уровень насильственных преступлений', 'Деятельность банд', 'Вооружённые ограбления', 'Наркоторговля']
    },
    recommendations: {
      en: ['Avoid this area entirely', 'Do not visit even during daytime', 'No tourist attractions'],
      ru: ['Полностью избегайте этот район', 'Не посещайте даже днём', 'Нет туристических достопримечательностей']
    }
  },
  {
    id: 'lo-espejo',
    name: {
      en: 'Lo Espejo',
      ru: 'Ло-Эспехо'
    },
    riskLevel: 'very-high',
    description: {
      en: 'Consistently higher crime rates, weak infrastructure. Working-class area not safe for tourists.',
      ru: 'Постоянно высокий уровень преступности, слабая инфраструктура. Рабочий район небезопасен для туристов.'
    },
    risks: {
      en: ['High crime rates', 'Street robberies', 'Vehicle theft', 'Limited police presence'],
      ru: ['Высокий уровень преступности', 'Уличные ограбления', 'Угон автомобилей', 'Ограниченное присутствие полиции']
    },
    recommendations: {
      en: ['Not recommended for tourists', 'Avoid if possible', 'No significant attractions'],
      ru: ['Не рекомендуется для туристов', 'Избегайте по возможности', 'Нет значимых достопримечательностей']
    }
  },
  {
    id: 'nunoa',
    name: {
      en: 'Ñuñoa',
      ru: 'Ньюньоа'
    },
    riskLevel: 'safest',
    description: {
      en: 'Middle-class residential area with universities, parks, and a growing restaurant scene.',
      ru: 'Жилой район среднего класса с университетами, парками и развивающейся ресторанной сценой.'
    },
    risks: {
      en: ['Occasional petty theft', 'Some areas less safe at night'],
      ru: ['Редкие мелкие кражи', 'Некоторые районы менее безопасны ночью']
    },
    recommendations: {
      en: ['Generally safe for visitors', 'Nice parks and cultural venues', 'Good public transport'],
      ru: ['В целом безопасен для посетителей', 'Хорошие парки и культурные объекты', 'Хороший общественный транспорт']
    }
  },
  {
    id: 'maipu',
    name: {
      en: 'Maipú',
      ru: 'Майпу'
    },
    riskLevel: 'medium',
    description: {
      en: 'Large residential suburb with mixed income levels and variable safety.',
      ru: 'Большой жилой пригород со смешанным уровнем доходов и переменной безопасностью.'
    },
    risks: {
      en: ['Property crime in some areas', 'Variable safety by neighborhood', 'Car break-ins'],
      ru: ['Имущественные преступления в некоторых районах', 'Переменная безопасность по районам', 'Взломы автомобилей']
    },
    recommendations: {
      en: ['Research specific neighborhoods', 'Take normal precautions', 'Some nice parks and wineries'],
      ru: ['Изучите конкретные районы', 'Соблюдайте обычные меры предосторожности', 'Есть хорошие парки и винодельни']
    }
  },
  {
    id: 'pudahuel',
    name: {
      en: 'Pudahuel',
      ru: 'Пудауэль'
    },
    riskLevel: 'high',
    description: {
      en: 'Airport surroundings safer, peripheries less safe. Working-class area with elevated petty crime.',
      ru: 'Окрестности аэропорта безопаснее, периферия менее безопасна. Рабочий район с повышенной мелкой преступностью.'
    },
    risks: {
      en: ['High crime rates', 'Frequent robberies', 'Unsafe at night', 'Limited tourist infrastructure'],
      ru: ['Высокий уровень преступности', 'Частые ограбления', 'Небезопасно ночью', 'Ограниченная туристическая инфраструктура']
    },
    recommendations: {
      en: ['Only visit for airport transfers', 'Take official taxis/Uber', 'Don\'t walk around with luggage'],
      ru: ['Посещайте только для трансфера в аэропорт', 'Используйте официальные такси/Uber', 'Не ходите с багажом']
    }
  },
  {
    id: 'puente-alto',
    name: {
      en: 'Puente Alto',
      ru: 'Пуэнте-Альто'
    },
    riskLevel: 'medium',
    description: {
      en: 'Central safe areas, far peripheries risky. Large suburban comuna with variable safety.',
      ru: 'Центральные безопасные районы, дальние периферии рискованные. Большая пригородная коммуна с переменной безопасностью.'
    },
    risks: {
      en: ['Variable safety by neighborhood', 'Some areas have higher crime', 'Property crimes common'],
      ru: ['Переменная безопасность по районам', 'В некоторых районах выше преступность', 'Частые имущественные преступления']
    },
    recommendations: {
      en: ['Research specific areas before visiting', 'Take normal precautions', 'Some nice residential areas'],
      ru: ['Изучите конкретные районы перед посещением', 'Соблюдайте обычные меры предосторожности', 'Есть хорошие жилые районы']
    }
  },
  // Additional comunas with basic data
  {
    id: 'la-florida',
    name: { en: 'La Florida', ru: 'Ла-Флорида' },
    riskLevel: 'medium',
    description: {
      en: 'Large, mixed quality comuna. Some areas safer than others, requires local knowledge.',
      ru: 'Большая коммуна смешанного качества. Некоторые районы безопаснее других, требует местных знаний.'
    },
    risks: {
      en: ['Some areas with higher crime', 'Pickpocketing in commercial areas'],
      ru: ['Некоторые районы с повышенной преступностью', 'Карманные кражи в торговых зонах']
    },
    recommendations: {
      en: ['Popular shopping mall areas are generally safe', 'Use caution at night'],
      ru: ['Популярные торговые центры в целом безопасны', 'Будьте осторожны ночью']
    }
  },
  {
    id: 'san-bernardo',
    name: { en: 'San Bernardo', ru: 'Сан-Бернардо' },
    riskLevel: 'medium',
    description: {
      en: 'Industrial and residential comuna south of Santiago.',
      ru: 'Промышленная и жилая коммуна к югу от Сантьяго.'
    },
    risks: {
      en: ['Variable safety by area', 'Industrial zones best avoided'],
      ru: ['Переменная безопасность по районам', 'Лучше избегать промышленных зон']
    },
    recommendations: {
      en: ['Stick to main commercial areas', 'Daytime visits preferable'],
      ru: ['Придерживайтесь основных торговых районов', 'Предпочтительны дневные посещения']
    }
  },
  {
    id: 'lo-barnechea',
    name: { en: 'Lo Barnechea', ru: 'Ло-Барнечеа' },
    riskLevel: 'safest',
    description: {
      en: 'Affluent comuna in the foothills with luxury homes and ski resort access.',
      ru: 'Богатая коммуна в предгорьях с роскошными домами и доступом к горнолыжным курортам.'
    },
    risks: {
      en: ['Very low crime rates', 'Isolated areas require caution'],
      ru: ['Очень низкий уровень преступности', 'В изолированных районах требуется осторожность']
    },
    recommendations: {
      en: ['Safe for tourists', 'Gateway to ski resorts', 'Upscale dining options'],
      ru: ['Безопасно для туристов', 'Ворота к горнолыжным курортам', 'Элитные рестораны']
    }
  },
  {
    id: 'la-reina',
    name: { en: 'La Reina', ru: 'Ла-Рейна' },
    riskLevel: 'low',
    description: {
      en: 'Quiet residential comuna with parks and good quality of life.',
      ru: 'Тихая жилая коммуна с парками и хорошим качеством жизни.'
    },
    risks: {
      en: ['Low crime rates', 'Occasional property crimes'],
      ru: ['Низкий уровень преступности', 'Редкие имущественные преступления']
    },
    recommendations: {
      en: ['Pleasant residential area', 'Nice parks for walking', 'Family-friendly'],
      ru: ['Приятный жилой район', 'Хорошие парки для прогулок', 'Подходит для семей']
    }
  },
  {
    id: 'penalolen',
    name: { en: 'Peñalolén', ru: 'Пеньялолен' },
    riskLevel: 'low',
    description: {
      en: 'Eastern hills safer, vibrant cultural life. Mixed income areas with natural attractions.',
      ru: 'Восточные холмы безопаснее, яркая культурная жизнь. Смешанные по доходам районы с природными достопримечательностями.'
    },
    risks: {
      en: ['Variable safety by neighborhood', 'Some high-crime areas'],
      ru: ['Переменная безопасность по районам', 'Некоторые районы с высокой преступностью']
    },
    recommendations: {
      en: ['Research specific areas', 'Nice hiking trails in upper areas'],
      ru: ['Изучите конкретные районы', 'Хорошие пешеходные тропы в верхних районах']
    }
  },
  {
    id: 'macul',
    name: { en: 'Macul', ru: 'Макуль' },
    riskLevel: 'medium',
    description: {
      en: 'Middle-class residential comuna with universities and sports facilities.',
      ru: 'Жилая коммуна среднего класса с университетами и спортивными сооружениями.'
    },
    risks: {
      en: ['Moderate crime levels', 'Student areas can be rowdy at night'],
      ru: ['Умеренный уровень преступности', 'Студенческие районы могут быть шумными ночью']
    },
    recommendations: {
      en: ['Generally safe during day', 'University areas have good transport'],
      ru: ['В целом безопасно днем', 'В университетских районах хороший транспорт']
    }
  },
  {
    id: 'san-miguel',
    name: { en: 'San Miguel', ru: 'Сан-Мигель' },
    riskLevel: 'medium',
    description: {
      en: 'Central comuna with commercial activity and residential areas.',
      ru: 'Центральная коммуна с коммерческой деятельностью и жилыми районами.'
    },
    risks: {
      en: ['Petty crime in commercial areas', 'Some neighborhoods less safe'],
      ru: ['Мелкие преступления в торговых районах', 'Некоторые районы менее безопасны']
    },
    recommendations: {
      en: ['Stay in main commercial areas', 'Good public transport connections'],
      ru: ['Оставайтесь в основных торговых районах', 'Хорошее транспортное сообщение']
    }
  },
  {
    id: 'quinta-normal',
    name: { en: 'Quinta Normal', ru: 'Кинта-Нормаль' },
    riskLevel: 'high',
    description: {
      en: 'Parks/museums are okay, but side streets riskier. Historic comuna with mixed safety.',
      ru: 'Парки/музеи в порядке, но боковые улицы рискованнее. Историческая коммуна со смешанной безопасностью.'
    },
    risks: {
      en: ['Moderate crime levels', 'Caution needed at night'],
      ru: ['Умеренный уровень преступности', 'Требуется осторожность ночью']
    },
    recommendations: {
      en: ['Visit museums during day', 'Nice parks but stay alert'],
      ru: ['Посещайте музеи днем', 'Хорошие парки, но будьте бдительны']
    }
  },
  {
    id: 'estacion-central',
    name: { en: 'Estación Central', ru: 'Эстасьон-Сентраль' },
    riskLevel: 'high',
    description: {
      en: 'Transport hub, but pickpockets and theft common. High crime rates in busy transit area.',
      ru: 'Транспортный узел, но карманники и кражи обычны. Высокий уровень преступности в оживленной транзитной зоне.'
    },
    risks: {
      en: ['High pickpocketing risk', 'Crowded and chaotic', 'Scams targeting travelers'],
      ru: ['Высокий риск карманных краж', 'Многолюдно и хаотично', 'Мошенничество против путешественников']
    },
    recommendations: {
      en: ['Keep valuables secure', 'Only for transit', 'Avoid at night'],
      ru: ['Держите ценности в безопасности', 'Только для транзита', 'Избегайте ночью']
    }
  },
  {
    id: 'pedro-aguirre-cerda',
    name: { en: 'Pedro Aguirre Cerda', ru: 'Педро Агирре Серда' },
    riskLevel: 'very-high',
    description: {
      en: 'Working-class comuna with limited tourist appeal.',
      ru: 'Рабочая коммуна с ограниченной туристической привлекательностью.'
    },
    risks: {
      en: ['Higher crime rates', 'Limited infrastructure'],
      ru: ['Повышенный уровень преступности', 'Ограниченная инфраструктура']
    },
    recommendations: {
      en: ['Not recommended for tourists', 'No major attractions'],
      ru: ['Не рекомендуется для туристов', 'Нет крупных достопримечательностей']
    }
  },
  {
    id: 'cerrillos',
    name: { en: 'Cerrillos', ru: 'Серрильос' },
    riskLevel: 'medium',
    description: {
      en: 'Small comuna with airport and mixed residential areas. Exercise caution during nighttime.',
      ru: 'Небольшая коммуна с аэропортом и смешанными жилыми районами. Соблюдайте осторожность в ночное время.'
    },
    risks: {
      en: ['Variable safety', 'Airport area can attract crime'],
      ru: ['Переменная безопасность', 'Район аэропорта может привлекать преступность']
    },
    recommendations: {
      en: ['Mainly transit area', 'Limited tourist interest'],
      ru: ['В основном транзитная зона', 'Ограниченный туристический интерес']
    }
  },
  {
    id: 'el-bosque',
    name: { en: 'El Bosque', ru: 'Эль-Боске' },
    riskLevel: 'very-high',
    description: {
      en: 'Southern comuna with safety concerns.',
      ru: 'Южная коммуна с проблемами безопасности.'
    },
    risks: {
      en: ['High crime rates', 'Gang activity reported'],
      ru: ['Высокий уровень преступности', 'Сообщается о деятельности банд']
    },
    recommendations: {
      en: ['Avoid if possible', 'Not tourist-friendly'],
      ru: ['Избегайте по возможности', 'Не подходит для туристов']
    }
  },
  {
    id: 'la-granja',
    name: { en: 'La Granja', ru: 'Ла-Гранха' },
    riskLevel: 'high',
    description: {
      en: 'Residential comuna with significant safety issues.',
      ru: 'Жилая коммуна со значительными проблемами безопасности.'
    },
    risks: {
      en: ['High crime rates', 'Not safe for tourists'],
      ru: ['Высокий уровень преступности', 'Небезопасно для туристов']
    },
    recommendations: {
      en: ['Not recommended for visits', 'No tourist infrastructure'],
      ru: ['Не рекомендуется для посещений', 'Нет туристической инфраструктуры']
    }
  },
  {
    id: 'san-ramon',
    name: { en: 'San Ramón', ru: 'Сан-Рамон' },
    riskLevel: 'very-high',
    description: {
      en: 'Low-income area with crime concerns.',
      ru: 'Район с низкими доходами и проблемами преступности.'
    },
    risks: {
      en: ['High crime rates', 'Gang presence'],
      ru: ['Высокий уровень преступности', 'Присутствие банд']
    },
    recommendations: {
      en: ['Avoid this area', 'Not safe for tourists'],
      ru: ['Избегайте этот район', 'Небезопасно для туристов']
    }
  },
  {
    id: 'la-cisterna',
    name: { en: 'La Cisterna', ru: 'Ла-Систерна' },
    riskLevel: 'medium',
    description: {
      en: 'Commercial comuna with transport connections.',
      ru: 'Коммерческая коммуна с транспортными связями.'
    },
    risks: {
      en: ['Pickpocketing in commercial areas', 'Some unsafe neighborhoods'],
      ru: ['Карманные кражи в торговых районах', 'Некоторые небезопасные районы']
    },
    recommendations: {
      en: ['Mainly for transit', 'Stay in commercial areas'],
      ru: ['В основном для транзита', 'Оставайтесь в торговых районах']
    }
  },
  {
    id: 'san-joaquin',
    name: { en: 'San Joaquín', ru: 'Сан-Хоакин' },
    riskLevel: 'high',
    description: {
      en: 'Mixed residential and industrial comuna.',
      ru: 'Смешанная жилая и промышленная коммуна.'
    },
    risks: {
      en: ['Variable safety', 'Industrial areas less safe'],
      ru: ['Переменная безопасность', 'Промышленные районы менее безопасны']
    },
    recommendations: {
      en: ['Limited tourist appeal', 'Basic precautions needed'],
      ru: ['Ограниченная туристическая привлекательность', 'Необходимы базовые меры предосторожности']
    }
  },
  {
    id: 'renca',
    name: { en: 'Renca', ru: 'Ренка' },
    riskLevel: 'high',
    description: {
      en: 'Northwestern comuna with safety issues.',
      ru: 'Северо-западная коммуна с проблемами безопасности.'
    },
    risks: {
      en: ['High crime rates', 'Not tourist-friendly'],
      ru: ['Высокий уровень преступности', 'Не подходит для туристов']
    },
    recommendations: {
      en: ['Avoid unless necessary', 'No tourist attractions'],
      ru: ['Избегайте без необходимости', 'Нет туристических достопримечательностей']
    }
  },
  {
    id: 'quilicura',
    name: { en: 'Quilicura', ru: 'Киликура' },
    riskLevel: 'high',
    description: {
      en: 'Northern comuna with industrial areas.',
      ru: 'Северная коммуна с промышленными районами.'
    },
    risks: {
      en: ['Variable safety', 'Industrial zones best avoided'],
      ru: ['Переменная безопасность', 'Лучше избегать промышленных зон']
    },
    recommendations: {
      en: ['Mainly industrial', 'Limited tourist interest'],
      ru: ['В основном промышленная', 'Ограниченный туристический интерес']
    }
  },
  {
    id: 'colina',
    name: { en: 'Colina', ru: 'Колина' },
    riskLevel: 'low',
    description: {
      en: 'Northern suburban comuna with rural areas.',
      ru: 'Северная пригородная коммуна с сельскими районами.'
    },
    risks: {
      en: ['Isolated areas', 'Variable safety'],
      ru: ['Изолированные районы', 'Переменная безопасность']
    },
    recommendations: {
      en: ['Some nice rural areas', 'Car recommended'],
      ru: ['Есть хорошие сельские районы', 'Рекомендуется автомобиль']
    }
  },
  {
    id: 'lampa',
    name: { en: 'Lampa', ru: 'Лампа' },
    riskLevel: 'low',
    description: {
      en: 'Rural comuna north of Santiago.',
      ru: 'Сельская коммуна к северу от Сантьяго.'
    },
    risks: {
      en: ['Isolated areas', 'Limited services'],
      ru: ['Изолированные районы', 'Ограниченные услуги']
    },
    recommendations: {
      en: ['Rural tourism possible', 'Need transportation'],
      ru: ['Возможен сельский туризм', 'Нужен транспорт']
    }
  },
  {
    id: 'tiltil',
    name: { en: 'Tiltil', ru: 'Тильтиль' },
    riskLevel: 'medium',
    description: {
      en: 'Rural comuna with mining history.',
      ru: 'Сельская коммуна с горнодобывающей историей.'
    },
    risks: {
      en: ['Very isolated', 'Limited infrastructure'],
      ru: ['Очень изолированная', 'Ограниченная инфраструктура']
    },
    recommendations: {
      en: ['Historical interest only', 'Requires planning'],
      ru: ['Только исторический интерес', 'Требует планирования']
    }
  },
  {
    id: 'pirque',
    name: { en: 'Pirque', ru: 'Пирке' },
    riskLevel: 'low',
    description: {
      en: 'Rural comuna known for wineries and countryside.',
      ru: 'Сельская коммуна, известная винодельнями и сельской местностью.'
    },
    risks: {
      en: ['Isolated roads', 'Limited night lighting'],
      ru: ['Изолированные дороги', 'Ограниченное ночное освещение']
    },
    recommendations: {
      en: ['Great for wine tours', 'Beautiful countryside', 'Safe for tourists'],
      ru: ['Отлично для винных туров', 'Красивая сельская местность', 'Безопасно для туристов']
    }
  },
  {
    id: 'san-jose-de-maipo',
    name: { en: 'San José de Maipo', ru: 'Сан-Хосе-де-Майпо' },
    riskLevel: 'low',
    description: {
      en: 'Gateway to Cajón del Maipo nature area. Mountain comuna popular for outdoor activities.',
      ru: 'Ворота в природную зону Кахон-дель-Майпо. Горная коммуна, популярная для активного отдыха.'
    },
    risks: {
      en: ['Mountain road safety', 'Weather conditions'],
      ru: ['Безопасность горных дорог', 'Погодные условия']
    },
    recommendations: {
      en: ['Popular tourist destination', 'Great hiking', 'Hot springs available'],
      ru: ['Популярное туристическое направление', 'Отличные походы', 'Есть горячие источники']
    }
  },
  {
    id: 'buin',
    name: { en: 'Buin', ru: 'Буин' },
    riskLevel: 'low',
    description: {
      en: 'Southern comuna with agricultural areas.',
      ru: 'Южная коммуна с сельскохозяйственными районами.'
    },
    risks: {
      en: ['Limited tourist infrastructure', 'Rural roads'],
      ru: ['Ограниченная туристическая инфраструктура', 'Сельские дороги']
    },
    recommendations: {
      en: ['Zoo is main attraction', 'Family-friendly destination'],
      ru: ['Зоопарк - главная достопримечательность', 'Подходит для семей']
    }
  },
  {
    id: 'paine',
    name: { en: 'Paine', ru: 'Пайне' },
    riskLevel: 'medium',
    description: {
      en: 'Rural comuna with agricultural heritage.',
      ru: 'Сельская коммуна с сельскохозяйственным наследием.'
    },
    risks: {
      en: ['Rural isolation', 'Limited services'],
      ru: ['Сельская изоляция', 'Ограниченные услуги']
    },
    recommendations: {
      en: ['Agrotourism opportunities', 'Need own transport'],
      ru: ['Возможности агротуризма', 'Нужен собственный транспорт']
    }
  },
  {
    id: 'calera-de-tango',
    name: { en: 'Calera de Tango', ru: 'Калера-де-Танго' },
    riskLevel: 'medium',
    description: {
      en: 'Small rural comuna south of Santiago.',
      ru: 'Небольшая сельская коммуна к югу от Сантьяго.'
    },
    risks: {
      en: ['Very limited infrastructure', 'Isolated'],
      ru: ['Очень ограниченная инфраструктура', 'Изолированная']
    },
    recommendations: {
      en: ['Rural experience', 'Limited tourist facilities'],
      ru: ['Сельский опыт', 'Ограниченные туристические объекты']
    }
  },
  {
    id: 'melipilla',
    name: { en: 'Melipilla', ru: 'Мелипилья' },
    riskLevel: 'medium',
    description: {
      en: 'Agricultural center west of Santiago.',
      ru: 'Сельскохозяйственный центр к западу от Сантьяго.'
    },
    risks: {
      en: ['Rural roads', 'Limited tourist services'],
      ru: ['Сельские дороги', 'Ограниченные туристические услуги']
    },
    recommendations: {
      en: ['Traditional Chilean countryside', 'Local markets'],
      ru: ['Традиционная чилийская сельская местность', 'Местные рынки']
    }
  },
  {
    id: 'alhue',
    name: { en: 'Alhué', ru: 'Алуэ' },
    riskLevel: 'low',
    description: {
      en: 'Remote rural comuna with natural beauty.',
      ru: 'Удаленная сельская коммуна с природной красотой.'
    },
    risks: {
      en: ['Very isolated', 'Rough roads'],
      ru: ['Очень изолированная', 'Плохие дороги']
    },
    recommendations: {
      en: ['Nature tourism', 'Requires 4x4 vehicle'],
      ru: ['Природный туризм', 'Требуется внедорожник']
    }
  },
  {
    id: 'curacavi',
    name: { en: 'Curacaví', ru: 'Куракави' },
    riskLevel: 'low',
    description: {
      en: 'Rural comuna on route to coast.',
      ru: 'Сельская коммуна на пути к побережью.'
    },
    risks: {
      en: ['Highway safety', 'Limited services'],
      ru: ['Безопасность на шоссе', 'Ограниченные услуги']
    },
    recommendations: {
      en: ['Stop for local fruits', 'Traditional restaurants'],
      ru: ['Остановка для местных фруктов', 'Традиционные рестораны']
    }
  },
  {
    id: 'maria-pinto',
    name: { en: 'María Pinto', ru: 'Мария-Пинто' },
    riskLevel: 'low',
    description: {
      en: 'Small rural comuna with vineyards.',
      ru: 'Небольшая сельская коммуна с виноградниками.'
    },
    risks: {
      en: ['Rural isolation', 'Limited facilities'],
      ru: ['Сельская изоляция', 'Ограниченные удобства']
    },
    recommendations: {
      en: ['Wine tourism', 'Peaceful countryside'],
      ru: ['Винный туризм', 'Спокойная сельская местность']
    }
  },
  {
    id: 'san-pedro',
    name: { en: 'San Pedro', ru: 'Сан-Педро' },
    riskLevel: 'medium',
    description: {
      en: 'Small agricultural comuna.',
      ru: 'Небольшая сельскохозяйственная коммуна.'
    },
    risks: {
      en: ['Very limited infrastructure', 'Isolated'],
      ru: ['Очень ограниченная инфраструктура', 'Изолированная']
    },
    recommendations: {
      en: ['Rural experience only', 'Not typical tourist destination'],
      ru: ['Только сельский опыт', 'Не типичное туристическое направление']
    }
  },
  {
    id: 'talagante',
    name: { en: 'Talagante', ru: 'Талаганте' },
    riskLevel: 'low',
    description: {
      en: 'Provincial town southwest of Santiago.',
      ru: 'Провинциальный город к юго-западу от Сантьяго.'
    },
    risks: {
      en: ['Limited tourist infrastructure', 'Basic safety concerns'],
      ru: ['Ограниченная туристическая инфраструктура', 'Базовые проблемы безопасности']
    },
    recommendations: {
      en: ['Local markets', 'Traditional atmosphere'],
      ru: ['Местные рынки', 'Традиционная атмосфера']
    }
  },
  {
    id: 'el-monte',
    name: { en: 'El Monte', ru: 'Эль-Монте' },
    riskLevel: 'medium',
    description: {
      en: 'Small town on the way to the coast.',
      ru: 'Небольшой город на пути к побережью.'
    },
    risks: {
      en: ['Basic infrastructure', 'Limited services'],
      ru: ['Базовая инфраструктура', 'Ограниченные услуги']
    },
    recommendations: {
      en: ['Brief stops only', 'Not a destination'],
      ru: ['Только короткие остановки', 'Не является пунктом назначения']
    }
  },
  {
    id: 'isla-de-maipo',
    name: { en: 'Isla de Maipo', ru: 'Исла-де-Майпо' },
    riskLevel: 'medium',
    description: {
      en: 'Rural comuna with traditional Chilean culture.',
      ru: 'Сельская коммуна с традиционной чилийской культурой.'
    },
    risks: {
      en: ['Rural roads', 'Limited facilities'],
      ru: ['Сельские дороги', 'Ограниченные удобства']
    },
    recommendations: {
      en: ['Traditional festivals', 'Local wine production'],
      ru: ['Традиционные фестивали', 'Местное производство вина']
    }
  },
  {
    id: 'padre-hurtado',
    name: { en: 'Padre Hurtado', ru: 'Падре-Уртадо' },
    riskLevel: 'low',
    description: {
      en: 'Historic center safer; outskirts less so. Mixed residential and commercial areas.',
      ru: 'Исторический центр безопаснее; окраины менее безопасны. Смешанные жилые и коммерческие районы.'
    },
    risks: {
      en: ['Variable safety', 'Some industrial areas'],
      ru: ['Переменная безопасность', 'Некоторые промышленные районы']
    },
    recommendations: {
      en: ['Mainly residential', 'Limited tourist appeal'],
      ru: ['В основном жилая', 'Ограниченная туристическая привлекательность']
    }
  },
  {
    id: 'penaflor',
    name: { en: 'Peñaflor', ru: 'Пеньяфлор' },
    riskLevel: 'low',
    description: {
      en: 'Town southwest of Santiago.',
      ru: 'Город к юго-западу от Сантьяго.'
    },
    risks: {
      en: ['Basic safety concerns', 'Limited infrastructure'],
      ru: ['Базовые проблемы безопасности', 'Ограниченная инфраструктура']
    },
    recommendations: {
      en: ['Local character', 'Not tourist-oriented'],
      ru: ['Местный колорит', 'Не ориентирован на туристов']
    }
  },
  {
    id: 'cerro-navia',
    name: { en: 'Cerro Navia', ru: 'Серро-Навия' },
    riskLevel: 'very-high',
    description: {
      en: 'Low-income comuna with safety issues.',
      ru: 'Коммуна с низкими доходами и проблемами безопасности.'
    },
    risks: {
      en: ['High crime rates', 'Gang activity', 'Not safe for tourists'],
      ru: ['Высокий уровень преступности', 'Деятельность банд', 'Небезопасно для туристов']
    },
    recommendations: {
      en: ['Avoid this area', 'No tourist infrastructure'],
      ru: ['Избегайте этот район', 'Нет туристической инфраструктуры']
    }
  },
  {
    id: 'conchali',
    name: { en: 'Conchalí', ru: 'Кончали' },
    riskLevel: 'high',
    description: {
      en: 'Northern comuna with crime concerns.',
      ru: 'Северная коммуна с проблемами преступности.'
    },
    risks: {
      en: ['High crime rates', 'Not tourist-friendly'],
      ru: ['Высокий уровень преступности', 'Не подходит для туристов']
    },
    recommendations: {
      en: ['Not recommended for tourists', 'Avoid if possible'],
      ru: ['Не рекомендуется для туристов', 'Избегайте по возможности']
    }
  },
  {
    id: 'huechuraba',
    name: { en: 'Huechuraba', ru: 'Уэчураба' },
    riskLevel: 'medium',
    description: {
      en: 'Lower part less safe, upper residential part safer. Business district with mixed areas. Day time visits recommended.',
      ru: 'Нижняя часть менее безопасна, верхняя жилая часть безопаснее. Деловой район со смешанными зонами. Рекомендуются дневные посещения.'
    },
    risks: {
      en: ['Variable safety by area', 'Some neighborhoods less safe'],
      ru: ['Переменная безопасность по районам', 'Некоторые районы менее безопасны']
    },
    recommendations: {
      en: ['Business district is safer', 'Residential areas vary'],
      ru: ['Деловой район безопаснее', 'Жилые районы различаются']
    }
  },
  {
    id: 'independencia',
    name: { en: 'Independencia', ru: 'Индепенденсия' },
    riskLevel: 'high',
    description: {
      en: 'Central comuna with hospitals and universities.',
      ru: 'Центральная коммуна с больницами и университетами.'
    },
    risks: {
      en: ['Crowded areas', 'Petty crime near hospitals'],
      ru: ['Многолюдные районы', 'Мелкие преступления возле больниц']
    },
    recommendations: {
      en: ['Medical tourism area', 'Use caution in crowds'],
      ru: ['Район медицинского туризма', 'Будьте осторожны в толпе']
    }
  },
  {
    id: 'recoleta',
    name: { en: 'Recoleta', ru: 'Реколета' },
    riskLevel: 'high',
    description: {
      en: 'Markets & cultural sites; some neighborhoods rougher. Mixed safety by area.',
      ru: 'Рынки и культурные объекты; некоторые районы грубее. Смешанная безопасность по районам.'
    },
    risks: {
      en: ['High crime in some areas', 'Street crime common'],
      ru: ['Высокая преступность в некоторых районах', 'Частые уличные преступления']
    },
    recommendations: {
      en: ['La Vega market worth visiting with caution', 'Avoid at night'],
      ru: ['Рынок Ла Вега стоит посетить с осторожностью', 'Избегайте ночью']
    }
  },
  {
    id: 'lo-prado',
    name: { en: 'Lo Prado', ru: 'Ло-Прадо' },
    riskLevel: 'high',
    description: {
      en: 'Western comuna with safety concerns.',
      ru: 'Западная коммуна с проблемами безопасности.'
    },
    risks: {
      en: ['High crime rates', 'Not safe for tourists'],
      ru: ['Высокий уровень преступности', 'Небезопасно для туристов']
    },
    recommendations: {
      en: ['Avoid this area', 'No tourist attractions'],
      ru: ['Избегайте этот район', 'Нет туристических достопримечательностей']
    }
  }
];

const SantiagoComunasMapEnhanced: React.FC = () => {
  const { currentLanguage: language } = useLanguage();
  const [selectedComuna, setSelectedComuna] = useState<ComunaData | null>(null);
  const [geoJsonData, setGeoJsonData] = useState<any>(null);
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'very-high': return '#FF6B6B'; // Coral color for high risk
      case 'high': return '#FFA94D'; // Orange for risky areas
      case 'medium': return '#FFF44F'; // Lemon color for mixed zones
      case 'low': return '#8CC89B'; // Moss color for safe areas
      case 'safest': return '#51CF66'; // Greenish moss for safest areas
      default: return '#6b7280';
    }
  };

  const getRiskTextColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'very-high': return 'text-red-600';
      case 'high': return 'text-orange-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      case 'safest': return 'text-green-700';
      default: return 'text-gray-600';
    }
  };

  const getRiskIcon = (riskLevel: string) => {
    switch (riskLevel) {
      case 'very-high': 
      case 'high': 
        return <AlertTriangle size={20} className="text-red-500" />;
      case 'medium': 
        return <AlertTriangle size={20} className="text-yellow-500" />;
      case 'low': 
      case 'safest':
        return <Shield size={20} className="text-green-500" />;
      default: 
        return <MapPin size={20} className="text-gray-500" />;
    }
  };

  const getRiskLabel = (riskLevel: string) => {
    switch (riskLevel) {
      case 'very-high': return language === 'en' ? 'Never Enter' : 'Никогда не входить';
      case 'high': return language === 'en' ? 'Avoid if Possible' : 'Избегать по возможности';
      case 'medium': return language === 'en' ? 'Daytime Only' : 'Только днем';
      case 'low': return language === 'en' ? 'Safe to Visit' : 'Безопасно для посещения';
      case 'safest': return language === 'en' ? 'Perfect for Tourists' : 'Идеально для туристов';
      default: return '';
    }
  };

  // Load GeoJSON data
  useEffect(() => {
    fetch('/santiago-comunas.json')
      .then(response => response.json())
      .then(data => {
        setGeoJsonData(data);
      })
      .catch(error => {
        console.error('Error loading GeoJSON:', error);
      });
  }, []);

  useEffect(() => {
    if (!mapContainer.current || !geoJsonData) return;

    try {
      // Security checks
      if (MapProtection.detectScraping() || MapProtection.detectIframeUsage()) {
        console.warn('Unauthorized access detected');
        return;
      }

      if (!MapProtection.trackUsage()) {
        console.warn('Usage limit exceeded');
        return;
      }

      // Initialize Mapbox with protected token
      mapboxgl.accessToken = mapboxConfig.getToken();
      mapboxConfig.logUsage('SantiagoComunasMapEnhanced');

      // Initialize map with professional settings
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-70.6483, -33.4569], // Santiago coordinates
        zoom: 8.5,
        minZoom: 8.5,
        maxZoom: 15,
        maxBounds: [
          [-71.2, -33.8], // Southwest bound
          [-70.0, -33.1]  // Northeast bound
        ]
      });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Apply protection measures
    MapProtection.restrictMapInteractions(map.current);
    MapProtection.addMapWatermark(map.current);

    // Add scale control
    map.current.addControl(new mapboxgl.ScaleControl({
      maxWidth: 200,
      unit: 'metric'
    }), 'bottom-left');

    // Handle resize events to maintain zoom level
    map.current.on('resize', () => {
      if (map.current && map.current.getZoom() > 8.5) {
        map.current.setZoom(8.5);
      }
    });

    map.current.on('load', () => {
      // Ensure minimum zoom on load (especially for mobile)
      if (map.current) {
        map.current.setZoom(8.5);
      }
      // Add GeoJSON source
      map.current!.addSource('comunas', {
        type: 'geojson',
        data: geoJsonData
      });

      // Create color expression based on risk levels
      const colorExpression: any = ['case'];
      
      geoJsonData.features.forEach((feature: any) => {
        const comunaName = feature.properties.comuna;
        let comunaId = comunaNameMapping[comunaName];
        
        // If not found, try normalized matching
        if (!comunaId) {
          // Normalize the name from GeoJSON
          const normalizedName = normalizeComunaName(comunaName);
          
          // Try to find by normalized name directly
          comunaId = normalizedName;
          
          // Check if this ID exists in our data
          const exists = comunasData.some(c => c.id === comunaId);
          if (!exists) {
            // Try matching against normalized keys
            const matchingEntry = Object.entries(comunaNameMapping).find(([key, _value]) => {
              return normalizeComunaName(key) === normalizedName;
            });
            if (matchingEntry) {
              comunaId = matchingEntry[1];
            }
          }
        }
        
        const comunaData = comunasData.find(c => c.id === comunaId);
        const riskLevel = comunaData ? comunaData.riskLevel : 'medium';
        const color = getRiskColor(riskLevel);
        
        // Add condition for this comuna
        colorExpression.push(['==', ['get', 'comuna'], comunaName]);
        colorExpression.push(color);
      });
      
      // Default color
      colorExpression.push('#86C8C7');

      // Add comuna fill layer with dynamic colors
      map.current!.addLayer({
        id: 'comunas-fill',
        type: 'fill',
        source: 'comunas',
        paint: {
          'fill-color': colorExpression,
          'fill-opacity': 0.6
        }
      });

      // Add comuna boundaries layer
      map.current!.addLayer({
        id: 'comunas-boundaries',
        type: 'line',
        source: 'comunas',
        paint: {
          'line-color': '#333',
          'line-width': 1,
          'line-opacity': 0.8
        }
      });

      // Removed highlight layer - no hover effects

      // Add labels layer to display comuna names
      map.current!.addLayer({
        id: 'comunas-labels',
        type: 'symbol',
        source: 'comunas',
        layout: {
          'text-field': '{comuna}',
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          'text-size': 11,
          'text-transform': 'none',
          'text-letter-spacing': 0.05,
          'text-anchor': 'center',
          'text-allow-overlap': false,
          'text-ignore-placement': false
        },
        paint: {
          'text-color': '#333',
          'text-halo-color': '#fff',
          'text-halo-width': 1.5,
          'text-opacity': 0.9
        }
      });

      // Mouse events - only cursor change, no highlight
      map.current!.on('mouseenter', 'comunas-fill', () => {
        map.current!.getCanvas().style.cursor = 'pointer';
      });

      map.current!.on('mouseleave', 'comunas-fill', () => {
        map.current!.getCanvas().style.cursor = '';
      });

      // Click event
      map.current!.on('click', 'comunas-fill', (e) => {
        if (e.features && e.features[0]) {
          const comunaName = e.features[0].properties?.comuna;
          // Try direct mapping first, then normalized version
          let comunaId = comunaNameMapping[comunaName];
          
          // If not found, try finding by normalized name
          if (!comunaId && comunaName) {
            const normalizedName = normalizeComunaName(comunaName);
            // Find matching comuna by comparing normalized names
            const matchingEntry = Object.entries(comunaNameMapping).find(([key, _value]) => {
              return normalizeComunaName(key) === normalizedName;
            });
            if (matchingEntry) {
              comunaId = matchingEntry[1];
            }
          }
          
          let comunaData = comunasData.find(c => c.id === comunaId);
          
          // If no data found, create a default entry
          if (!comunaData && comunaName) {
            comunaData = {
              id: normalizeComunaName(comunaName),
              name: {
                en: comunaName,
                ru: comunaName
              },
              riskLevel: 'medium',
              description: {
                en: `${comunaName} is a comuna in the Santiago Metropolitan Region.`,
                ru: `${comunaName} - это коммуна в столичном регионе Сантьяго.`
              },
              risks: {
                en: ['No specific risk data available', 'Use general precautions'],
                ru: ['Нет конкретных данных о рисках', 'Используйте общие меры предосторожности']
              },
              recommendations: {
                en: ['Exercise normal caution', 'Research the area before visiting'],
                ru: ['Соблюдайте обычную осторожность', 'Изучите район перед посещением']
              }
            };
          }
          
          if (comunaData) {
            setSelectedComuna(comunaData);
            
            // Zoom to comuna
            const bounds = new mapboxgl.LngLatBounds();
            const geometry = e.features[0].geometry;
            
            if (geometry.type === 'Polygon') {
              geometry.coordinates[0].forEach((coord: number[]) => {
                bounds.extend(coord as [number, number]);
              });
              
              map.current!.fitBounds(bounds, {
                padding: 100,
                duration: 1000
              });
            }
          }
        }
      });
    });

    } catch (error) {
      console.error('Failed to initialize Mapbox Enhanced:', error);
      // Fallback: show error message or disable map
    }

    return () => {
      map.current?.remove();
    };
  }, [geoJsonData]);

  // Removed hover popup functionality
  // The map will only show information when clicked

  return (
    <div className="comunas-map-wrapper" style={{ width: '100%' }}>
      <div className="comunas-map-container" style={{ position: 'relative', width: '100%', height: '500px', borderRadius: '12px', overflow: 'hidden' }}>
        <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />
      
      {/* Legend */}
      <div className="absolute top-4 left-4 bg-gray-900/90 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-gray-700">
        <h3 className="font-bold text-sm mb-2 flex items-center gap-2 text-white">
          <Info size={16} className="text-cyan-400" />
          {language === 'en' ? 'Safety Levels' : 'Уровни безопасности'}
        </h3>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: getRiskColor('safest') }} />
            <span className="text-xs text-gray-300">{language === 'en' ? 'Safest & Tourist-Friendly' : 'Самый безопасный'}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: getRiskColor('low') }} />
            <span className="text-xs text-gray-300">{language === 'en' ? 'Generally Safe' : 'В целом безопасно'}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: getRiskColor('medium') }} />
            <span className="text-xs text-gray-300">{language === 'en' ? 'Mixed / Moderate' : 'Смешанный'}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: getRiskColor('high') }} />
            <span className="text-xs text-gray-300">{language === 'en' ? 'Risky / Limited Interest' : 'Рискованно'}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: getRiskColor('very-high') }} />
            <span className="text-xs text-gray-300">{language === 'en' ? 'High Risk - Avoid' : 'Избегать'}</span>
          </div>
        </div>
      </div>

      {/* Selected Comuna Details */}
      {selectedComuna && (
        <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-gray-700">
          <button
            onClick={() => setSelectedComuna(null)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-200"
          >
            ×
          </button>
          
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-bold text-white">{selectedComuna.name?.[language as keyof typeof selectedComuna.name] || selectedComuna.name?.en || ''}</h3>
            <div className="flex items-center gap-1">
              {getRiskIcon(selectedComuna.riskLevel)}
              <span className={`text-sm font-medium ${getRiskTextColor(selectedComuna.riskLevel)}`}>
                {getRiskLabel(selectedComuna.riskLevel)}
              </span>
            </div>
          </div>

          <p className="text-sm text-gray-300 mb-3">
            {selectedComuna.description?.[language as keyof typeof selectedComuna.description] || ''}
          </p>

          {selectedComuna.risks?.[language as keyof typeof selectedComuna.risks] && (
            <div className="mb-3">
              <h4 className="text-sm font-bold mb-1 text-red-400">
                {language === 'en' ? 'Risks' : 'Риски'}
              </h4>
              <ul className="text-xs text-gray-300 space-y-1">
                {selectedComuna.risks[language as keyof typeof selectedComuna.risks]?.map((risk: string, index: number) => (
                  <li key={index} className="flex items-start gap-1">
                    <span className="text-red-500 mt-0.5">•</span>
                    {risk}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {selectedComuna.recommendations?.[language as keyof typeof selectedComuna.recommendations] && (
            <div>
              <h4 className="text-sm font-bold mb-1 text-green-400">
                {language === 'en' ? 'Recommendations' : 'Рекомендации'}
              </h4>
              <ul className="text-xs text-gray-300 space-y-1">
                {selectedComuna.recommendations[language as keyof typeof selectedComuna.recommendations]?.map((rec: string, index: number) => (
                  <li key={index} className="flex items-start gap-1">
                    <span className="text-green-500 mt-0.5">✓</span>
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      </div>
      
      {/* Legend under the map */}
      <div className="map-legend-bottom" style={{ 
        marginTop: '20px', 
        padding: '20px', 
        backgroundColor: 'var(--color-background-secondary)', 
        borderRadius: '8px',
        border: '1px solid var(--color-border)'
      }}>
        <h4 className="text-sm font-semibold mb-4 text-center" style={{ color: 'var(--color-text-primary)' }}>
          {language === 'en' ? 'Risk Level Legend' : 'Легенда уровней риска'}
        </h4>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: window.innerWidth > 768 ? 'repeat(5, 1fr)' : '1fr', 
          gap: '8px',
          justifyItems: 'start'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            padding: '4px'
          }}>
            <div style={{ 
              width: '12px', 
              height: '12px', 
              borderRadius: '50%', 
              backgroundColor: getRiskColor('safest'),
              flexShrink: 0,
              border: '1px solid rgba(255,255,255,0.2)'
            }} />
            <span className="text-sm whitespace-nowrap" style={{ color: 'var(--color-text-secondary)' }}>
              {language === 'en' ? 'Perfect for Tourists' : 'Идеально для туристов'}
            </span>
          </div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            padding: '4px'
          }}>
            <div style={{ 
              width: '12px', 
              height: '12px', 
              borderRadius: '50%', 
              backgroundColor: getRiskColor('low'),
              flexShrink: 0,
              border: '1px solid rgba(255,255,255,0.2)'
            }} />
            <span className="text-sm whitespace-nowrap" style={{ color: 'var(--color-text-secondary)' }}>
              {language === 'en' ? 'Safe to Visit' : 'Безопасно для посещения'}
            </span>
          </div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            padding: '4px'
          }}>
            <div style={{ 
              width: '12px', 
              height: '12px', 
              borderRadius: '50%', 
              backgroundColor: getRiskColor('medium'),
              flexShrink: 0,
              border: '1px solid rgba(255,255,255,0.2)'
            }} />
            <span className="text-sm whitespace-nowrap" style={{ color: 'var(--color-text-secondary)' }}>
              {language === 'en' ? 'Daytime Only' : 'Только днем'}
            </span>
          </div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            padding: '4px'
          }}>
            <div style={{ 
              width: '12px', 
              height: '12px', 
              borderRadius: '50%', 
              backgroundColor: getRiskColor('high'),
              flexShrink: 0,
              border: '1px solid rgba(255,255,255,0.2)'
            }} />
            <span className="text-sm whitespace-nowrap" style={{ color: 'var(--color-text-secondary)' }}>
              {language === 'en' ? 'Avoid if Possible' : 'Избегать по возможности'}
            </span>
          </div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            padding: '4px'
          }}>
            <div style={{ 
              width: '12px', 
              height: '12px', 
              borderRadius: '50%', 
              backgroundColor: getRiskColor('very-high'),
              flexShrink: 0,
              border: '1px solid rgba(255,255,255,0.2)'
            }} />
            <span className="text-sm whitespace-nowrap" style={{ color: 'var(--color-text-secondary)' }}>
              {language === 'en' ? 'Never Enter' : 'Никогда не входить'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SantiagoComunasMapEnhanced;
