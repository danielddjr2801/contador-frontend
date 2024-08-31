import styles from "../panel/panel.module.css"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Buffer } from "buffer"
import { useState } from "react"

const Panel = () => {

    const navigate = useNavigate();
    const [imageContabilidad, setImagecontabilidad] = useState("");
    const [parrafo, setParrafo] = useState(false);
    const [botonDescarga, setBotonDescarga] = useState(false);

    const handleClick = () => {
        navigate('/');
    };

    const handleClickVolver = () => {
        navigate('/informativo');
    }

    const handleConsultarBoletas = async () => {
            try {
                var response = await axios.get("https://contador-backend.vercel.app/user/page",
                    {responseType: 'arraybuffer'});
                var base64Image = Buffer.from(response.data, 'binary').toString('base64');
                setImagecontabilidad("data:image/png;base64," + base64Image);
                setParrafo(true);
                setBotonDescarga(true);
            } catch (error) {
                console.log(error);
                }

            };

            const handleDownloadImage = () => {
                if (imageContabilidad) {
                    const link = document.createElement('a');
                    link.href = imageContabilidad;
                    link.download = 'boleta.png';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
            };

    return (

        <div className={styles.caja}>

            <div className={styles.cajaArriba}>
                <button onClick={handleClick} className={styles.boton2}>Salir</button>
                <button onClick={handleClickVolver} className={styles.boton3}>Volver</button>
            </div>

            <h1>Bienvenido al Panel</h1>

            <div className={styles.cajaImagen}>
                {parrafo && (
                <p className={styles.parrafo}>Tus Boletas de Honorarios en el año:</p>
                )}
                <img src={imageContabilidad} />
            </div>

            <button onClick={handleConsultarBoletas} className={styles.botonConsultar}>Consultar Boletas de Honorarios</button>

            {  botonDescarga && (
            <button onClick={handleDownloadImage} className={styles.botonDescargar}>Descargar Boletas de Honorarios</button>
            )}

        </div>
    );
};

export default Panel;