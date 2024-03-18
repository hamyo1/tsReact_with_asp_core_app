import { useEffect, useState } from 'react';
import './App.css';
import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface Forecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary?: string;
};

const columns: GridColDef[] = [
    { field: 'date', headerName: 'Date', width: 150, editable: true },
    { field: 'temperatureC', headerName: 'Temp. (C)', width: 150, editable: true },
    { field: 'temperatureF', headerName: 'Temp. (F)', width: 150, editable: true },
    { field: 'summary', headerName: 'Summary', width: 150, editable: true },
];

const App = () => {
    const [forecasts, setForecasts] = useState<Forecast[]>([]);

    useEffect(() => {
        populateWeatherData();
    }, []);

    async function populateWeatherData() {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        setForecasts(data);
    }

    const rows = forecasts.map((forecast, index) => ({
        id: index,
        ...forecast
    }));

    return (
        <div>
            <h1 id="tabelLabel">Weather forecast</h1>
            <DataGrid
                rows={rows}
                columns={columns}
            />
            <p>This component demonstrates fetching data from the server.</p>
        </div>
    );
}

export default App;
