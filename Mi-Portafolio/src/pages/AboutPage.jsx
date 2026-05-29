import { useState } from 'react';
import SkillBadge from '../components/SkillBadge';

const Perfil = {
  descripcion: "Soy un apasionado por la tecnología y el desarrollo web. Me encanta resolver problemas complejos y aprender nuevas herramientas constantemente.",
  habilidades: ["HTML", "CSS", "Backend", "C·","React", "Node.js", "Bootstrap", "Tester"],
  experiencia: [{ puesto: "Desarrollador Front-End ", lugar: "Tech Solutions", periodo: "2026 - Presente" },
    { puesto: "Pasante de Desarrollo", lugar: "Pixel Studio", periodo: "2024" }],
    educacion: [{ titulo: "Curso de React Avanzado", lugar: "Institución Educativa", periodo: "2026" },
      { titulo: "Técnico en Programación", lugar: "Instituo Cervantes", periodo: "2026" }
    ]

};

function AboutPage() {
  const [seccionVisible, setSeccionVisible] = useState('todos');

  return (
    <section className="py-5">
      <h2 className="display-5 fw-bold mb-4">Sobre Mí 👨‍💻</h2>
      {"Alguien que esta dispuesto a aprender mucho"}
       <p className="lead mb-5">{Perfil.descripcion}</p>
       {/* 🛠️ Todas las Habilidades */}
       <div className="mb-5">
        <h3 className="h4 mb-3">Mis Habilidades</h3>
        <div className="d-flex flex-wrap gap-2">
          {Perfil.habilidades.map((hab, index) => ( <SkillBadge key={index} nombre={hab} />
         ))}
   </div>
   </div>
   <hr className="my-5" />
   {/* 🎛️ Botones de Filtro (Renderizado Condicional) */}
   <div className="d-flex gap-2 mb-4">
     <button
     className={`btn ${seccionVisible === 'todos' ? 'btn-primary' : 'btn-outline-primary'}`}
     onClick={() => setSeccionVisible('todos')}
      >
         Ver Todo
</button>

<button

className={`btn ${seccionVisible === 'experiencia' ? 'btn-primary' : 'btn-outline-primary'}`}
 onClick={() => setSeccionVisible('experiencia')}
>
Solo Experiencia
 </button>
<button
className={`btn ${seccionVisible === 'educacion' ? 'btn-primary' : 'btn-outline-primary'}`}
onClick={() => setSeccionVisible('educacion')}
>
  Solo Educación
   </button>
</div>
 <div className="row">
   {/* 💼 Sección de Experiencia Laboral */}
  {(seccionVisible === 'todos' || seccionVisible === 'experiencia') && (
     <div className="col-md-6 mb-4">
       <h3 className="h4 border-bottom pb-2 mb-3">Experiencia Laboral 💼</h3>
        {Perfil.experiencia.map((exp, index) => (
           <div key={index} className="mb-3">
            <h5>{exp.puesto}</h5>
            <p className="text-muted mb-1">{exp.lugar} | <small>{exp.periodo}</small></p>
 </div>

 ))}

</div>

)}

 {/* 🎓 Sección de Educación */}
  {(seccionVisible === 'todos' || seccionVisible === 'educacion') && (
     <div className="col-md-6 mb-4">
       <h3 className="h4 border-bottom pb-2 mb-3">Educación 🎓</h3>
        {Perfil.educacion.map((edu, index) => (
           <div key={index} className="mb-3">
            <h5>{edu.titulo}</h5>
             <p className="text-muted mb-1">{edu.lugar} | <small>{edu.periodo}</small></p>
 </div>
 ))}

</div>

 )}

</div>

 </section>

 );

}

export default AboutPage;