// CodeSandboxエラーを無視するため、エラーハンドリングを追加
window.addEventListener('error', function(e) {
  if (e.message.includes('manifest.json') || e.message.includes('cache')) {
    console.log('CodeSandbox関連のエラーを無視しました:', e.message);
    e.preventDefault();
    return false;
  }
});

// index.mjsの代わりにここに必要なコードを直接記述
document.getElementById("app").innerHTML = `
  <div>
    <h2>追加コンテンツ</h2>
    <p>このコンテンツはJavaScriptから追加されました。</p>
  </div>
`;

// Swiperが確実に読み込まれるまで待機
function initSwiper() {
  if (typeof Swiper === 'undefined') {
    console.log('Swiperライブラリを待機中...');
    setTimeout(initSwiper, 100);
    return;
  }
  
  console.log('Initializing Swiper...');
  
  // Swiperの初期化
  const swiper = new Swiper(".mySwiper", {
    // スライドの表示枚数
    slidesPerView: 1,
    // スライド間の余白
    spaceBetween: 30,
    // ループ
    loop: true,
    // 自動再生
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // エフェクト（フェード、キューブなど）
    effect: "slide",
    // ページネーション
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // ナビゲーションボタン
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // レスポンシブブレイクポイント
    breakpoints: {
      // 768px以上の場合
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // 1024px以上の場合
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    },
  });
  
  console.log('Swiper initialized successfully:', swiper);
}

// DOMが読み込まれたらSwiper初期化を開始
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSwiper);
} else {
  initSwiper();
}
