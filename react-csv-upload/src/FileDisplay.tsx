import React, { Component } from "react";

import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
// import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import { ISelectedFile } from "./helpers/interfaces";
import { formatBytes } from "./helpers/functions";

interface ComponentProps {}
interface ComponentState {
  previewRowCount: number;
  selectedFile: ISelectedFile;
}

class FileDisplay extends Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props);
    this.state = {
      previewRowCount: 10,
      selectedFile: null
    };
  }
  handleFileInputChange = (file: ISelectedFile) => {
    this.setState({
      selectedFile: file
    });
  };
  render() {
    // console.log("this.state on render (FileDisplay)", this.state);
    if (this.state.selectedFile?.parsedContent) {
      const parsedRowCount: number = this.state.selectedFile.parsedContent.data
        .length;
      const nRows =
        parsedRowCount < this.state.previewRowCount
          ? parsedRowCount
          : this.state.previewRowCount;
      const previewData = this.state.selectedFile.parsedContent.data.slice(
        0,
        nRows
      );
      return (
        <div>
          <div>
            <p>File name: {this.state.selectedFile.name}</p>
            <p>File size: {formatBytes(this.state.selectedFile.size)}</p>
            <p>File type: {this.state.selectedFile.type}</p>
          </div>
          <div>
            <p>
              Showing first {nRows} of {parsedRowCount} rows.
            </p>
            <TableContainer>
              <Table>
                <TableBody>
                  {previewData.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <TableCell key={cellIndex}>{cell}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p>Choose a file above.</p>
        </div>
      );
    }
  }
}

export default FileDisplay;
