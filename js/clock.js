$(function(){
  // ページがロードされた時の処理
  $(window).on('load',function(){
    // 保存された最後にアクセスした日付を取得する
    var lastAccessDate = localStorage.getItem("lastAccessDate");
    // 今日の日付を取得する
    var today = new Date();
    // 最後にアクセスした日付が今日の日付と同じであれば、ローディング画面を非表示にする
    if (lastAccessDate && lastAccessDate === today.toLocaleDateString()) {
      $('.container').hide();
      $('.loader-bg').hide();
    } else {
      // 最後にアクセスした日付を保存する
      localStorage.setItem("lastAccessDate", today.toLocaleDateString());
      $('.container').delay(1000).fadeOut(500);
      $('.loader-bg').delay(800).fadeOut(500);
    }
  });
});