
interface Persona {
    nombre:string;
    edad:number;
    direccion:Direccion;
}
interface Direccion{
    pais:string;
    casa:string;
}
export const ObjetosLiterales = () => {
    const persona:Persona = {
        nombre:'Miguel',
        edad:50,
        direccion:{
            pais:'Argentina',
            casa:'1A'
        }
    }
  return (
    <>
        <h3>ObjetosLiterales</h3>
        <code>
            <pre>
                {JSON.stringify(persona,null,2)}
            </pre>
        </code>
    </>
  )
}
