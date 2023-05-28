import React, { Component, ChangeEvent, createRef, RefObject } from "react";
import PapaParse from "papaparse";
import axios from "axios";

import Button from "@material-ui/core/Button";

import FileDisplay from "./FileDisplay";
// import { SelectedFile } from "./SelectedFile";
import { ISelectedFile } from "./helpers/interfaces";
import { DateParts } from "./helpers/classes";
import { renameFile } from "./helpers/functions";

interface ComponentProps {}
interface ComponentState {
  selectedFile: ISelectedFile;
}

class FileInput extends Component<ComponentProps, ComponentState> {
  reader: FileReader = new window.FileReader();
  fileDisplayElement: RefObject<any>;
  constructor(props: ComponentProps) {
    super(props);
    this.state = {
      selectedFile: null
    };
    this.fileDisplayElement = createRef();
  }
  readFile = (file: ISelectedFile) => {
    let encoding: string = "utf-8";
    let currentFile: ISelectedFile = file;
    let options = {};
    this.reader.onload = (loadEvent: ProgressEvent<FileReader>) => {
      const content = loadEvent.target.result;
      const parsedContent =
        typeof content === "string" ? PapaParse.parse(content, options) : null;
      currentFile.content = content;
      currentFile.parsedContent = parsedContent;
      this.setState({
        selectedFile: currentFile
      });
    };
    this.reader.readAsText(file, encoding);
  };
  // TODO: handle cases where the file dialog is opened but no file selected
  onFileChange = (fileChangeEvent: ChangeEvent<HTMLInputElement>) => {
    const selectedFile: ISelectedFile = fileChangeEvent.target.files[0];
    this.setState({ selectedFile });
    this.readFile(selectedFile);
    this.fileDisplayElement.current.handleFileInputChange(selectedFile);
    // i really wanted to put all the stuff to do with the actual file into its own class
    // but i don't think i can make it work :(
    // const testSelectedFile = new SelectedFile(
    //   fileChangeEvent.target.files[0],
    //   "test",
    //   new window.FileReader()
    // );
    // console.log("testSelectedFile", testSelectedFile);
  };
  onFileClear = () => {
    const selectedFile = null;
    this.setState({ selectedFile });
    this.fileDisplayElement.current.handleFileInputChange(selectedFile);
  };
  onFileUpload = () => {
    const selectedFile = this.state.selectedFile;
    console.log("selected file to upload", selectedFile);

    // do whatever steps to upload the file
    const uploadDateTime = new DateParts(new Date());
    // console.log("uploadDateTime", uploadDateTime);
    const fileToUpload = new File(
      [selectedFile.content],
      renameFile(selectedFile.name, "mytestfile", uploadDateTime),
      { type: selectedFile.type, lastModified: selectedFile.lastModified }
    );

    // axios.post("api/uploadfile", this.state.content);
    console.log("fileToUpload", fileToUpload);

    // clear the input
    this.onFileClear();
  };

  render() {
    // console.log("this.state on render (FileInput)", this.state);
    return (
      <div
        style={{
          textAlign: "center"
        }}
      >
        <h1>Upload File</h1>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly"
          }}
        >
          <input
            id="file-input"
            type="file"
            accept=".csv" // ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            onChange={this.onFileChange}
            style={{
              display: "none"
            }}
          />
          <label htmlFor="file-input">
            <Button variant="contained" color="primary" component="span">
              Choose a file
            </Button>
          </label>
          <Button
            variant="contained"
            color="primary"
            component="span"
            onClick={this.onFileUpload}
            disabled={!this.state.selectedFile?.content}
          >
            Upload
          </Button>
          <Button
            variant="contained"
            color="primary"
            component="span"
            onClick={this.onFileClear}
            disabled={!this.state.selectedFile}
          >
            Clear
          </Button>
        </div>
        <FileDisplay ref={this.fileDisplayElement} />
      </div>
    );
  }
}

export default FileInput;
