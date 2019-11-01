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
        flex: 4,
        padding: 10,
    },
    statusLeilao: {
        justifyContent: "center",
        //alignContent: "center",
        marginBottom: 20,
        marginTop: 10,
        paddingHorizontal: 50,
        backgroundColor: '#d3d3d3',
        borderRadius: 10,
        //flex: 3,
    },
    callLeilao: {
        alignContent: "center",
        textAlign: "center",
        padding: 6
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