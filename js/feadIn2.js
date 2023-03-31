// window.addEventListener('scroll', () => {
//   const targets = document.querySelectorAll(".animate-text:not(.animated)");
//   targets.forEach(target => {
//     if (isElementInViewport(target)) {
//       target.classList.add("animated");
//       const text = target.textContent;
//       target.textContent = "";
//       for (let i = 0; i < text.length; i++) {
//         const span = document.createElement("span");
//         span.textContent = text[i];
//         span.style.opacity = "0";
//         span.style.transition = "opacity 3s ease, transform 3s ease";
//         span.style.transform = "translateY(20px)";
//         target.appendChild(span);
//       }
//       const spans = document.querySelectorAll(".animate-text span");
//       let delay = 0;
//       target.style.opacity = "1";
//       spans.forEach((span, index) => {
//         delay += 0;
//         setTimeout(() => {
//           span.style.opacity = "1";
//           span.style.transform = "translateY(0)";
//         }, delay + index * 50);
//       });
//     }
//   });
// });

// function isElementInViewport(el) {
//   const rect = el.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// 画面を読み込んだら実行
window.addEventListener('load', () => {
  // アニメーションを適用したい要素を全て取得
  const targets = document.querySelectorAll(".animate-text");
  targets.forEach(target => {
    // 要素のテキストを取得して、空文字列にする
    const text = target.textContent;
    target.textContent = "";
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement("span");
      span.textContent = text[i];
      span.style.opacity = "0";
      span.style.transition = "opacity 3s ease, transform 3s ease";
      span.style.transform = "translateY(20px)";
      target.appendChild(span);
    }
    // 要素内の全ての文字列を取得して、配列にする
    const spans = Array.from(target.querySelectorAll(".animate-text span"));
    // アニメーションが開始するスクロール位置を設定
    const offset = 100;
    // スクロール位置が適切かどうかを確認する関数
    const checkScroll = () => {
      // 要素の位置と高さを取得
      const targetTop = target.getBoundingClientRect().top;
      const targetHeight = target.offsetHeight;
      // ビューポートの高さを取得
      const windowHeight = window.innerHeight;
      // 要素の位置がビューポート内にある場合、アニメーションを開始する
      if (targetTop + targetHeight - offset > 0 && targetTop < windowHeight - offset) {
        // 開始遅延時間の設定
        let delay = 0;
        // 文字列に対してアニメーションを適用
        spans.forEach((span, index) => {
          delay += 0;
          setTimeout(() => {
            span.style.opacity = "1";
            span.style.transform = "translateY(0)";
          }, delay + index * 50);
        });
        // イベントを削除する
        window.removeEventListener("scroll", checkScroll);
      }
    }
    // スクロールされた時にcheckScroll関数を実行するように設定
    window.addEventListener("scroll", checkScroll);
    // 初回チェックを実行する
    checkScroll();
  });
});
