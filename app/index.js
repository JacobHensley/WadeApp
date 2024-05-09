import { Text, View, ScrollView, SafeAreaView, Dimensions } from "react-native";
import { Link } from "expo-router";
import EStyleSheet from "react-native-extended-stylesheet";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

EStyleSheet.build();

export function Day({ id }) {
  return (
    <Link href={"day/" + id} style={styles.cardLink}>
      <View style={styles.card}>
        <Text>{id}</Text>
      </View>
    </Link>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.container}
      >
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
    justifyContent: "center",
    justifyContent: "space-evenly",
  },
  scroll: {
    width: "100%",
  },

  cardLink: {
    margin: 10,
  },

  card: {
    backgroundColor: "#f4511e",
    width: windowWidth * 0.8,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
