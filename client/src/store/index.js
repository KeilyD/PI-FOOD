import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk"; 
//nos permite intervenir funciones y deja pasar el objeto
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from "../reducer"; // importo el reducer 
//applyMiddleware(thunk) ES PARA HACER DISPATCH ASINCRONICOS
//revisar composeWithDevTools 

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;