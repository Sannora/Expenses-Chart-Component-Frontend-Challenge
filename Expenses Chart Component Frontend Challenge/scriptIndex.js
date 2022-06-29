var data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

var graphs = document.querySelectorAll(".graphs");
var column = document.querySelectorAll(".column");
var dailyAmount = document.querySelectorAll(".column .amountPerDay");

console.log(column);

graphs.forEach((graph) => {
  graph.addEventListener("mouseover", (hoverEvent) => {
    const hoveredGraph = hoverEvent.target;

    if (graph.className != "graphActive") {
      graph.className = "graphHovered";
    }

    for (i = 0; i < dailyAmount.length; i++) {
      if (graphs[i] == hoveredGraph && graphs[i].className != "graphActive") {
        dailyAmount[i].className = "amountPerDayActive";
      } else if (graphs[i].className != "graphActive") {
        dailyAmount[i].className = "amountPerDay";
      }
    }

    graphs.forEach((graph) => {
      if (graph != hoveredGraph && graph.className != "graphActive") {
        graph.className = "graphs";
      }
    });
  });
  graph.addEventListener("click", (clickEvent) => {
    const currentGraph = clickEvent.target;
    graph.className = "graphActive";

    for (i = 0; i < dailyAmount.length; i++) {
      if (graphs[i] == currentGraph) {
        dailyAmount[i].className = "amountPerDayActive";
      } else if (graphs[i].className != "graphHovered") {
        dailyAmount[i].className = "amountPerDay";
      }
    }

    graphs.forEach((graph) => {
      if (graph != currentGraph) {
        graph.className = "graphs";
      }
    });
  });
});

let totalSpending = 0;
let monRatio = data[0].amount * 48;
let tueRatio = data[1].amount * 48;
let wedRatio = data[2].amount * 48;
let thuRatio = data[3].amount * 48;
let friRatio = data[4].amount * 48;
let satRatio = data[5].amount * 48;
let sunRatio = data[6].amount * 48;

var monGraph = document.getElementById("graphMon");
var tueGraph = document.getElementById("graphTue");
var wedGraph = document.getElementById("graphWed");
var thuGraph = document.getElementById("graphThu");
var friGraph = document.getElementById("graphFri");
var satGraph = document.getElementById("graphSat");
var sunGraph = document.getElementById("graphSun");

for (let i = 0; i < data.length; i++) {
  totalSpending += data[i].amount;
}

monGraph.style.height = monRatio / totalSpending + "em";
tueGraph.style.height = tueRatio / totalSpending + "em";
wedGraph.style.height = wedRatio / totalSpending + "em";
thuGraph.style.height = thuRatio / totalSpending + "em";
friGraph.style.height = friRatio / totalSpending + "em";
satGraph.style.height = satRatio / totalSpending + "em";
sunGraph.style.height = sunRatio / totalSpending + "em";
