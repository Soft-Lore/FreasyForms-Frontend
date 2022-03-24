import React from "react";
import { FaEye, FaSave } from "react-icons/fa";

export default function NavBarSurvey() {
  return (
    <div className="btn-container">
      <button className="nav-survey__btn preview-btn">
        <span>Vista previa</span>
        <FaEye />
      </button>
      <button type="submit" className="nav-survey__btn save-btn">
        <span>Guardar</span>
        <FaSave />
      </button>
    </div>
  );
}
