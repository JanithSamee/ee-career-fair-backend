# ee-career-fair-backend
This is the backend of virtual career fair hosted by the Department of Electrical Engineering, University of Moratuwa.

### How to setup
- Create a directory called `careerfair`
- Navigate to it (`cd careerfair`), then [fork and clone](https://docs.github.com/en/github/getting-started-with-github/quickstart/fork-a-repo) the repo so that it gets downloaded into careerfair/ee-career-fair-backend.
- Go inside of ee-career-fair-backend directory
```
cd ee-career-fair-backend
```
- Create a firebase application in your firebase console.
- Add a Firestore database to the application.
- Enable Email/Password authenntication in Authentication service.
- Copy `Project ID` from Project Settings.
- Add and save it in the `.firebaserc` file as how default project is added. Ex: 
```
{
  "projects": {
    "default": "fir-app-xyz",
    "my-project": "<PROJECT_ID>"
  }
}
```
- Run `firebase use my-project` to user the project you created in your firebase console.
- Run following command to set environment variables required in project. These variables can be taken from `Project Settings` -> `General` in your firebase app in console. You can get these settings from Create Web App section at the bottom of General Settings. ([More info](https://firebase.google.com/docs/web/setup#add-sdks-initialize))
```
firebase functions:config:set app.apikey="API_KEY" app.authdomain="AUTH_DOMAIN" app.projectid="PROJECT_ID" app.storagebucket="STORAGE_BUCKET" app.senderid="SENDER_ID" app.appid="APP_ID" app.measurementid="MEASUREMENT_ID"
```
- Go inside to functions directory
```
cd functions
```
- Run the following command to get the above environment variables to runtime.
```
firebase functions:config:get > .runtimeconfig.json
```
**For Windows**
```
firebase functions:config:get | sc .runtimeconfig.json
```
- Run the following commands to install node packages
```
npm install
```
- Run the following command to start the app
```
npm run serve
```

### Contributing

Please refer this how to [contribute wiki](https://github.com/chris7716/ee-career-fair-backend/wiki/How-to-contribute)
