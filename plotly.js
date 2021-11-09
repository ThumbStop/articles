
References:
https://code.tutsplus.com/tutorials/create-interactive-charts-using-plotlyjs-line-charts--cms-29201
https://dev.to/dheerajmurali/building-a-responsive-chart-in-react-with-plotly-js-4on8

treeshake it
yarn add react-plotly.js plotly.js-basic-dist-min 
yarn add react-plotly.js plotly.js-cartesian-dist
add typescripts
 @types/plotly.js-basic-dist
 @types/plotly.js


results >
package.json

  "dependencies": {
    ...
    "plotly.js-cartesian-dist": "^1.55.2",
    "react": "^16.8.6",
    "react-plotly.js": "^2.4.0",
    ...
  },

usage >
  
In components...

import Plotly from "plotly.js-cartesian-dist";
import createPlotlyComponent from "react-plotly.js/factory";

const Plot = createPlotlyComponent(Plotly);
