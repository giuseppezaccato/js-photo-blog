//task individuo elemento in pagina
const container = document.querySelector('.row');

//* inizializzo vuoto quello che poi diventerà l'array delle cards 
//* selezionandolo col queryselectorAll dentro alla chiamata all'API
//* oppure lo dichiaro direttamente dentro alla chiamata fuori dal forEach
let cards;


//task chiamata all'API
axios.get('https://lanciweb.github.io/demo/api/pictures/')

    .then(response => {
        console.log(response.data);

        //  task eventuale destructuring
        //* questa osa va fatta DENTRO ciclo, 
        //* cioè una volta selezionato l'elemento per destrutturarlo!
        // let [{ title }, { url }, { date }] = response.data
        // console.log(title, url, date)

        //task ciclo l'array per recuperare i dati usando una sola chiamata!
        response.data.forEach(element => {

            //fix andava qui il destructuring!
            // let { title ,  url ,  date}  = element

            //task genero la card
            container.innerHTML +=
                `
            <div>
                <div class=" card p1 my-5 " data-opplà="${element.id}">
                    <figure class="position-relative">
                        <img src="${element.url}" width="100%" class="card-img-top p-3" alt="${element.title}">
                        <img src="./img/pin.svg" class="position-absolute top-0 start-50 translate-middle" alt="pin">
                    </figure>
                    <div class="card-body">
                        <ul class="list-group list-group-flush ">
                                <li class="list-group-item para1">${element.date}</li>
                                <li class="list-group-item para text-uppercase ">${element.title}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `

        });

        //task richiamo la variabile array come da righe 4/6
        cards = document.querySelectorAll('.card');

        //*  logica funzionamento MODALE
        //task  il foreach sull'array di info creato dal queryselectoAll va fatto qui!!!
        // forEach per ciclare sull'array cards che al click l'eventlistener deve ritornare l'immagine cliccata selezionando dall'elemento "card" solo l'attributo ID
        cards.forEach(element => {
            element.addEventListener('click', function () {
                const Modal = document.getElementById('Modal');
                Modal.innerHTML = `
                    <img src="https://marcolanci.it/boolean/assets/pictures/${element.getAttribute("data-opplà")}.png" class="rounded" width="450px" alt="" >
                    <button id="closeModal" class="btn btn-warning">Chiudi</button>
                `;
                Modal.classList.replace('d-none', 'modale');

                //task l'eventlistener qui per ragioni di scope, altrimenti non vedrei il bottone generato col l'inner
                const closeModal = document.getElementById('closeModal');
                closeModal.addEventListener('click', function () {
                    Modal.classList.replace('modale', 'd-none');
                })
            })

        });

    })
    .catch(error => {
        console.error(error)
    })


// console.log(openModal, closeModal);




