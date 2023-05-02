import { useEffect, useReducer } from "react";

//validacion para el tipo de dato "AuthState"
interface AuthState {
    validando:boolean;
    token:string | null;
    username:string;
    nombre:string;
}
//objeto del tipo "AuthSate"
const initialState:AuthState = {
    validando:true,
    token:null,
    username:'',
    nombre:''
}
//tipo de dato "LoginPayload"
type LoginPayload = {
        username:string,
        nombre:string
}
//tipo de dato "AuthAction"
type AuthAction = 
    {type:'logout'}
    |{type:'login',payload:LoginPayload}

//funcion para el hook "useReducer" que recibe un parametro "state"
//del tipo "AuthState" y un parametro "action" del tipo "AuthAction"
//y retorna un objeto del tipo "AuthState"
const authReducer = (state:AuthState,action:AuthAction):AuthState=>{
    switch (action.type) {
        case 'logout':
            return{
                validando:false,
                token:null,
                username:'',
                nombre:''
            };
        case 'login':
            const {nombre,username} = action.payload
                return{
                    validando:false,
                    token:'AAA13',
                    username,
                    nombre
                };
        default:
            return state;
    }
}
//////////////////////////////////////////////////////////////////////
export const Login = () => {
    //el hook "useReducer" recibe 2 parametros, la funcion callback y el estado inicial
    //Segun lo que devuelva el callback devuelve el objeto de estado del tipo "AuthState"
    //y la funcion "dispatch" para las acciones del tipo "AuthAction" 
    const [{validando,token,nombre}, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() =>{
            dispatch({type:'logout'})
        }, 1500);
    }, [])

    const login = (nombre:string,username:string)=>{
        dispatch({
            type:'login',
            payload:{
                nombre,
                username
            }
        })
    }
    const logout = ()=>{
        dispatch({
            type:'logout'
        })
    }
    if(validando){
        return(
            <>
                 <div className="alert alert-info">Validando...</div>
            </>
        )
    }

    return (
        <>
            <h3>Login</h3> 
            {
            token? 
            <div className="alert alert-success">Autenticado como {nombre}</div>
            :
            <div className="alert alert-danger">No autenticado</div>
            } 
            {
            token? 
            <button onClick={logout} className="btn btn-danger">Logout</button>
            :
            <button onClick = {()=>login('Mike','mike')} className="btn btn-primary">Login</button>
            }
            
        </>
    )
}
