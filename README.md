# prodev-mobile-setup

# Setting Up Expo Go with Orbit on My Windows Machine

This is a quick guide I put together to document how I installed and set up **Expo Go** on my phone and connected it to my React Native development environment using **Orbit** on Windows.

---

## 1. Installed Expo Go on My Phone

I visited [https://expo.dev/go](https://expo.dev/go) to download the app.

- Chose the latest SDK version available.
- Clicked **Install for your device**.
  - Since I’m using Android, I got it from the [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent).
- After installation, I opened the **Expo Go** app and logged into my account (or you can create one if you don’t have it yet).

---

## 2. Installed Orbit on Windows

Next, I went to the official [Orbit page](https://expo.dev/orbit) and installed Orbit on my laptop.

After installation, I opened it up to get ready for device connection.

---

## 3. Set Up My Phone for USB Debugging

I had to connect my Android phone to my laptop using a USB cable, but first I needed to enable developer options:

- Went to **Settings > About Phone**
- Tapped the **Build Number** 7 times until I saw the message that developer mode is now enabled.

Then:

- Went into **Developer Options** and turned on **USB Debugging**.

⚠️ When I connected my phone, it asked me to allow USB debugging from this computer — I accepted it.

---

## 4. Connected My Phone to Orbit

After plugging in my phone, I checked that Orbit detected it.

- If it wasn’t showing up at first, I made sure the right device was selected from the dropdown.
- Once connected, Orbit confirmed the device was ready.

---

## 5. Ready to Test and Run My App

With everything set up:
- I could now start my React Native app from my terminal or editor.
- It opened directly on my phone using the **Expo Go** app, thanks to Orbit.

---

## Notes to Remember

- My phone needs to stay connected via USB while testing.
- If Orbit doesn’t recognize the phone, it might be a driver issue — installing Android USB drivers usually helps.
- For iOS, USB debugging doesn’t work the same way, so you’d use a QR code instead.

---

That’s it! Now I can build and test my app live on my phone. 🚀
