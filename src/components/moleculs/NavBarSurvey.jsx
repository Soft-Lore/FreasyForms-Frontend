import React from "react";
import { FaEye, FaSave } from "react-icons/fa";

export default function NavBarSurvey() {
  return (
    <div class="btn-container">
      <button class="nav-survey__btn preview-btn">
        <span>Vista previa</span>
        <FaEye />
      </button>
      <button class="nav-survey__btn save-btn">
        <span>Guardar</span>
        <FaSave />
      </button>
    </div>
  );
}
