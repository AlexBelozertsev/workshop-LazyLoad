const images = document.querySelectorAll('.feed img');

// устанавливаю границу подгрузки картинки
const options = {
    rootMargin: '200px',
};
// функция наблюдения и установки стилей на объект входящий в зону наблюдения
const onEntry = (entries, observer) => {
    entries.forEach(entrie => {
        if (entrie.isIntersecting) {
            const img = entrie.target;
            img.classList.add('appear');
            console.log(img);

            // отключаю наблюдение за уже загруженой img
            observer.unobserve(img)
        }
    })
};
// вешаю IntersectionObserver на все obj
const io = new IntersectionObserver(onEntry, options);

// устанавливаю наблюдение за every obj
images.forEach(image => io.observe(image));

// ==============================================
// 2 вариант - вешать слежение на каждую картинку
// const lazyLoad = target => {
//     const options = {
//         rootMargin: '200px',
//     };
//     const io = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entrie => {
//             if (entrie.isIntersecting) {
//                 const img = entrie.target;
//                 img.classList.add('appear');
//                 console.log(img);

//                 observer.disconnect();
//             }
//         })
//     }, options);
//     io.observe(target);
// };

// images.forEach(image => lazyLoad(image));
