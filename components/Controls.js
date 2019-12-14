import React from 'react';
import { Button } from 'react-native';
import { Audio } from 'expo-av';

const soundObject = new Audio.Sound();

async function handlePress() {
  try {
    await soundObject.loadAsync(require('../assets/shh.m4a'));
    await soundObject.playAsync();
  } catch (error) {
  }
}

const Controls = () => {
  return (
    <Button
      title="Start"
      onPress={handlePress}
    />
  );
}

export default Controls;
