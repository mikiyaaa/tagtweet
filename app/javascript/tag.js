// パスが"tweets/path"であれば
if (location.pathname.match("tweets/new")) {
  document.addEventListener("DOMContentLoaded", () => {
    const inputElement = document.getElementById("tweets_tag_name");
    inputElement.addEventListener("keyup", () => {
      // タグフォームに入力された文字列を取得
      const keyword = document.getElementById("tweets_tag_name").value;
      
      const XHR = new XMLHttpRequest();
      XHR.open("GET", `search/?keyword=${keyword}`, true);
      XHR.responseType = "json";
      XHR.send();
    })
  });
};