import { router } from "expo-router";
import { Button, Text, View } from "react-native";

const Page = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Test</Text>
      <Button
        title="Dismiss"
        onPress={() => {
          router.dismiss();
        }}
      />
    </View>
  );
};

export default Page;
