import { useState } from "react"

export const useCounter = (initial:number=0) => {
    const [contador, setContador] = useState(initial) 
    const acumular = (numero:number)=>{
        setContador(contador + numero)
    }
  return{
    contador,
    acumular
  }
}
