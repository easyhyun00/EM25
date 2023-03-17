import React, { useState, useEffect }  from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { Video } from 'expo-av';

export default function PlantLive(){

    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentDateTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const year = currentDateTime.getFullYear();
    const month = currentDateTime.getMonth() + 1;
    const day = currentDateTime.getDate();
    const hour = currentDateTime.getHours();
    const minute = currentDateTime.getMinutes();
    const second = currentDateTime.getSeconds();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>🎥 실시간 LIVE</Text>
            <Video
                source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
                rate={1.0}
                volume={1.0}
                //isMuted={false}
                resizeMode="cover"
                shouldPlay={true} // shouldPlay 값을 true로 설정하여 비디오를 자동 재생합니다.
                useNativeControls // iOS 및 Android의 기본 재생 컨트롤을 사용합니다.
                style={styles.video}
            />
            <Text style={styles.name}>🌱 대만고무나무 🌱</Text>
            <Text style={styles.time}>{`${year}년 ${month}월 ${day}일`}</Text>
            <Text style={styles.time2}>{`${hour}시 ${minute}분 ${second}초`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1, // 비율
      backgroundColor: '#EDEFE3',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 30,
        //marginTop: -10,
    },
    video: {
        alignSelf: 'center',
        width: 320,
        height: 320,
        marginBottom: 30,
        borderColor: '#BDDC1C', 
        borderWidth: 5
    },
    name: {
        fontSize: 35,
        fontWeight: 'bold',
        //marginTop: 30, 
        marginBottom: 60,
    },
    time: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    time2: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 35,
    }
});