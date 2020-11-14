import React, {useCallback, useState} from "react";
import {Alert, View} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function VideoPlayer() {
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    return (
        <View>
            <YoutubePlayer
                height={220}
                play={playing}
                videoId={"G3ABje1ftEs"}
                onChangeState={onStateChange}
            />

        </View>
    );
}
