import React, { useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Modal
} from 'react-native'
import Details from '../Details';

export default function Filmes({data}){

    const [visibleModal, setVisibleModal] = useState(false)

    return(
    <SafeAreaView>
        <View style={styles.card}>
            <Text style={styles.titulo}>{data.nome}</Text>
            <Image 
                source={{uri: data.foto}}
                style={styles.capa}
            />

            <View style={styles.areaBotao}>
                <TouchableOpacity style={styles.botao} onPress={ () => { setVisibleModal(true)} }>
                    <Text style={styles.botaoTexto}>Leia mais</Text>
                </TouchableOpacity>
            </View>

            <Modal transparent={true} animationType="slide" visible={visibleModal}>
                    <Details filme={data} voltar={() => setVisibleModal(false)}/>
            </Modal>
        </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#fff',
        margin: 15,
        elevation: 2,
    },
    capa:{
        height: 250,
        zIndex: 2
    },
    titulo:{
        paddingBlock: 15,
        fontSize: 18,
        fontWeight: 'bold'
    },
    areaBotao:{
        alignItems: 'flex-end',
        marginTop: -45,
        zIndex: 9
    },
    botao:{
        width: 100,
        backgroundColor: '#09a6ff',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    botaoTexto:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})