import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

export default function Details(props) {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.modalContainer}>

                <TouchableOpacity style={styles.btnVoltar} onPress={props.voltar} >
                    <Text style={{color: '#fff', fontSize: 16}}>Voltar</Text>
                </TouchableOpacity>

                <Text style={styles.titulo}>{props.filme.nome}</Text>
                <Text style={styles.sinopse}>Sinopse:</Text>
                <Text style={styles.descricao}>{props.filme.sinopse}</Text>
            
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    modalContainer: {
        width: '100%',
        height: '80%',
        backgroundColor: '#121212',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,

    },
    btnVoltar:{
        backgroundColor: '#e52246',
        padding: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    titulo:{
        textAlign: 'center',
        color: '#fff',
        padding: 10,
        fontSize: 28,
        fontWeight: 'bold'
    },
    sinopse:{
        color: '#fff',
        fontSize: 20,
        marginBottom: 8,
        marginLeft: 10
    },
    descricao:{
        color: '#fff',
        marginLeft: 10,
        marginRight: 10,
        fontSize: 17
    }
})