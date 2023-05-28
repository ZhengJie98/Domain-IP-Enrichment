import PapaParse from "papaparse";

export interface ISelectedFile extends File {
  content?: any;
  parsedContent?: PapaParse.ParseResult<any>;
}
