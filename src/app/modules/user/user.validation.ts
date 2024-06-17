import { z } from 'zod';
import { user_role, user_status } from './user.constant';

const UserSchemaValidation = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  role: z.nativeEnum(user_role).default(user_role.admin),

  password: z.string().min(6, 'Password must be at least 6 characters long'),
  phone: z.string().min(11, 'Invalid phone number: Must be exactly 11 characters long').max(11),
  address: z.string().min(1, 'Address is required'),
  status: z.nativeEnum(user_status).default(user_status.active),
});

export const UserValidation = {
  UserSchemaValidation,
};
