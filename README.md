# react-native-template
This is a simple React Native (expo) project that already includes the minimal base tools to start a mobile project. 
This template is specially for those FullStack/Web Developers who needs to build a mobile-app in the closest way to web development.

## Features
- [x] Typescript
- [x] Redux Toolkit (+Thunk)
- [x] Styled Components
- [x] React Navigation
- [x] Babel Path Beautify

## Run
```
yarn install
```
Then you will need to pick a platform to run it.

### Run iOS
```
yarn ios
```

### Run Android
```
yarn android
```

### Run Web
To run as a web application, you will need to install some dependencies:
```
npx expo install react-native-web@~0.19.6 react-dom@18.2.0 @expo/webpack-config@^19.0.0
```
Then run:
```
yarn web
```

Note: You will need an Expo env to use this template.
