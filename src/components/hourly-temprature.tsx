import { Suspense, lazy } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Skeleton } from './ui/skeleton';
import type { ForecastData } from '@/api/types';

const TemperatureChart = lazy(() => import('./temperature-chart'));

interface HourlyTemperatureProps {
	data: ForecastData;
}

export function HourlyTemperature({ data }: HourlyTemperatureProps) {
	const chartData = data.list.slice(0, 8).map((item) => ({
		time: new Date(item.dt * 1000).toLocaleTimeString([], { hour: 'numeric' }),
		temp: Math.round(item.main.temp),
		feels_like: Math.round(item.main.feels_like),
	}));

	return (
		<Card className="flex-1">
			<CardHeader>
				<CardTitle>Today's Temperature</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="h-[200px] w-full">
					<Suspense fallback={<Skeleton className="h-full w-full" />}>
						<TemperatureChart data={chartData} />
					</Suspense>
				</div>
			</CardContent>
		</Card>
	);
}
