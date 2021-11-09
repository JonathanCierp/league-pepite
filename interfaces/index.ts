import { UserAuth } from '~/interfaces/User';

interface BaseAuthResponse {
  data: UserAuth
  message: string
}

export { BaseAuthResponse }