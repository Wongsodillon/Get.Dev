class User {
    constructor(id, username, password, role, firstName, lastName, email, phone, country, dob, img, address) {
        this.id = id
        this.username = username
        this.password = password
        this.role = role
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.phone = phone
        this.country = country
        this.dob = dob
        this.img = img
        this.address = address
        this.saved = [1,2,5]
        this.applied = [3]
    }
}

class Employee extends User {

}

class Address {
    constructor(...args) {
        this.street1 = args[0]
        this.street2 = args[1]
        this.street3 = args[2]
        this.unit = args[3]
        this.province = args[4]
        this.city = args[5]
        this.zip = args[6]
    }
}

const dummyAddress = new Address("Paper St", "Negra Arroyo Lane", "", 308, "New Mexico", "Albuquerque", 15510)

export let users = []
users.push(new Employee("1", "wongsodillon", "dillon", "employee", "Dillon", "Wongso", "wongsodillon@gmail.com", "08111235216", "Indonesia", "2005-04-08", "assets/GitHub-Mark.png", dummyAddress), 
    new Employee("2", "johndoe", "password", "employee", "John", "Doe", "johndoe@example.com", "123456789", "USA", "1990-01-01", "assets/dummy-profile.webp", dummyAddress),
    new Employee("3", "angelaferr", "angelaferr", "employee", "Feronikha", "", "angela.feronikha@gmail.com", "082282508500", "Indonesia", "2005-02-05", "assets/google_logo.webp", dummyAddress),
    new Employee("4", "janedoe", "password", "employee", "Jane", "Doe", "janedoe@example.com", "987654321", "USA", "1992-05-15","assets/dummy-profile.webp", dummyAddress),
    new Employee("5", "alice", "password", "employee", "Alice", "Smith", "alice@example.com", "555555555", "USA", "1985-12-31", "assets/dummy-profile.webp", dummyAddress),
    new Employee("6", "davidm", "password", "employee", "David", "Miller", "davidm@example.com", "222333444", "USA", "1988-09-20", "assets/dummy-profile.webp", dummyAddress),
    new Employee("7", "emilyc", "password", "employee", "Emily", "Clark", "emilyc@example.com", "555666777", "USA", "1993-07-12", "assets/dummy-profile.webp", dummyAddress),
    new Employee("8", "robertp", "password", "employee", "Robert", "Parker", "robertp@example.com", "888999000", "USA", "1986-04-18", "assets/dummy-profile.webp", dummyAddress),
    new Employee("9", "sophiaw", "password", "employee", "Sophia", "Williams", "sophiaw@example.com", "111222333", "USA", "1991-03-25", "assets/dummy-profile.webp", dummyAddress),
    new Employee("10", "alexg", "password", "employee", "Alex", "Green", "alexg@example.com", "444555666", "USA", "1987-11-09", "assets/dummy-profile.webp", dummyAddress),
    new Employee("11", "laurab", "password", "employee", "Laura", "Brown", "laurab@example.com", "777888999", "USA", "1994-02-28", "assets/dummy-profile.webp", dummyAddress),
    new Employee("12", "matthewj", "password", "employee", "Matthew", "Johnson", "matthewj@example.com", "222555888", "USA", "1989-10-15", "assets/dummy-profile.webp", dummyAddress),
    new Employee("13", "olivial", "password", "employee", "Olivia", "Lee", "olivial@example.com", "333666999", "USA", "1992-08-05", "assets/dummy-profile.webp", dummyAddress),
    new Employee("14", "ethanh", "password", "employee", "Ethan", "Hall", "ethanh@example.com", "666999222", "USA", "1986-06-21", "assets/dummy-profile.webp", dummyAddress),
    new Employee("15", "gracek", "password", "employee", "Grace", "King", "gracek@example.com", "444777000", "USA", "1993-01-10", "assets/dummy-profile.webp", dummyAddress))
 

export const addUser = (...data) => {
    let newUser = new Employee(...data);
    users.push(newUser)
}