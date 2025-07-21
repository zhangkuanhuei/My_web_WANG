function predictHeight() {
    const father = parseFloat(document.getElementById("father").value);
    const mother = parseFloat(document.getElementById("mother").value);
    const gender = document.querySelector('input[name="gender"]:checked').value;
  
    if (isNaN(father) || isNaN(mother) || father <= 0 || mother <= 0) {
      document.getElementById("output").innerText = "Please enter valid heights.";
      return;
    }
  
    let predicted;
    if (gender === "boy") {
      predicted = (father + mother + 13) / 2;
    } else {
      predicted = (father + mother - 13) / 2;
    }
  
    const lower = (predicted - 5).toFixed(1);
    const upper = (predicted + 5).toFixed(1);
    document.getElementById("output").innerText = `Estimated adult height range: ${lower} cm – ${upper} cm`;
  }
  