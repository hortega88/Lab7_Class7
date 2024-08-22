function myfunctionadd() {
  let userChoice;
  let contacts = [
    {
      name: "Maxwell Wright",
      phone: "(0191) 719 6495",
      email: "agent1.@cctb.ca",
    },
    {
      name: "Tom MacDonalds",
      phone: "(0191) 719 6495",
      email: "agent2.@cctb.ca",
    },
    {
      name: "Helen Richards",
      phone: "(0191) 0800 1111",
      email: "agent3.@cctb.ca",
    },
  ];

  do {
    userChoice = prompt("Choose an option: first, last, new, or quit");
    if (userChoice === "first") {
      console.log(
        "First contact: " +
          contacts[0].name +
          " / " +
          contacts[0].phone +
          " / " +
          contacts[0].email
      );
      alert(
        `First contact: ${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`
      );
    } else if (userChoice === "last") {
      console.log(
        "Last contact: " +
          contacts[contacts.length - 1].name +
          " / " +
          contacts[contacts.length - 1].phone +
          " / " +
          contacts[contacts.length - 1].email
      );
      alert(
        `Last contact: ${contacts[contacts.length - 1].name} / ${
          contacts[contacts.length - 1].phone
        } / ${contacts[contacts.length - 1].email}`
      );
    } else if (userChoice === "new") {
      let newName = prompt("Enter name:");
      let newPhone = prompt("Enter phone number:");
      let newEmail = prompt("Enter email address:");

      // Validate input
      if (!newName || isNaN(newPhone) || !newEmail.includes("@")) {
        alert("Invalid input. Please try again.");
        continue;
      }

      // Add new contact
      contacts.push({
        name: newName,
        phone: newPhone,
        email: newEmail,
      });
      console.log(
        "New contact added: " + newName + " " + newPhone + " " + newEmail
      );
      alert(`Contact added: ${newName} / ${newPhone} / ${newEmail}`);
    } else if (userChoice === "quit") {
      break;
    }
  } while (true);
}
