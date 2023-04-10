(() => {
    let regex = /[\-.]/; // to exclude - hypen
    let string2 = "Exception 0xF89F";
    let regex2 = /0X[0-9A-F][0-9A-F]/; // to get any exception that starts with 0x and is followed by a number between 0-9 and a letter between A-F

    console.log(regex2.exec(string2));
})();