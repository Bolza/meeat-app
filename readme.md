
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