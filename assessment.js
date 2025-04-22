/** @type {string[]} */
const tblResult = `
###userName###のいいところは声です。###userName###の特徴的な声は皆を惹きつけ、心に残ります。
###userName###のいいところはまなざしです。###userName###に見つめられた人は、気になって仕方がないでしょう。
###userName###のいいところは情熱です。###userName###の情熱に周りの人は感化されます。
###userName###のいいところは厳しさです。###userName###の厳しさがものごとをいつも成功に導きます。
###userName###のいいところは知識です。博識な###userName###を多くの人が頼りにしています。
###userName###のいいところはユニークさです。###userName###だけのその特徴が皆を楽しくさせます。
###userName###のいいところは用心深さです。###userName###の洞察に、多くの人が助けられます。
###userName###のいいところは見た目です。内側から溢れ出る###userName###の良さに皆が気を惹かれます。
###userName###のいいところは決断力です。###userName###がする決断にいつも助けられる人がいます。
###userName###のいいところは思いやりです。###userName###に気をかけてもらった多くの人が感謝しています。
###userName###のいいところは感受性です。###userName###が感じたことに皆が共感し、わかりあうことができます。
###userName###のいいところは節度です。強引すぎない###userName###の考えに皆が感謝しています。
###userName###のいいところは好奇心です。新しいことに向かっていく###userName###の心構えが多くの人に魅力的に映ります。
###userName###のいいところは気配りです。###userName###の配慮が多くの人を救っています。
###userName###のいいところはその全てです。ありのままの###userName###自身がいいところなのです。
###userName###のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる###userName###が皆から評価されています。
###userName###のいいところは優しさです。あなたの優しい雰囲気や立ち振る舞いに多くの人が癒やされています。
`.split(/[\r\n]/).filter(x => x.length);

document.getElementById("assessmentForm").addEventListener("submit", e => {
  e.preventDefault();

  /** @type {string} */
  const name = document.getElementById("userName").value;
  if (!name.length)
    return;

  let hash = 0;
  for(const x of name)
    hash += x.charCodeAt(0);

  const result = tblResult[hash % tblResult.length].replaceAll("###userName###", name);

  const elmResultContainer = document.getElementById("resultContainer");
  while(elmResultContainer.firstChild)
    elmResultContainer.removeChild(elmResultContainer.firstChild);
  
  const elmCaption = document.createElement("h3");
  elmCaption.textContent = "結果発表";
  elmCaption.classList.add("card-header");
  elmCaption.classList.add("text-bg-primary");
  elmResultContainer.appendChild(elmCaption);

  const elmBody = document.createElement("div");
  elmBody.classList.add("card-body");
  elmResultContainer.appendChild(elmBody);

  const elmText = document.createElement("p");
  elmText.textContent = result;
  elmText.classList.add("card-text");
  elmBody.appendChild(elmText);
  
  // ツイートボタン
  const shareLinkHtml = 
  `<a href="https://twitter.com/share?ref_src=twsrc%5Etfw"
  class="twitter-share-button"
  data-text=""
  data-hashtags="あなたのいいところ" data-show-count="false">Post #あなたのいいところ</a>
  <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`;

  const elmDummy = document.createElement("div");
  elmDummy.innerHTML = shareLinkHtml;
  elmDummy.getElementsByTagName("a")[0].setAttribute("data-text", result);
  elmText.appendChild(elmDummy);

  elmResultContainer.style.display = "block";
});