import { Serie } from "./serie.js";
import { series } from "./data.js";

let seriesBody: HTMLElement = document.getElementById("series")!;
const promedioTemporadas: HTMLElement = document.getElementById("AverageSeasons")!;

renderCoursesInTable(series);
promedioTemporadas.innerHTML = `${getAverageSeasons(series)}`

function renderCoursesInTable(series: Serie[]): void {
    series.forEach(x => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${x.id}</td>
                            <td>${x.name}</td>
                           <td>${x.channel}</td>
                           <td>${x.seasons}</td>`;
        seriesBody.appendChild(trElement);
    });
}

function getAverageSeasons(series: Serie[]): number {
    let AverageSeasons: number = 0;
    let TotalSeasons: number = 0;
    series.forEach((serie) => TotalSeasons = TotalSeasons + serie.seasons);
    AverageSeasons = TotalSeasons / series.length;
    return AverageSeasons;
  }

