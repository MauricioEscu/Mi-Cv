import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import proyectosData from '../data/proyectos.json';

const ProjectsPage = () => {
  // PASO 1: Crear estado para guardar los proyectos
  // const [proyectos, setProyectos] = useState([]);

  // PASO 2: Crear estados de carga y error (igual que en FetchPage)
  // const [cargando, setCargando] = useState(true);
  // const [error, setError] = useState(null);

  // PASO 3: Usar useEffect para cargar los datos
  // OPCIÓN A: Cargar desde el archivo JSON importado (ya está disponible en proyectosData)
  // OPCIÓN B: Fetch desde una API pública (ej: GitHub API para tus repos)
  // useEffect(() => {
  //   setProyectos(proyectosData);
  //   setCargando(false);
  // }, []);

  // PASO 4: Renderizado condicional - mostrar spinner si está cargando, mensaje si hay error
  // if (cargando) return <div className="text-center">Cargando...</div>;
  // if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div>
      <h2 className="mb-4">Mis Proyectos</h2>

      {/* PASO 5: Mapear los proyectos con .map() y renderizar ProjectCard */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {/* PASO: proyectos.map(proyecto => (
          <div className="col" key={proyecto.id}>
            <ProjectCard proyecto={proyecto} />
          </div>
        )) */}
      </div>

      {/* PASO OPCIONAL: Agregar filtrado por tecnología con useState */}
      {/* PASO OPCIONAL: Fetch a la API de GitHub para mostrar tus repos reales */}
    </div>
  );
};

export default ProjectsPage;