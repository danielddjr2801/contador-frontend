import styles from "../registro/registro.module.css"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [rut, setRut] = useState("");

    const [loginRut, setLoginRut] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const Register = () => {

        if (!firstName || !lastName || !email || !rut || !password) {
            alert('Todos los campos son obligatorios.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        axios.post("http://localhost:8080/user/register", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            rut: rut,
            password: password
        })

        .then(response => {
            console.log(response.data);
        })

        .catch(error => {   
            console.log(error.response.data);
        });

        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return false;
        }

        return true;
    };

    const handleRegistro = async (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !rut || !password) {
            alert('Todos los campos son obligatorios.');
            return;
        }

        try {
            const response = await axios.post("http://localhost:8080/user/register", {
                firstName: firstName,
                lastName: lastName,
                email: email,
                rut: rut,
                password: password
            });
            console.log("Registro exitoso", response.data);
        } catch (error) {
            console.error("Error al registrar:", error.response.data);
        }

        // if (!Register()) {
        //     return;
        // } else{
        //     console.log("Registro Exitoso");
        // }

        navigate("/intro");
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!loginRut || !loginPassword) {
            alert("Por favor, ingresa el correo electrónico y la contraseña");
            return;
        }
        
        try {
            const response = await axios.post("http://localhost:8080/user/login", {
                rut: loginRut,
                password: loginPassword
            });
            console.log("Login exitoso", response.data);
        } catch (error) {
            console.error("Error al iniciar sesión:", error.response.data);
        }

        navigate("/intro");
    };

    return(

            <div className={styles.caja}>
                <div>
                    <h2 className={styles.titulo}>Registrate a Cibox</h2>
                </div>
                <div className={styles.datos}>

                    <h2>Registro:</h2>
                    <label>First Name: </label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>

                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>

                    <label>Email: </label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>

                    <label>Rut: </label>
                    <input type="text" value={rut} onChange={(e) => setRut(e.target.value)}/>

                    <label>Password SII: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                    <label>Confirm Password: </label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>

                    <button onClick={handleRegistro}>Registrar</button>
                </div>

            <div className={styles.login}>

                <h2>Login:</h2>
                <label>Rut</label>
                <input type="text" value={loginRut} onChange={(e) => setLoginRut(e.target.value)}/>

                <label>Password SII</label>
                <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}/>

                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default Register;