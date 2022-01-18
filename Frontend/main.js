window.onload = () => {
    document.getElementById('submit').onclick = () => {
        const name = document.getElementById('name').value;
        const lastname = document.getElementById('lastname').value;
        const divHome = document.getElementById('homeNav');

        // I stopped here while trying to post
        fetch("http://localhost:3001/add-people",{
            method: "POST",
            data: {
                name: name,
                lastname: lastname
            }
        })

        const span = document.createElement('span');
        const date = new Date();

        const message = `
        <div class="d-flex flex-row ml-auto">
        <img src='https://bootdey.com/img/Content/avatar/avatar1.png' alt='avatar' class="avatar">
        <p class="mb-0 align-self-center ml-2">${name} ${lastname.toUpperCase()} (${date.getHours()}:${date.getMinutes()})</p>
        </div>
        `;

        span.classList.add("ml-auto");
        span.innerHTML = message;
        divHome.appendChild(span);
    };

    document.getElementById('dashboardLink').onclick = () => {
        const main = document.getElementById('main-content');

    }
};