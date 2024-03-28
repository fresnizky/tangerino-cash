import { ClerkProvider } from "@clerk/clerk-expo";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Test from "@components/Test";

const EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY =
  process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

console.log({ EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY });

export default function App() {
  return (
    <ClerkProvider publishableKey={EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <Test />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
