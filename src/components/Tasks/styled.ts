import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        
        marginTop: 8,
        backgroundColor: '#262626',
        paddingVertical: 12,
        paddingLeft: 12,
        paddingRight: 8,
        borderRadius: 8
    }, 
    descriptionTask: {
        marginHorizontal : 8,
        maxWidth: 235,
        fontSize: 14,
        color: '#F2F2F2',
        flex: 1
    },
    descriptionTaskFinished: {
        textDecorationLine: 'line-through',
        color: '#808080'
    }

})