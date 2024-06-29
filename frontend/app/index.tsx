import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import PromptBar from "@/components/PromptBar";
import { Box, Paper, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Index() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Paper sx={{ bgcolor: "#1f1f1f", height: '100vh', width: '100vw', color: 'white' }}>
        <PromptBar />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "#e8e8e8" }}>hurehvuiehhuiuhiuhiuhiuhuhuihuih.</Typography>

        </View>
      </ Paper>
    </ThemeProvider>

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