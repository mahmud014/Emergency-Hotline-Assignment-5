function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

let heartNumber = 0;
const hearCount = getElement("heart-count");
const hearBtns = document.getElementsByClassName("heartBtn");

for (let heart of hearBtns) {
  heart.onclick = function () {
    heartNumber++;
    hearCount.innerText = heartNumber;
  };
}

let coinNumber = 100;
const coinCount = getElement("coin-count");
// Emergency Btn
document.getElementById("emergencyBtn").addEventListener("click", function () {
  if (coinNumber < 20) {
    alert("📞 Not enough coins. You need at least 20 coins to make a call.");
    return;
  }
  alert("📞 Calling National Emergency Service 999...");

  coinNumber -= 20;
  coinCount.innerText = coinNumber;

  // call history

  const CallHistory = getElement("call-history");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `
<div
              class="flex justify-between items-center mt-2 p-2 bg-gray-100 rounded-lg"
            >
              <div>
                <h1 class="text-[18px] font-semibold">Fire Service Number</h1>
                <p class="text-[18px] font-semibold">999</p>
              </div>
              <div>${new Date().toLocaleTimeString()}</div>
            </div>

`;

  CallHistory.appendChild(newHistory);
});

// Police btn
document.getElementById("policeBtn").addEventListener("click", function () {
  if (coinNumber < 20) {
    alert("📞 Not enough coins. You need at least 20 coins to make a call.");
    return;
  }
  alert("📞 Calling Police Helpline 999...");

  coinNumber -= 20;
  coinCount.innerText = coinNumber;
  // call history

  const CallHistory = getElement("call-history");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `
<div
              class="flex justify-between items-center mt-2 p-2 bg-gray-100 rounded-lg"
            >
              <div>
                <h1 class="text-[18px] font-semibold">Police Helpline Number</h1>
                <p class="text-[18px] font-semibold">999</p>
              </div>
              <div>${new Date().toLocaleTimeString()}</div>
            </div>

`;

  CallHistory.appendChild(newHistory);
});
// Fire Service
document.getElementById("fireBtn").addEventListener("click", function () {
  if (coinNumber < 20) {
    alert("📞 Not enough coins. You need at least 20 coins to make a call.");
    return;
  }
  alert("📞 Calling Fire Service 999...");

  coinNumber -= 20;
  coinCount.innerText = coinNumber;
  // call history

  const CallHistory = getElement("call-history");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `
<div
              class="flex justify-between items-center mt-2 p-2 bg-gray-100 rounded-lg"
            >
              <div>
                <h1 class="text-[18px] font-semibold">Fire Service Number</h1>
                <p class="text-[18px] font-semibold">999</p>
              </div>
              <div>${new Date().toLocaleTimeString()}</div>
            </div>

`;

  CallHistory.appendChild(newHistory);
});
// Ambulance Service
document.getElementById("ambulanceBtn").addEventListener("click", function () {
  if (coinNumber < 20) {
    alert("📞 Not enough coins. You need at least 20 coins to make a call.");
    return;
  }
  alert("📞 Calling Ambulance Service 1994-999999...");

  coinNumber -= 20;
  coinCount.innerText = coinNumber;
  // call history

  const CallHistory = getElement("call-history");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `
<div
              class="flex justify-between items-center mt-2 p-2 bg-gray-100 rounded-lg"
            >
              <div>
                <h1 class="text-[18px] font-semibold">Ambulance Service</h1>
                <p class="text-[18px] font-semibold">1994-999999</p>
              </div>
              <div>${new Date().toLocaleTimeString()}</div>
            </div>

`;

  CallHistory.appendChild(newHistory);
});
// Women & Child Helpline
document.getElementById("womenChildBtn").addEventListener("click", function () {
  if (coinNumber < 20) {
    alert("📞 Not enough coins. You need at least 20 coins to make a call.");
    return;
  }
  alert("📞 Calling Women & Child Helpline 109...");

  coinNumber -= 20;
  coinCount.innerText = coinNumber;
  // call history

  const CallHistory = getElement("call-history");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `
<div
              class="flex justify-between items-center mt-2 p-2 bg-gray-100 rounded-lg"
            >
              <div>
                <h1 class="text-[18px] font-semibold">Women & Child Helpline</h1>
                <p class="text-[18px] font-semibold">109</p>
              </div>
              <div>${new Date().toLocaleTimeString()}</div>
            </div>

`;

  CallHistory.appendChild(newHistory);
});
// Anti-Corruption Helpline
document.getElementById("antiCrpBtn").addEventListener("click", function () {
  if (coinNumber < 20) {
    alert("📞 Not enough coins. You need at least 20 coins to make a call.");
    return;
  }
  alert("📞 Calling Anti-Corruption Helpline 106...");

  coinNumber -= 20;
  coinCount.innerText = coinNumber;

  // call history

  const CallHistory = getElement("call-history");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `
<div
              class="flex justify-between items-center mt-2 p-2 bg-gray-100 rounded-lg"
            >
              <div>
                <h1 class="text-[18px] font-semibold">Anti-Corruption Helpline</h1>
                <p class="text-[18px] font-semibold">106</p>
              </div>
              <div>${new Date().toLocaleTimeString()}</div>
            </div>

`;

  CallHistory.appendChild(newHistory);
});
// Electricity Helpline
document
  .getElementById("electricityBtn")
  .addEventListener("click", function () {
    if (coinNumber < 20) {
      alert("📞 Not enough coins. You need at least 20 coins to make a call.");
      return;
    }
    alert("📞 Calling Electricity Helpline 16216...");

    coinNumber -= 20;
    coinCount.innerText = coinNumber;
    // call history

    const CallHistory = getElement("call-history");
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
<div
              class="flex justify-between items-center mt-2 p-2 bg-gray-100 rounded-lg"
            >
              <div>
                <h1 class="text-[18px] font-semibold">Electricity Helpline</h1>
                <p class="text-[18px] font-semibold">16216</p>
              </div>
              <div>${new Date().toLocaleTimeString()}</div>
            </div>

`;

    CallHistory.appendChild(newHistory);
  });
// Brac Helpline
document.getElementById("bracBtn").addEventListener("click", function () {
  if (coinNumber < 20) {
    alert("📞 Not enough coins. You need at least 20 coins to make a call.");
    return;
  }
  alert("📞 Calling Brac Helpline 16445...");

  coinNumber -= 20;
  coinCount.innerText = coinNumber;
  // call history

  const CallHistory = getElement("call-history");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `
<div
              class="flex justify-between items-center mt-2 p-2 bg-gray-100 rounded-lg"
            >
              <div>
                <h1 class="text-[18px] font-semibold">Brac Helpline</h1>
                <p class="text-[18px] font-semibold">16445</p>
              </div>
              <div>${new Date().toLocaleTimeString()}</div>
            </div>

`;

  CallHistory.appendChild(newHistory);
});
// Bangladesh Railway Helpline
document.getElementById("railwayBtn").addEventListener("click", function () {
  if (coinNumber < 20) {
    alert("📞 Not enough coins. You need at least 20 coins to make a call.");
    return;
  }
  alert("📞 Calling Bangladesh Railway Helpline 163...");

  coinNumber -= 20;
  coinCount.innerText = coinNumber;
  // call history

  const CallHistory = getElement("call-history");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `
<div
              class="flex justify-between items-center mt-2 p-2 bg-gray-100 rounded-lg"
            >
              <div>
                <h1 class="text-[18px] font-semibold">Bangladesh Railway Helpline</h1>
                <p class="text-[18px] font-semibold">163</p>
              </div>
              <div>${new Date().toLocaleTimeString()}</div>
            </div>

`;

  CallHistory.appendChild(newHistory);
});
