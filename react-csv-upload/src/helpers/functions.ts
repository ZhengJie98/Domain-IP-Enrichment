import { DateParts } from "./classes";

export function renameFile(
  oldFilename: string,
  newPrefix: string,
  dateParts: DateParts
): string {
  const splitFilenameByDelimiter: string[] = oldFilename.split(".");
  const fileExt: string =
    splitFilenameByDelimiter.length === 0
      ? "txt"
      : splitFilenameByDelimiter[splitFilenameByDelimiter.length - 1];
  return `${newPrefix}_${dateParts.filenameFormat()}.${fileExt}`;
}

export function formatBytes(bytes: number, decimals: number = 2): string {
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const unitSize: number =
    bytes === 0 ? 0 : Math.floor(Math.log(bytes) / Math.log(k));
  const formattedNumber: number = parseFloat(
    (bytes / Math.pow(k, unitSize)).toFixed(dm)
  );
  return `${formattedNumber} ${units[unitSize]}`;
}

export function zeroPadNumber(numberToPad: number, padToLength: number = 2) {
  return `${numberToPad}`.padStart(padToLength, "0");
}
