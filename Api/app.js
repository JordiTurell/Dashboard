const express = require('express')
const cors = require('cors');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config()
const app = express()

const corsOptions = {
    origin: 'http://localhost:4200', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true, 
  };

app.use(cors(corsOptions))
app.use(express.json())

app.post('/login', (req, res) => {
    let login = req.body;
    console.log(login)
    if(login.user === 'admin' && login.pass === 'admin'){
        const payload = {
            username: login.user,
            role: 'admin',
        }
        const t = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '1h',
        })

        res.status(200).json({ 
            message: 'Success',
            status: true,
            item: {
                token : t
            }
        });
    }else{
        res.status(400).json({ 
            message: 'Usuario o contrasenya erroneas',
            status: false 
        });
    }
  });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el http://localhost:${PORT}`);
});