import React from 'react';
import { View, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type Props = NativeStackScreenProps<RootStackParamList, "Tutorial1">;
const Tutorial1Screen: React.FC<Props> = ({ navigation: { navigate } }: Props) => {
    return (
        <View>
            <Onboarding
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: <Image source={require('../../assets/imagesGame/Banderas/image1.png')} />,
                        title: "Hola",
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image source={require('../../assets/imagesGame/Banderas/image1.png')} />,
                        title: 'The Title',
                        subtitle: 'This is the subtitle that sumplements the title.',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image source={require('../../assets/imagesGame/Banderas/image1.png')} />,
                        title: 'Triangle',
                        subtitle: "Beautiful, isn't it?",
                    },
                ]}
                bottomBarHeight={60}
                bottomBarColor={'#fff'}
                bottomBarHighlight={true}
                controlStatusBar={true}
                showPagination
                skipLabel={'Omitir'}
                onSkip={() => navigate('InstruccionesJuego1')}
                skipToPage={2}
                nextLabel={'Siguiente'}
                onDone={() => navigate('InstruccionesJuego1')}
                showDone
                flatlistProps 
                allowFontScaling 
                containerStyles={
                    {
                        paddingBottom: 20,
                    }
                }
                imageContainerStyles={
                    {
                        padding: 20,
                    }
                }
                transitionAnimationDuration={1000}
                titleStyles={
                    {
                        fontSize: 30,
                        color: Colors.primary,
                        fontWeight: 'bold',
                    }
                }
                subTitleStyles={
                    {
                        fontSize: 20,
                        color: Colors.primary,
                    }
                }
            />
        </View>
    );
};

export default Tutorial1Screen;
