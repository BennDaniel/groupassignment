var team_members = [
    //Todo maybe use an int as a in position reference to a position and the later turn it into text
    {
        id: 0,
        name: "Ashley Renne",
        position: "Director, Founder",
        what_i_do: "As a director I work across Trunk to  align vision and team culture into a cohesive whole.",
        why_im_here: "To discover and build the best culture and products on the planet.",
        my_quote: "Embrace complexity",
        onClick: function (evt) {
            showModal(evt, this.id)
        },
        image: "images/team/ashleyClearThumbBW.png"
    },
];

function loadTeamMembers() {
    console.log('loading team members');
    var div = document.getElementById("team_div");
    var engineers = $(div).find("#team-slider1")[0];
    var directors = $(div).find("#team-directors-slider")[0];

    team_members.forEach(function (item) {
        var div0 = document.createElement("div");
        div0.class = "col-md-12";

        var div1 = document.createElement("div");
        div1.class = "profile";

        var div2 = document.createElement("div");
        div2.class = "profile-photo";

        var a = document.createElement("a");
        a.onclick = item.onClick();

        //div2.class = "profile-photo";

        var div3 = document.createElement("div");
        div3.class = "director-title";

        var image = document.createElement("img");
        image.src = item.image;

        var h = document.createElement("h3");
        h.innerHTML = item.name;

        var p = document.createElement("p");
        p.innerHTML = item.position;

        div3.appendChild(h);
        div3.appendChild(p);

        div2.appendChild(image);
        div2.appendChild(div3);
        a.appendChild(div2);
        div1.appendChild(a);
        div0.appendChild(div1);

        if (strContains(item.position, "Director")) {
            console.log("adding : " + item.name + " to Director");
            directors.appendChild(div0);
        } else {
            console.log("adding : " + item.name + " to Engine");
            engineers.appendChild(div0);
        }
    });
}

function getTeamMemberById(id) {

    team_members.forEach(function (item) {
        if (id === item.id) {
            return item;
        }
    });
    return null;
}

function showModal(event, id) {
    var data = getTeamMemberById(id);

    var div0 = document.createElement("div");
    div0.class = "col-md-12";

    var div1 = document.createElement("div");
    div1.id = "benW-dialog";
    div1.class = "modalbg";
    div1.onclick = closeDialog();

    var div2 = document.createElement("div");
    div2.class = "dialog";
    div2.onclick = event.stopPropagation();

    var div3 = document.createElement("div");
    div3.class = "col-md-3";

    var div4 = document.createElement("div");
    div4.class = "dialog-image";

    var div5 = document.createElement("div");
    div5.class = "col-md-offset-3";

    var a = document.createElement("a");
    a.onclick = closeDialog();
    a.title = "Close";
    a.class = "close";
    a.innerHTML = 'X';


    var img = document.createElement("img");
    img.src = data.image;

    var name = document.createElement("h2");
    var position = document.createElement("h3");

    div5.appendChild(name);
    div5.appendChild(position);

    if (data.what_i_do) {
        var h = document.createElement("h4");
        var p = document.createElement("p");

        h.innerHTML = "What I do";
        p.innerHTML = data.what_i_do;
    }

    if (data.what_i_do) {
        var h = document.createElement("h4");
        var p = document.createElement("p");

        h.innerHTML = "What I do";
        p.innerHTML = data.what_i_do;

        div5.appendChild(h);
        div5.appendChild(p);
    }

    if (data.why_im_here) {
        var h = document.createElement("h4");
        var p = document.createElement("p");

        h.innerHTML = "Why I’m here";
        p.innerHTML = data.why_im_here;

        div5.appendChild(h);
        div5.appendChild(p);
    }

    if (data.my_quote) {
        var h = document.createElement("h4");
        var p = document.createElement("p");

        h.innerHTML = "My quote";
        p.innerHTML = data.my_quote;

        div5.appendChild(h);
        div5.appendChild(p);
    }
    div0.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(a);
    div2.appendChild(div3);
    div3.appendChild(div4);
    div4.appendChild(img);
    div2.appendChild(div5);

    //Todo open dialog
    //window.open('#close', '_self');
}


function strContains(str, content) {
    try {
        return str.indexOf(content) > -1;
    } catch (err) {

    }
    return false;
}