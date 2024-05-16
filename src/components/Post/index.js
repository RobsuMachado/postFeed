import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

const Post = ({ 
    profilePic,
    username,
    time,
    text,
    image,
    onComment,
    onLike,
    onShare
}) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' , marginBottom: 4}}>
                <Image source={ profilePic } style={styles.profilePic} />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.username}>{username}</Text>
                    <Text style={styles.time}>{time}</Text>
                </View>
            </View>
            <Text style={styles.text}>{text}</Text>

            {image && <Image source={ image } style={styles.postImage} />}

            <View style={styles.actionContainer}>
                <TouchableOpacity onPress={onComment}>
                <Feather name="bookmark" size={26} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity onPress={onLike}>
                <Feather name="message-circle" size={26} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity onPress={onShare}>
                <Feather name="share-2" size={26} color="#333" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Post;




