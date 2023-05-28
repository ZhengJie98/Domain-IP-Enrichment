import { zeroPadNumber } from "./functions";

export class DateParts {
  dateObject: Date;
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  millisecond: number;
  timezoneOffset: number;
  constructor(date: Date) {
    this.dateObject = date;
    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    this.day = date.getDate();
    this.hour = date.getHours();
    this.minute = date.getMinutes();
    this.minute = date.getMinutes();
    this.second = date.getSeconds();
    this.millisecond = date.getMilliseconds();
    // this is (GMT - local) in minutes
    // so if local timezone is GMT+08:00, offset will be -480
    this.timezoneOffset = date.getTimezoneOffset();
  }
  filenameFormat() {
    return "".concat(
      zeroPadNumber(this.year, 4),
      zeroPadNumber(this.month),
      zeroPadNumber(this.day),
      "_",
      zeroPadNumber(this.hour),
      zeroPadNumber(this.minute),
      zeroPadNumber(this.second)
    );
  }
}
