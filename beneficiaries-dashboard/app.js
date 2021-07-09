//Get elements from the DOM
const burger = document.querySelector('.burger');
const asideContent = document.querySelector('.aside-content');

//Toggle navbar and hamburger menu
burger.addEventListener('click', ()=>{
  asideContent.classList.toggle("active");
  burger.classList.toggle('toggle');
})


// Close navbar when link is clicked
const navLink = document.querySelectorAll(".link");
navLink.forEach(link => link.addEventListener("click", ()=>{
  asideContent.classList.remove("active");
  burger.classList.toggle('toggle');
}));


//  Progress bar SVG Javascript
function createCircleChart(percent, color, size, stroke, msg) {
    let svg = `<svg class="mkc_circle-chart" viewbox="0 0 36 36" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
        <path class="mkc_circle-bg" stroke="#e0ffff" stroke-width="${stroke}" fill="none" d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"/>
        <path class="mkc_circle" stroke="${color}" stroke-width="${stroke}" stroke-dasharray="${percent},100" stroke-linecap="round" fill="none"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831" />
        <text class="mkc_info" x="50%" y="40%" alignment-baseline="central" text-anchor="middle" font-weight="600" fill="#333333" font-size="5">${percent}%</text>
        <text class="mkc_info" x="50%" y="60%" alignment-baseline="central" text-anchor="middle" font-weight="600" fill="#333333" font-size="4.5">${msg}</text>
    </svg>`;
    return svg;
}

let charts = document.getElementsByClassName('mkCharts');

for(let i=0;i<charts.length;i++) {
    let chart = charts[i];
    let percent = chart.dataset.percent;
    let color = ('color' in chart.dataset) ? chart.dataset.color : "#0072b1";
    let size = ('size' in chart.dataset) ? chart.dataset.size : "100";
    let stroke = ('stroke' in chart.dataset) ? chart.dataset.stroke : "1";
    let msg = ('msg' in chart.dataset) ? chart.dataset.msg : "Loading";
    charts[i].innerHTML = createCircleChart(percent, color, size, stroke, msg);
}