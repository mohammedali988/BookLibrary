import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z.string().min(3),
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  universityId: z.coerce.number(),
  password: z.string().min(5),
  universityCard: z.string().nonempty("University Card is required"),
});

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  password: z.string().min(5),
});
