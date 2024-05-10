import { Text, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
