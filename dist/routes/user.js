"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_1 = require("../middlewares/validate");
const user_1 = require("../schemas/user");
const user_2 = __importDefault(require("../models/user"));
const router = (0, express_1.Router)();
router.post("/", (0, validate_1.validate)(user_1.userSchema), async (req, res) => {
    try {
        const user = await user_2.default.create(req.body);
        res.status(201).json(user);
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = router;
