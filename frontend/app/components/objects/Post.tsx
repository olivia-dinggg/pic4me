import React from 'react';
import { StyleSheet, Image } from 'react-native';

const Post = () => {
  return (
    <>
      <div style={styles.postInfo}>
        <div style={styles.postInfoPicture}></div>
        <div style={styles.postInfoDetails}>
          <div>Name</div>
          <div>Date</div>
        </div>
      </div>
      <Image 
        source={{ uri: 'https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/b506d9b05ae02f1b21235a70edab721b.png' }}
        style={styles.post}
      />
    </>
  )
}

const styles = StyleSheet.create({
  postContainer: {
    display: "flex", 
    justifyContent: "center", 
    alignItems:"center", 
    gap: 10
  },
  post: { 
    width: "100%", 
    aspectRatio: 9/16 
  },
  postInfo: {
    height: 55,
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingLeft: 10
  },
  postInfoDetails: {
    paddingLeft: 10
  },
  postInfoPicture: {
    borderRadius: 50,
    height: 50,
    width: 50,
    backgroundColor: "red"
  }
})

export default Post;