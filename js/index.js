$(document).ready(function () {

    // Slider
    if (window.location.href.indexOf('index') > -1) {
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
        });
    }



    //Posts
    if (window.location.href.indexOf('index') > -1) {
        var posts = [
            {
                title: 'Prueba de Titulo',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format("YYYY"),
                content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et leo nec nisi tincidunt aliquet.'
            },
            {
                title: 'Prueba de Titulo 2',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format("YYYY"),
                content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et leo nec nisi tincidunt aliquet.'
            },
            {
                title: 'Prueba de Titulo 3',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format("YYYY"),
                content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et leo nec nisi tincidunt aliquet.'
            },
            {
                title: 'Prueba de Titulo 4',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format("YYYY"),
                content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et leo nec nisi tincidunt aliquet.'
            },
            {
                title: 'Prueba de Titulo 5',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format("YYYY"),
                content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et leo nec nisi tincidunt aliquet.'
            },
        ]

        posts.forEach((item, index) => {
            var post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>${item.content}</p>
                <a href="#" class="button-more">Leer más</a>
            </article>
        `
            $('#posts').append(post)
        })
    }


})