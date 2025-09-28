function validateForm() {
  const form = document.getElementById("contact-form");
  var error = false;
  var name = form["name"].value;
  if(name == '') {
    form["name"].style.background = '#FFBBBB';
    error = true;
  }
  var company = form["company"].value;
  if(company == '') {
    form["company"].style.background = '#FFBBBB';
    error = true;
  }
  var email = form["email"].value.trim().toLowerCase();
  if(email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) == null) {
    form["email"].style.background = '#FFBBBB';
    error = true;
  }
  var interest = form["category"].value;
    if(interest == '' || (interest != 'Consumer' && interest != 'Generator' && interest != 'Installer' && interest != 'Other')) {
    form["category"].style.background = '#FFBBBB';
    error = true;
  }
  var message = form["message"].value;
  if(message == '') {
    form["message"].style.background = '#FFBBBB';
    error = true;
  }
  var occupation = form["occupation"].value;
  if(occupation != '') {
    error = true;
  }

  if(error) return false;

  Array.from(form.elements).forEach(el => el.disabled = true);

  //TODO: add token for captcha
  let body = JSON.stringify({
    name: name,
    company: company,
    email: email,
    interest: interest,
    message: message
  });
/*
//TODO: 
  (async () => {
    try {
      const response = await fetch('./webform/', {
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST',
        body: body
      })
      if (response.status !== 200) {
        // Process connection error

      } else {
        // Form submitted successfully

      }
    } catch (e) {
        // Process connection error

    }
  })()
*/

  Array.from(form.elements).forEach(el => el.disabled = false);
  window.location.href = "signup-success.html";
}

function clearError(field) {
  field.style.background = '#90909014';
}

function clearAllErrors() {
    const form = document.getElementById("contact-form");
    form["name"].style.background = '#90909014';
    form["company"].style.background = '#90909014';
    form["email"].style.background = '#90909014';
    form["category"].style.background = '#90909014';
    form["message"].style.background = '#90909014';
}
