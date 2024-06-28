import * as React from 'react';
import { StyleSheet, Text, View } from "react-native";
import PostDisplay from "./components/objects/PostDisplay";

export default function Index() {
  // The reaction modal for posts will belong to the homepage
  // Will need to fetch all user posts and then make a PostDisplay for each
  const [reactionModalOpen, setReactionModalOpen] = React.useState(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PostDisplay posterUserName = {'posterUserName'} posterUserImage={'DP'} posterUserStreak={3} imagePostedByUser={'yur'}
      setReactionModalOpen={setReactionModalOpen}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  }
})