const done = [];
function capitalizeFirst(string) {
  if (!string) return ""; // Handle empty or null strings
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getNoun(num) {
  Papa.parse("/data/nouns.csv", {
    download: true,
    delimiter: ";",
    skipEmptyLines: true,
    complete: function (results) {
      const data = results.data.map(row => ({
        article: row[0],
        german: row[1],
        english: row[2],
        plural: row[3] || null
      }));

      const english = capitalizeFirst(data[num].english);
      const german = capitalizeFirst(data[num].german);
      const article = capitalizeFirst(data[num].article);
      const plural = capitalizeFirst(data[num].plural);

      const first = english.split(", ")[0].trim();

      fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + first)
        .then(res => res.json())
        .then(data => {
          if (data.thumbnail?.source) {
      document.getElementById("img").src = data.thumbnail.source;
    } else {
      document.getElementById("img").style.display = "none";
    }
          
      });

      document.getElementById("germanWord").innerHTML = article + " " + german;
      document.getElementById("english").innerHTML = english;

      if (plural !== null) {
        document.getElementById("plural").innerHTML = "Plural: die " + plural;
      } else {
        document.getElementById("plural").innerHTML = "";
      }
    }
  });
}

// Then use it with async/await:
const e = Math.floor(Math.random() * 1000);
getNoun(e);