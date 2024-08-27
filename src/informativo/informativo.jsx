import styles from "./informativo.module.css"
import { useNavigate } from "react-router-dom"
import imagen from "../informativo/imagen1.png"
import imagen2 from "../informativo/imagen2.png"

const informativo = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    const handleLlevarConsulta = async () => {
        navigate('/panel');
    }

    return (

        <div className={styles.caja}>

            <div className={styles.cajaArriba}>
                <button onClick={handleClick} className={styles.boton2}>Salir</button>
            </div>

            <div>
                <img src={imagen} alt="imagen" className={styles.imagen} />
                <img src={imagen2} alt="imagen" className={styles.imagen2} />

                <h2 className={styles.titulo}>Aca Podras consultar:</h2>
                <ul className={styles.ul}>
                    <li>Boletas de honorarios</li>
                    <li>Ver Boletas de Honorarios en el año</li>
                    <li>Descargar Boletas de Honorarios</li>
                </ul>

                <button onClick={handleLlevarConsulta} className={styles.botonConsultar}>Ir a Consultar Boletas de Honorarios</button>
            </div>

        </div>
    );
};

export default informativo