import type from "./type.js";
import util from "./utilities.js";

var test   = type.date,
    number = type.number,
    not    = util.not;

var days   = "sunday monday tuesday wednesday thursday friday saturday".split(" "),
    months = "january february march april may june july august september october november december".split(" ");

function day(date, name) {
  return test(date) && name.toLowerCase() === days[date.getDay()];
}

function today(date) {
  var tday = new Date().toDateString();

  return test(date) && tday === date.toDateString();
}

function yesterday(date) {
  var tdy = new Date(),
      yst = new Date(tdy.setDate(tdy.getDate() - 1));

  return test(date) && date.toDateString() === yst.toDateString();
}

function tomorrow(date) {
  var tdy   = new Date(),
      tmrrw = new Date(tdy.setDate(tdy.getDate() + 1));

  return test(date) && date.toDateString() === tmrrw.toDateString();
}

function month(date, target) {
  return test(date) && target.toLowerCase() === months[date.getMonth()];
}

function year(date, target) {
  return test(date) && number(target) && target === date.getFullYear();
}

function past(date, delta = 0) {
  var now = new Date(),
      current = now.getTime(),
      dTime = date.getTime();

  return test(date) && (((current - delta) < dTime) && (dTime < current));
}

function future(date, delta = 0) {
  var now     = new Date(),
      current = now.getTime(),
      dTime   = date.getTime();

  return test(date) && (current < dTime && dTime < (current + delta)) || current < dTime;
}

function weekend(date) {
  return test(date) && [ 0, 6 ].indexOf(date.getDay()) > -1;
}

function weekday(date) {
  return not(weekend(date));
}

function within(date, start, end) {
  var starting = start.getTime(),
      chosen   = date.getTime(),
      ending   = end.getTime();

  return (starting <= chosen) && (chosen <= ending);
}

export default {
  day,
  today,
  yesterday,
  tomorrow,
  month,
  year,
  past,
  future,
  weekend,
  weekday,
  within
};
