import * as React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    ScrollView,
    Linking
} from 'react-native';
import Spacing from '../constants/Spacing';
import FontSize from '../constants/FontSize';
import Colors from '../constants/Color';
import Fonts from '../constants/Fonts';
import { FontAwesome } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import Onboarding from '../Onboarding';

type Props = NativeStackScreenProps<RootStackParamList, "TutorialGame1">;
const TutorialGame1Screen: React.FC<Props> = ({ navigation: { navigate } }: Props) => {
    return (
        <ScrollView>
            <View
                style={{
                    padding: Spacing * 2,
                }}
            >
                <View
                    style={{
                        marginVertical: Spacing * 2,
                    }}
                >
                    <Onboarding></Onboarding>
                </View>
            </View>
        </ScrollView>
    );
};


export default TutorialGame1Screen;