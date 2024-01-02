import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container: {
       backgroundColor: '#1A1A1A',
       flex: 1, 
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0D0D0D',
        height: 173,
    },
    textHeader: {
        color: '#4EA8DE',
        marginLeft: 11
    },
    textPurple: {
        color: '#5E60CE'
    },
    containerList: {
        width: '100%',
        flexDirection: 'row',
        position: 'relative',
        justifyContent: 'center',
        alignContent: 'center',
    },
    inputWithBtn: {
        width: '90%',
        flexDirection: 'row',
        position: 'absolute',
        top: -26,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#262626',
        color: '#F2F2F2',
        flex: 1,
        height: 54,
        marginRight: 4,
        borderRadius: 6,
        padding: 16
    },
    list: {
        marginTop: 56,
        width: '90%'
    },
    listHeader: { 
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 22,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
    },
    createdView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    createdText: {
        fontSize: 14,
        fontWeight: '700',
        color: '#4EA8DE'
    },
    finishedView: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    finishedText: {
        fontSize: 14,
        fontWeight: '700',
        color: '#8284FA'
    },
    count: {
        marginLeft: 8,
        backgroundColor: '#333',
        paddingHorizontal: 8,
        borderRadius: 999,
        color: '#D9D9D9',
        fontWeight: '700',
        textAlign: 'center',
    }
})