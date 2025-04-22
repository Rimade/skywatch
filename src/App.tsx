import { Suspense, lazy } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from './components/ui/sonner';
import { Layout } from './components/layout';
import { ThemeProvider } from './context/theme-provider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WeatherSkeleton from './components/loading-skeleton';

const WeatherDashboard = lazy(() => import('./pages/weather-dashboard'));
const CityPage = lazy(() => import('./pages/city-page'));

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 10 * 60 * 1000, // 10 minutes
			gcTime: 15 * 60 * 1000, // 15 minutes
			retry: false,
			refetchOnWindowFocus: false,
		},
	},
});

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<ThemeProvider defaultTheme="dark">
					<Layout>
						<Suspense fallback={<WeatherSkeleton />}>
							<Routes>
								<Route path="/" element={<WeatherDashboard />} />
								<Route path="/city/:cityName" element={<CityPage />} />
							</Routes>
						</Suspense>
					</Layout>
					<Toaster richColors />
				</ThemeProvider>
			</BrowserRouter>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default App;
