import { useQuery } from '@tanstack/react-query';
import { weatherAPI } from '@/api/weather';
import type { Coordinates } from '@/api/types';

export const WEATHER_KEYS = {
	weather: (coords: Coordinates) => ['weather', coords] as const,
	forecast: (coords: Coordinates) => ['forecast', coords] as const,
	location: (coords: Coordinates) => ['location', coords] as const,
	search: (query: string) => ['location-search', query] as const,
} as const;

export function useWeatherQuery(coordinates: Coordinates | null) {
	return useQuery({
		queryKey: WEATHER_KEYS.weather(coordinates ?? { lat: 0, lon: 0 }),
		queryFn: () => (coordinates ? weatherAPI.getCurrentWeather(coordinates) : null),
		enabled: !!coordinates,
		gcTime: 15 * 60 * 1000, // 15 minutes
		staleTime: 5 * 60 * 1000, // 5 minutes
	});
}

export function useForecastQuery(coordinates: Coordinates | null) {
	return useQuery({
		queryKey: WEATHER_KEYS.forecast(coordinates ?? { lat: 0, lon: 0 }),
		queryFn: () => (coordinates ? weatherAPI.getForecast(coordinates) : null),
		enabled: !!coordinates,
		gcTime: 30 * 60 * 1000, // 30 minutes
		staleTime: 10 * 60 * 1000, // 10 minutes
	});
}

export function useReverseGeocodeQuery(coordinates: Coordinates | null) {
	return useQuery({
		queryKey: WEATHER_KEYS.location(coordinates ?? { lat: 0, lon: 0 }),
		queryFn: () => (coordinates ? weatherAPI.reverseGeocode(coordinates) : null),
		enabled: !!coordinates,
	});
}

export function useLocationSearch(query: string) {
	return useQuery({
		queryKey: WEATHER_KEYS.search(query),
		queryFn: () => weatherAPI.searchLocations(query),
		enabled: query.length >= 3,
	});
}
