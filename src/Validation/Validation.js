import React from "react";

function Validation(props) {
  let validationMessage = "Text is too long";

  if (props.inputLength <= 5) {
    validationMessage = "Text is too short";
  }

  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  );
}

export default Validation;

// import React from "react";

// const Validation = (props) => {
//   let validationMessage = "Text Long enough!";

//   if (props.inputLength <= 5) {
//     validationMessage = "Text too short";
//   }

//   return (
//     <div>
//       <p>{validationMessage}</p>
//     </div>
//   );
// };
// export default Validation;
