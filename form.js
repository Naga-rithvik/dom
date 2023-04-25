// get user input

const form= document.getElementById("my-form");

form.addEventListener('submit',StoreuserData);

function StoreuserData(e){
    // get user input
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;

//localStorage.setItem('name',name);
//localStorage.setItem('email',email);
//const obj={
    //names:name,
    //emails:email,
//};
//const userJSON = JSON.stringify(obj);

//localStorage.setItem('obj',userJSON);
//console.log(localStorage);

  e.preventDefault();

  // retrieve existing user data from local storage
  let existingUserData = localStorage.getItem('userData');
  if (existingUserData === null) {
    // if there is no existing data, create an empty array
    existingUserData = [];
  } else {
    // if there is existing data, parse it from JSON to array
    existingUserData = JSON.parse(existingUserData);
  }

  // add new user data to the array
  const newUser = {
    name: name,
    email: email
  };
  existingUserData.push(newUser);

  // store the updated user data in local storage
  localStorage.setItem('userData', JSON.stringify(existingUserData));

  // display a success message to the user
  alert('User data stored successfully!');
  showuseronscreen(newUser);
}

function showuseronscreen(newUser){
    const element=document.createElement('li');
    element.textContent=newUser.name+'-'+newUser.email;
    form.appendChild(element);

}


