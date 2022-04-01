import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import styles from '../detalles/detalle.module.css';

import { getDetalles, reloadDetalles } from '../../actions/index';
import RecipeDetails from '../RecipeDetails';


export default function Detail() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    
    const detail = useSelector((state) => state.detalles);


    useEffect(() => {
        
            dispatch(getDetalles(id))
        
        

        return () => {
            dispatch(reloadDetalles())
        }
    }, [dispatch, id, ]);
    

    function handle_button_home(e) {
        e.preventDefault();
        dispatch(reloadDetalles());
        history.push('/home');
    }


    return (
        <div className={styles.body}>
        <div className={styles.Pokedex}>
            <div className={styles.Middle}>
            <div className={styles.Display}>
               
                <button className={styles.btn} onClick={handle_button_home}>Atras</button><hr/>
                {
                    Object.keys(detail).length > 0 ?
                        <div >
                            <div >
                                <img className={styles.img} src={detail[0].imagen} alt={"imagen no encotrada"} /><br/>
                                <h4> <RecipeDetails name="Id" data={detail[0].id} /></h4> <hr/><br/>
                              
                                    <h4><RecipeDetails name="Nombre" data={detail[0].nombre ? detail[0].nombre : detail[0].nombre} /></h4><br/>
                                    <h4> <RecipeDetails name="Dietas" data={Array.isArray(detail[0].dieta) ? detail[0].dieta.map(d => d.name ? <label key={d.name}> . {d.name}  </label> : 
                                    <label  key={d}> {d} . </label>) : detail[0].dieta} /></h4><br/>
                                    <h4><RecipeDetails className={styles.resumen} name="Resumen" data={detail[0].resumen} /></h4>
                            </div>
                            <div >
                                
                                    <h4><RecipeDetails name="Instrucciones" data={detail[0].paso_a_paso} /></h4><br/>
                                 <h4><RecipeDetails name="Puntuacion" data={detail[0].puntuacion} /></h4><br/>
                                 <h4><RecipeDetails name="Nivel de comida saludable" data={detail[0].nivel_de_comida_saludable} /></h4><br/>
                                
                                </div>
                                
                            </div>
                        
                         
                        : <p>Espere..</p>
                        
                }
 </div>
            </div>

        </div>
        </div>
    )
}