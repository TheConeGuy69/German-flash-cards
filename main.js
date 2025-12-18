async function fetchCsvData() {
  // Replace with your actual GitHub raw CSV URL
  const rawUrl = 'https://raw.githubusercontent.com/TheConeGuy69/German-flash-cards/refs/heads/main/nouns.csv';

  try {
    const response = await fetch(rawUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Get the response as plain text
    const text = await response.text();

    document.getElementById("germanWord").textContent = text;
    console.log("CSV Data:", text);

    // You can now parse the text (e.g., with a library or custom function)
    // processData(text);

  } catch (error) {
    console.error("Could not fetch the CSV file:", error);
  }
}

// Call the function to fetch the data
fetchCsvData();