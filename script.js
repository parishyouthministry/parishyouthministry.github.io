function validateForm() {
    let name = document.forms["form"]["Name"].value;
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }

    let nickname = document.forms["form"]["Nickname"].value;
    if (nickname == "") {
      alert("Nickname must be filled out");
      return false;
    }

    let dob = document.forms["form"]["DOB"].value;
    if (dob == "") {
      alert("Date of Birth must be filled out");
      return false;
    }

    let email = document.forms["form"]["Email"].value;
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }

    let facebook = document.forms["form"]["Facebook"].value;
    if (facebook == "") {
      alert("Facebook must be filled out");
      return false;
    }

    let gender = document.forms["form"]["Gender"].value;
    if (gender == "") {
      alert("Gender must be filled out");
      return false;
    }

    let age = document.forms["form"]["Age"].value;
    if (age == "") {
      alert("Age must be filled out");
      return false;
    }

    let address = document.forms["form"]["Address"].value;
    if (address == "") {
      alert("Home Address must be filled out");
      return false;
    }

    let cnum = document.forms["form"]["Contact Number"].value;
    if (cnum == "") {
      alert("Contact Number must be filled out");
      return false;
    }

    let cper = document.forms["form"]["Contact Person"].value;
    if (cper == "") {
      alert("Contact Person must be filled out");
      return false;
    }

    let ecnum = document.forms["form"]["Emergency Contact Number"].value;
    if (ecnum == "") {
      alert("Emergency Contact Number must be filled out");
      return false;
    }

    alert("Form submitted successfully!");
    return true;
  }