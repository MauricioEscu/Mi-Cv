import React from 'react';
import PropTypes from 'prop-types';

// PASO: Completar el componente ProjectCard
// Debe recibir un objeto "proyecto" por props con: id, nombre, descripcion, imagen, tecnologías, link
const ProjectCard = ({ proyecto }) => {
  return (
    <div className="card h-100">
      {/* PASO: Mostrar la imagen del proyecto */}
      {/* <img src={proyecto.imagen} className="card-img-top" alt={proyecto.nombre} /> */}
      <div className="card-body">
        {/* PASO: Mostrar nombre y descripción del proyecto */}
        <h5 className="card-title">{/* proyecto.nombre */}</h5>
        <p className="card-text">{/* proyecto.descripcion */}</p>
        {/* PASO: Mapear las tecnologías con .map() usando el componente SkillBadge */}
      </div>
      <div className="card-footer">
        {/* PASO: Link al repositorio o demo */}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  proyecto: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    imagen: PropTypes.string,
    tecnologias: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;