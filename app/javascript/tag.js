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

      // レスポンス
      XHR.onload = () => {
        const searchResult = document.getElementById("search-result");
        searchResult.innerHTML = "";  // 直前の検索結果を削除

        // レスポンスにデータが存在する場合は、検索結果を表示
        if (XHR.response) {
          const tagName = XHR.response.keyword;

          tagName.forEach((tag) => {
            const childElement = document.createElement("div");
            childElement.setAttribute("class", "child");
            childElement.setAttribute("id", tag.id);
            childElement.innerHTML = tag.name;
            searchResult.appendChild(childElement);

            // 検索結果をクリックすると、フォームに反映される
            const clickElement = document.getElementById(tag.id);
            clickElement.addEventListener("click", () => {
              document.getElementById("tweets_tag_name").value = clickElement.textContent;
              clickElement.remove();
            });
          });
        };
      };
    })
  });
};