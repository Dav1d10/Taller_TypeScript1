import { series } from "./data.js";

var seriesBody = document.getElementById("series");
var promedioTemporadas = document.getElementById("AverageSeasons");
renderSeriesInTable(series);
promedioTemporadas.innerHTML = "".concat(getAverageSeasons(series));

function renderSeriesInTable(series) {
    series.forEach(function (x) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td style=\"font-weight: bold;\">".concat(x.id, "</td>\n<td style=\"color: rgb(49, 171, 255);\">").concat(x.name, "</td>\n<td>").concat(x.channel, "</td>\n<td>").concat(x.seasons, "</td>");
        seriesBody.appendChild(trElement);
    });
}

function getAverageSeasons(series) {
    var AverageSeasons = 0;
    var TotalSeasons = 0;
    series.forEach(function (serie) { return TotalSeasons = TotalSeasons + serie.seasons; });
    AverageSeasons = TotalSeasons / series.length;
    return AverageSeasons;
}