import React from "react";
import FormEdukasi from "../../Components/FormEdukasi";
import "../style/style.css";

function FormUpload() {
  return (
    <div>
      <div className="bgEdukasi">
        <FormEdukasi
          btn="UPLOAD"
          h1="Upload"
          content1="Upload"
          content2="Upload"
        ></FormEdukasi>
      </div>
    </div>
  );
}

export default FormUpload;
