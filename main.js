let fingerprintScanned = false;

function setLED(status, text) {
    const led = document.getElementById("led");
    const ledText = document.getElementById("ledText");

    led.className = "led " + status;
    ledText.textContent = text;
}

function scanFingerprint() {
    fingerprintScanned = true;
    document.getElementById("fingerprintStatus").value =
        "Fingerprint registered ✔";

    setLED("green", "Fingerprint verified");
}

// REGISTER
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const pass = password.value;
    const confirm = confirmPassword.value;

    if (pass !== confirm) {
        setLED("red", "Password mismatch");
        alert("Passwords do not match!");
        return;
    }

    if (!fingerprintScanned) {
        setLED("red", "Fingerprint required");
        alert("Please scan your fingerprint first!");
        return;
    }

    // 🔌 ESP32 / CLOUD READY (SIMULATION)
    /*
    fetch("http://ESP32_IP/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: username.value,
            password: pass,
            rfid: rfid.value
        })
    });
    */

    setLED("green", "Registration successful");
    alert("Registration successful!");
});
