# SkyWatch Weather App

A modern weather application built with React, Vite, and TanStack Query, featuring real-time weather updates, forecasts, and a clean user interface.

## Features

- Real-time weather information
- Hourly and daily forecasts
- Temperature charts and weather details
- Favorite cities management
- Dark/Light theme support
- Responsive design
- Geolocation support

## Prerequisites

- Node.js (16.x or higher)
- npm or yarn
- OpenWeather API key ([Get it here](https://openweathermap.org/api))

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Create a `.env` file in the root directory:
```
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

## Running the Application

### Development mode
```bash
npm run dev
# or
yarn dev
```
The application will start on http://localhost:5173

### Production build
```bash
npm run build
npm run preview
# or
yarn build
yarn preview
```

## Tech Stack

- React
- TypeScript
- Vite
- TanStack Query
- Tailwind CSS
- Shadcn UI
- Recharts
- React Router DOM