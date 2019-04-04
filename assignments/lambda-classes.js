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
        this.favSubjects.forEach(function(element) {
            console.log(element);
          });
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
const rick = new Person({
    name: 'Rick',
    age: 45,
    location: 'King County',
    gender: 'M'
});

const michonne = new Person({
    name: 'Michonne',
    age: 34,
    location: 'Unknown',
    gender: 'F'
});
//Instructor
const daryl = new Instructor({
    name: 'Daryl',
    age: 46,
    location: 'Atlanta',
    gender: 'M',
    specialty: 'Teaching',
    favLanguage: 'Python',
    catchPhrase: 'Noice!'
});

const maggie = new Instructor({
    name: 'Maggie',
    age: 31,
    location: 'Atlanta',
    gender: 'F',
    specialty: 'Teaching',
    favLanguage: 'Python',
    catchPhrase: 'Noice!'
});
//Student
const carl = new Student({
    name: 'Carl',
    age: 16,
    location: 'King County',
    gender: 'M',
    previousBackground: 'Python',
    className: 'Web19',
    favSubjects: ['python','ruby']
});

const judith = new Student({
    name: 'Judith',
    age: 9,
    location: 'King County',
    gender: 'F',
    previousBackground: 'Python',
    className: 'Web19',
    favSubjects: ['python','ruby']
});

//PM
const carol = new PM({
    name: 'Carol',
    age: 48,
    location: 'Atlanta',
    gender: 'F',
    gradClassName: 'Web12',
    favInstructor: 'Daryl',
});

const glenn = new PM({
    name: 'Glenn',
    age: 27,
    location: 'Atlanta',
    gender: 'M',
    gradClassName: 'Web12',
    favInstructor: 'Maggie',
});

//Tests
console.log(rick.speak());
console.log(michonne.name);
console.log(michonne.gender)
console.log(daryl.demo('Python'));
console.log(maggie.grade(carl,'Python'));
carl.listsSubjects();
console.log(carl.PRAssignment('JavaScript'));
console.log(judith.sprintChallenge('CSS'));
console.log(carol.debugsCode(carl,'Ruby'));
console.log(glenn.favInstructor);