(() => {
  interface User {
    addProducts(): void;
    removeProducts(): void;
    addUser(): void;
    removeUser(): void;
  }

  // developer class has to implement methods that not need or not shoudl implement
  class Developer implements User {
    public addProducts(): void {
        
    }
    public removeProducts(): void {

    }
    public addUser(): void {

    }
    public removeUser(): void {

    }
  }

  class Admin implements User {
    public addProducts(): void {
        
    }
    public removeProducts(): void {

    }

    public addUser(): void {

    }

    public removeUser(): void {

    }
  }

})();
