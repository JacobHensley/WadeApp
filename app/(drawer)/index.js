import { Text, View, ScrollView, SafeAreaView, Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { Link } from "expo-router";

EStyleSheet.build();

const windowWidth = Dimensions.get("window").width;

export function Day({ id }) {
  return (
    <Link href={"day/" + id} style={{ margin: 10 }}>
      <View style={styles.card}>
        <Text>{id}</Text>
      </View>
    </Link>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ width: "100%" }} contentContainerStyle={styles.container}>
        <Day id={"Monday"}></Day>
        <Day id={"Tuesday"}></Day>
        <Day id={"Wednesday"}></Day>
        <Day id={"Thursday"}></Day>
        <Day id={"Friday"}></Day>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  card: {
    backgroundColor: "#ffffff",
    width: windowWidth * 0.8,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
