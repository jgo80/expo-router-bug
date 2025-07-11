import { Link, router } from "expo-router";
import { Button, Text, View } from "react-native";

const Page = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Text>Home</Text>
      <Link href="/contact/123">
        <Text style={{ color: "blue" }}>Link to Contact</Text>
      </Link>
      <Button
        title="Imperative to Contact"
        onPress={() => {
          router.navigate("/contact/123");
        }}
      />
    </View>
  );
};

export default Page;
