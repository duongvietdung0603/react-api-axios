export interface User {
    id: number,
    username: string
    password: string
    address: string
    gmail: string
    sex: string
}

export type Login = Pick<User, 'username' | 'password'> //chỉ lấy mỗi username, password

export type UserList = Omit<User, 'password'> //lấy tất cả, ngoại trừ thằng password