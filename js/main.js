window.onload = function () {
    const words = document.querySelectorAll('.word');
    let delay = 0;

    words.forEach((word, index) => {
        setTimeout(() => {
            word.style.opacity = '1';
        }, delay);

        delay += 800;
    });

    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sides = document.querySelectorAll('.side');
                sides.forEach((side) => {
                    side.style.opacity = '1';
                    side.style.transform = 'translateX(0)';
                });
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1
    });

    const sides = document.querySelectorAll('.side');
    sides.forEach((side) => {
        observer.observe(side);
    });


    const textElement = document.querySelector('.ImgZoomIn');
    const yardHubElement = document.querySelector('.YardHub');
    const movElement = document.querySelector('.mov'); 

    const handleTextIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // الخط يظهر أولاً
                setTimeout(() => {
                    yardHubElement.classList.add('show-line');
                }, 3000);

                setTimeout(() => {
                    textElement.classList.add('zoom-effect');
                    yardHubElement.classList.add('zoom-effect-YH'); 
                    movElement.classList.add('moveUp'); 

                }, 4200); 

                observer.unobserve(entry.target); 
            }
        });
    };

    const textObserver = new IntersectionObserver(handleTextIntersection, {
        threshold: 0.1
    });

    textObserver.observe(textElement);
    textObserver.observe(yardHubElement);




    



















    const words2 = document.querySelectorAll('.word2');
    let delay2 = 0;

    const handleWords2Intersection = (entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                }, delay2);

                delay2 += 1000;
                observer.unobserve(entry.target);
            }
        });
    };

    const observer2 = new IntersectionObserver(handleWords2Intersection, {
        threshold: 0.1
    });

    words2.forEach((word) => {
        observer2.observe(word);
    });


    const image = document.querySelector('.image');

    const handleImageIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                image.classList.add('animate-image');
                observer.unobserve(entry.target);
            }
        });
    };

    const imageObserver = new IntersectionObserver(handleImageIntersection, {
        threshold: 0.1
    });

    imageObserver.observe(image);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

















    const squares = document.querySelectorAll('.outSquare');

    const handleIntersection2 = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // تفعيل الأنميشن
                observer.unobserve(entry.target); // إيقاف المراقبة بعد التفعيل
            }
        });
    };

    const observer3 = new IntersectionObserver(handleIntersection2, {
        threshold: 0.5 // يتم التفعيل عند ظهور 50% من العنصر
    });

    squares.forEach(square => observer3.observe(square));














    const cards = document.querySelectorAll('.tst p');

    const handleIntersection3 = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // تفعيل الأنميشن
                observer.unobserve(entry.target); // إيقاف المراقبة بعد التفعيل
            }
        });
    };

    const observer4 = new IntersectionObserver(handleIntersection3, {
        threshold: 0.5 // يبدأ التفعيل عند ظهور 50% من العنصر
    });

    cards.forEach(card => observer4.observe(card));


};









