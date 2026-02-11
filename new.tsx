import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { Audio } from 'expo-av';
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

  useEffect(() => {
    loadSound();
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [uri]);

  const loadSound = async () => {
    try {
      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri },
        { shouldPlay: false },
        onPlaybackStatusUpdate
      );
      setSound(newSound);
      setIsLoading(false);
    } catch (error) {
      console.error('Error loading sound:', error);
      setIsLoading(false);
    }
  };

  const onPlaybackStatusUpdate = (status: any) => {
    if (status.isLoaded) {
      setDuration(status.durationMillis || 0);
      setPosition(status.positionMillis || 0);
      setIsPlaying(status.isPlaying);

      if (status.didJustFinish) {
        setIsPlaying(false);
        setPosition(0);
      }
    }
  };

  const handlePlayPause = async () => {
    if (!sound) return;

    try {
      if (isPlaying) {
        // PAUSE - doesn't restart, continues from current position
        await sound.pauseAsync();
      } else {
        // PLAY/RESUME
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
        isAI ? 'bg-white/70' : 'bg-white/30'
      }`}
      style={{
        padding: wp(12),
        gap: wp(12),
        minWidth: wp(200),
      }}
    >
      {/* Play/Pause Button */}
      <TouchableOpacity
        onPress={handlePlayPause}
        disabled={isLoading}
        className={`rounded-full justify-center items-center ${
          isAI ? 'bg-purple-600' : 'bg-white'
        }`}
        style={{
          width: wp(40),
          height: wp(40),
        }}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color={isAI ? '#fff' : '#8B5CF6'} />
        ) : isPlaying ? (
          <Pause size={wp(20)} color={isAI ? '#fff' : '#8B5CF6'} fill={isAI ? '#fff' : '#8B5CF6'} />
        ) : (
          <Play size={wp(20)} color={isAI ? '#fff' : '#8B5CF6'} fill={isAI ? '#fff' : '#8B5CF6'} />
        )}
      </TouchableOpacity>

      {/* Progress */}
      <View className="flex-1">
        <View
          className="bg-gray-200 rounded-full overflow-hidden"
          style={{ height: hp(4), marginBottom: hp(4) }}
        >
          <View
            className={isAI ? 'bg-purple-600' : 'bg-white'}
            style={{
              height: '100%',
              width: `${progress}%`,
            }}
          />
        </View>

        <Text
          className={`font-outfit-medium ${isAI ? 'text-gray-700' : 'text-white'}`}
          style={{ fontSize: fp(11) }}
        >
          {formatTime(position)} / {formatTime(duration)}
        </Text>
      </View>
    </View>
  );
}