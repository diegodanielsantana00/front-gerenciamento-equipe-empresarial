import { User } from '../entities/user';

export interface UserRepositoryInterface {
  getUserByToken(id: number): User;
}
