import { series } from './data.js';
import { serie } from './serie.js';



function renderSeriesTable(series: serie[]): void {
const tableBody: HTMLElement = document.getElementById('tabla-de-series')!;
let totalSeasons: number = 0;
const numeroSeries = series.length;
  series.forEach(x => {
    let row = document.createElement('tr');
    row.innerHTML = 
      `<td>${x.id}</td>
      <td>${x.name}</td>
      <td>${x.channel}</td>
      <td>${x.seasons}</td>`
    ;
    tableBody.appendChild(row);
    totalSeasons += x.seasons;
  });
  const promedio = totalSeasons / numeroSeries;
  const promedioRow = document.createElement('tr');
    promedioRow.innerHTML = 
        `<td colspan="3">Promedio de temporadas</td>
        <td>${promedio}</td>`
    ;
    tableBody.appendChild(promedioRow);

}
renderSeriesTable(series);