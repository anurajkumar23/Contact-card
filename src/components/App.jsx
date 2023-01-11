import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function CreateCard(contact){
  return(
    <Card 
    key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  )
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img ="https://media.licdn.com/dms/image/D5603AQFHCT_8j_Y-JQ/profile-displayphoto-shrink_800_800/0/1670044850784?e=1678924800&v=beta&t=RV_SlGvxb4bQFCTbEudFwYG3_27IH0kLYLaVlAsiJ1s" />
     
     {contacts.map(CreateCard)}
     
    </div>
  );
}

export default App;
