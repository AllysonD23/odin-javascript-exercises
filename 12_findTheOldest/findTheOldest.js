const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const findTheOldest = function(people) {

    function age(death, birth) {
        return death - birth;
      }  

    for (i = 0; i < people.length; i++) {
        let death;
        //console.log(people[i].hasOwnProperty("yearOfDeath"));
        // Calculate age of each person
        if (people[i].hasOwnProperty("yearOfDeath")) {
            death = people[i].yearOfDeath;

        } else {
            const d = new Date();
            death = d.getFullYear();
        }
        //console.log(death)
    
    let birth = people[i].yearOfBirth;
    let age = death - birth;
    console.log(age)
    
    // Add age value to the person 
    people[i].age = age;

    }

    // Find array item (person) with highest age
    let oldestAge = people[0].age;
    let oldestPerson = people[0];
    for (i = 1; i < people.length; i++) {
        if (people[i].age > oldestAge) {
            oldestAge = people[i].age;
            oldestPerson = people[i];
            return people = people[i];
        } else {
            return people = people[0];
        }
    }

};

//console.log(findTheOldest(people).name);

// Do not edit below this line
module.exports = findTheOldest;
