const form = document.querySelector("#registrationForm"); // Dansk: Finder formularen på siden og gemmer den i variablen form. English: Finds the form on the page and stores it in the form variable.

const nameInput = document.querySelector("#name"); // Dansk: Finder feltet, hvor brugeren skriver sit navn. English: Finds the field where the user enters their name.
const emailInput = document.querySelector("#email"); // Dansk: Finder feltet, hvor brugeren skriver sin e-mail. English: Finds the field where the user enters their email.
const passwordInput = document.querySelector("#password"); // Dansk: Finder feltet, hvor brugeren skriver sin adgangskode. English: Finds the field where the user enters their password.
const confirmPasswordInput = document.querySelector("#confirmPassword"); // Dansk: Finder feltet, hvor brugeren gentager sin adgangskode. English: Finds the field where the user repeats their password.

const nameError = document.querySelector("#nameError"); // Dansk: Finder området, hvor fejl om navnet skal vises. English: Finds the area where name errors will be shown.
const emailError = document.querySelector("#emailError"); // Dansk: Finder området, hvor fejl om e-mailen skal vises. English: Finds the area where email errors will be shown.
const passwordError = document.querySelector("#passwordError"); // Dansk: Finder området, hvor fejl om adgangskoden skal vises. English: Finds the area where password errors will be shown.
const confirmPasswordError = document.querySelector("#confirmPasswordError"); // Dansk: Finder området, hvor fejl om den gentagne adgangskode skal vises. English: Finds the area where repeated-password errors will be shown.

const successMessage = document.querySelector("#successMessage"); // Dansk: Finder området, hvor beskeden om en godkendt formular skal vises. English: Finds the area where the successful-form message will be shown.
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Dansk: Laver et mønster, som bruges til at kontrollere formatet på en e-mail. English: Creates a pattern used to check an email's format.

form.addEventListener("submit", function (event) {
  // Dansk: Kører funktionen, når brugeren sender formularen. English: Runs the function when the user submits the form.
  event.preventDefault(); // Dansk: Forhindrer siden i at blive genindlæst, når formularen sendes. English: Prevents the page from reloading when the form is submitted.

  let isValid = true; // Dansk: Går først ud fra, at alle felter er udfyldt korrekt. English: Initially assumes that all fields are filled in correctly.

  nameError.textContent = ""; // Dansk: Fjerner en tidligere fejlbesked om navnet. English: Removes any previous name error message.
  emailError.textContent = ""; // Dansk: Fjerner en tidligere fejlbesked om e-mailen. English: Removes any previous email error message.
  passwordError.textContent = ""; // Dansk: Fjerner en tidligere fejlbesked om adgangskoden. English: Removes any previous password error message.
  confirmPasswordError.textContent = ""; // Dansk: Fjerner en tidligere fejlbesked om den gentagne adgangskode. English: Removes any previous repeated-password error message.
  successMessage.textContent = ""; // Dansk: Fjerner en tidligere besked om, at formularen blev godkendt. English: Removes any previous successful-form message.

  if (nameInput.value.trim().length < 2) {
    // Dansk: Kontrollerer, om navnet har færre end to tegn uden mellemrum i starten og slutningen. English: Checks whether the name has fewer than two characters after removing spaces at the beginning and end.
    nameError.textContent = "Name must contain at least 2 characters."; // Dansk: Viser en fejl, hvis navnet er for kort. English: Shows an error if the name is too short.

    isValid = false; // Dansk: Markerer formularen som ugyldig. English: Marks the form as invalid.
  } // Dansk: Afslutter kontrollen af navnet. English: Ends the name check.

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Dansk: Laver et mønster, som bruges til at kontrollere e-mailens format. English: Creates a pattern used to check the email's format.

  if (!emailPattern.test(emailInput.value)) {
    // Dansk: Kontrollerer, om e-mailen ikke passer til mønsteret. English: Checks whether the email does not match the pattern.
    emailError.textContent = "Please enter a valid email."; // Dansk: Viser en fejl, hvis e-mailen ikke er gyldig. English: Shows an error if the email is invalid.

    isValid = false; // Dansk: Markerer formularen som ugyldig. English: Marks the form as invalid.
  } // Dansk: Afslutter kontrollen af e-mailen. English: Ends the email check.

  if (passwordInput.value.length < 8) {
    // Dansk: Kontrollerer, om adgangskoden har færre end otte tegn. English: Checks whether the password has fewer than eight characters.
    passwordError.textContent = "Password must contain at least 8 characters."; // Dansk: Viser en fejl, hvis adgangskoden er for kort. English: Shows an error if the password is too short.

    isValid = false; // Dansk: Markerer formularen som ugyldig. English: Marks the form as invalid.
  } // Dansk: Afslutter kontrollen af adgangskoden. English: Ends the password check.

  if (confirmPasswordInput.value !== passwordInput.value) {
    // Dansk: Kontrollerer, om de to adgangskoder er forskellige. English: Checks whether the two passwords are different.
    confirmPasswordError.textContent = "Passwords do not match."; // Dansk: Viser en fejl, hvis adgangskoderne ikke er ens. English: Shows an error if the passwords do not match.

    isValid = false; // Dansk: Markerer formularen som ugyldig. English: Marks the form as invalid.
  } // Dansk: Afslutter kontrollen af de to adgangskoder. English: Ends the check of the two passwords.

  if (isValid) {
    // Dansk: Kontrollerer, om formularen stadig er gyldig efter alle kontroller. English: Checks whether the form is still valid after all checks.
    successMessage.textContent = "Form submitted successfully!"; // Dansk: Viser en besked om, at formularen blev sendt korrekt. English: Shows a message that the form was submitted successfully.
  } // Dansk: Afslutter kontrollen af, om formularen er gyldig. English: Ends the check of whether the form is valid.
}); // Dansk: Afslutter funktionen, der kører, når formularen sendes. English: Ends the function that runs when the form is submitted.
