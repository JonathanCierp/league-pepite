import { User, UserAuth } from '~/interfaces/User';

interface BaseAuthResponse {
  data: UserAuth
  message: string
}

interface BaseUserResponse {
  data: User
  message: string
}

interface BaseResponse {
  data: any
  message: string
}

export { BaseAuthResponse, BaseUserResponse, BaseResponse };