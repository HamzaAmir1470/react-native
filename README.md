# React Native Mobile App - Lessons & Progress

Welcome to the repository for my React Native mobile application. This project is built using **Expo SDK 57**, utilizing modern mobile development practices including file-based routing and backend-as-a-service integration.

This README documents the progress, architecture, and setup instructions completed through **Lesson 1**, **Lesson 2**, and **Lesson 3**.

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

---

## 🧭 Lesson 3 Milestones: Multi-Page Navigation & Native Features

In this lesson, the app evolved into a fully navigable, multi-page layout by introducing additional screens, refactoring touch interactions, and integrating native platform modules:

1. **App Architecture & File-Based Routing Expansion**: Expanded the `expo-router` setup by building and connecting dedicated pages:
   * **About Screen (`/about`)**: Houses detailed overviews, structural text alignments using justified formatting, and dynamic container layouts.
   * **Contact Screen (`/contact`)**: Displays support details housed in specialized dark borders and card shadows.
2. **Interactive Elements Re-architecting**: Fixed and optimized Expo Router navigation elements by swapping out simple, raw `<Text>` components inside link wrappers for an explicit `asChild` configuration coupled with React Native `<Pressable>` containers. This provides native press highlights and a vastly improved touch-target zone.
3. **Native Deep Linking Integration**: Integrated the native React Native `Linking` module on the Contact screen, implementing a `mailto:` shortcut behavior that automatically prompts the mobile operating system to fire open the device's default email client with pre-filled subject and recipient lines upon clicking.
4. **Dynamic Flex Layout Optimization**: Cleaned up alignment pitfalls (`alignItems: 'center'`) across inner screens, switching to fluid flex containers and implementing `marginTop: 'auto'` anchoring to pin important system messages flawlessly to the viewport baseline.

---

## 🛠️ Tech Stack & Dependencies

* **Framework**: React Native (v0.86.0) via Expo (SDK 57)
* **Language**: JavaScript (v6.0.3) / TypeScript
* **Routing**: Expo Router (v57.0.6)
* **Backend Integration**: Appwrite SDK
* **Rendering Engine**: React 19 (React Compiler enabled)
* **Web Target Engine**: React Native Web (v0.19.x)

---
