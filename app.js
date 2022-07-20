async function getUserList() {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        let result = await res.json();
        let divmain = document.getElementById('message');
        var player = document.createElement('h2');
        player.textContent = "Lists of Users";
        divmain.appendChild(player);
        result.forEach(function(user) {
            let divout = document.createElement('div');
            divout.className = 'player';
            divmain.appendChild(divout);
            let divin1 = document.createElement('div');
            divin1.className = 'strength';
            divin1.innerText = `Name : ${user.name}`;
            divout.appendChild(divin1);
            let divin2 = document.createElement('div');
            divin2.innerText = `Email   : ${user.email}`;
            divout.appendChild(divin2);
            let divin3 = document.createElement('div');
            divin3.innerText = `Phone   : ${user.phone}`;
            divout.appendChild(divin3);
            let divin4 = document.createElement('div');
            divin4.innerText = `Website : ${user.website}`;
            divout.appendChild(divin4);
            let divin5 = document.createElement('div');
            divin5.innerText = `Company : ${user.company.name}`;
            divout.appendChild(divin5);
            let divin6 = document.createElement('div');
            divin6.innerText = `City    : ${user.address.city}`;
            divout.appendChild(divin6);
            let divin7 = document.createElement('div');
            divin7.innerText = `Zipcode : ${user.address.zipcode}`;
            divout.appendChild(divin7);
        })
    } catch (error) {
        console.log('Promise rejected.');
        console.log(error.message);
    }
}