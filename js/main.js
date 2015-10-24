/**
 * Created by linde on 18-Sep-15.
 */
var team = [
    {
        image: '../data/people/blair-harris-cello.jpg',
        name: 'Blair Harris',
        position: 'player'
    }, {
        image: '../data/people/alan-web.jpg',
        name: 'Alan',
        position: 'player'
    }, {
        image: '../data/people/carol-web.jpg',
        name: 'Carol',
        position: 'player'
    }, {
        image: '../data/people/donna-web.jpg',
        name: 'Donna',
        position: 'player'
    }, {
        image: '../data/people/jacinta-web.jpg',
        name: 'Jacinta',
        position: 'player'
    }, {
        image: '../data/people/JamesMorrison250.jpg',
        name: 'James Morrison',
        position: 'player'
    }, {
        image: '../data/people/david-lawrence-conductor-web.jpg',
        name: 'David Lawrence',
        position: 'conductor'
    }
];

function loadTeamMembers() {
    console.log('loading team members');
    var div = document.getElementById("team_div");
    var players = $(div).find("#players")[0];
    var conductors = $(div).find("#conductors")[0];

    team.forEach(function (item) {
        var div0 = document.createElement("div");
        var div1 = document.createElement("div");
        var div2 = document.createElement("div");

        var a = document.createElement("a");
        a.onclick = function () {
            window.open(item.link)
        };

        var div3 = document.createElement("div");

        var image = document.createElement("img");
        image.src = item.image;
        image.alt = "sponsor_logo";
        image.height = 150;
        image.maxHeight = 150;

        var p = document.createElement("p");
        p.innerHTML = item.name;

        div3.appendChild(p);
        div2.appendChild(image);
        div2.appendChild(div3);
        a.appendChild(div2);
        div1.appendChild(a);
        div0.appendChild(div1);

        div0.style.display = "inline-block";
        div0.style.margin = '5px';

        if (strContains(item.position, "conductor")) {
            conductors.appendChild(div0);
        } else {
            players.appendChild(div0);
        }
    });
}

function strContains(str, content) {
    try {
        return str.toLocaleLowerCase().indexOf(content.toLowerCase()) > -1;
    } catch (err) {

    }
    return false;
}