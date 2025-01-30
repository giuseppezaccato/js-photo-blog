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
        //* questa vosa va fatta DENTRO ciclo, 
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
                                <li class="list-group-item para">${element.date}</li>
                                <li class="list-group-item para1 text-uppercase ">${element.title}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `

        });

        //task richiamo la variabile array come da righe 4/6
        cards = document.querySelectorAll('.card');

        //task  il foreach sull'array di info creato dal queryselectoAll va fatto qui!!!
        cards.forEach(element => {
            element.addEventListener('click', function () {
                document.getElementById('myModal').innerHTML = `<img src="https://marcolanci.it/boolean/assets/pictures/${element.getAttribute("data-opplà")}.png" width="450px" alt="" > `;
                document.getElementById('myModal').classList.remove('d-none');
            })

        });

    })
    .catch(error => {
        console.error(error)
    })

//fix tentativo MODALE BONUS
const openModal = document.querySelectorAll('figure');
// const closeModal = document.getElementById('closeModal');


// console.log(openModal, closeModal);




