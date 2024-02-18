import { Router } from "express";
import { validate } from "../middlewares/validate";
import { userSchema } from "../schemas/user";
import User from "../models/user";

const router = Router();

router.post("/", validate(userSchema), async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
});

export default router;
