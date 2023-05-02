
export const TiposBasicos = () => {
  const nombre:string = 'Miguel';
  const edad:number = 50;
  const estaActivo:boolean = true;
  const poderes:string[] = ['velocidad','fuerza','volar'];
  return (
    <>
      <h3>TiposBasicos</h3>
      {nombre}, {edad},{estaActivo?'activo':'no activo'}, {poderes.join(', ')}
    </>
  )
}
