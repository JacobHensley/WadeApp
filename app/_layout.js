import { Stack } from "expo-router";
import "react-native-reanimated";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ffffff",
        },
      }}
    >
      <Stack.Screen
        name="(drawer)"
        options={{
          title: "Back",
          headerShown: false,
          headerStyle: { backgroundColor: "#ffffff" },
        }}
      />
    </Stack>
  );
}
