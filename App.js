import React from 'react';
import { View, StyleSheet } from 'react-native';
import Post from './components/Post';

const App = () => {
    return (
        <View style={styles.container}>
            <Post
                profilePic="https://example.com/profile.jpg"
                username="Robson Henrique Moura Machado"
                time="Há 1 hora"
                text="Este é um exemplo de texto do post."
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

export default App;
