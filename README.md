![image](https://github.com/miguel-martinez-6661/react-native-template/assets/79332087/e23c5ce5-45b3-4b4b-8ac2-02ba69cf6e3a)

# react-native-template
This is a simple React Native (expo) project that already includes the minimal base tools to start a mobile project. 
This template is specially for those FullStack/Web Developers who needs to build a mobile-app in the closest way to web development.

## Features
- [x] Typescript
- [x] Redux Toolkit (+Thunk)
- [x] Styled Components
- [x] React Navigation
- [x] Unit Testing Env - RNTL

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

### Unit Testing
This template is prepared to run tests with React Native Testing Library.
To start running tests, just run:
```
yarn test
```

Note:  You will need an Expo env to use this template.
