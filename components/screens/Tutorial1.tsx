import React from 'react';
import { View, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import Colors from '../constants/Color';
import { imagePathsTuto } from "../constants/imagesTuto";
import Spacing from '../constants/Spacing';

type Props = NativeStackScreenProps<RootStackParamList, "Tutorial1">;
const Tutorial1Screen: React.FC<Props> = ({ navigation: { navigate } }: Props) => {
    return (
            <Onboarding
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: <Image source={imagePathsTuto[0]}
                        style={{width: 350, height: 400}}/>,
                        title: "Muestra del patrón de números",
                        subtitle: 'Primero vas a tener unos segundos para memorizar la secuencia de números',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image source={imagePathsTuto[1]}
                        style={{width: 350, height: 400}} />,
                        title: 'Entre los números',
                        subtitle: 'Entre número y número vas a tener unos segundos de espera para hacerlo más difícil',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image source={imagePathsTuto[2]}
                        style={{width: 350, height: 400}} />,
                        title: 'Respuesta',
                        subtitle: "Ahora tendrás que ingresar el número que lograste memorizar, tenés 5 intentos",
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image source={imagePathsTuto[3]}
                        style={{width: 300, height: 400}} />,
                        title: 'Resultados',
                        subtitle: "Finalmente podrás ver cuál era la respuesta correcta. Si no lograste memorizar, no pasa nada. Intentá las veces que quieras!!",
                    },
                ]}
                bottomBarColor={Colors.onPrimary}
                showPagination
                skipLabel={'Omitir'}
                onSkip={() => navigate('InstruccionesJuego2')}
                nextLabel={'Siguiente'}
                onDone={() => navigate('InstruccionesJuego2')}
                flatlistProps 
                transitionAnimationDuration={200}
                containerStyles={{marginTop: -100}}
                titleStyles={{marginTop: -50}}
            />
    );
};

export default Tutorial1Screen;
