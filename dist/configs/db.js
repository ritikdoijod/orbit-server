"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectToDB = async () => {
    const MONGODB_URL = process.env.MONGODB_URL || "";
    try {
        await mongoose_1.default.connect(MONGODB_URL);
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.log(error.message);
    }
};
exports.connectToDB = connectToDB;
