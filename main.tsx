import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { Audio, AVPlaybackStatus } from 'expo-av';
import { Play, Pause } from 'lucide-react-native';
import { wp, hp, fp } from '../utils/responsive';

interface AudioPlayerProps {
  uri: string;
  isAI?: boolean;
}

export default function AudioPlayer({ uri, isAI = false }: AudioPlayerProps) {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  // Use a ref to track if the component is still mounted
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    loadSound();

    return () => {
      isMounted.current = false;
      if (sound) {
        sound.unloadAsync(); // Clean up on unmount
      }
    };
  }, [uri]);

  const loadSound = async () => {
    try {
      setIsLoading(true);
      
      // Stop any existing sound before loading a new one
      if (sound) await sound.unloadAsync();

      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri },
        { shouldPlay: false, progressUpdateIntervalMillis: 100 }, // Faster UI updates
        onPlaybackStatusUpdate
      );

      if (isMounted.current) {
        setSound(newSound);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error loading sound:', error);
      if (isMounted.current) setIsLoading(false);
    }
  };

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (!status.isLoaded) return;

    if (isMounted.current) {
      setDuration(status.durationMillis || 0);
      setPosition(status.positionMillis || 0);
      setIsPlaying(status.isPlaying);

      if (status.didJustFinish) {
        setIsPlaying(false);
        setPosition(0);
        // Reset to start
        sound?.setPositionAsync(0);
      }
    }
  };

  const handlePlayPause = async () => {
    if (!sound) return;

    try {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        // Ensure the audio mode is set to play even if the phone is on silent
        await Audio.setAudioModeAsync({
          playsInSilentModeIOS: true,
          staysActiveInBackground: false,
        });
        
        // If it finished, restart from 0
        if (position >= duration) {
           await sound.setPositionAsync(0);
        }
        await sound.playAsync();
      }
    } catch (error) {
      console.error('Error playing/pausing:', error);
    }
  };

  const formatTime = (millis: number) => {
    const totalSeconds = Math.floor(millis / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (position / duration) * 100 : 0;

  return (
    <View
      className={`rounded-2xl flex-row items-center ${
        isAI ? 'bg-white/90 shadow-sm' : 'bg-purple-500/20'
      }`}
      style={{
        padding: wp(10),
        gap: wp(12),
        minWidth: wp(220),
        borderWidth: 1,
        borderColor: isAI ? '#E5E7EB' : '#DDD6FE',
      }}
    >
      <TouchableOpacity
        onPress={handlePlayPause}
        disabled={isLoading}
        className={`rounded-full justify-center items-center ${
          isAI ? 'bg-purple-600' : 'bg-purple-600'
        }`}
        style={{ width: wp(36), height: wp(36) }}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : isPlaying ? (
          <Pause size={wp(18)} color="#fff" fill="#fff" />
        ) : (
          <Play size={wp(18)} color="#fff" fill="#fff" style={{ marginLeft: 2 }} />
        )}
      </TouchableOpacity>

      <View className="flex-1">
        {/* Progress Bar Background */}
        <View
          className="bg-gray-200 rounded-full overflow-hidden"
          style={{ height: hp(4), marginBottom: hp(4) }}
        >
          <View
            className="bg-purple-600"
            style={{
              height: '100%',
              width: `${progress}%`,
            }}
          />
        </View>

        <View className="flex-row justify-between">
          <Text
            className={`font-outfit-medium ${isAI ? 'text-gray-600' : 'text-purple-900'}`}
            style={{ fontSize: fp(10) }}
          >
            {formatTime(position)}
          </Text>
          <Text
            className={`font-outfit-medium ${isAI ? 'text-gray-400' : 'text-purple-700'}`}
            style={{ fontSize: fp(10) }}
          >
            {formatTime(duration)}
          </Text>
        </View>
      </View>
    </View>
  );
}