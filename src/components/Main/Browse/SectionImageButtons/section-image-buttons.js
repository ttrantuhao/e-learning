import React from 'react';
import {ScrollView, View} from 'react-native';
import ImageButton from "../../../Common/image-button";

const SectionImageButtons = () => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
                <ImageButton title={`Conferences`} fontSize={20} height={80} width={160}/>
                <ImageButton title={`Certifications`} fontSize={20} height={80} width={160}/>
            </View>
            <View>
                <ImageButton title={`<Software>${'\n'}development`} fontSize={18} height={80} width={160}/>
                <ImageButton title={`IT${'\n'}ops`} fontSize={20} height={80} width={160}/>
            </View>
            <View>
                <ImageButton title={`Information${'\n'}and${'\n'}Cyber security`} fontSize={16} height={80} width={160}/>
                <ImageButton title={`Data${'\n'}professional`} fontSize={18} height={80} width={160}/>
            </View>
            <View>
                <ImageButton title={`Business${'\n'}professional`} fontSize={18} height={80} width={160}/>
                <ImageButton title={`Creative${'\n'}professional`} fontSize={18} height={80} width={160}/>
            </View>
            <View>
                <ImageButton title={`Manufacturing${'\n'}and${'\n'}Design`} fontSize={16} height={80} width={160}/>
                <ImageButton title={`Architecture${'\n'}and${'\n'}Construction`} fontSize={16} height={80} width={160}/>
            </View>
        </ScrollView>
    );
};

export default SectionImageButtons;
