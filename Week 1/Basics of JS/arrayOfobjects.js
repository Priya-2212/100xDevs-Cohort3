function filterAdultUsers(users) {
    return users.filter(user => user.age > 18);
  }
  
 
  const users = [
    { name: "Anjali", age: 17 },
    { name: "Aman", age: 20 },
    { name: "Nikki", age: 18 },
    { name: "Rohan", age: 25 }
  ];
  
  const adultUsers = filterAdultUsers(users);
  console.log(adultUsers);

  