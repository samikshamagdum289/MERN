function fetchUserData(userId, callback) {
  console.log("Fetching data for user:", userId);

  setTimeout(() => {
    const user = { id: userId, name: "Samiksha", age: 21 };
    console.log("Data fetched successfully!");
    callback(user);
  }, 2000);
}

function displayUser(userData) {
  console.log("User details:");
  console.log(`ID: ${userData.id}`);
  console.log(`Name: ${userData.name}`);
  console.log(`Age: ${userData.age}`);
}

fetchUserData(101, displayUser);
