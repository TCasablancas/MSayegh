import { StyleSheet, } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 60,
        marginTop: 300,
    },
    title: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'avenir-black',
    },
    input: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'avenir-roman',
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        marginBottom: 20,
        padding: 10,
    },
    btnText: {
        fontSize: 20,
        color: '#000',
        fontFamily: 'avenir-black',
        textAlign: "center",
    },
    btnSignup: {
        backgroundColor: '#000',
        marginTop: 0,
        paddingVertical: 13,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#fff',

    },
    btnSignupText: {
        color: '#fff',
        textAlign: "center",
        fontSize: 20,
        fontFamily: 'avenir-roman',
    },
    btnLogin: {
        backgroundColor: '#fff',
        marginTop: 30,
        paddingVertical: 13,
        borderRadius: 6,
        marginBottom: 20,
    },
    darkLabel: {
        color: '#fff',
        fontFamily: 'avenir-black',
        height: 30,
    },
    darkLabelCenter: {
        color: '#fff',
        fontFamily: 'avenir-black',
        height: 30,
        textAlign: "center",
    },
});

module.exports = styles;