
To emulate on Android: 
- brew cask install java
- brew install Caskroom/cask/android-sdk
- Follow: https://facebook.github.io/react-native/releases/0.23/docs/android-setup.html
- add lines to ~/.bash_profile
- `export ANDROID_HOME=/usr/local/share/android-sdk`
- `export PATH=$ANDROID_HOME/build-tools/$(ls -tr $ANDROID_HOME/build-tools/ | tail -1):$PATH`

Run with
- `npm run start:ios`

Android Troubleshooting
- see react-native-vector-icons installation
- see https://github.com/firebase/geofire-objc/issues/51 for geofire ios issues

Libraries Used
- [react-native-elements](https://github.com/react-native-training/react-native-elements)
- [react-native-google-signin](https://github.com/devfd/react-native-google-signin)
- [geofire-js](https://github.com/firebase/geofire-js)


TODO

- [ ] EventCreation: DatePicker should be fixed to accept minutesInterval, should we use another one?

- [X] EventList: Order by proximity

- [ ] EventList: Created/Owned Event on Top

- [ ] Store: We Need to clear up the shit with the location coordinates in redux

- [X] Feature: EventZoom view

- [X] EventZoom: Join Event functionality

- [X] EventZoom: Render UserList

- [X] Login: Login Google

- [ ] Login: Enable Google.signIn offlineAccess

- [ ] Login: Login Facebook

- [ ] EventZoom: Edit Event functionality

- [ ] EventZoom: Delete Event functionality

- [ ] EventList: Keep your event on top of the list

- [ ] Push notification rage

- [ ] You can only create one or join one event

- [ ] Feature: Profile Page? At the beginning there wont be that many events anyway so we don't need to filter per interests and stuff, so we don't need to know that stuff

- [X] Un-register Firebase listener on Component destroy

- [ ] Clean no-unused-vars
