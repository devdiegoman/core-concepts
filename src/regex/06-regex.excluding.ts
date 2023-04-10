(() => {

    let string = "Exception 0xF89F";
    // You can use ^ to exclude a character
    let regex = /0x[0-9A-F][0-9AF]/;

    console.log(regex.exec(string));
})();