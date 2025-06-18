import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Header</Text>
      </View>
      {/* <View style={styles.content}>
        <Text style={styles.text}>Content Area</Text>
      </View> */}
      <View style={{ flex: 2, backgroundColor: "lightblue" }} />
      <View style={{ flex: 1, backgroundColor: "lightgreen" }} />
      <View style={styles.footer}>
        <Text style={styles.text}>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    gap: 10,
  },
  header: {
    backgroundColor: "#ff6347", // Tomato color
    justifyContent: "center",
    padding: 20,
    height: 80,
  },
  content: {
    backgroundColor: "#4169e1", // Royal blue color
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  footer: {
    backgroundColor: "#008000", // Green color
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    height: 60,
  },
  text: {
    color: "#ffffff", // White text color
    textAlign: "center",
    fontSize: 20,
  },
});
