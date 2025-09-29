# Mapbox Setup Instructions

## Getting Your Free Mapbox Token

1. **Sign up for Mapbox** (free): https://account.mapbox.com/auth/signup/
2. **Go to Access Tokens**: https://account.mapbox.com/access-tokens/
3. **Copy your default public token** (starts with `pk.`)
4. **Create a `.env` file** in the project root:

```env
VITE_MAPBOX_TOKEN=pk.your_actual_token_here
```

## Free Tier Benefits

- ✅ **50,000 map views per month** (free)
- ✅ **No credit card required** for basic usage
- ✅ **Full access** to maps, geocoding, and routing
- ✅ **Custom styling** and interactive features

## Current Status

The map is currently using a demo token that works but has limited usage. For production use, please add your own token to the `.env` file.

## Features Implemented

- 🗺️ **Interactive Mapbox map** centered on Santiago
- 📍 **Color-coded markers** for each comuna based on risk level
- 🎯 **Click to select** comunas for detailed information
- 🔍 **Hover popups** with quick risk assessment
- 🌐 **Bilingual support** (English/Russian)
- 📱 **Mobile responsive** with touch support
- 🎨 **Custom styling** matching the app's Vogue aesthetic
