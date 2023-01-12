import { StyleSheet } from "react-native";

export const colors ={
    primary: 'rgba(0, 200, 0, 0.3)',
    topTabIcon: 'green',
    buttonIcon: 'white'
}

export const sizes = {
    bottomTabIcon: 24,
    topTabIcon: 24,
    topTabLabel: 16,
    buttonIcon: 30
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 32,
        marginVertical: 20
    },
    botonGrande: {
        // color: 'yellow',
        width: 100,
        height: 60,
        backgroundColor: 'green',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    botonGrandeTexto: {
        fontSize: 20,
        color: 'yellow'
    },
    drawerContainer: {
        padding: 10,
        alignItems: 'center'
    },
    avatar: {
        width: 80,
        height: 80
    },
    menuContainer:{
        padding: 20,
    },
    menuItem: {
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row'
    },
    nenuItemText:{
        fontSize: 18,
        marginLeft: 10
    }
});