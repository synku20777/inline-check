const form = document.querySelector("#registrationForm");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirmPassword");
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const confirmPasswordError = document.querySelector("#confirmPasswordError");
const successMessage = document.querySelector("#successMessage");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (event) {
  // Dansk: Kører funktionen, når brugeren sender formularen.
  event.preventDefault(); // Dansk: Forhindrer siden i at blive genindlæst, når formularen sendes.

  let isValid = true; // Dansk: Går først ud fra, at alle felter er udfyldt korrekt.

  nameError.textContent = ""; // Dansk: Fjerner en tidligere fejlbesked om navnet.
  emailError.textContent = ""; // Dansk: Fjerner en tidligere fejlbesked om e-mailen.
  passwordError.textContent = ""; // Dansk: Fjerner en tidligere fejlbesked om adgangskoden.
  confirmPasswordError.textContent = ""; // Dansk: Fjerner en tidligere fejlbesked om den gentagne adgangskode.
  successMessage.textContent = ""; // Dansk: Fjerner en tidligere besked om, at formularen blev godkendt.

  if (nameInput.value.trim().length < 2) {
    // Dansk: Kontrollerer, om navnet har færre end to tegn uden mellemrum i starten og slutningen.
    nameError.textContent = "Name must contain at least 2 characters."; // Dansk: Viser en fejl, hvis navnet er for kort.

    isValid = false; // Dansk: Markerer formularen som ugyldig. English: Marks the form as invalid.
  } // Dansk: Afslutter kontrollen af navnet.

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Dansk: Laver et mønster, som bruges til at kontrollere e-mailens format. English: Creates a pattern used to check the email's format.

  if (!emailPattern.test(emailInput.value)) {
    // Dansk: Kontrollerer, om e-mailen ikke passer til mønsteret. English: Checks whether the email does not match the pattern.
    emailError.textContent = "Please enter a valid email."; // Dansk: Viser en fejl, hvis e-mailen ikke er gyldig. English: Shows an error if the email is invalid.

    isValid = false; // Dansk: Markerer formularen som ugyldig. English: Marks the form as invalid.
  } // Dansk: Afslutter kontrollen af e-mailen. English: Ends the email check.

  if (passwordInput.value.length < 8) {
    // Dansk: Kontrollerer, om adgangskoden har færre end otte tegn.
    passwordError.textContent = "Password must contain at least 8 characters."; // Dansk: Viser en fejl, hvis adgangskoden er for kort.

    isValid = false; // Dansk: Markerer formularen som ugyldig. English: Marks the form as invalid.
  } // Dansk: Afslutter kontrollen af adgangskoden. English: Ends the password check.

  if (confirmPasswordInput.value !== passwordInput.value) {
    // Dansk: Kontrollerer, om de to adgangskoder er forskellige.
    confirmPasswordError.textContent = "Passwords do not match."; // Dansk: Viser en fejl, hvis adgangskoderne ikke er ens.

    isValid = false; // Dansk: Markerer formularen som ugyldig. English: Marks the form as invalid.
  } // Dansk: Afslutter kontrollen af de to adgangskoder. English: Ends the check of the two passwords.

  if (isValid) {
    // Dansk: Kontrollerer, om formularen stadig er gyldig efter alle kontroller.
    successMessage.textContent = "Form submitted successfully!"; // Dansk: Viser en besked om, at formularen blev sendt korrekt.
  } // Dansk: Afslutter kontrollen af, om formularen er gyldig. English: Ends the check of whether the form is valid.
}); // Dansk: Afslutter funktionen, der kører, når formularen sendes. English: Ends the function that runs when the form is submitted.
