import React from "react";
import Select from "react-select";

const options = [
  { value: "jc", label: "JohnCenaaaa" },
  { value: "Rk", label: "Rock" },
  { value: "Sm", label: "Shemaus" },
];
const Dropdown = () => {
  return (
    <div>
      <Select options={options} />
    </div>
  );
};

export default Dropdown;
