import express from "express"
import os from "os"
import cors from "cors"
import router from "./routes/routes"

const app = express()
app.use(express.json())
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://192.168.232.170:3000',
  ],
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions))
app.use(router)

// Obtener la ip del HOST
function getServerIp() {
  const interfaces = os.networkInterfaces();
  for (const interfaceName of Object.keys(interfaces)) {
    for (const iface of interfaces[interfaceName]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

const PORT = 3001;
const HOST = '0.0.0.0';
const localIp = getServerIp();

app.listen(PORT, HOST, () => {
  console.log("Servidor corriendo en:");
  console.log(`• Local: http://localhost:${PORT}`);
  console.log(`• Red local: http://${localIp}:${PORT}`)
})
