import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const Post = ({ profilePic, username, time }) => {
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
        </View>
    );
};

export default Post;




