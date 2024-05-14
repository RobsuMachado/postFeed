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
        backgroundColor: '#666666',
        borderRadius: 25,
        marginRight: 10,
    },
    username: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333333'
    },
    time: {
        fontSize: 14,
        color: '#777777',
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
        color: '#333333'
    },
    postImage: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        backgroundColor: '#666666'
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default styles;