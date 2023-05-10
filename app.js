async function hashFlag(flagValue) {
    const msgUint8 = new TextEncoder().encode(flagValue);                           
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }

  async function checkFlag(questionNum) {
    const correctAnswers = [
      "5a20309f27223274e52ca08819fd735f5f56bb477f723795aa68930b47689e9c",
      "6acf4871ca7ef84ea72bf0331da49ad11834540be7acdd80eb1c7ef05dbf13c5"
    ];
  
    const flagInputs = document.querySelectorAll(".form-control");
    const flagValue = flagInputs[questionNum - 1].value;
    const hashedValue = await hashFlag(flagValue);
  
    if (hashedValue === correctAnswers[questionNum - 1]) {
      alert(`Congratulations! You have solved this question`);
    } else {
      alert("Sorry, that is not the correct flag. Please try again.");
    }
  }
  
  
  // Code to show hint when button is clicked
  document.getElementById("hint1-1").onclick = function() {
    alert("Hint 1: No it's not the faucet")
  };
  document.getElementById("hint1-2").onclick = function() {
    alert("Hint 2: Check the hex values")
  };
  document.getElementById("hint1-3").onclick = function() {
    alert("Hint 3: Don't use a color picker")
  };

// Code to show hint when button is clicked
document.getElementById("hint2-1").onclick = function() {
    alert("Hint 1: Have you opened the tar file?")
    };
    document.getElementById("hint2-2").onclick = function() {
    alert("Hint 2: Clicking it multiple times would help but would take a lot of time")
    };
    document.getElementById("hint2-3").onclick = function() {
    alert("Hint 3: Script your way and open the tar file 1000 times")
    };
    
function downloadFile(url) {
    const filename = url.substring(url.lastIndexOf("/") + 1);
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
      });
  }
  