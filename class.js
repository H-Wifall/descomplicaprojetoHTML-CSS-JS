class User {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        console.log(this.firstName + " " + this.lastName);
    }
}

const user = new User("Hatus", "Vernaut")
user.getFullName()

//get e settler functions

class person {
    constructor(name){
        this._name = name;
    }
        get name(){
            //...
        }

        set name(newName) {
            //...
        }
        
}