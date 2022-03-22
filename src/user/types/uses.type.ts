import { UserEntity } from './../user.entity';

//удаляем из типа данных UserEntity поле hashPassowrd c помощью класса Omit
export type UserType = Omit<UserEntity, 'hashPassword'>;
