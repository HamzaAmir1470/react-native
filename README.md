# React Native Mobile App - Lessons & Progress

Welcome to the repository for my React Native mobile application. This project is built using **Expo SDK 57**, utilizing modern mobile development practices including file-based routing and backend-as-a-service integration.

This README documents the progress, architecture, and setup instructions completed through **Lesson 1** and **Lesson 2**.

---

## 🚀 Lesson 1 Milestones

In this introductory lesson, I successfully set up the development environment, structured the app architecture, and initialized the core ecosystem:

1. **Initial Project Setup**: Created a new React Native application using Expo with TypeScript support and enabled the **React Compiler** for optimized performance.
2. **Expo Router Integration**: Configured file-based routing using `expo-router` with `src/app` set as the root directory to manage navigation effortlessly.
3. **Appwrite Initialization**: Integrated and initialized **Appwrite** as the Backend-as-a-Service (BaaS) to handle future authentication, databases, and storage.
4. **Custom Intro Screen**: Designed a modern, minimalist dark-themed introduction screen using pure React Native components (no external icon dependencies).

---

## 🐅 Lesson 2 Milestones: UI Refinement & Web Bundling Fixes

In this lesson, the application's user interface was expanded with a rich-content details screen, asset management workflows were streamlined, and platform bundling errors were resolved:

1. **Premium Dark Theme UI**: Built a fully responsive, modern details screen showcasing the rare **Black Tiger**. The layout leverages:
   * A `ScrollView` wrapper supporting seamless vertical scrolling.
   * A "pull-up" visual effect using absolute positioning overlay and negative margins to merge the content card onto the header image.
   * Custom stylized horizontal badge rows displaying metadata (`Status`, `Habitat`, `Genetic Variant`).
2. **Asset Organization**: Organized and structured local asset imports (such as `tiger.jpg` and logo variations) inside the dynamic `../assets/img/` directory path.
3. **Debugging Platform Bundling Errors**: Resolved a critical Metro bundler mismatch (`Unable to resolve "react-native-web/dist/index"`) by properly installing missing universal web dependencies (`react-native-web`, `react-dom`, and `@expo/metro-runtime`) via Expo CLI, aligning platform targets correctly.
Image

<img width="640" height="874" alt="image" src="https://github.com/user-attachments/assets/ba8c0ef1-adf2-482b-a00a-ad7c7104c126" />

---

## 🛠️ Tech Stack & Dependencies

* **Framework**: React Native (v0.86.0) via Expo (SDK 57)
* **Language**: JavaScript (v6.0.3) / TypeScript
* **Routing**: Expo Router (v57.0.6)
* **Backend Integration**: Appwrite SDK
* **Rendering Engine**: React 19 (React Compiler enabled)
* **Web Target Engine**: React Native Web (v0.19.x)

---
