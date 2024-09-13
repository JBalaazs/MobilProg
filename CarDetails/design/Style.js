import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

    /*Home:*/

    containerHome: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    boxHome: {
        padding: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        elevation: 7,
        flexDirection: 'column',
        gap: 20
    },

    /*List:*/

    containerList: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },

    detailsList: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
    },

    textList: {
        fontSize: 18,
    },

    detailsAndButtonList: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 25
    },

    hrList: {
        width: 200,
        margin: 40
    },

    /*Modify:*/

    containerModify: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 20,
    },

    inputModify: {
        borderWidth: 1,
        width: 200,
        textAlign: 'center',
        borderColor: 'black',
        borderRadius: 20
    },

    /*AddDetails:*/

    containerAddDetails: {

        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 20,

    },

    inputAddDetails: {
        borderWidth: 1,
        width: 200,
        textAlign: 'center',
        borderColor: 'black',
        borderRadius: 20
    }

})