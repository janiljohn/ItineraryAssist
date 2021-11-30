import React from "react";

function Activity(props) {
  return (
    <div className="activity">
      <h1>
        <strong>{props.name}</strong>
      </h1>
      <h2>{props.rating}</h2>
      {/* <h3>testing</h3> */}
    </div>
  );

  // return (
  //   <div className="accordion-open" id="accordionExample">
  //     <div className="accordion-item">
  //       <h2 className="accordion-header" id="headingOne">
  //         <button
  //           className="accordion-button"
  //           type="button"
  //           data-bs-toggle="collapse"
  //           data-bs-target="#collapseOne"
  //           aria-expanded="true"
  //           aria-controls="collapseOne"
  //         >
  //           {props.name}
  //         </button>
  //       </h2>
  //       <div
  //         id="collapseOne"
  //         className="accordion-collapse collapse show"
  //         aria-labelledby="headingOne"
  //         data-bs-parent="#accordionExample"
  //       >
  //         <div className="accordion-body">
  //           <strong>{props.rating}</strong>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  // return (
  //   <div className="accordion" id="accordionExample">
  //     <div className="accordion-item">
  //       <h2 className="accordion-header" id="headingOne">
  //         <button
  //           className="accordion-button"
  //           type="button"
  //           data-bs-toggle="collapse"
  //           data-bs-target="#collapseOne"
  //           aria-expanded="true"
  //           aria-controls="collapseOne"
  //         >
  //           {props.name}
  //         </button>
  //       </h2>
  //       <div
  //         id="collapseOne"
  //         className="accordion-collapse collapse show"
  //         aria-labelledby="headingOne"
  //         data-bs-parent="#accordionExample"
  //       >
  //         <div className="accordion-body">
  //           <strong>{props.rating}</strong>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Activity;
