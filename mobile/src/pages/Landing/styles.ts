import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#082032',
        justifyContent: 'center',
        padding: 40,
    },

    banner: {
        width: '100%',
        resizeMode: 'contain',
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#fff',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold',
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
    },

    button: {
        height: 100,
        width: '48%',
        borderRadius: 8,
        padding: 25,
        justifyContent: 'center',
    },

    buttonPrimary: {
    backgroundColor: '#185ADB',
    },

    buttonSecondary: {
        backgroundColor: '#FF4C29',
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 21,
    },

    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: '#fff',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 40,
    },
});

export default styles;