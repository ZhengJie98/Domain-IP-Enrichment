import { DateParts } from "./helpers/classes";
import { renameFile } from "./helpers/functions";

export class SelectedFile extends File {
  parsedContent?: any;
  constructor(
    file: File,
    filename: string,
    reader: FileReader,
    encoding: string = "utf-8"
  ) {
    const uploadDateTime = new DateParts(new Date());
    // const splitFilenameByDelimiter: string[] = file.name.split(".");
    // const fileExt: string =
    //   splitFilenameByDelimiter.length === 0
    //     ? "txt"
    //     : splitFilenameByDelimiter[splitFilenameByDelimiter.length - 1];
    // const newFileName: string = `${filename}_${uploadDateTime.filenameFormat()}.${fileExt}`;

    const newFileName = renameFile(file.name, filename, uploadDateTime);
    super([""], newFileName);
    let fileContent: string;
    reader.onload = (loadEvent: ProgressEvent<FileReader>) => {
      fileContent =
        typeof loadEvent.target.result === "string"
          ? loadEvent.target.result
          : "";
      // console.log("fileContent onload", fileContent);
    };
    reader.readAsText(file, encoding);
    console.log("fileContent outside", fileContent);
  }
}
