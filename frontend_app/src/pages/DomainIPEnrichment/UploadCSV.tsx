import React, { ChangeEvent, Component, createRef } from "react";
import PapaParse from "papaparse";
import axios from 'axios';


interface ISelectedFile {
  name: string;
  content: string;
  parsedContent: PapaParse.ParseResult<any> | undefined;
}

interface IUploadCSVState {
  selectedFile: ISelectedFile | null;
}

class UploadCSV extends Component<{}, IUploadCSVState> {
  private fileDisplayElement = createRef<FileDisplay>();

  constructor(props: {}) {
    super(props);
    this.state = {
      selectedFile: null
    };
  }

  readFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (loadEvent: ProgressEvent<FileReader>) => {
      const content = loadEvent.target?.result as string;
      const options = {};
      const parsedContent =
        typeof content === "string" ? PapaParse.parse(content, options) : undefined;
      const currentFile: ISelectedFile = {
        name: file.name,
        content,
        parsedContent
      };
      this.setState({
        selectedFile: currentFile
      });
    };
    reader.readAsText(file);
  };

  onFileChange = (fileChangeEvent: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = fileChangeEvent.target.files?.[0];
    if (selectedFile) {
      const file: ISelectedFile = {
        name: selectedFile.name,
        content: "",
        parsedContent: undefined
      };
      this.setState({ selectedFile: file });
      this.readFile(selectedFile);
      this.fileDisplayElement.current?.handleFileInputChange(file);
    }
  };

  onFileClear = () => {
    const selectedFile = null;
    this.setState({ selectedFile });
    this.fileDisplayElement.current?.handleFileInputChange(selectedFile);
  };

  onFileUpload = () => {
    const { selectedFile } = this.state;
    if (selectedFile) {
      console.log("selectedFile", selectedFile)
      console.log("selectedFile.content", selectedFile.content)
      const formData = new FormData();
      // formData.append("file", selectedFile.content);
      formData.append("file", "file");
      console.log("form data:", formData)

      // Assuming you have the endpoint URL, you can use fetch or any other networking library to send the file content to the POST endpoint
      const endpointURL = "http://localhost:5000/upload";
      const config = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    };

    axios({
      method: 'post',
      url: endpointURL,
      data: formData,
      
  })
  .then(function (response) {
      console.log(response);
  })
  .catch(function (error) {
      console.log(error);
  });
    // ===============
    //   axios
    // .post(endpointURL, formData, config)
    // .then(res => console.log(res))
    // .catch(err => console.warn(err))


    // ============
    //   fetch(endpointURL, {
    //     mode: "no-cors",
    //     method: "POST",
    //     body: formData
    //   })
    //     .then(response => {
    //       // Handle the response from the server
    //     })
    //     .catch(error => {
    //       // Handle any errors that occur during the upload process
    //     });
    }
  };

  render() {
    const { selectedFile } = this.state;
    return (
      <div>
        <input type="file" name="file" onChange={this.onFileChange} />
        <button onClick={this.onFileClear}>Clear</button>
        {selectedFile && (
          <div>
            <FileDisplay ref={this.fileDisplayElement} file={selectedFile} />
            <button onClick={this.onFileUpload}>Upload</button>
          </div>
        )}
      </div>
    );
  }
}

interface IFileDisplayProps {
  file: ISelectedFile;
}

class FileDisplay extends Component<IFileDisplayProps> {
  handleFileInputChange = (file: ISelectedFile | null) => {
    // Do something with the selected file
  };

  render() {
    const { file } = this.props;
    return (
      <div>
        <h3>Selected File: {file.name}</h3>
        <pre>{file.content}</pre>
      </div>
    );
  }
}

export default UploadCSV;
