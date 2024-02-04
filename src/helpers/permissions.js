import {Alert} from 'react-native';
import {
  check,
  PERMISSIONS,
  RESULTS,
  request,
  openSettings,
} from 'react-native-permissions';

const checkGalleryPermission = callback => {
  const requestPermission = () => {
    request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.PHOTO_LIBRARY
        : (PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
          PERMISSIONS.ANDROID.READ_MEDIA_IMAGES),
    )
      .then(result => {
        switch (result) {
          case RESULTS.GRANTED:
            callback(true); // Permission granted
            break;
          case RESULTS.DENIED:
          case RESULTS.BLOCKED:
            showSettingsPrompt(); // Show the prompt to go to settings
            break;
          default:
            callback(false); // Permission not granted
            break;
        }
      })
      .catch(error => {
        callback(false); // Permission not granted
      });
  };

  const showPermissionRequestPopup = () => {
    Alert.alert(
      'Gallery Permission',
      'This app requires gallery access. Please grant the permission.',
      [
        {text: 'Cancel', style: 'cancel', onPress: () => callback(false)},
        {text: 'OK', onPress: requestPermission},
      ],
    );
  };

  const showSettingsPrompt = () => {
    Alert.alert(
      'Permission Denied',
      'To grant gallery access, please go to the app settings and enable the permission.',
      [
        {text: 'Later', style: 'cancel', onPress: () => callback(false)},
        {text: 'Settings', onPress: openSettings},
      ],
    );
  };

  check(
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.PHOTO_LIBRARY
      : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
  )
    .then(result => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          Alert.alert('This feature is not available on this device');
          callback(false); // Permission not granted
          break;
        case RESULTS.DENIED:
          showPermissionRequestPopup(); // Show the permission request popup on first call
          break;
        case RESULTS.BLOCKED:
          showSettingsPrompt(); // Show the prompt to go to settings if permission is blocked
          break;
        case RESULTS.GRANTED:
          callback(true); // Permission granted
          break;
        default:
          callback(false); // Permission not granted
          break;
      }
    })
    .catch(error => {
      callback(false); // Permission not granted
    });
};

const checkCameraPermission = callback => {
  const requestPermission = () => {
    request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA,
    )
      .then(result => {
        switch (result) {
          case RESULTS.GRANTED:
            callback(true); // Permission granted
            break;
          case RESULTS.DENIED:
          case RESULTS.BLOCKED:
            showSettingsPrompt(); // Show the prompt to go to settings
            break;
          default:
            callback(false); // Permission not granted
            break;
        }
      })
      .catch(error => {
        callback(false); // Permission not granted
      });
  };

  const showCameraPermissionRequestPopup = () => {
    Alert.alert(
      'Camera Permission',
      'This app requires camera access. Please grant the permission.',
      [
        {text: 'Cancel', style: 'cancel', onPress: () => callback(false)},
        {text: 'OK', onPress: requestPermission},
      ],
    );
  };

  const showSettingsPrompt = () => {
    Alert.alert(
      'Permission Denied',
      'To grant camera access, please go to the app settings and enable the permission.',
      [
        {text: 'Later', style: 'cancel', onPress: () => callback(false)},
        {text: 'Settings', onPress: openSettings},
      ],
    );
  };

  check(
    Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA,
  )
    .then(result => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          Alert.alert('This feature is not available on this device');
          callback(false); // Permission not granted
          break;
        case RESULTS.DENIED:
          showCameraPermissionRequestPopup(); // Show the permission request popup on first call
          break;
        case RESULTS.BLOCKED:
          showSettingsPrompt(); // Show the prompt to go to settings if permission is blocked
          break;
        case RESULTS.GRANTED:
          callback(true); // Permission granted
          break;
        default:
          callback(false); // Permission not granted
          break;
      }
    })
    .catch(error => {
      callback(false); // Permission not granted
    });
};

export {checkGalleryPermission, checkCameraPermission};
