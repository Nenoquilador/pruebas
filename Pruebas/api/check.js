export default function handler(req, res) {
    const { token } = req.body;
    const MI_TOKEN_SECRETO = "AQ.Ab8RN6KqCTo6ecjtCkzvrvU9AKhEWIU_ph-PZ55u_JoJGAmilA";

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    if (token === MI_TOKEN_SECRETO) {
        return res.status(200).json({ 
            message: "Acceso concedido a UniProfile",
            status: "success" 
        });
    } else {
        return res.status(401).json({ error: "Token inválido" });
    }
}