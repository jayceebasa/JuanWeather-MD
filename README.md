# JuanWeather-MD 🌤️

A beautiful weather dashboard mobile application built with React Native and TypeScript, featuring an intuitive UI with gradient backgrounds and custom weather icons.

## 📱 Features

- Modern weather dashboard interface
- Custom weather icons using SVG
- Beautiful gradient backgrounds with linear gradients
- Safe area support for all devices
- TypeScript support for type safety
- Component-based architecture

## 🛠️ Tech Stack

- **React Native 0.81.4** - Cross-platform mobile framework
- **TypeScript** - Static type checking
- **React Native Linear Gradient** - Beautiful UI gradients
- **React Native SVG** - Custom weather icons
- **React Native Safe Area Context** - Proper device spacing

---

## 📋 Prerequisites for Android

Before you begin, ensure you have the following installed on your system:

### Required Software

1. **Node.js** (version 20 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **Java Development Kit (JDK)** 17 or higher
   - Download from: https://www.oracle.com/java/technologies/downloads/
   - Or install OpenJDK: https://adoptium.net/
   - Verify installation: `java -version`

3. **Android Studio**
   - Download from: https://developer.android.com/studio
   - Must include:
     - Android SDK
     - Android SDK Platform
     - Android Virtual Device (AVD)

4. **Git** (for cloning the repository)
   - Download from: https://git-scm.com/

### Android Studio Setup

1. **Install Android Studio** and during setup, make sure the following are checked:
   - Android SDK
   - Android SDK Platform
   - Android Virtual Device

2. **Configure Android SDK:**
   - Open Android Studio
   - Go to: `Settings` → `Appearance & Behavior` → `System Settings` → `Android SDK`
   - Under **SDK Platforms**, install:
     - Android 13.0 (Tiramisu) - API Level 33
     - Android 12.0 (S) - API Level 31
   - Under **SDK Tools**, make sure these are installed:
     - Android SDK Build-Tools
     - Android Emulator
     - Android SDK Platform-Tools

3. **Set up Environment Variables:**

   **For Windows:**
   - Add to System Environment Variables:
     ```
     ANDROID_HOME = C:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk
     ```
   - Add to PATH:
     ```
     %ANDROID_HOME%\platform-tools
     %ANDROID_HOME%\tools
     %ANDROID_HOME%\tools\bin
     ```

   **For macOS/Linux:**
   - Add to `~/.bash_profile` or `~/.zshrc`:
     ```bash
     export ANDROID_HOME=$HOME/Library/Android/sdk
     export PATH=$PATH:$ANDROID_HOME/emulator
     export PATH=$PATH:$ANDROID_HOME/platform-tools
     ```

4. **Create an Android Virtual Device (Emulator):**
   - Open Android Studio
   - Click on `More Actions` → `Virtual Device Manager`
   - Click `Create Device`
   - Select a device (e.g., Pixel 5)
   - Select a system image (e.g., Android 13.0 - API Level 33)
   - Click `Finish`

---

## 🚀 Installation & Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/jayceebasa/JuanWeather-MD.git
cd JuanWeather-MD
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all the required packages including:
- React Native core libraries
- React Native Linear Gradient
- React Native SVG
- React Native Safe Area Context
- TypeScript and type definitions

**Note:** If you encounter any errors during installation, try:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

---

## 📱 Running on Android

### Option 1: Using Android Emulator (Recommended for beginners)

1. **Start the Android Emulator:**
   - Open Android Studio
   - Click `More Actions` → `Virtual Device Manager`
   - Click the ▶️ (Play) button next to your created device
   - Wait for the emulator to fully boot up

2. **Start Metro Bundler** (in your project directory):
   ```bash
   npm start
   ```
   Keep this terminal running.

3. **Run the app** (in a new terminal):
   ```bash
   npm run android
   ```

   This command will:
   - Build the Android app
   - Install it on the emulator
   - Launch the app automatically

### Option 2: Using a Physical Android Device

1. **Enable Developer Options on your phone:**
   - Go to `Settings` → `About Phone`
   - Tap `Build Number` 7 times
   - Developer Options will be enabled

2. **Enable USB Debugging:**
   - Go to `Settings` → `Developer Options`
   - Enable `USB Debugging`

3. **Connect your device:**
   - Connect your Android device to your computer via USB
   - Allow USB debugging when prompted on your phone

4. **Verify device connection:**
   ```bash
   adb devices
   ```
   You should see your device listed.

5. **Run the app:**
   ```bash
   npm start
   ```
   Then in a new terminal:
   ```bash
   npm run android
   ```

### Option 3: Using Android Studio

1. **Open Android Studio**
2. Select `Open an Existing Project`
3. Navigate to `JuanWeather-MD/android` and open it
4. Wait for Gradle to sync
5. Start your emulator or connect your device
6. In a terminal at the project root, run:
   ```bash
   npm start
   ```
7. In Android Studio, click the green ▶️ `Run` button or press `Shift + F10`

---

## 🎨 Project Structure

```
JuanWeather-MD/
├── App.tsx                 # Main application component
├── components/
│   ├── homepage.tsx        # Home page component
│   └── add_loc.tsx         # Add location component
├── assets/
│   └── images/             # Image assets (background, weather icons)
│       ├── background.png
│       └── sun.png
├── android/                # Android native code
│   ├── app/
│   │   ├── build.gradle    # App-level Gradle config
│   │   └── src/main/       # Android source files
│   └── build.gradle        # Project-level Gradle config
├── __tests__/              # Test files
│   └── App.test.tsx
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

---

## 🔧 Development

### Hot Reloading

The app supports **Fast Refresh**! Make changes to your code and save - the app will automatically update without losing state.

### Manual Reload

If you need to manually reload:
- Press `R` twice in the terminal where Metro is running
- Or shake your device and select "Reload"
- Or press `Ctrl + M` (Windows/Linux) / `Cmd + M` (macOS) on emulator to open Dev Menu

### Dev Menu Options

Access the Dev Menu by:
- Pressing `Ctrl + M` in the emulator
- Shaking a physical device
- Running `adb shell input keyevent 82` in terminal

Available options:
- **Reload** - Reload the app
- **Debug** - Open debugging tools
- **Change Bundle Location** - Connect to different Metro server
- **Toggle Inspector** - Inspect UI elements
- **Show Perf Monitor** - Display performance metrics

### Running Tests

```bash
npm test
```

### Linting

```bash
npm run lint
```

---

## 🐛 Troubleshooting

### Common Issues

**1. Metro bundler fails to start:**
```bash
# Clear Metro cache
npm start -- --reset-cache
```

**2. "adb: command not found"**
- Make sure Android SDK platform-tools is in your PATH
- Restart your terminal after setting environment variables

**3. "SDK location not found"**
Create `android/local.properties` file:
```properties
sdk.dir=C:\\Users\\YOUR_USERNAME\\AppData\\Local\\Android\\Sdk
```
(Use your actual Android SDK path)

**4. Gradle build fails:**
```bash
# Clean the build
cd android
./gradlew clean
cd ..

# Try running again
npm run android
```

**5. "Unable to load script" error:**
```bash
# Make sure Metro is running
npm start

# In a new terminal
npm run android
```

**6. Port 8081 already in use:**
```bash
# Windows - Find and kill process
netstat -ano | findstr :8081
taskkill /PID <PID_NUMBER> /F

# Or start Metro on different port
npm start -- --port 8088
```

**7. Build fails with "Could not resolve all files":**
```bash
cd android
./gradlew clean
./gradlew build --refresh-dependencies
cd ..
```

**8. App crashes on launch:**
- Check Metro bundler is running
- Ensure no syntax errors in your code
- Check the terminal for error messages
- Try uninstalling and reinstalling the app:
  ```bash
  adb uninstall com.juanweathermd
  npm run android
  ```

### Getting More Help

- [React Native Troubleshooting](https://reactnative.dev/docs/troubleshooting)
- [Android Developer Guides](https://developer.android.com/guide)
- [Stack Overflow - React Native](https://stackoverflow.com/questions/tagged/react-native)

---

## 📚 Learn More

### Documentation
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [TypeScript with React Native](https://reactnative.dev/docs/typescript)
- [React Native Linear Gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient)
- [React Native SVG](https://github.com/software-mansion/react-native-svg)

### Tutorials
- [React Native Tutorial](https://reactnative.dev/docs/tutorial)
- [React Native Android Setup](https://reactnative.dev/docs/environment-setup?os=windows&platform=android)

---

## 📄 License

This project is private and not licensed for public use.

## 👤 Author

**Jaycee Basa**
- GitHub: [@jayceebasa](https://github.com/jayceebasa)

---

## 🙏 Acknowledgments

- React Native Community
- All contributors and testers

---

**Made with ❤️ using React Native**

*Last Updated: October 2025*
