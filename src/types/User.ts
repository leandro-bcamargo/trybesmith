export type User = {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password: string,
}

export type UserDB = Required<Pick<User, 'id'>> & Omit<User, 'id'>;