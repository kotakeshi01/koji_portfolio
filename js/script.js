document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('trigger1');
    const modal = document.getElementById('modal');
    const video = document.getElementById('main-video');
    const closeBtn = document.getElementById('close-btn');

    // スクロール検知
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                trigger.classList.add('show');
            }
        });
    }, { threshold: 0.5 });

    observer.observe(document.getElementById('section1'));

    // ポップアップを開く
    trigger.addEventListener('click', () => {
        document.getElementById('m-title').innerText = "クアッカワラビー";
        document.getElementById('m-desc').innerText = "西オーストラリア州に生息する「世界一幸せな動物」。";
        
        modal.style.display = 'flex';
        gsap.fromTo(".modal-content", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 });
        video.play();
    });

    // 閉じる
    closeBtn.addEventListener('click', () => {
        gsap.to(".modal-content", { scale: 0.8, opacity: 0, duration: 0.3, onComplete: () => {
            modal.style.display = 'none';
            video.pause();
        }});
    });
});