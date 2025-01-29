//task individuo elemento in pagina
const container = document.querySelector('.row');
//task chiamata all'API
axios.get('https://lanciweb.github.io/demo/api/pictures/')

    .then(response => {
        console.log(response.data);

        //  task eventuale destructuring
        // let [{ title }, { url }, { date }] = response.data
        // console.log(title, url, date)

        //task ciclo l'array per recuperare i dati usando una sola chiamata!
        response.data.forEach(element => {
            //task genero la card
            container.innerHTML +=
                `
            <div>
                <div class=" card p-2 my-5 ">
                    <figure class="position-relative">
                        <img src="${element.url}" width="100%" class="card-img-top p-3" alt="${element.title}">
                        <img src="./img/pin.svg" class="position-absolute top-0 start-50 translate-middle" alt="pin">
                    </figure>
                    <div class="card-body">
                        <ul class="list-group list-group-flush ">
                                <li class="list-group-item para">${element.date}</li>
                                <li class="list-group-item para1 ">${element.title}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
        });


    })
    .catch(error => {
        console.error(error)
    })

//fix tentativo MODALE BONUS
// const openModal = document.querySelectorAll('figure');
// const closeModal = document.getElementById('closeModal');

// console.log(openModal, closeModal);



