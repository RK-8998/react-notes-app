import React, { useEffect } from "react";
import Swal from "sweetalert2";
import ReactDOM from "react-dom";

const SweatAlert = () => {
  const displayAlert = async () => {
    await Swal.fire("Good job!", "Your Note Added Successfully", "success");
  };

  useEffect(() => {
    displayAlert();
  }, []);

  return <>{ReactDOM.createPortal(<></>, document.getElementById("sweat-alert"))}</>;
};

export default SweatAlert;
