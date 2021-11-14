const generateRandomId = (
  (i) => () =>
    i++
)(0)

const dynamicSort = (property: string, sortType = 'ASC'): (a: number, b: number) => number => {
  let sortOrder = sortType === 'ASC' ? 1 : -1

  if (sortOrder === -1) {
    property = property.substr(1)
  }
  return function (a: number, b: number): number {
    let result = a < b ? -1 : a > b ? 1 : 0
    if (property) {
      // @ts-ignore
      result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0
    }

    return result * sortOrder
  }
}

const simpleSort = (sortType = 'ASC'): (a: number, b: number) => number => {
  let sortOrder = sortType === 'ASC' ? 1 : -1

  return function (a: number, b: number): number {
    let result = a < b ? -1 : a > b ? 1 : 0

    return result * sortOrder
  }
}

const groupBy = (xs: any[], key: string | number): [] => {
  return xs.reduce(function (rv, x) {
    ;(rv[x[key]] = rv[x[key]] || []).push(x)
    return rv
  }, {})
}

const toCamelCase = (text: string): string => {
  return text.replace(/-\w/g, clearAndUpper);
}

const toPascalCase = (text: string): string => {
  return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

const clearAndUpper = (text: string): string => {
  return text.replace(/-/, "").toUpperCase();
}

const toBase64 = (file: File) => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => resolve(reader.result)
  reader.onerror = error => reject(error)
})

const base64ToFile = async (dataUrl: string, fileName: string): Promise<File> => {
  const res: Response = await fetch(dataUrl)
  const blob: Blob = await res.blob()
  return new File([blob], fileName, { type: 'image/png' })
}

export { generateRandomId, dynamicSort, simpleSort, groupBy, toCamelCase, toPascalCase, clearAndUpper, toBase64, base64ToFile }