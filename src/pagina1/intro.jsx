import React from 'react'
import styles from '../pagina1/intro.module.css'
import imagen from '../pagina1/logo.png'
import { useNavigate } from 'react-router-dom';


const Intro = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/informativo');
    };

    return (

        <div className={styles.caja}>

            <div className={styles.cajaArriba}>
                <button onClick={handleClick} className={styles.boton2}>Siguiente</button>
            </div>

            <h1>Bienvenido a Cibox</h1>
            <div>
                <img src={imagen} alt="imagen" className={styles.imagen} />
            </div>

        </div>
    );
};

export default Intro;