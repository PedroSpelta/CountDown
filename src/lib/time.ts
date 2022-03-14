import moment from "moment";

const month = 2592000000;
const day = 86400000;
const hour = 3600000;
const min = 60000;
const sec = 1000;

export const getTime = (totalTime: number) => {
  const time = {
    msec: 0,
    sec: 0,
    min: 0,
    hour: 0,
    day: 0,
    month: 0,
  };
  if (totalTime > month) {
    time.month = Math.floor(totalTime / month);
    totalTime = totalTime % month;
  }
  if (totalTime > day) {
    time.day = Math.floor(totalTime / day);
    totalTime = totalTime % day;
  }
  if (totalTime > hour) {
    time.hour = Math.floor(totalTime / hour);
    totalTime = totalTime % hour;
  }
  if (totalTime > min) {
    time.min = Math.floor(totalTime / min);
    totalTime = totalTime % min;
  }
  if (totalTime > sec) {
    time.sec = Math.floor(totalTime / sec);
    totalTime = totalTime % sec;
  }
  return time;
};

export const getDaysUntil = (objDate: Date) => {
  const daysUntil = getTime(new Date().getTime() - objDate.getTime()).day;
  return daysUntil;
};

export const getFutureDate = (days: string) => {
  const daysNumber = Number(days);
  const now = new Date().getTime();
  const future = now + daysNumber * day;
  return new Date(future);
}
