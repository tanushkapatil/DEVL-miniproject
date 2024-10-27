// Navigation Buttons
document.getElementById("getTestButton").addEventListener("click", function () {
  navigateToPage("testPage");
});

// Back Button (Optional)
document.getElementById("backButton")?.addEventListener("click", function () {
  navigateToPage("welcomePage");
});

// Form Submission
document.getElementById("potabilityForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Gather data from the form
  const formData = {
      ph: parseFloat(document.getElementById("ph").value),
      hardness: parseFloat(document.getElementById("hardness").value),
      tds: parseFloat(document.getElementById("tds").value),
      chloramines: parseFloat(document.getElementById("chloramines").value),
      sulfate: parseFloat(document.getElementById("sulfate").value),
      conductivity: parseFloat(document.getElementById("conductivity").value),
      organicCarbon: parseFloat(document.getElementById("organicCarbon").value),
      thms: parseFloat(document.getElementById("thms").value),
      turbidity: parseFloat(document.getElementById("turbidity").value),
  };

  console.log("Form Data:", formData);

  // Placeholder for Potability Calculation
  // You can integrate your machine learning model or server-side logic here

  // For demonstration, we'll mock the result
  const isPotable = mockPotabilityCheck(formData);

  displayResult(isPotable);
});

// Function to Navigate Between Pages
function navigateToPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach(page => page.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

// Mock Potability Check Function
function mockPotabilityCheck(data) {
  // Simple mock logic: If pH is between 6.5 and 8.5, consider potable
  if (data.ph >= 6.5 && data.ph <= 8.5) {
      return true;
  }
  return false;
}

// Display Result
function displayResult(isPotable) {
  const resultPage = document.getElementById("resultPage");
  const resultMessage = document.getElementById("resultMessage");

  if (isPotable) {
      resultMessage.textContent = "Great! Your water is potable.";
      resultMessage.style.color = "#32CD32"; // LimeGreen
  } else {
      resultMessage.textContent = "Alert! Your water is not potable.";
      resultMessage.style.color = "#FF4500"; // OrangeRed
  }

  navigateToPage("resultPage");
}
