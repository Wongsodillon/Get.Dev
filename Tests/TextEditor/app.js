let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");
let submitButton = document.getElementById("submit");

// List of fontlist
let fontList = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "cursive",
];

// Initial Settings
const initializer = () => {
  // Function calls for highlighting buttons
  highlighter(alignButtons, true);
  highlighter(spacingButtons, true);
  highlighter(formatButtons, false);
  highlighter(scriptButtons, true);

  // Font size allows only up to 7
  for (let i = 1; i <= 7; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    fontSizeRef.appendChild(option);
  }

  // Default size
  fontSizeRef.value = 3;
};

// Main logic
const modifyText = (command, value = null) => {
  // Executing command on selected text
  document.execCommand(command, false, value);
};

// For basic operations that don't need a value parameter
optionsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modifyText(button.id);
  });
});

// Options that require a value parameter (e.g., colors, fonts)
advancedOptionButton.forEach((button) => {
  button.addEventListener("change", () => {
    modifyText(button.id, button.value);
  });
});

// Highlight clicked button
const highlighter = (className, needsRemoval) => {
  className.forEach((button) => {
    button.addEventListener("click", () => {
      // NeedsRemoval = true means only one button should be highlighted and others would be normal
      if (needsRemoval) {
        let alreadyActive = button.classList.contains("active");

        // Remove highlight from other buttons
        highlighterRemover(className);

        if (!alreadyActive) {
          // Highlight clicked button
          button.classList.add("active");
        }
      } else {
        // If other buttons can be highlighted
        button.classList.toggle("active");
      }
    });
  });
};

const highlighterRemover = (className) => {
  className.forEach((button) => {
    button.classList.remove("active");
  });
};

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey || event.metaKey) {
    // Key combinations with Ctrl (Windows/Linux) or Command (Mac)

    // Bold - Ctrl + B
    if (event.key === "b") {
      event.preventDefault();
      modifyText("bold");
      shortcutHandler("bold");
    }

    // Italic - Ctrl + I
    if (event.key === "i") {
      event.preventDefault();
      modifyText("italic");
      shortcutHandler("italic");
    }

    if (event.key === 'u') {
      event.preventDefault();
      modifyText("underline");
      shortcutHandler("underline");
    }
  }
});

// Function to highlight a button by adding the "active" class
const shortcutHandler = (buttonId) => {
  const button = document.getElementById(buttonId);
  if (!button.classList.contains("active")) {
    button.classList.add("active");
  }
  else {
    button.classList.remove("active")
  }
};

submitButton.addEventListener("click", () => {
  console.log(writingArea.textContent);
});

window.onload = initializer;