// ユーザー入力に応じたアクション設定
export const LoginStart = (user) => ({
  type: "LOGIN_START", // アクション名
});
export const LoginSucces = (user) => ({
  type: "LOGIN_SUCCES",
  payload: user, //状態の指定
});
export const LoginError = (error) => ({
  type: "LOGIN_ERROR",
  payload: error,
});
