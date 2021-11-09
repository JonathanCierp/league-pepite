interface User {
  id: number
  uuid: string
  firstname: string
  lastname: string
  email: string
  username: string
  cv_path: string
  activation_code: string
  is_active: boolean
  updated_at: Date
  created_at: Date
}

interface UserAuth {
  user: User
  token: string
}

export { User, UserAuth }