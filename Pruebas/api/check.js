export default function handler(req, res) {
    const { token, pregunta } = req.body;
    const TOKEN_MASTER = "AQ.Ab8RN6KqCTo6ecjtCkzvrvU9AKhEWIU_ph-PZ55u_JoJGAmilA";

    if (token !== TOKEN_MASTER) {
        return res.status(401).json({ respuesta: "Acceso denegado. El token es incorrecto." });
    }

    const p = pregunta.toLowerCase();
    let respuestaFinal = "";

    // Lógica de respuestas "humanas"
    if (p.includes("hola") || p.includes("buenos días")) {
        respuestaFinal = "¡Hola, Ernesto! La API está funcionando perfectamente y lista para trabajar.";
    } 
    else if (p.includes("quien eres") || p.includes("qué eres")) {
        respuestaFinal = "Soy tu API personalizada corriendo en Vercel. Mi trabajo es procesar tus peticiones.";
    }
    else if (p.includes("hora")) {
        respuestaFinal = "La hora actual en el servidor es: " + new Date().toLocaleTimeString('es-MX');
    }
    else if (p.includes("clima")) {
        respuestaFinal = "No tengo sensor de clima, pero el servidor está bastante fresco aquí en la nube de Vercel.";
    }
    else {
        respuestaFinal = `Recibí tu mensaje: "${pregunta}". La conexión es estable y puedo leerte sin problemas.`;
    }

    // Devolvemos solo la frase, nada técnico
    return res.status(200).json({ respuesta: respuestaFinal });
}
