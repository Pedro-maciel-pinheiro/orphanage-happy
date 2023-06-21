# Happy

<h1 align="center" >
  <img alt="happy" title="happy" src="./.github/happy.png" />
</h1>

## 💻 Project

Happy is a project meant to connect people to institutional foster care homes, bringing joy to many children.
Project developed during the event Next Level Week #3, from [@rocketseat](https://github.com/rocketseat)

<h2 id="tecnologias"> 🚀 Technologies </h2>

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)
- [TypeScript](https://www.typescriptlang.org/)

## 🎨 Preview

#### Web

<p align="center"><img src=".github/web/details.gif?raw=true"/></p>
<p align="center"><img src=".github/web/landing.png?raw=true"/></p>
<p align="center"><img src=".github/web/success.png?raw=true"/></p>

#### Mobile

<p align="center"><img src=".github/mobile/mobile.gif?raw=true"/></p>
<p align="center"><img src=".github/mobile/onboarding.png?raw=true"/>
<img src=".github/mobile/main.png?raw=true"/>
<img src=".github/mobile/details.png?raw=true"/></p>

<h2 id="features-implementadas"> 🚧 Extra features </h2>

Aside from the basic features developed during the event, the extra features added to this project are listed below

#### Web/API
- New registrations are stored as pending, requiring them to be approved through a dashboard;
- Restricted access to a dashboard to manage new registrations;
- Logout button added in dashboard;
- Page to display a success message after a new registration, with a link back to the main page;
- Login and "Forgot my password" pages (using [nodemailer](https://nodemailer.com/) and [ethereal](https://ethereal.email/) to simulate email for password recovery);

#### Mobile
- Added splash screen and icon;
- Onboarding screens for first time access;
- Added animated intro before displaying the main screen when redirected from Onboarding;
- Split new registration in 2 steps (using ContextApi);
- Added screens for successful registration and to cancel a registration;

## :construction_worker: Installation

You need to have NodeJS installed before continuing.

#### Cloning the repository
```bash
$ git clone https://github.com/guilhermecarmona/happy-nlw3.git
```

### 🌐 Running the API

Go to the directory
```bash
$ cd backend
```

Install the dependencies

```bash
$ yarn
# or, with npm
$ npm install
```

Run the application

```bash
$ yarn start
# or, with npm
$ npm start
```

### 💻 Running the web app

#### Mapbox

This project uses mapbox. Head to "https://mapbox.com" and create your account. Copy your public token, and paste it in a .env file located in the root of your project (use .env.example as guidance).

Go to the directory

```bash
$ cd web
```
Install the dependencies

```bash
$ yarn
# or, with npm
$ npm install
```

Run the application

```bash
$ yarn start
# or, with npm
$ npm start
```

### 📱 Running the mobile app

Go to the directory

```bash
$ cd mobile
```
Install the dependencies

```bash
$ yarn
# or, with npm
$ npm install
```

Setup [Expo](https://docs.expo.io/get-started/installation/)

Run the application

```bash
$ yarn ios
# or
$ yarn android
```
---

## :closed_book: License

Released in 2020 under the [MIT license](https://github.com/guilhermecarmona/happy-nlw3/blob/main/LICENSE).
