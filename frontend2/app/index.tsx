// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';

export default function Index() {
  let cameraRef: any = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [hasMediaLibraryPermission, setMediaLibraryPermission] = useState(false);
  const [photo, setPhoto] = useState<any>();

  useEffect(() => {
    ( async () => {
      const CameraPermission = await Camera.requestCameraPermissionsAsync();
      const MediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(CameraPermission.status === "granted");
      setMediaLibraryPermission(MediaLibraryPermission.status === "granted");
    }) ();
  }, [])

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    if (!cameraRef.current) {
      return
    }

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
        <Button title="Share" onPress={sharePic} />
        {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} /> : undefined}
        <Button title="Discard" onPress={() => setPhoto(undefined)} />
      </SafeAreaView>
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <Button title="Take Pic" onPress={takePic} />
      </View>
      <StatusBar style="auto" />
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: '#fff',
    alignSelf: 'flex-end'
  },
  preview: {
    alignSelf: 'stretch',
    flex: 1
  }
});
