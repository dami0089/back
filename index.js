import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/top-headlinesRoutes.js";
import routerSearch from "./routes/searchRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();

// Configurar CORS
// const whitelist = [process.env.FRONTEND_URL];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.includes(origin)) {
//       // Puede consultar la API
//       callback(null, true);
//     } else {
//       // No esta permitido su request
//       callback(new Error("Error de Cors"));
//     }
//   },
// };

// app.use(cors(corsOptions));

const corsOptions = {
  origin: true,
};

app.use(cors());

// Routing
app.use("/api/top-headlines", router);
app.use("/api/search", routerSearch);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
