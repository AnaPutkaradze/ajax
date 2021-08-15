let navbarLinks = document.getElementById('navbarLinks');
let togglenutton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function() {
    navbarLinks.classList.toggle('active');
})


// XMLHttpRequest example
function getComments () {

    function render () {
        let response = this.responseText;
        let responseData = JSON.parse(response);
        console.log(responseData);

        let ul = document.createElement('ul');

        responseData.data.forEach(item => {
            let li = document.createElement('li');
            li.textContent = item.first_name + ' ' + item.last_name;

            ul.appendChild(li);
        });

        document.getElementById('api').appendChild(ul);
    }
    let requist = new XMLHttpRequest();
    requist.addEventListener('load', render);
    
    requist.open('GET', 'https://reqres.in/api/users?page=2');
    requist.send();
}

getComments();
