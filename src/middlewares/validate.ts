import { z } from "zod";
import { Request, Response, NextFunction } from "express";

export const validate = (
  schema: z.AnyZodObject | z.ZodOptional<z.AnyZodObject>,
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (error) {
      res.status(409).json(error);
    }
  };
};
