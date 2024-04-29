import * as d3 from 'd3';
import { Noctis } from 'noctis-starmap';
import path from 'path';

const reader = new Noctis(path.resolve(__dirname, '../gamedata/STARMAP2.BIN'), path.resolve(__dirname, '../gamedata/GUIDE.BIN'));
//const reader = new Noctis('C:/Users/Jared/Documents/Git/noctis-dataviz/src/gamedata/STARMAP.BIN', 'C:/Users/Jared/Documents/Git/noctis-dataviz/src/gamedata/GUIDE.BIN');

let guideTester = reader.guide_data.filter((entry) => entry.text.includes("601"));
let guideEditor = guideTester.map((entry) => entry.text.substring(entry.text.indexOf("6011"), 13));

let starmapTester = reader.stars;
//let starmapEditor = starmapTester.map((entry) => entry.text.substring(entry.text.indexOf("6011"), 13));

console.log(starmapTester);