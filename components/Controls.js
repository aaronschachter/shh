import React, { useEffect, useState } from 'react';
import { Switch, Text, View } from 'react-native';
import { Audio } from 'expo-av';
import Sound from 'react-native-sound';

// Enable playback in silence mode
Sound.setCategory('Playback');

// Load the sound file from the app bundle.
const shhSound = new Sound('shh.m4a', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // loaded successfully
  console.log('duration in seconds: ' + shhSound.getDuration() + 'number of channels: ' + shhSound.getNumberOfChannels());
  shhSound.setNumberOfLoops(-1);
});

const Controls = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // useEffect(() => {
  //   async function loadSound() {
  //     await soundObject.loadAsync(require('../assets/shh.m4a'));
  //     soundObject.setIsLoopingAsync(true);
  //   }
  //   loadSound();
  // }, []);

  function handlePress() {
    try {
      setIsPlaying(!isPlaying);

      if (!isPlaying) {
        shhSound.play();
      } else {
        shhSound.pause();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View>
      <Switch
        onValueChange={handlePress}
        value={isPlaying}
      />
    </View>
  );
}

export default Controls;
