document.addEventListener('DOMContentLoaded', () => {
    // 1. 現在開いているページのファイル名を取得（例: index.html）
    const currentPath = window.location.pathname;
    const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    
    // ナビゲーションメニューのリンクをすべて取得
    const navLinks = document.querySelectorAll('nav a');
    
    // 今いるページとリンク先が一致する場合に、CSSでデザインを変えるためのクラスを付与
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        // 厳密にページ名が一致するか、またはトップページ（/）の時にindex.htmlをアクティブにする
        if (pageName === linkPath || (pageName === '' && linkPath === 'index.html')) {
            link.classList.add('is-current');
        }
    });

    // 2. ハンバーガーメニューの開閉処理
    const hamburger = document.getElementById('js-hamburger');
    const nav = document.getElementById('js-nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('is-active'); // ボタンの「三本線」←→「×」切り替え
            nav.classList.toggle('is-active');       // メニューの「表示」←→「非表示」切り替え
        });
    }
});