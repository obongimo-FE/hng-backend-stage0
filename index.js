import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/me', async (req, res) => {
    try {
        //fetch random cat fact
        const response = await axios.get("https://catfact.ninja/fact", {
            timeout: 5000, // 5 seconds timeout
        });

        const catFact = response.data.fact;

        //prepare json response

        const jsonResponse = {
            status: "success",
            user: {
                email: "obongimo@gmail.com",
                name: "Imo-obong Friday Akpan",
                stack: "Node.js/Express",
            },
            timestamp: new Date().toISOString(),
            fact: catFact,
        }

        res.status(200).json(jsonResponse);
    } catch (error) {
        console.error("Error fetching cat fact:", error.message);

        res.status(500).json({
        status: "error",
        message: "Unable to fetch cat fact at the moment. Please try again later.",
        });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
