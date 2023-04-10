( () =>{
    // Wildcard is represented by . 
    // It means any character after a given value
    
    let regex = /h.t/gm;
    let regex2 = /h../;
    
    const string = 'h \s hit hot h\t h\nt' 

    console.log(regex.exec(string));
})();

