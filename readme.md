
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

Libraries Used
- [react-native-elements](https://github.com/react-native-training/react-native-elements)

TODO

[ ] DatePicker should be fixed to accept minutesInterval, should we use another one?
[ ] We need [Geofire](https://github.com/firebase/geofire) to order by proximity
[ ] We Need to clear up the shit with the location coordinates in redux
[ ] Zoom page for the event, we probably just need to store the id + Join Event Button
[ ] Login w FB & Google
[ ] Edit Event functionality
[ ] Keep your event on top of the list
[ ] Push notification rage
[ ] You can only create one or join one event
[ ] Profile Page? At the beginning there wont be that many events anyway so we don't need to filter per interests and stuff, so we don't need to know that stuff