import React from "react";

const ErrorComponent = ({ message }) => {
  return <div style={{ color: "red", fontWeight: "bold" }}>{message}</div>;
};

export default ErrorComponent;
