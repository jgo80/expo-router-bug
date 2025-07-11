import { Link, router } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { Button, Text, View } from "react-native";

const Page = () => {
  const { contactId } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Contact {contactId}</Text>
      <Button
        title="Dismiss"
        onPress={() => {
          router.dismissAll();
        }}
      />
      <Link href={"/(group)/contact/123/test"}>Test</Link>
    </View>
  );
};

export default Page;
