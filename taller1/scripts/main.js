import { series } from './data.js';
function renderSeriesTable(series) {
    var tableBody = document.getElementById('tabla-de-series');
    var totalSeasons = 0;
    var numeroSeries = series.length;
    series.forEach(function (x) {
        var row = document.createElement('tr');
        row.innerHTML =
            "<td>".concat(x.id, "</td>\n      <td>").concat(x.name, "</td>\n      <td>").concat(x.channel, "</td>\n      <td>").concat(x.seasons, "</td>");
        tableBody.appendChild(row);
        totalSeasons += x.seasons;
    });
    var promedio = totalSeasons / numeroSeries;
    var promedioRow = document.createElement('tr');
    promedioRow.innerHTML =
        "<td colspan=\"3\">Promedio de temporadas</td>\n        <td>".concat(promedio, "</td>");
    tableBody.appendChild(promedioRow);
}
renderSeriesTable(series);
