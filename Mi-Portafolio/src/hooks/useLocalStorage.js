import { useState, useEffect } from 'react';

const useLocalStorage = (clave, valorInicial) => {
  const [valor, setValor] = useState(() => {
    try {
      const item = window.localStorage.getItem(clave);
      // Validamos explícitamente que el ítem no sea nulo ni el string "undefined"
      if (item && item !== "undefined") {
        return JSON.parse(item);
      }
      return valorInicial;
    } catch (error) {
      console.error("Error leyendo localStorage", error);
      return valorInicial;
    }
  });

  useEffect(() => {
    try {
      if (valor !== undefined) {
        window.localStorage.setItem(clave, JSON.stringify(valor));
      }
    } catch (error) {
      console.error("Error guardando en localStorage", error);
    }
  }, [clave, valor]);

  return [valor, setValor];
};

export default useLocalStorage;