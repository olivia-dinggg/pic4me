import * as React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import PostDisplay from "./components/objects/PostDisplay";
import { fileToDataUrl } from './helpers';
import Post from './components/objects/Post'

export default function Index() {
  // The reaction modal for posts will belong to the homepage
  // Will need to fetch all user posts and then make a PostDisplay for each
  const [reactionModalOpen, setReactionModalOpen] = React.useState(false);

  return (
    <View
      style={styles.postContainer}
    >
      <Post />
    </View>
    // <ScrollView>
    //   <View style={{
    //     alignItems: "center",
    //     overflow: "scroll",
    //     flexDirection: "column",
    //     justifyContent: "space-between",
    //     gap: 30,
    //     marginTop: 20,
    //   }}>
    //     <PostDisplay
    //       posterUserName = {'posterUserName'} 
    //       posterUserImage={'DP'} 
    //       posterUserStreak={3} 
    //       imagePostedByUser={'data:image/jpeg;base64,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'}
    //       setReactionModalOpen={setReactionModalOpen}
    //     />
    // </View>
      
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  postContainer: {
    display: "flex", 
    justifyContent: "center", 
    alignItems:"center", 
    backgroundColor: "blue", 
    gap: 10
  },
  post: { 
    width: "80%", 
    aspectRatio: 1/2 
  },
  postInfo: {
    height: 40,
    width: "90%",
    display: "flex",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20
  },
  postInfoDetails: {
    paddingLeft: 10
  },
  postInfoPicture: {
    borderRadius: 50,
    height: 30,
    width: 30,
    backgroundColor: "red"
  }
})