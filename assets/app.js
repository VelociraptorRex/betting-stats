const chartData = [{"n": 0, "xLabel": "START", "match": "Старт турнира", "team1": {"name": "Старт", "code": "START", "flag": "•"}, "team2": {"name": "турнира", "code": "", "flag": ""}, "friendBet": "—", "friendCoef": 0, "friendBank": 1000, "friendProfit": 0, "yourBet": "—", "yourCoef": 0, "yourBank": 1000, "yourProfit": 0}, {"n": 1, "xLabel": "KOR-CZE", "match": "Южная Корея — Чехия", "team1": {"name": "Южная Корея", "code": "KOR", "flag": "🇰🇷"}, "team2": {"name": "Чехия", "code": "CZE", "flag": "🇨🇿"}, "friendBet": "1-1", "friendCoef": 6.3, "friendBank": 900, "friendProfit": -100, "yourBet": "ОЗ", "yourCoef": 1.74, "yourBank": 1074, "yourProfit": 74}, {"n": 2, "xLabel": "CAN-BIH", "match": "Канада — Босния и Герцеговина", "team1": {"name": "Канада", "code": "CAN", "flag": "🇨🇦"}, "team2": {"name": "Босния и Герцеговина", "code": "BIH", "flag": "🇧🇦"}, "friendBet": "ЖК ТБ(3,5)", "friendCoef": 1.74, "friendBank": 974, "friendProfit": 74, "yourBet": "П1", "yourCoef": 1.82, "yourBank": 974, "yourProfit": -100}, {"n": 3, "xLabel": "USA-PAR", "match": "США — Парагвай", "team1": {"name": "США", "code": "USA", "flag": "🇺🇸"}, "team2": {"name": "Парагвай", "code": "PAR", "flag": "🇵🇾"}, "friendBet": "x2", "friendCoef": 1.85, "friendBank": 874, "friendProfit": -100, "yourBet": "П1", "yourCoef": 1.93, "yourBank": 1067, "yourProfit": 93}, {"n": 4, "xLabel": "QAT-SUI", "match": "Катар — Швейцария", "team1": {"name": "Катар", "code": "QAT", "flag": "🇶🇦"}, "team2": {"name": "Швейцария", "code": "SUI", "flag": "🇨🇭"}, "friendBet": "0-0", "friendCoef": 18.0, "friendBank": 774, "friendProfit": -100, "yourBet": "Забьёт ровно одна команда — да", "yourCoef": 1.66, "yourBank": 967, "yourProfit": -100}, {"n": 5, "xLabel": "BRA-MAR", "match": "Бразилия — Марокко", "team1": {"name": "Бразилия", "code": "BRA", "flag": "🇧🇷"}, "team2": {"name": "Марокко", "code": "MAR", "flag": "🇲🇦"}, "friendBet": "1-0", "friendCoef": 6.2, "friendBank": 674, "friendProfit": -100, "yourBet": "П2 с Ф(+1,5)", "yourCoef": 1.38, "yourBank": 1005, "yourProfit": 38}, {"n": 6, "xLabel": "HAI-SCO", "match": "Гаити — Шотландия", "team1": {"name": "Гаити", "code": "HAI", "flag": "🇭🇹"}, "team2": {"name": "Шотландия", "code": "SCO", "flag": "🏴"}, "friendBet": "Угловые: ТБ(6,5)", "friendCoef": 1.13, "friendBank": 687, "friendProfit": 13, "yourBet": "Угловые: П2 с Ф(-1,5)", "yourCoef": 1.66, "yourBank": 905, "yourProfit": -100}, {"n": 7, "xLabel": "AUS-TUR", "match": "Австралия — Турция", "team1": {"name": "Австралия", "code": "AUS", "flag": "🇦🇺"}, "team2": {"name": "Турция", "code": "TUR", "flag": "🇹🇷"}, "friendBet": "П2", "friendCoef": 1.71, "friendBank": 587, "friendProfit": -100, "yourBet": "Пенальти", "yourCoef": 3.1, "yourBank": 805, "yourProfit": -100}, {"n": 8, "xLabel": "GER-CUW", "match": "Германия — Кюрасао", "team1": {"name": "Германия", "code": "GER", "flag": "🇩🇪"}, "team2": {"name": "Кюрасао", "code": "CUW", "flag": "🇨🇼"}, "friendBet": "Хаверц забьёт", "friendCoef": 1.52, "friendBank": 639, "friendProfit": 52, "yourBet": "ТМ > 5,5", "yourCoef": 3.2, "yourBank": 1025, "yourProfit": 220}, {"n": 9, "xLabel": "NED-JPN", "match": "Нидерланды — Япония", "team1": {"name": "Нидерланды", "code": "NED", "flag": "🇳🇱"}, "team2": {"name": "Япония", "code": "JPN", "flag": "🇯🇵"}, "friendBet": "1-1", "friendCoef": 7.2, "friendBank": 539, "friendProfit": -100, "yourBet": "Первый гол позже 30,5 минуты", "yourCoef": 1.81, "yourBank": 1106, "yourProfit": 81}, {"n": 10, "xLabel": "CIV-ECU", "match": "Кот д'Ивуар — Эквадор", "team1": {"name": "Кот д'Ивуар", "code": "CIV", "flag": "🇨🇮"}, "team2": {"name": "Эквадор", "code": "ECU", "flag": "🇪🇨"}, "friendBet": "Удаление будет", "friendCoef": 4.9, "friendBank": 439, "friendProfit": -100, "yourBet": "ЖК: П1", "yourCoef": 2.34, "yourBank": 1240, "yourProfit": 134}, {"n": 11, "xLabel": "SWE-TUN", "match": "Швеция — Тунис", "team1": {"name": "Швеция", "code": "SWE", "flag": "🇸🇪"}, "team2": {"name": "Тунис", "code": "TUN", "flag": "🇹🇳"}, "friendBet": "Ничья в одном из таймов", "friendCoef": 1.43, "friendBank": 339, "friendProfit": -100, "yourBet": "П1 хотя бы в одном из таймов", "yourCoef": 1.45, "yourBank": 1285, "yourProfit": 45}, {"n": 12, "xLabel": "ESP-CPV", "match": "Испания — Кабо-Верде", "team1": {"name": "Испания", "code": "ESP", "flag": "🇪🇸"}, "team2": {"name": "Кабо-Верде", "code": "CPV", "flag": "🇨🇻"}, "friendBet": "Ферран Торрес забьёт", "friendCoef": 1.83, "friendBank": 239, "friendProfit": -100, "yourBet": "П1 и тотал Испании < 3,5", "yourCoef": 1.84, "yourBank": 1185, "yourProfit": -100}, {"n": 13, "xLabel": "BEL-EGY", "match": "Бельгия — Египет", "team1": {"name": "Бельгия", "code": "BEL", "flag": "🇧🇪"}, "team2": {"name": "Египет", "code": "EGY", "flag": "🇪🇬"}, "friendBet": "Обе забьют", "friendCoef": 1.95, "friendBank": 334, "friendProfit": 95, "yourBet": "Кевин де Брёйне: удары в створ > 0,5", "yourCoef": 1.5, "yourBank": 1235, "yourProfit": 50}, {"n": 14, "xLabel": "KSA-URU", "match": "Саудовская Аравия — Уругвай", "team1": {"name": "Саудовская Аравия", "code": "KSA", "flag": "🇸🇦"}, "team2": {"name": "Уругвай", "code": "URU", "flag": "🇺🇾"}, "friendBet": "П2", "friendCoef": 1.47, "friendBank": 234, "friendProfit": -100, "yourBet": "Штанга/перекладина будет", "yourCoef": 2.44, "yourBank": 1379, "yourProfit": 144}, {"n": 15, "xLabel": "IRN-NZL", "match": "Иран — Новая Зеландия", "team1": {"name": "Иран", "code": "IRN", "flag": "🇮🇷"}, "team2": {"name": "Новая Зеландия", "code": "NZL", "flag": "🇳🇿"}, "friendBet": "Забьёт ровно одна команда — да", "friendCoef": 2.01, "friendBank": 134, "friendProfit": -100, "yourBet": "П1 и ТМ < 3,5", "yourCoef": 2.25, "yourBank": 1279, "yourProfit": -100}, {"n": 16, "xLabel": "FRA-SEN", "match": "Франция — Сенегал", "team1": {"name": "Франция", "code": "FRA", "flag": "🇫🇷"}, "team2": {"name": "Сенегал", "code": "SEN", "flag": "🇸🇳"}, "friendBet": "Обе забьют", "friendCoef": 2.01, "friendBank": 235, "friendProfit": 101, "yourBet": "Тотал офсайдов > 2,5", "yourCoef": 1.81, "yourBank": 1360, "yourProfit": 81}, {"n": 17, "xLabel": "IRQ-NOR", "match": "Ирак — Норвегия", "team1": {"name": "Ирак", "code": "IRQ", "flag": "🇮🇶"}, "team2": {"name": "Норвегия", "code": "NOR", "flag": "🇳🇴"}, "friendBet": "Эрлинг Холанн — дубль", "friendCoef": 3.0, "friendBank": 435, "friendProfit": 200, "yourBet": "П2 с Ф(-3)", "yourCoef": 3.9, "yourBank": 1360, "yourProfit": 0}, {"n": 18, "xLabel": "ARG-ALG", "match": "Аргентина — Алжир", "team1": {"name": "Аргентина", "code": "ARG", "flag": "🇦🇷"}, "team2": {"name": "Алжир", "code": "ALG", "flag": "🇩🇿"}, "friendBet": "П1 и обе забьют", "friendCoef": 3.56, "friendBank": 335, "friendProfit": -100, "yourBet": "Сухая П1 и ТМ < 3,5", "yourCoef": 2.34, "yourBank": 1494, "yourProfit": 134}, {"n": 19, "xLabel": "AUT-JOR", "match": "Австрия — Иордания", "team1": {"name": "Австрия", "code": "AUT", "flag": "🇦🇹"}, "team2": {"name": "Иордания", "code": "JOR", "flag": "🇯🇴"}, "friendBet": "Сухая П1", "friendCoef": 2.07, "friendBank": 235, "friendProfit": -100, "yourBet": "П1 по ударам с Ф(-7,5)", "yourCoef": 1.65, "yourBank": 1394, "yourProfit": -100}, {"n": 20, "xLabel": "POR-COD", "match": "Португалия — ДР Конго", "team1": {"name": "Португалия", "code": "POR", "flag": "🇵🇹"}, "team2": {"name": "ДР Конго", "code": "COD", "flag": "🇨🇩"}, "friendBet": "ЖК Роналду", "friendCoef": 7.8, "friendBank": 135, "friendProfit": -100, "yourBet": "П2 (ЖК)", "yourCoef": 1.75, "yourBank": 1294, "yourProfit": -100}, {"n": 21, "xLabel": "ENG-CRO", "match": "Англия — Хорватия", "team1": {"name": "Англия", "code": "ENG", "flag": "🏴"}, "team2": {"name": "Хорватия", "code": "CRO", "flag": "🇭🇷"}, "friendBet": "Обе забьют", "friendCoef": 2.02, "friendBank": 237, "friendProfit": 102, "yourBet": "Цифра 1 в счёте — да", "yourCoef": 1.62, "yourBank": 1194, "yourProfit": -100}, {"n": 22, "xLabel": "GHA-PAN", "match": "Гана — Панама", "team1": {"name": "Гана", "code": "GHA", "flag": "🇬🇭"}, "team2": {"name": "Панама", "code": "PAN", "flag": "🇵🇦"}, "friendBet": "ТМ > 2,5", "friendCoef": 2.36, "friendBank": 137, "friendProfit": -100, "yourBet": "П1 (офсайды)", "yourCoef": 1.56, "yourBank": 1250, "yourProfit": 56}, {"n": 23, "xLabel": "UZB-COL", "match": "Узбекистан — Колумбия", "team1": {"name": "Узбекистан", "code": "UZB", "flag": "🇺🇿"}, "team2": {"name": "Колумбия", "code": "COL", "flag": "🇨🇴"}, "friendBet": "Удаление будет", "friendCoef": 6.1, "friendBank": 37, "friendProfit": -100, "yourBet": "Тайм-матч (ЖК): НП1", "yourCoef": 4.7, "yourBank": 1150, "yourProfit": -100}, {"n": 24, "xLabel": "CZE-RSA", "match": "Чехия — ЮАР", "team1": {"name": "Чехия", "code": "CZE", "flag": "🇨🇿"}, "team2": {"name": "ЮАР", "code": "RSA", "flag": "🇿🇦"}, "friendBet": "ЖК: ТМ > 5,5", "friendCoef": 4.3, "friendBank": -63, "friendProfit": -100, "yourBet": "Гол головой", "yourCoef": 2.8, "yourBank": 1050, "yourProfit": -100}, {"n": 25, "xLabel": "SUI-BIH", "match": "Швейцария — Босния и Герцеговина", "team1": {"name": "Швейцария", "code": "SUI", "flag": "🇨🇭"}, "team2": {"name": "Босния и Герцеговина", "code": "BIH", "flag": "🇧🇦"}, "friendBet": "Удаление будет", "friendCoef": 4.55, "friendBank": 292, "friendProfit": 355, "yourBet": "Гол головой", "yourCoef": 2.8, "yourBank": 950, "yourProfit": -100}, {"n": 26, "xLabel": "CAN-QAT", "match": "Канада — Катар", "team1": {"name": "Канада", "code": "CAN", "flag": "🇨🇦"}, "team2": {"name": "Катар", "code": "QAT", "flag": "🇶🇦"}, "friendBet": "П1 в обоих таймах", "friendCoef": 2.56, "friendBank": 448, "friendProfit": 156, "yourBet": "1x (офсайды)", "yourCoef": 1.61, "yourBank": 1011, "yourProfit": 61}, {"n": 27, "xLabel": "MEX-KOR", "match": "Мексика — Южная Корея", "team1": {"name": "Мексика", "code": "MEX", "flag": "🇲🇽"}, "team2": {"name": "Южная Корея", "code": "KOR", "flag": "🇰🇷"}, "friendBet": "Обе забьют", "friendCoef": 1.94, "friendBank": 348, "friendProfit": -100, "yourBet": "Обе забьют", "yourCoef": 1.94, "yourBank": 911, "yourProfit": -100}, {"n": 28, "xLabel": "USA-AUS", "match": "США — Австралия", "team1": {"name": "США", "code": "USA", "flag": "🇺🇸"}, "team2": {"name": "Австралия", "code": "AUS", "flag": "🇦🇺"}, "friendBet": "2-0", "friendCoef": 7.6, "friendBank": 1008, "friendProfit": 660, "yourBet": "П1 и ТМ > 1,5", "yourCoef": 1.96, "yourBank": 1007, "yourProfit": 96}, {"n": 29, "xLabel": "SCO-MAR", "match": "Шотландия — Марокко", "team1": {"name": "Шотландия", "code": "SCO", "flag": "🏴"}, "team2": {"name": "Марокко", "code": "MAR", "flag": "🇲🇦"}, "friendBet": "П2", "friendCoef": 1.74, "friendBank": 1082, "friendProfit": 74, "yourBet": "П2", "yourCoef": 1.74, "yourBank": 1081, "yourProfit": 74}, {"n": 30, "xLabel": "BRA-HAI", "match": "Бразилия — Гаити", "team1": {"name": "Бразилия", "code": "BRA", "flag": "🇧🇷"}, "team2": {"name": "Гаити", "code": "HAI", "flag": "🇭🇹"}, "friendBet": "Винисиус забьёт", "friendCoef": 1.83, "friendBank": 1165, "friendProfit": 83, "yourBet": "Угловые: тотал Гаити < 2,5", "yourCoef": 1.53, "yourBank": 981, "yourProfit": -100}, {"n": 31, "xLabel": "TUR-PAR", "match": "Турция — Парагвай", "team1": {"name": "Турция", "code": "TUR", "flag": "🇹🇷"}, "team2": {"name": "Парагвай", "code": "PAR", "flag": "🇵🇾"}, "friendBet": "Голевых передач А. Гюлера > 0,5", "friendCoef": 2.5, "friendBank": 1065, "friendProfit": -100, "yourBet": "ТМ > 2", "yourCoef": 1.57, "yourBank": 881, "yourProfit": -100}, {"n": 32, "xLabel": "NED-SWE", "match": "Нидерланды — Швеция", "team1": {"name": "Нидерланды", "code": "NED", "flag": "🇳🇱"}, "team2": {"name": "Швеция", "code": "SWE", "flag": "🇸🇪"}, "friendBet": "ТМ > 3,5", "friendCoef": 2.52, "friendBank": 1217, "friendProfit": 152, "yourBet": "Нидерланды пропустят, но выиграют", "yourCoef": 3.1, "yourBank": 1091, "yourProfit": 210},

  {
  "n": 33,
  "xLabel": "GER-CIV",
  "match": "Германия — Кот д'Ивуар",

  "team1": {
    "name": "Германия",
    "code": "GER",
    "flag": "🇩🇪"
  },

  "team2": {
    "name": "Кот д'Ивуар",
    "code": "CIV",
    "flag": "🇨🇮"
  },

  "friendBet": "Обе забьют",
  "friendCoef": 1.66,
  "friendBank": 1283,
  "friendProfit": 66,

  "yourBet": "П2 (ЖК)",
  "yourCoef": 1.81,
  "yourBank": 991,
  "yourProfit": -100
}
];

function renderBankChart() {
  const chart = document.getElementById("bank-chart");
  if (!chart || typeof Plotly === "undefined") return;

  const x = chartData.map(d => d.xLabel);

  const gerzog = {
    x,
    y: chartData.map(d => d.friendBank),
    mode: "lines+markers",
    name: "Gerzog",
    hoverinfo: "none",
    hovertemplate: "",
    line: { color: "#0000ff", width: 3 },
    marker: { color: "#0000ff", size: 8 }
  };

  const yukon = {
    x,
    y: chartData.map(d => d.yourBank),
    mode: "lines+markers",
    name: "Yukon",
    hoverinfo: "none",
    hovertemplate: "",
    line: { color: "#ff0000", width: 3 },
    marker: { color: "#ff0000", size: 8 }
  };

  const layout = {
    paper_bgcolor: "#ffffff",
    plot_bgcolor: "#ffffff",
    font: {
      family: "Times New Roman, Times, serif",
      size: 15,
      color: "#000000"
    },
    margin: { l: 70, r: 35, t: 35, b: 95 },
    hovermode: "closest",
    legend: {
      orientation: "h",
      x: 0.5,
      xanchor: "center",
      y: 1.08,
      font: { size: 18 }
    },
    xaxis: {
      title: "",
      tickangle: -55,
      tickfont: { size: 12 },
      gridcolor: "rgba(0,0,0,0.12)",
      zeroline: false
    },
    yaxis: {
      title: "Банк",
      titlefont: { size: 20 },
      tickfont: { size: 15 },
      gridcolor: "rgba(0,0,0,0.14)",
      zeroline: false
    },
    shapes: [
      {
        type: "line",
        xref: "paper",
        x0: 0,
        x1: 1,
        yref: "y",
        y0: 1000,
        y1: 1000,
        line: { color: "#000000", width: 1.4, dash: "dash" }
      },
      {
        type: "line",
        xref: "x",
        x0: 23.5,
        x1: 23.5,
        yref: "paper",
        y0: 0,
        y1: 1,
        line: { color: "#777777", width: 1.4, dash: "dash" }
      }
    ],
    annotations: [
      {
        xref: "paper",
        x: 0.01,
        yref: "y",
        y: 1000,
        text: "Стартовый банк",
        showarrow: false,
        yshift: 13,
        font: { size: 15, color: "#000000" }
      },
      {
        xref: "x",
        x: 23.7,
        yref: "paper",
        y: 1,
        text: "Второй тур",
        showarrow: false,
        xanchor: "left",
        yshift: 16,
        font: { size: 16, color: "#000000" }
      }
    ]
  };

  Plotly.newPlot(chart, [gerzog, yukon], layout, {
    responsive: true,
    displaylogo: false,
    modeBarButtonsToRemove: ["lasso2d", "select2d"]
  });
}

document.addEventListener("DOMContentLoaded", renderBankChart);

const flagUrls = {
  KOR: "https://flagcdn.com/w40/kr.png",
  CZE: "https://flagcdn.com/w40/cz.png",
  CAN: "https://flagcdn.com/w40/ca.png",
  BIH: "https://flagcdn.com/w40/ba.png",
  USA: "https://flagcdn.com/w40/us.png",
  PAR: "https://flagcdn.com/w40/py.png",
  QAT: "https://flagcdn.com/w40/qa.png",
  SUI: "https://flagcdn.com/w40/ch.png",
  BRA: "https://flagcdn.com/w40/br.png",
  MAR: "https://flagcdn.com/w40/ma.png",
  HAI: "https://flagcdn.com/w40/ht.png",
  SCO: "https://flagcdn.com/w40/gb-sct.png",
  AUS: "https://flagcdn.com/w40/au.png",
  TUR: "https://flagcdn.com/w40/tr.png",
  GER: "https://flagcdn.com/w40/de.png",
  CUW: "https://flagcdn.com/w40/cw.png",
  NED: "https://flagcdn.com/w40/nl.png",
  JPN: "https://flagcdn.com/w40/jp.png",
  CIV: "https://flagcdn.com/w40/ci.png",
  ECU: "https://flagcdn.com/w40/ec.png",
  SWE: "https://flagcdn.com/w40/se.png",
  TUN: "https://flagcdn.com/w40/tn.png",
  ESP: "https://flagcdn.com/w40/es.png",
  CPV: "https://flagcdn.com/w40/cv.png",
  BEL: "https://flagcdn.com/w40/be.png",
  EGY: "https://flagcdn.com/w40/eg.png",
  KSA: "https://flagcdn.com/w40/sa.png",
  URU: "https://flagcdn.com/w40/uy.png",
  IRN: "https://flagcdn.com/w40/ir.png",
  NZL: "https://flagcdn.com/w40/nz.png",
  FRA: "https://flagcdn.com/w40/fr.png",
  SEN: "https://flagcdn.com/w40/sn.png",
  IRQ: "https://flagcdn.com/w40/iq.png",
  NOR: "https://flagcdn.com/w40/no.png",
  ARG: "https://flagcdn.com/w40/ar.png",
  ALG: "https://flagcdn.com/w40/dz.png",
  AUT: "https://flagcdn.com/w40/at.png",
  JOR: "https://flagcdn.com/w40/jo.png",
  POR: "https://flagcdn.com/w40/pt.png",
  COD: "https://flagcdn.com/w40/cd.png",
  ENG: "https://flagcdn.com/w40/gb-eng.png",
  CRO: "https://flagcdn.com/w40/hr.png",
  GHA: "https://flagcdn.com/w40/gh.png",
  PAN: "https://flagcdn.com/w40/pa.png",
  UZB: "https://flagcdn.com/w40/uz.png",
  COL: "https://flagcdn.com/w40/co.png",
  RSA: "https://flagcdn.com/w40/za.png",
  MEX: "https://flagcdn.com/w40/mx.png"
};

function profitClass(value) {
  if (value > 0) return "tooltip-profit-plus";
  if (value < 0) return "tooltip-profit-minus";
  return "tooltip-profit-zero";
}

function formatProfit(value) {
  if (value > 0) return `+${value}`;
  if (value === 0) return "+0";
  return String(value);
}

function createCustomTooltip() {
  let tooltip = document.querySelector(".custom-tooltip");

  if (!tooltip) {
    tooltip = document.createElement("div");
    tooltip.className = "custom-tooltip";
    tooltip.style.display = "none";
    document.body.appendChild(tooltip);
  }

  return tooltip;
}

function showCustomTooltip(eventData, player) {
  const point = eventData.points[0];
  const d = chartData[point.pointIndex];

  const isGerzog = player === "Gerzog";

  const bet = isGerzog ? d.friendBet : d.yourBet;
  const coef = isGerzog ? d.friendCoef : d.yourCoef;
  const profit = isGerzog ? d.friendProfit : d.yourProfit;
  const bank = isGerzog ? d.friendBank : d.yourBank;

  const tooltip = createCustomTooltip();

  tooltip.className = `custom-tooltip ${isGerzog ? "gerzog" : "yukon"}`;

  tooltip.innerHTML = `
    <div class="tooltip-match">
      <img class="tooltip-flag" src="${flagUrls[d.team1.code] || ""}" alt="">
      <span>${d.team1.name}</span>
      <span>—</span>
      <img class="tooltip-flag" src="${flagUrls[d.team2.code] || ""}" alt="">
      <span>${d.team2.name}</span>
    </div>

    <div class="tooltip-bet">${bet}</div>

    <div class="tooltip-coef">
      ${coef}
      <span class="${profitClass(profit)}">(${formatProfit(profit)})</span>
    </div>

    <div class="tooltip-bank">Итоговый банк: ${bank}</div>
  `;

  tooltip.style.display = "block";

  const offset = 14;
  const margin = 12;
  
  tooltip.style.left = "0px";
  tooltip.style.top = "0px";
  
  const rect = tooltip.getBoundingClientRect();
  
  let x = eventData.event.clientX + offset;
  let y = eventData.event.clientY + offset;
  
  x = Math.min(x, window.innerWidth - rect.width - margin);
  y = Math.min(y, window.innerHeight - rect.height - margin);
  
  x = Math.max(x, margin);
  y = Math.max(y, margin);
  
  tooltip.style.left = `${x}px`;
  tooltip.style.top = `${y}px`;
}

function hideCustomTooltip() {
  const tooltip = document.querySelector(".custom-tooltip");
  if (tooltip) tooltip.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const chart = document.getElementById("bank-chart");
  if (!chart) return;

  chart.on("plotly_hover", (eventData) => {
    const player = eventData.points[0].data.name;
    showCustomTooltip(eventData, player);
  });

  chart.on("plotly_unhover", hideCustomTooltip);
});
