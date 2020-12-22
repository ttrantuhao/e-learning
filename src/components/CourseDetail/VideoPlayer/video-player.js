import React, {useCallback, useState, useRef, useContext} from "react";
import {Alert, Button, Text, TouchableOpacity, View} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import {ThemeContext} from "../../../provider/theme-provider";
import {Video} from "expo-av";
import VideoPlayer from 'expo-video-player'
import * as ScreenOrientation from 'expo-screen-orientation'
import {Icon} from "react-native-elements";
import {mySilver, myWhite} from "../../../globals/styles";

export default function MyVideoPlayer({url, playerRef, onBack}) {
    const {theme} = useContext(ThemeContext);
    const [playing, setPlaying] = useState(false);
    const [orientationIsLandscape, setOrientationIsLandscape] = useState(false);
    // const [fullscreen, setFullscreen] = useState(false);
    // const playerRef = useRef(null)


    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    const analysisUrl = (url) => {
        console.log("video url: ", url)
        if (url.includes('youtube')) {
            let idYoutube;
            if (url.includes('v='))
                idYoutube = url.split('v=')[url.split('v=').length - 1];
            else
                idYoutube = url.split('/')[url.split('/').length - 1]
            // console.log({isYoutube: true, idYoutube})
            return {isYoutube: true, idYoutube}
        }
        return {isYoutube: false}
    }

    return (
        url ?
            <>
                {analysisUrl(url).isYoutube ?
                    <View>
                        <YoutubePlayer
                            ref={playerRef}
                            height={220}
                            play={playing}
                            videoId={analysisUrl(url).idYoutube}
                            onChangeState={onStateChange}
                            onError={error => console.log(error)}

                        />
                        <TouchableOpacity style={{position: 'absolute'}}>
                            <Icon name='clear' type='material' color={myWhite} onPress={onBack} size={40}/>
                        </TouchableOpacity>
                    </View>
                    :
                    <Video
                        source={{uri: url}}
                        shouldPlay
                        resizeMode="cover"
                        style={{width, height: 200}}
                    />
                }
            </>
            :
            // <View style={{height: 220, alignItems: "center", justifyContent: "center"}}>
            //     <Text style={{fontSize: 20, color: theme.colors.text}}>No Video</Text>
            // </View>
            // <Video
            //     source={{ uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" }}
            //     shouldPlay
            //     resizeMode="cover"
            //     style={{height: 300}}
            // />
            <View>
                <VideoPlayer
                    videoProps={{
                        shouldPlay: true,
                        resizeMode: "cover",
                        source: {
                            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                        },
                    }}
                    height={220}
                    // inFullscreen={true}
                    switchToLandscape={async () => {
                        await ScreenOrientation.lockAsync(
                            orientationIsLandscape ? ScreenOrientation.OrientationLock.PORTRAIT :
                                ScreenOrientation.OrientationLock.LANDSCAPE_LEFT,
                        );
                        setOrientationIsLandscape(!orientationIsLandscape);
                    }}
                />
                <TouchableOpacity style={{position: 'absolute'}}>
                    <Icon name='clear' type='material' color={myWhite} onPress={onBack} size={40}/>
                </TouchableOpacity>
            </View>
    );
}
