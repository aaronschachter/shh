import React, { useEffect, useState } from 'react';
import { Switch, Text, View } from 'react-native';
import { Audio } from 'expo-av';

const soundObject = new Audio.Sound();

const Controls = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    async function loadSound() {
      await soundObject.loadAsync(require('../assets/shh.m4a'));
      soundObject.setIsLoopingAsync(true);
    }
    loadSound();
  }, []);

  async function handlePress() {
    try {
      setIsPlaying(!isPlaying);

      if (!isPlaying) {
        await soundObject.playAsync();
      } else {
        await soundObject.pauseAsync();
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
