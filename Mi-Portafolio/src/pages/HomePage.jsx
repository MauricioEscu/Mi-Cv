import { Link } from 'react-router-dom';
import SkillBadge from '../components/SkillBadge';

const DatosPersonales = {
 nombre: "Mauricio Escudero",
 titulo: "Analista de Sistema",
  skills: ["React","Backend", "JavaScript", "Bootstrap", "C#", "Node.js", "HTML & CSS"]

};

function HomePage() {
   return (
   <section className="text-center py-5 animate__animated animate__fadeIn">
    <div className="row justify-content-center">
       <div className="col-md-8">
        <h1 className="display-4 fw-bold mb-3">{DatosPersonales.nombre}</h1>
        <p className="lead fs-4 text-muted mb-4">{DatosPersonales.titulo}</p>
        <hr className="my-4" />
        <div className="mb-5">
           <h3 className="h5 text-uppercase tracking-wider mb-3">Habilidades Principales</h3>
            <div className="d-flex flex-wrap justify-content-center gap-2">
               {DatosPersonales.skills.map((skill, index) => (
                 <SkillBadge key={index} nombre={skill} />
     ))}
     </div>
    </div>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
       <Link to="/contact" className="btn btn-primary btn-lg px-4 gap-3">
       Contactame
       </Link>
        <Link to="/projects" className="btn className={`btn btn-outline-secondary btn-lg px-4`">Ver Proyectos
        </Link>
        </div>
   </div>
    </div>
    </section>
     );

}

export default HomePage;