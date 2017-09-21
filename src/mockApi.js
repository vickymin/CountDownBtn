export function getCaptcha(mockResponseStatus) {
  return new Promise((resolve, reject) => {
    const statusMap = {
      success: () => {
        resolve({ status: 'success' })
      },
      fail: () => {
        reject({ status: 'fail' })
      },
    }
    setTimeout(statusMap[mockResponseStatus], 2000)
  })
}