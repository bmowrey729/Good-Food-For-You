import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

// export function TextArea(props) {
//   return (
//     <div className="form-group">
//       <textarea className="form-control" rows="20" {...props} />
//     </div>
//   );
// }

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn waves-effect waves-light btn btn-primary #a5d6a7 green lighten-1" type="submit" name="action">
      {props.children}
      <span className="vertical-center"><i className="material-icons right">send</i></span>
    </button>
  );
}
