import {dataChart} from '../data/data_chart';

export const generateData = () =>
  dataChart.map(datum =>
    Object.assign({}, {x: datum.spot_date, y: datum.spot_price}),
  );

export const getDataBasedOnRange = days => {
  let count = 0,
    output = [];
  for (let i = 0; i < dataChart.length; i += days) {
    let obj = {},
      temp = 0,
      devider = 0;
    for (let j = i; j < i + days; j++) {
      if (dataChart[j]) {
        temp += dataChart[j].spot_price;
        devider++;
      }
    }
    count++;
    obj.x = i / days + 1;
    obj.y = Number((temp / devider).toFixed(2));
    output.push(obj);
  }
  return output;
};
