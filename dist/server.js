"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./configs/db");
// import middleware
// import routes
const user_1 = __importDefault(require("./routes/user"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
const startServer = async () => {
    try {
        const app = (0, express_1.default)();
        app.use(express_1.default.json());
        await (0, db_1.connectToDB)();
        app.use("/api/v1", user_1.default);
        app.listen(PORT, () => {
            console.log(`Orbit server is running on http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.log(error);
    }
};
startServer();
