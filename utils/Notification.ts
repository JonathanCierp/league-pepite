import { createApp } from 'vue'
import { generateRandomId } from '~/utils'
import BaseNotification from '~/components/base/notification/Notification.vue'

interface NotificationOption {
  type?: string
  message?: string
  duration?: number
  close?: any
}

const NOTIFICATION_TYPE = {
  DEFAULT: 'default',
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info'
}
const NOTIFICATION_POSITION = {
  TOP_LEFT: 'top-left',
  TOP: 'top',
  TOP_RIGHT: 'top-right',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM: 'bottom',
  BOTTOM_RIGHT: 'bottom-right'
}
const NOTIFICATION_TRANSITION = {
  TOP_LEFT: 'slide-right',
  TOP: 'slide-down',
  TOP_RIGHT: 'slide-left',
  BOTTOM_LEFT: 'slide-right',
  BOTTOM: 'slide-up',
  BOTTOM_RIGHT: 'slide-left'
}

class Notification {
  instance: HTMLDivElement = document.createElement('div')
  instances: HTMLDivElement[] = []
  options: NotificationOption = {
    type: '',
    message: '',
    close: () => {}
  }

  constructor(_options: NotificationOption) {
    this.options = _options
  }

  default = (message: any, options?: NotificationOption) => {
    this.options = options || {}
    this.options.type = NOTIFICATION_TYPE.DEFAULT
    return this._show(message)
  }

  success = (message: any, options?: NotificationOption) => {
    this.options = options || {}
    this.options.type = NOTIFICATION_TYPE.SUCCESS
    return this._show(message)
  }

  error = (message: any, options?: NotificationOption) => {
    this.options = options || {}
    this.options.type = NOTIFICATION_TYPE.ERROR
    return this._show(message)
  }

  warning = (message: any, options?: NotificationOption) => {
    this.options = options || {}
    this.options.type = NOTIFICATION_TYPE.WARNING
    return this._show(message)
  }

  info = (message: any, options?: NotificationOption) => {
    this.options = options || {}
    this.options.type = NOTIFICATION_TYPE.INFO
    return this._show(message)
  }

  onClose = (instanceId: any) => {
    let instance = this.instances.find((instance) => instance.id === instanceId)
    this.instances = [...this.instances.filter((instance) => instance.id !== instanceId)]

    if (instance) {
      instance.remove()
    }

    this.recalcNotificationPositioning()
  }

  createNotificationContainer = () => {
    const randomId = `custom-notification-${generateRandomId()}`
    const app = createApp(BaseNotification, {
      id: randomId,
      ...this.options
    })

    const component = app.mount(document.createElement('div'))
    setTimeout(() => {
      let container = this.notificationPositioning(component)
      component.$el.id = randomId

      document.body.appendChild(container)
      this.instances = [...this.instances, component.$el]
    }, 0)
  }

  _show = (message: any) => {
    this.options.message = message || this.options.message
    this.options.close = this.onClose

    if (typeof this.options !== 'object') {
      console.error('Options should be a type of object. given : ' + this.options)
      return null
    }

    this.createNotificationContainer()

    return this
  }

  notificationPositioning = (element: any) => {
    const baseOffset = 8
    let totalOffsetTop = baseOffset
    let props = element.$props
    
    for (let instance of this.instances) {
      totalOffsetTop += instance.offsetHeight + baseOffset
    }
    
    if (props.position.includes('top')) {
      element.$el.style.top = totalOffsetTop + 'px'
    } else if (props.position.includes('bottom')) {
      element.$el.style.bottom = totalOffsetTop + 'px'
    }

    return element.$el
  }

  recalcNotificationPositioning = () => {
    const baseOffset = 8
    let totalOffsetTop = baseOffset

    for (let instance of this.instances) {
      if (instance.className.includes('top')) {
        instance.style.top = totalOffsetTop + 'px'
      } else if (instance.className.includes('bottom')) {
        instance.style.bottom = totalOffsetTop + 'px'
      }
      totalOffsetTop += instance.offsetHeight + baseOffset
    }
  }
}

export { NotificationOption, NOTIFICATION_TYPE, NOTIFICATION_POSITION, NOTIFICATION_TRANSITION }
export default Notification