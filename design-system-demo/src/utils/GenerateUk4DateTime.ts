/**
 * 日時から一意な文字列を生成して返却します。
 * 排他処理は実装してないのでシビアな処理には使用不可。
 * @returns 生成した文字列
 */
export const generateUk = () => {
  const timestamp = Date.now().toString(16);
  const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `${timestamp}-${randomHex}`;
};

