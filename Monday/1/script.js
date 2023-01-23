"use strict";

// 2
    alert("Pushak");
// 

// 3

    let one = 27;
    let two = "five";

    alert(one);
    alert(two);

    two = one;
    alert(one);
    alert(two);

// /

// 4
    let real;
    const obj = {
        name: "Ivan",
        age: 27,
        front: true,
        real,
        never: null
    }

    console.log(obj);

// /

// 5

    let isAdult = confirm("How old are you?");
    alert(isAdult);

// /

// 6

    let name = "Stepan";
    let surname = "Petrenko";
    let group = 29;
    let age = "09/02/2000";
    let isMarried = false;

    console.log(group, isMarried, name, surname, age);

    let emptyJust = null;
    let justEmpty;
    console.log(emptyJust); // прочитав що "NULL" & "UNDEFINED" це одне і теж і не можу ніяк в консоль вивести так щоб саме тип був null...
    console.log(typeof(justEmpty));

// /

// 7

    let login = prompt("Your login..?");
    let email = prompt("Your email..?");
    let pass = prompt("Your password..?");

    alert(`Dear ${login}, your email is ${email}, your password is ${pass}`);

// /

// 8

    let hour = prompt("How many hours?");
    alert(hour * 3600);

    let days = prompt("Days?");
    alert(days * 86400);

    let mounth = prompt("Mounth?");
    alert(mounth * 2592000);

// /