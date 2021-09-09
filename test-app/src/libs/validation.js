export const EmailRegExp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/

export const PwCheck = (pw) => {
  if (pw.length > 8) {
    return true
  } else {
    return false
  }
}
