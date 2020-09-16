import User from '@modules/users/infra/typeorm/entities/User';
import UserDTO from '@modules/users/dtos/userDTO';

export default class UserMap {
  public static toDTO(user: User): UserDTO {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };
  }
}
