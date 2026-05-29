import React, { useReducer, useState } from 'react';



// PASO 1: Definir el reducer para el formulario de contacto
const contactFormReducer = (state, action) => {
  switch (action.type) {
    case 'ACTUALIZAR_CAMPO':
      return { ...state, [action.campo]: action.valor };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

// PASO 2: Definir el estado inicial del formulario
const initialState = {
  nombre: '',
  email: '',
  mensaje: '',
};

// PASO 3: Definir estado para errores de validación
const erroresIniciales = { nombre: '', email: '', mensaje: '' };

const ContactPage = () => {
  // PASO 4: Usar useReducer para manejar el formulario
  const [formulario, dispatch] = useReducer(contactFormReducer, initialState);

  // PASO 5: Usar useState para errores y estado de envío
  const [errores, setErrores] = useState(erroresIniciales);
  const [enviado, setEnviado] = useState(false);

  // PASO 6: Función de validación
  const validar = () => {
    const nuevosErrores = {};
    if (!formulario.nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio';
    if (!formulario.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) nuevosErrores.email = 'Email inválido';
    if (formulario.mensaje.length < 10) nuevosErrores.mensaje = 'Mínimo 10 caracteres';
    
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  // PASO 7: Handler del submit con validación
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      console.log('Formulario enviado con éxito:', formulario);
      setEnviado(true);
      dispatch({ type: 'RESET' });
      setErrores(erroresIniciales);
      setTimeout(() => setEnviado(false), 3000);
    }
  };

  // PASO 8: Handler onChange para dispatch
  const handleChange = (e) => {
    dispatch({ 
      type: 'ACTUALIZAR_CAMPO', 
      campo: e.target.name, 
      valor: e.target.value 
    });
  };

  return (
    <div className="container py-2 animate__animated animate__fadeIn">
      <h2 className="mb-4 fw-bold">Contacto ✉️</h2>
      
      <div className="row g-5">
        {/* 📅  Invitación a agendar Reunion */}
        <div className="col-lg-5">
          <div className="card h-100 shadow-sm border-0 bg-body-tertiary p-4">
            <div className="card-body d-flex flex-column justify-content-center text-center">
              <h3 className="h4 fw-bold mb-3">¿Preferís una videollamada? 🗓️</h3>
              <p className="text-muted mb-4">
                Elegí el día y horario que mejor te quede para que charlemos sobre proyectos, oportunidades laborales o ideas de desarrollo.
              </p>
              
              {/* Botón directo a tu Calendly */}
              <a 
                href="https://calendly.com/mauriescudero2005/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline-primary btn-lg fw-bold shadow-sm"
              >
                📆 Agendar Reunión (30 min)
              </a>
              
              <small className="text-muted mt-3 blockquote-footer">
                * Disponible para videollamadas y reuniones en persona
              </small>
            </div>
          </div>
        </div>

        {/* 📝 Dejar Mensaje */}
        <div className="col-lg-7">
          <h3 className="h4 fw-bold mb-3">Dejame un mensaje</h3>
          
          {enviado && (
            <div className="alert alert-success fw-medium mb-3" role="alert">
              Gracias por contactarte.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label className="form-label" htmlFor="nombre">Nombre</label>
              <input
                type="text"
                className={`form-control ${errores.nombre ? 'is-invalid' : ''}`}
                id="nombre"
                name="nombre"
                value={formulario.nombre}
                onChange={handleChange}
                onBlur={validar}
              />
              {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                type="email"
                className={`form-control ${errores.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                value={formulario.email}
                onChange={handleChange}
                onBlur={validar}
              />
              {errores.email && <div className="invalid-feedback">{errores.email}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="mensaje">Mensaje</label>
              <textarea
                className={`form-control ${errores.mensaje ? 'is-invalid' : ''}`}
                id="mensaje"
                name="mensaje"
                rows="4"
                value={formulario.mensaje}
                onChange={handleChange}
                onBlur={validar}
              />
              {errores.mensaje && <div className="invalid-feedback">{errores.mensaje}</div>}
            </div>

            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-primary px-4">
                Enviar Mensaje
              </button>
              <button 
                type="button" 
                className="btn btn-outline-secondary"
                onClick={() => {
                  dispatch({ type: 'RESET' });
                  setErrores(erroresIniciales);
                }}
              >
                Limpiar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;