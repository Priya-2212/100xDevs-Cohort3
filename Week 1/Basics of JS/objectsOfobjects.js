function filterAdultMales(users) {
    return users.filter(user => user.age > 18 && user.gender === 'male');
  }
  
  
  const users = [
    { name: "Riya", age: 17, gender: "female" },
    { name: "Vishal", age: 20, gender: "male" },
    { name: "Sanam", age: 18, gender: "male" },
    { name: "Raj", age: 25, gender: "male" },
    { name: "Priya", age: 22, gender: "female" }
  ];
  
  const adultMales = filterAdultMales(users);
  console.log(adultMales);
  
  