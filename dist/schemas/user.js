"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .trim()
        .min(3, { message: "Name should be atleast 3 characters" })
        .max(100, { message: "Name should be less than 100 characters" }),
    email: zod_1.z.string().email(),
    password: zod_1.z
        .string()
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/),
});
