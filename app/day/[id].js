import { Dimensions, Text, View, ScrollView, SafeAreaView } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { useLocalSearchParams, Stack, Link } from "expo-router";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export function Card({ id }) {
  return (
    <Link href={"job/" + id}>
      <View style={styles.card}>
        <Text>{id}</Text>
      </View>
    </Link>
  );
}

export default function Page() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, height: windowHeight, margin: 0, padding: 0 }}>
      <Stack.Screen
        options={{
          title: id,
        }}
      />
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ width: windowWidth, paddingTop: 20 }} contentContainerStyle={{ alignItems: "center", paddingBottom: 100 }}>
          <Card id="1"></Card>
          <Card id="2"></Card>
          <Card id="3"></Card>
          <Card id="4"></Card>
          <Card id="5"></Card>
          <Card id="6"></Card>
          <Card id="7"></Card>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
  },

  card: {
    backgroundColor: "#ffffff",
    width: windowWidth * 0.8,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});
