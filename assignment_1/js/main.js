var fileName = document.URL;
var i;
var container = document.getElementsByClassName("container")[0];

//Assignment 4.1
function changeTitle() {
    var title = document.getElementsByTagName("title")[0];
    if (fileName.includes("index.html")){
        title.textContent = "Webprogramming (LIX019P05) - Index"
    }
    if (fileName.includes("second.html")){
        title.textContent = "Webprogramming (LIX019P05) - Second"
    }
}

//Assignment 4.2
function createArticle() {
    if (fileName.includes("index.html")){
        var article = document.createElement("ARTICLE");
        var h = document.createElement("H1");
        var tH = document.createTextNode("New article");
        article.appendChild(h);
        h.appendChild(tH);
        var p = document.createElement("P");
        var tP = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget eros ultrices, dapibus lacus ultrices, ultrices tortor. Nam tincidunt blandit neque, at ornare sapien ultricies ut. Integer eget ultricies velit. Cras eu tellus ex. Integer bibendum nisi neque, sed auctor odio blandit sit amet. Aenean augue tellus, tincidunt vel commodo bibendum, rutrum nec augue. Donec pulvinar sem in purus congue sodales. Nam magna urna, maximus ut eros vel, rutrum semper sem. Duis a efficitur mauris. Nunc a aliquam nisi, vel iaculis justo. Donec lacus nulla, sollicitudin vitae lectus vel, tempus vestibulum ipsum. In dignissim consequat pellentesque. Pellentesque eget eleifend velit. Aenean aliquam auctor nibh vitae tristique. Nulla facilisi.\n");
        p.appendChild(tP);
        article.appendChild(p);
        document.querySelector(".col-md-12").appendChild(article);
    }
}

//Assignment 4.3 and 4.4
function changeLink() {
    var link = document.querySelectorAll("#myTabContent a")[2];
    link.setAttribute('href', 'http://google.com');
    link.setAttribute('target', '_blank');
}

//Assignment 4.5
function changeColor() {
    var x = document.querySelectorAll(".nav-item");
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "red";
    }
}

//Assignment 4.6
function weeklySchedule() {
    var scheduleObject = {
        week1 : "Assignment 1",
        week2 : "No lecture",
        week3 : "Assignment 2",
        week4 : "Assignment 1",
        week5 : "-",
        week6 : "Assignment 3",
        week7 : "Guest Lecture"
    };

    if (fileName.includes("index.html")) {
        var scheduleDiv = document.createElement("DIV");
        var h = document.createElement("H2");
        var tH = document.createTextNode("Weekly Schedule");
        scheduleDiv.appendChild(h);
        h.appendChild(tH);
        var p = document.createElement("P");
        scheduleDiv.appendChild(p);

        var weekCount = 1;
        for (var item in scheduleObject) {
            if( scheduleObject.hasOwnProperty(item) ) {
                p.appendChild(document.createTextNode("Week " + weekCount + " | " + scheduleObject[item]));
                p.appendChild(document.createElement("br"));
                weekCount += 1;
            }
        }
        document.querySelector(".col-md-12").appendChild(scheduleDiv);
    }
}

//Assignment 4.7
function addSidebar() {
    if (fileName.includes("second.html")) {
        var mainCol = document.getElementsByClassName("col-md-12")[0];
        mainCol.setAttribute("class", "col-md-8");
        var sidebar = document.createElement("DIV");
        sidebar.setAttribute("class", "col-md-4");
        var sideHeader = document.createElement("H3");
        var header = document.createTextNode("Sidebar");
        sidebar.appendChild(sideHeader);
        sideHeader.appendChild(header);

        var row = document.createElement("DIV");
        row.setAttribute("class", "row");
        container.appendChild(row);
        row.appendChild(mainCol);
        row.appendChild(sidebar);
    }
}

window.addEventListener('load', function () {
    changeTitle();
    createArticle();
    changeLink();
    changeColor();
    weeklySchedule();
    addSidebar();
});
