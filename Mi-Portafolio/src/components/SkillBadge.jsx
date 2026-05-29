import React from 'react';
import PropTypes from 'prop-types';

const SkillBadge = ({ nombre }) => {
  return (
    <span className="badge bg-primary m-1 px-3 py-2 shadow-sm fs-6 fw-semibold animate__animated animate__fadeIn">
      {nombre}
    </span>
  );
};

// Validación de propiedades requeridas para evitar valores undefined
SkillBadge.propTypes = {
  nombre: PropTypes.string.isRequired,
};

export default SkillBadge;