import { z } from 'zod';

// Define the schema
export const companySchema = z.object({
    name: z.string().min(5, { message: "Deberia tener al menos 5 caracteres" }),
    primaryColor: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    secondaryColor: z.string().min(6, { message: "Password must be at least 6 characters long" }),

});


