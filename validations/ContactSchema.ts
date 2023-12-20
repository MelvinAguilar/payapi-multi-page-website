import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name can’t be empty" })
    .max(50, { message: "Name must be less than 50 characters" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .min(1, { message: "Email can’t be empty" }),
  company: z
    .string()
    .min(1, { message: "Company name can’t be empty" })
    .max(50, { message: "Company name must be less than 50 characters" }),
  title: z
    .string()
    .min(1, { message: "Title can’t be empty" })
    .max(50, { message: "Title must be less than 50 characters" }),
  message: z
    .string()
    .min(1, { message: "Message can’t be empty" })
    .max(500, { message: "Message must be less than 500 characters" }),
});
