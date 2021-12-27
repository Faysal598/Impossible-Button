const person = {
    firstName: 'John',
    lastName: 'Doe',
    nickname: 'JohnD',
    fullName(){
        const {firstName,lastName,nickname} = this;
        return (`${firstName} ${lastName} AKA ${nickname}`);
    },
    printBio(){
        const fullName = this.fullName();
        console.log(`${fullName} is a person`);
    }
}