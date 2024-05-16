import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#FFFFFF',
        marginBottom: 10,
    },
    profilePic: {
        width: 50,
        height: 50,
        // backgroundColor: '#666666',
        borderRadius: 25,
        marginRight: 10,
    },
    username: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 2,
        color: '#333333'
    },
    time: {
        fontSize: 13,
        color: '#777777',
    },
    text: {
        fontSize: 15,
        fontWeight: 'semibold',
        marginBottom: 10,
        color: '#333333'
    },
    postImage: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        borderRadius: 100/9,
        backgroundColor: '#666666'
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 5, 
        gap: 30
    },
});

export default styles;