$(document).ready(function(){
  $('.slider').slick({
    autoplay: true, //自動でスクロール
    autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
    speed: 5000, //スライドが流れる速度を設定
    cssEase: "linear", //スライドの流れ方を等速に設定
    slidesToShow: 6, //表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, //矢印非表示
    pauseOnFocus: false, //スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, //スライダーにマウスホバーした時にスライドを停止させるか
    responsive: [
      {
        breakpoint: 768, // タブレットの場合のブレークポイント
        settings: {
          slidesToShow: 3, // 1度に表示するスライド数を3に変更
        }
      },
      {
        breakpoint: 480, // スマートフォンの場合のブレークポイント
        settings: {
          slidesToShow: 1, // 1度に表示するスライド数を1に変更
        }
      }
    ]
  });
});