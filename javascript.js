function setColor(color) {
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
        alist[i].style.color = color;
        console.log(alist[i]);
        i = i + 1;
    }
}



function light(x) {
    var target = document.querySelector('body');
    if (x.value === 'night') {
        target.style.backgroundColor = 'black';
        target.style.color = 'white';
        x.value = 'day'
        setColor("powderblue");

    } else {
        target.style.backgroundColor = 'white';
        target.style.color = 'black';
        x.value = 'night'

        setColor("blue");

    }

}