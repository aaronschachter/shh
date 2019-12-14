import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { Audio } from 'expo-av';

const soundObject = new Audio.Sound();

const Controls = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  async function handlePress() {
    try {
      setIsPlaying(!isPlaying);
      await soundObject.loadAsync(require('../assets/shh.m4a'));
      await soundObject.playAsync();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View>
    <Text>{isPlaying ? 'on' : 'off'}</Text>
    <Button
      title="Start"
      onPress={handlePress}
    />
  </View>
  );
}


export default Controls;
