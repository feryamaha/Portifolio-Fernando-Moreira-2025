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
        { tag: 'img', src: 'assets/img/log-typescript.png', alt: 'logo-typescript' },
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

document.addEventListener('DOMContentLoaded', function () {
    // Esconde o cursor padrão 
    document.body.style.cursor = 'none';
    // Cria o elemento do cursor personalizado 
    const customCursor = document.createElement('div');
    customCursor.style.position = 'absolute';
    customCursor.style.width = '20px';
    customCursor.style.height = '20px';
    customCursor.style.border = '1px solid red';
    customCursor.style.borderRadius = '50%';
    customCursor.style.pointerEvents = 'none';
    customCursor.style.zIndex = '1000';
    // Adiciona o cursor personalizado ao corpo do documento 
    document.body.appendChild(customCursor);
    // Move o cursor personalizado com o movimento do mouse 
    document.addEventListener('mousemove', function (e) {
        customCursor.style.left = e.pageX + 'px';
        customCursor.style.top = e.pageY + 'px';
    });
});

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
});

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const header = document.querySelector('header');
    menuIcon.addEventListener('click', function () {
        header.classList.toggle('show-menu');
    });
});
