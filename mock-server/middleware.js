module.exports = (req, res, next) => {
  console.log(`call api url: ${req.url}`);
  // const endpoint = req.url.split("/")[1];
  // console.log(`start middleware setting:${endpoint}`);
  // switch (endpoint) {
  //   case "sample-service": 

  //*****カスタムヘッダーの設定
  //アクセス許可設定
  //あらかじめクライアントサイドでアクセス可能なヘッダーの属性が決まっている。
  //それ以外にもアクセスするにはアクセスを許可しておかなければならない。
  //この設定をすることでクライアントサイドでアクセスしたいヘッダーが追加で参照できるようになる。
  // res.header("Access-Control-Expose-Headers", "Location,ETag"); 
  //カスタムヘッダーの追加
  // res.header("Location", "/top"); 

  //*****外部ファイルの読み込み
  // console.log(process.env.TOP_MENU);

  //     break;
  // }
  next();
};
