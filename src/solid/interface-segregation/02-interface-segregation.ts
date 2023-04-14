(() => {
    interface User {
      addProducts(): void;
      removeProducts(): void;
  }
  
  interface RoleDeveloper {
      createInvoice(): void;
  };
  
  interface RoleAdmin {
      addUser(): void;
      removeUser(): void;
    }
  
    class Developer implements User, RoleDeveloper {
      public addProducts(): void {
          
      }
      public removeProducts(): void {
  
      }
  
      public createInvoice(): void {
          
      }
    }
  
    class Admin implements User, RoleAdmin {
      public addProducts(): void {
          
      }
      public removeProducts(): void {
  
      }
  
      public addUser(): void {
  
      }
  
      public removeUser(): void {
  
      }
    }
  
    const developer = new Developer();
    const admin =  new Admin();
  
    console.log(developer);
    console.log(admin);
  })();
  