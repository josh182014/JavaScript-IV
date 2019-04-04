// CODE here for your Lambda Classes
//Classes
//Main Person
class Person{ 
    constructor (mainAttributes) {
        this.name = mainAttributes.name;
        this.age = mainAttributes.age;
        this.location = mainAttributes.location;
        this.gender = mainAttributes.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
};

//Instructor
class Instructor extends Person{ 
    constructor (mainAttributes) {
        super(mainAttributes);
        this.specialty = mainAttributes.specialty;
        this.favLanguage = mainAttributes.favLanguage;
        this.catchPhrase = mainAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student,subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
};

//Student
class Student extends Person { 
    constructor (mainAttributes) {
        super(mainAttributes);
        this.previousBackground = mainAttributes.previousBackground;
        this.className = mainAttributes.className;
        this.favSubjects = mainAttributes.favSubjects;
    }
    listsSubjects() {
        return this.favSubjects;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
};

//PM
class PM extends Instructor { 
    constructor (instructorAttributes) {
        super(instructorAttributes);
        this.gradClassName = instructorAttributes.gradClassName;
        this.favInstructor = instructorAttributes.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student,subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
};


//Objects
//Person
const george = new Person({
    name: 'George',
    age: 98,
    location: 'Hawaii',
    gender: 'M'
});
//Instructor
const daryl = new Instructor({
    name: 'Daryl',
    age: 40,
    location: 'TX',
    gender: 'M',
    specialty: 'Teaching',
    favLanguage: 'Python',
    catchPhrase: 'Noice!'
});
//Student
const dave = new Student({
    name: 'Dave',
    age: 27,
    location: 'CA',
    gender: 'M',
    previousBackground: 'Python',
    className: 'Web19',
    favSubjects: ['python','ruby']
});

//PM
const smith = new PM({
    name: 'Smith',
    age: 39,
    location: 'NY',
    gender: 'M',
    gradClassName: 'Web12',
    favInstructor: 'Instructor Josh',
});


//Logs
console.log(george.speak());
console.log(daryl.demo('Python'));
console.log(daryl.grade(dave,'Python'));
console.log(dave.listsSubjects());
console.log(dave.PRAssignment('JavaScript'));
console.log(dave.sprintChallenge('CSS'));
console.log(smith.debugsCode(dave,'Ruby'));