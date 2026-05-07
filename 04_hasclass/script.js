$(function() {
  // jQueryを記述
  if($("p").hasClass("textRed")) {
    $("p").html("Yes");
  } else {
    // 条件を満たさなかった場合
    $("p".html("No"));
  }
});