/**
 * @file app 的全局配置
 * @author Kamalyes
 */

module.exports = {
  /**
   * 打印日志开关
   */
  log: true,

  http: {
    /**
     * 请求超时时间
     */
    timeout: 5000,

    /**
     * 服务器的host
     */
    baseURL: "/api",
  },
};
