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
    }
}

class Employee extends User {
    constructor(id, username, password, role, firstName, lastName, email, phone, country, dob, img, address, profession) {
        super(id, username, password, role, firstName, lastName, email, phone, country, dob, img, address)
        const dummyDescription = `Hello my name is ${firstName} and I work as a ${profession} in ${address.city}, ${country}, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan fermentum risus, ac gravida mauris interdum in. Nullam eget felis fringilla, vulputate sapien nec, consectetur orci. Sed auctor, nisi a ultrices consectetur, libero lectus pretium diam, eget dignissim neque nisi vitae purus. Aenean hendrerit ex eu tellus iaculis, at luctus nunc aliquet. Integer interdum consequat vestibulum. Cras convallis magna et mauris lobortis, et varius sapien consequat. In sed dapibus neque. Vivamus a sem nec erat fermentum rhoncus.`
        this.about = dummyDescription;
        this.profession = profession
        this.saved = []
        this.applied = []
    }
}

class Employer extends User {
    constructor(id, username, password, role, firstName, lastName, email, phone, country, dob, img, address, company) {
        super(id, username, password, role, firstName, lastName, email, phone, country, dob, img, address)
        this.company = company
    }
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

const dummyAddress = new Address("Paper St", "Negra Arroyo Lane", "", 308, "New Mexico", "Jakarta", 15510)
export let users = []
users.push(new Employee("1", "wongsodillon", "dillon", "employee", "Dillon", "Wongso", "wongsodillon@gmail.com", "08111235216", "Indonesia", "2005-04-08", "assets/GitHub-Mark.png", dummyAddress, "Software Engineer"), 
    new Employee("2", "johndoe", "password", "employee", "John", "Doe", "johndoe@example.com", "123456789", "USA", "1990-01-01", "assets/dummy-profile.webp", dummyAddress, "Fullstack Developer"),
    new Employee("3", "angelaferr", "angelaferr", "employee", "Feronikha", "", "angela.feronikha@gmail.com", "082282508500", "Indonesia", "2005-02-05", "assets/google_logo.webp", dummyAddress, "Data Scientist"),
    new Employee("4", "janedoe", "password", "employee", "Jane", "Doe", "janedoe@example.com", "987654321", "USA", "1992-05-15","assets/dummy-profile.webp", dummyAddress, "Data Warehousing"),
    new Employer("5", "employer", "employer", "employer", "Your", "Employer", "employer@email.com", "1000000", "Indonesia", "2000-02-29", "assets/jobs/openai.jpg", dummyAddress, "OpenAI"),
    new Employee("6", "mclaurin", "password", "employee", "Mclaurin", "Series", "mclaurin@example.com", "987654321", "USA", "1992-05-15","assets/dummy-profile.webp", dummyAddress, "Devops Engineer"),
    new Employer("7", "billgates", "password", "employer", "Bill", "Gates", "billgates@example.com", "123456789", "USA", "1972-05-23","assets/jobs/microsoft.jpeg", dummyAddress, "Microsoft"),
    new Employee("8", "arlinlutfi", "password", "employee", "Arlin Lutfi", "Widarma", "arlin@example.com", "987654321", "Indonesia", "2005-01-27","assets/dummy-profile.webp", dummyAddress, "C Developer"),
    new Employee("9", "bellaapries", "password", "employee", "Bella", "Apries", "bella.apries@binus.ac.id", "987654321", "Indonesia", "2004-04-15","assets/dummy-profile.webp", dummyAddress, "Mobile Developer"),
    new Employee("10", "edrickgivian", "password", "employee", "Edrick Givian", "Hulbert", "edrick.hulbert@binus.ac.id", "987654321", "Indonesia", "2005-01-14","assets/dummy-profile.webp", dummyAddress, "Machine Learning Engineer"))
    

export const addUser = (...data) => {
    let newUser = new Employee(...data);
    users.push(newUser)
}