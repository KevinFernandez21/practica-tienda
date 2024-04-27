require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const chat = model.startChat({
        history: [{
                role: "user",
                parts: [{ text: "Hola" }],
            },
            {
                role: "model",
                parts: [{ text: "Me alegro de verte. ¿Qué te gustaría saber?" }],
            },
        ],
        generationConfig: {
            maxOutputTokens: 200,
        },
    });

    const msg = "como estas?";

    const result = await chat.sendMessage(msg);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

run();