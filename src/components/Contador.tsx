
import { useCounter } from '../hooks/useCounter';

export const Contador = () => {

    const {contador,acumular} = useCounter(10);
    return (
        <div>
            <h3>Contador <small>{contador}</small></h3>
            <button
                className="btn btn-primary"
                onClick={()=>{acumular(-1)}}
            >
                -1
            </button>
            &nbsp;
            <button
                className="btn btn-primary"
                onClick={()=>{acumular(1)}}
            >
                +1
            </button>
        </div>
    )
}
