/* eslint-disable react/prop-types */
import { useState } from "react";

function Form({ datasearch }) {
  const [formData, setFormData] = useState({
    searchTerm: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    datasearch(formData.searchTerm);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchTerm"
          value={formData.searchTerm}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;