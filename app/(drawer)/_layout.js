import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Week View",
            title: "Week View",
            headerStyle: { backgroundColor: "#ffffff" },
            contentStyle: { backgroundColor: "#ffffff" },
          }}
        />
        <Drawer.Screen
          name="overview"
          options={{
            drawerLabel: "Overview",
            title: "Overview",
            headerStyle: { backgroundColor: "#ffffff" },
            contentStyle: { backgroundColor: "#ffffff" },
          }}
        />
        <Drawer.Screen
          name="accounting"
          options={{
            drawerLabel: "Accounting",
            title: "Accounting",
            headerStyle: { backgroundColor: "#ffffff" },
            contentStyle: { backgroundColor: "#ffffff" },
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: "Settings",
            title: "Settings",
            headerStyle: { backgroundColor: "#ffffff" },
            contentStyle: { backgroundColor: "#ffffff" },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
