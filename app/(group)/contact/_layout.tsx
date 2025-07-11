import { Slot } from "expo-router";
import { Text, View } from "react-native";

export default function MiddleLayout() {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "red" }}>
      <Text style={{ color: "white" }}>I am a wrapper Slot</Text>
      <Slot />
    </View>
  );
}
