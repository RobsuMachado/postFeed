import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const Post = ({ profilePic, username, time, text, image, onComment, onLike, onShare }) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={{ uri: profilePic }} style={styles.profilePic} />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.username}>{username}</Text>
                    <Text style={styles.time}>{time}</Text>
                </View>
            </View>
            <Text style={styles.text}>{text}</Text>

            {image && <Image source={{ uri: image }} style={styles.postImage} />}

            <View style={styles.actionContainer}>
                <TouchableOpacity onPress={onComment}>
                    <Text>Comentar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onLike}>
                    <Text>Favorito</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onShare}>
                    <Text>Compartilhar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Post;




