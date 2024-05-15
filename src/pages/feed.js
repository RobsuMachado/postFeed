import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Post from '../components/Post/index';

const Posts = [
    {
        profilePic: require('../assets/goku.png'),
        username: "Robson Henrique Moura Machado",
        time: "Há 1 hora",
        text: "Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis, nisi eros vermeio. Manduma pindureta quium dia nois paga. Eu nunca mais boto a boca num copo de cachaça, agora eu só uso canudis! Bota 1 metro de cachacis aí pra viagem!",
        image: require('../assets/paisagem.png'),
        // onComment: console.log('Comentário pressionado'),
        // onLike: console.log('Favorito pressionado'),
        // onShare: console.log('Compartilhar pressionado'),
    },
];

export default function Feed() {
    const navigation = useNavigation();
    return (
        <View>
            {Posts.map((data, index) => (
                <Post
                    key={index}
                    profilePic={data.profileImage}
                    username={data.user}
                    time={data.time}
                    text={data.text}
                    image={data.image}
                    // onComment={() => console.log('Comentário pressionado')}
                    // onLike={() => console.log('Favorito pressionado')}
                    // onShare={() => console.log('Compartilhar pressionado')}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
})