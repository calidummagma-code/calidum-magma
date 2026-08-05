import { useState } from "react";
import { supabase } from "../supabase/client";
import Dashboard from "../components/admin/Dashboard";

export default function Admin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [logueado, setLogueado] = useState(false);
    const [mensaje, setMensaje] = useState("");

    async function iniciarSesion(e) {

        e.preventDefault();

        const { error } = await supabase.auth.signInWithPassword({

            email,
            password

        });

        if (error) {

            setMensaje("Email o contraseña incorrectos.");

            return;

        }

        setLogueado(true);

    }

    if (logueado) {

        return <Dashboard />;

    }

    return (

        <section
            style={{
                minHeight: "100vh",
                background: "#000",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >

            <form
                onSubmit={iniciarSesion}
                style={{
                    width: 350,
                    display: "flex",
                    flexDirection: "column",
                    gap: 15
                }}
            >

                <h1
                    style={{
                        color: "#fff",
                        textAlign: "center"
                    }}
                >
                    ADMIN CALIDUM MAGMA
                </h1>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button>

                    Entrar

                </button>

                <p
                    style={{
                        color: "white",
                        textAlign: "center"
                    }}
                >
                    {mensaje}
                </p>

            </form>

        </section>

    );

}