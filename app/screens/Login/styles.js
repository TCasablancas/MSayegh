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
        fontSize: 24,
        fontFamily: 'avenir-roman',
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        marginBottom: 20,
        padding: 10,
    },
    btnText: {
        fontSize: 24,
        color: '#000',
        fontFamily: 'avenir-black',
        textAlign: "center",
    },
    btnSignup: {
        backgroundColor: '#000',
        marginTop: 30,
        padding: 20,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#fff',
    },
    btnLogin: {
        backgroundColor: '#fff',
        marginTop: 30,
        padding: 20,
        borderRadius: 6,
    }
});

module.exports = styles;