export function getCaptcha(mockResponseStatus) {
  return new Promise((resolve, reject) => {
    const statusMap = {
      success: {
        seconds: 2000,
        funct: () => {
          resolve({ status: 'success' })
        },
      },
      fail: {
        seconds: 3000,
        func: () => {
          reject({ status: 'fail' })
        },
      },
    }
    const status = statusMap[mockResponseStatus]
    setTimeout(status.func, status.seconds)
  })
}