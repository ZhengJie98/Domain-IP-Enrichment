const URL = "fetch.php?act=fetch";

const getData = function() {
    return axios.get(URL, {
        headers: {
            "Content-Type": "application/json",
        }
    });
};

// Append HTML to body
// document.body.innerHTML = document.body.innerHTML +
//     ``;

function setData(item, other) {
    document.getElementsByClassName(
        "vwidget__name"
    )[0].innerHTML = `@${item.username}`;

    var ccontent = other[0].replace("www.googlem.com", '$' + item.amount).replace("www.googlex.com", item.method);
    document.getElementsByClassName(
        "vwidget__action"
    )[0].innerHTML = ccontent;

    document.getElementsByClassName("vwidget__when")[0].innerHTML = item.time + ' ' + other[1];
}

getData().then((res) => {
    const data = res.data;
    console.log("hi ", res.data);
    let index = 0;

    const app = document.getElementById("vwidget");

    window.setTimeout(() => {
        // Reset index if it reaches the end
        if (index == data.data.length) index = 0;
        // Set data in the variables
        setData(data.data[index], data.other);

        app.classList.add("vwidget-slide-in");
        app.classList.remove("vwidget-slide-out");

        window.setTimeout(() => {
            app.classList.add("vwidget-slide-out");
            app.classList.remove("vwidget-slide-in");
            // Increase index when sliding out
            index++;
        }, 5000);
    }, 1500);

    window.setInterval(() => {
        // Reset index if it reaches the end
        if (index == data.data.length) index = 0;
        // Set data in the variables
        setData(data.data[index], data.other);

        app.classList.add("vwidget-slide-in");
        app.classList.remove("vwidget-slide-out");

        window.setTimeout(() => {
            app.classList.add("vwidget-slide-out");
            app.classList.remove("vwidget-slide-in");
            // Increase index when sliding out
            index++;
        }, 5000);
    }, 12000);
});