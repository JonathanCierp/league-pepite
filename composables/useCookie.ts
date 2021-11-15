class Cookie {
  getCookie = (key: string) => {
    const cookieArr = document.cookie.split(';')
    const cookie = cookieArr.find((cookie) => cookie.split('=')[0].trim() === key)

    return cookie?.split('=')[1].trim()
  }
  
  addCookie = (key: string, value: string, domain: string) => {
    console.log(`${key}=${value}; domain=${domain}; path=/;`)
    document.cookie = `${key}=${value}; domain=${domain}; path=/;`
  }

  deleteCookie = (key: string) => {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}

export default () => {
  if (process.env.SSR !== undefined) {
    return new Cookie()
  }
}