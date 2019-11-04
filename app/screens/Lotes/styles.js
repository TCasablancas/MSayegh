import { StyleSheet, } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    mainTitle: {
        fontFamily: 'avenir-black',
        fontSize: 24,
        textAlign: "center",
        marginTop: 20
    },
    containerHeader: {
        
    },
    loader: {
        marginTop: 320,
        alignItems: "center", 
        justifyContent: "center",
    },
    statusBar: {
        //flex: 1,
        padding: 10,
        flexDirection: "row",
        backgroundColor: '#e0e0e0',
        borderRadius: 6,
        marginBottom: 20,
    },
    statusItem: {
        padding: 10,
    },
    first: {
        flex: 3,
    },
    second: {
        flex: 2
    },
    third: {
        flex: 2
    },
    fourth: {
        flex: 3
    },
    btnRegras: {
        backgroundColor: '#000',
        borderRadius: 4,
        padding: 10,
    },
    btnRegrasText: {
        fontSize: 10,
        color: '#fff',
        textAlign: "center",
    } ,
    statusLeilao: {
        marginBottom: 20,
        marginTop: 10,
        borderRadius: 10,
        paddingHorizontal: 90,
        borderRadius: 15,
        overflow: "hidden",
        alignContent: "center",
    },
    callLeilao: {
        //alignContent: "center",
        textAlign: "center",
        padding: 6,
        paddingHorizontal: 50,
        backgroundColor: '#d3d3d3',
        borderRadius: 15,
    },
    statusLote:{ 
        fontFamily: 'avenir-black',
        fontSize: 12,
        marginTop: 2,
        textAlign: "center",
    },
    call: {
        fontSize: 12,
        fontFamily: 'avenir-black',
        color: '#444',
    },
    callData: {
        fontFamily: 'avenir-roman',
        fontSize: 16,
    },
    containerLote: {
        paddingHorizontal: 6,
        flexDirection: "row",
        flex: 1,
    },
    itemLote: {
        flex: 2,
        padding: 10,
        backgroundColor: '#d3d3d3',
        borderRadius: 6,
        marginVertical: 6,
    },
    titleLote: {
        fontFamily: 'avenir-black',
        fontSize: 14,
    },
});

module.exports = styles;