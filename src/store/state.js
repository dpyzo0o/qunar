let defaultCity = '北京'
// 防止某些浏览器禁用了本地存储导致程序异常
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (error) {}

export default {
  city: defaultCity
}
