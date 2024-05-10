import { Text, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { useLocalSearchParams, Stack } from "expo-router";

export default function App() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: id,
        }}
      />
      <Text>Job: {id}</Text>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
