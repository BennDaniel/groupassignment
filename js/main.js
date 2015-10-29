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

var sponsorList = [
    {
        image: "../data/sponsors/asap-logo.png",
        link: "",
        name: "ASAP Printers"
    }, {
        image: "../data/sponsors/townsville-council-logo.jpg",
        link: "link.html",
        name: "ASAP"
    }, {
        image: "../data/sponsors/ACVClogo.jpg",
        link: "http://acvc.com.au/",
        name: "ACVC"
    }, {
        image: "../data/sponsors/AFCMlogo-25th.gif",
        link: "http://www.afcm.com.au/",
        name: "AFCM"
    }, {
        image: "../data/sponsors/bunnings-warehouse-web.jpg",
        link: "http://www.bunnings.com.au/",
        name: "Bunnings warehouse"
    }, {
        image: "../data/sponsors/cowboys-logo-web.jpg",
        link: "http://www.cowboysleagues.com.au/",
        name: "Cowboys"
    }, {
        image: "../data/sponsors/cg-logo.jpg",
        link: "http://www.groovygraphics.com.au/Home.html",
        name: "Groovy Graphics"
    }, {
        image: "../data/sponsors/logo-col-slogan-web-250w.jpg",
        link: "link.html",
        name: "ASAP"
    }, {
        image: "../data/sponsors/racq-logo.jpg",
        link: "link.html",
        name: "ASAP"
    }, {
        image: "../data/sponsors/rsl-qld-web.jpg",
        link: "link.html",
        name: "ASAP"
    }, {
        image: "../data/sponsors/SOE-new-logo.jpg",
        link: "link.html",
        name: "ASAP"
    }, {
        image: "../data/sponsors/the-keyboard-shop-web.jpg",
        link: "link.html",
        name: "ASAP"
    }, {
        image: "../data/sponsors/sturt-business-centre-logo.png",
        link: "link.html",
        name: "ASAP"
    }, {
        image: "../data/sponsors/ticketshop_logo.jpg",
        link: "link.html",
        name: "ASAP"
    }
];

function loadSponsors() {
    console.log('loading sponsors');
    var div = document.getElementById("container");
    var sponsors = $(div).find("#sponsors")[0];

    sponsorList.forEach(function (item) {
        var div0 = document.createElement("div");
        var div1 = document.createElement("div");
        var div2 = document.createElement("div");

        div2.className = 'zoom_img_container';

        var a = document.createElement("a");
        a.onclick = function () {
            window.open(item.link)
        };

        var div3 = document.createElement("div");

        var image = document.createElement("img");
        image.src = item.image;
        image.alt = "sponsor_logo: " + item.name;
        image.height = 100;
        image.maxWidth = 100;
        image.maxHeight = 100;

        var p = document.createElement("p");
        p.innerHTML = item.name;

        div3.appendChild(p);

        div2.appendChild(image);
        div2.appendChild(div3);
        a.appendChild(div2);
        div1.appendChild(a);
        div0.appendChild(div1);

        div0.style.display = "inline-block";
        div0.style.marginLeft = '5px';
        div0.style.marginRight = '5px';
        div0.className = "zoom_img";
        sponsors.appendChild(div0);
    });
}
function strContains(str, content) {
    try {
        return str.toLocaleLowerCase().indexOf(content.toLowerCase()) > -1;
    } catch (err) {

    }
    return false;
}


function loadPeople() {
    //Todo special guests , life members , management committee
}