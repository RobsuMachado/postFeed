import React from 'react';
import { View, StyleSheet } from 'react-native';
import Post from './components/Post';

const Posts = [
    {
        profilePic: require('./src/assets/goku.png'),
        username: "Robson Henrique Moura Machado",
        time:"Há 1 hora",
        text:"Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis, nisi eros vermeio. Manduma pindureta quium dia nois paga. Eu nunca mais boto a boca num copo de cachaça, agora eu só uso canudis! Bota 1 metro de cachacis aí pra viagem!",
        image: require('./src/assets/paisagem.png'),
        onComment: console.log('Comentário pressionado'),
        onLike: console.log('Favorito pressionado'),
        onShare: console.log('Compartilhar pressionado'),
    },
];

const App = () => {
    return (
        <View style={styles.container}>
            <Post
                profilePic= ''
                username="Robson Henrique Moura Machado"
                time="Há 1 hora"
                text="Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis, nisi eros vermeio. Manduma pindureta quium dia nois paga. Eu nunca mais boto a boca num copo de cachaça, agora eu só uso canudis! Bota 1 metro de cachacis aí pra viagem!"
                image= ''
                onComment={() => console.log('Comentário pressionado')}
                onLike={() => console.log('Favorito pressionado')}
                onShare={() => console.log('Compartilhar pressionado')}
            />
        </View>
    );
};

export default function FeedPublications() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {modelPublications.map((data, index) => (
                    <Publications
                        key={index}
                        profileImage={data.profileImage}
                        user={data.user}
                        text={data.text}
                        image={data.image}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}
