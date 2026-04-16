export default function handler(req, res) {
    const { token, pregunta } = req.body;
    const TOKEN_MASTER = "AQ.Ab8RN6KqCTo6ecjtCkzvrvU9AKhEWIU_ph-PZ55u_JoJGAmilA";

    // Validación de seguridad obligatoria
    if (token !== TOKEN_MASTER) {
        return res.status(401).json({ error: "Token no autorizado" });
    }

    // Lógica universal: Procesa cualquier texto enviado
    const respuestaDinamica = {
        mensaje: "API funcionando correctamente",
        analisis_de_pregunta: `Has preguntado: "${pregunta}"`,
        detalles: {
            palabras: pregunta.trim().split(/\s+/).length,
            caracteres: pregunta.length,
            timestamp: new Date().toLocaleString('es-MX'),
            servidor: "Vercel Edge Network"
        },
        estado: "OK"
    };

    return res.status(200).json(respuestaDinamica);
}
