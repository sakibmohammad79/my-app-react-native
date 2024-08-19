import {
  Image,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  ImageBackground,
} from "react-native";

import {
  Inter_400Regular,
  Inter_700Bold,
  Inter_900Black,
  useFonts,
} from "@expo-google-fonts/inter";

export default function HomeScreen() {
  const [fonstLoaded] = useFonts({
    "inter-reguler": Inter_400Regular,
    "inter-bold": Inter_700Bold,
  });
  if (!fonstLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <ImageBackground
      source={require("../../assets/images/clock-app-bg.png")}
      style={{ flex: 1 }}
    >
      <View
        style={{
          paddingHorizontal: 26,
          marginTop: 42,
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        {/* upper view */}
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontFamily: "inter-reguler",
                fontSize: 12,
                color: "white",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              fugit delectus repudiandae modi, ipsam ad dolorum. Ipsam unde
              quaerat, doloremque saepe dolor similique? Soluta modi, corporis
              quae cupiditate autem eum.
            </Text>
            <Text
              style={{
                fontFamily: "inter-bold",
                fontSize: 12,
                color: "white",
                marginTop: 8,
              }}
            >
              Lorem ipsum
            </Text>
          </View>

          <Image source={require("../../assets/images/clock-refresh.png")} />
        </View>

        {/* bottom view */}
        <View></View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
