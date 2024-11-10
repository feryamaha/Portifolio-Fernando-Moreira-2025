document.addEventListener('DOMContentLoaded', function () {
    const scrollerContents = document.querySelectorAll('.scroller-content');
    const contentList = [
        { tag: 'img', src: 'assets/img/log-css.png', alt: 'logo-css' },
        { tag: 'img', src: 'assets/img/log-git.png', alt: 'logo-git' },
        { tag: 'img', src: 'assets/img/log-github.png', alt: 'logo-github' },
        { tag: 'img', src: 'assets/img/log-html.png', alt: 'logo-html' },
        { tag: 'img', src: 'assets/img/log-javascript.png', alt: 'logo-javascript' },
        { tag: 'img', src: 'assets/img/log-node-js.png', alt: 'logo-node-js' },
        { tag: 'img', src: 'assets/img/log-python.png', alt: 'logo-python' },
        { tag: 'img', src: 'assets/img/log-react.png', alt: 'logo-react' },
        { tag: 'img', src: 'assets/img/log-typescript.png', alt: 'logo-typescript' },
        { tag: 'img', src: 'assets/img/log-css.png', alt: 'logo-css' },
        { tag: 'img', src: 'assets/img/log-git.png', alt: 'logo-git' },
        { tag: 'img', src: 'assets/img/log-github.png', alt: 'logo-github' },
        { tag: 'img', src: 'assets/img/log-html.png', alt: 'logo-html' },
        { tag: 'img', src: 'assets/img/log-javascript.png', alt: 'logo-javascript' },
        { tag: 'img', src: 'assets/img/log-node-js.png', alt: 'logo-node-js' },
        { tag: 'img', src: 'assets/img/log-python.png', alt: 'logo-python' },
        { tag: 'img', src: 'assets/img/log-react.png', alt: 'logo-react' },
        { tag: 'img', src: 'assets/img/log-typescript.png', alt: 'logo-typescript' },
        { tag: 'img', src: 'assets/img/log-css.png', alt: 'logo-css' },
        { tag: 'img', src: 'assets/img/log-git.png', alt: 'logo-git' },
        { tag: 'img', src: 'assets/img/log-github.png', alt: 'logo-github' },
        { tag: 'img', src: 'assets/img/log-html.png', alt: 'logo-html' },
        { tag: 'img', src: 'assets/img/log-javascript.png', alt: 'logo-javascript' },
        { tag: 'img', src: 'assets/img/log-node-js.png', alt: 'logo-node-js' },
        { tag: 'img', src: 'assets/img/log-python.png', alt: 'logo-python' },
        { tag: 'img', src: 'assets/img/log-react.png', alt: 'logo-react' },
        { tag: 'img', src: 'assets/img/log-typescript.png', alt: 'logo-typescript' }
    ];

    function insertContent(scrollerContent) {
        contentList.forEach(item => {
            const element = document.createElement(item.tag);
            element.src = item.src;
            element.alt = item.alt;
            scrollerContent.appendChild(element);
        });

        // Duplica o conteúdo para criar a ilusão de loop
        contentList.forEach(item => {
            const element = document.createElement(item.tag);
            element.src = item.src;
            element.alt = item.alt;
            scrollerContent.appendChild(element);
        });

        // Calcula a altura máxima das imagens
        let maxHeight = 0;
        scrollerContent.querySelectorAll('img').forEach(img => {
            if (img.offsetHeight > maxHeight) {
                maxHeight = img.offsetHeight;
            }
        });

        // Define a altura da scroller-content
        scrollerContent.style.height = maxHeight + 'px';
    }

    scrollerContents.forEach(insertContent);

    scrollerContents.forEach(scrollerContent => {
        let scrollAmount = 0;
        const scrollSpeed = 0.3;
        const resetPosition = scrollerContent.scrollWidth / 2;

        function scrollContinuously() {
            scrollAmount -= scrollSpeed;
            if (Math.abs(scrollAmount) >= resetPosition) {
                scrollAmount = 0;
            }
            scrollerContent.style.transform = `translateX(${scrollAmount}px)`;
            requestAnimationFrame(scrollContinuously);
        }

        scrollContinuously();
    });
});
