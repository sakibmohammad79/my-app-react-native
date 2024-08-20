import {
  Image,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";

type TRowProps = {
  level: string;
  value: string;
};

const RowView = ({ level, value }: TRowProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
      }}
    >
      <Text
        style={{
          fontFamily: "inter-reguler",
          fontSize: 12,
          color: "#303030",
          letterSpacing: 2,
          textTransform: "uppercase",
        }}
      >
        {level}
      </Text>
      <Text
        style={{ fontFamily: "inter-bold", fontSize: 20, color: "#303030" }}
      >
        {value}
      </Text>
    </View>
  );
};

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
          marginTop: 54,
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
        <View style={{ marginBottom: 48 }}>
          {/* GREETING */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={require("../../assets/images/clock-sun.png")} />
            <Text
              style={{
                marginLeft: 8,
                letterSpacing: 3,
                fontFamily: "inter-reguler",
                fontSize: 15,
                color: "white",
              }}
            >
              GOOD MORNING
            </Text>
          </View>
          {/* time */}
          <View style={{ marginTop: 4 }}>
            <Text style={{ color: "white" }}>
              <Text style={{ fontSize: 80, fontFamily: "inter-bold" }}>
                11:37
              </Text>
              <Text>BST</Text>
            </Text>
          </View>
          {/* location */}
          <View style={{ marginTop: 4 }}>
            <Text
              style={{
                fontFamily: "inter-bold",
                color: "white",
                letterSpacing: 3,
              }}
            >
              IN LONDON, UK
            </Text>
          </View>
          {/* button */}
          <TouchableOpacity
            onPress={() => {}}
            style={{
              flexDirection: "row",
              height: 40,
              width: 150,
              backgroundColor: "white",
              borderRadius: 30,
              justifyContent: "space-between",
              marginTop: 48,
              paddingLeft: 16,
              paddingRight: 4,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "inter-bold",
                fontSize: 14,
                letterSpacing: 3,
                color: "#000",
              }}
            >
              MORE
            </Text>
            <Image
              source={require("../../assets/images/clock-arrow-down.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* expanded portion */}
      <View
        style={{
          backgroundColor: "white",
          opacity: 0.8,
          paddingHorizontal: 26,
          paddingVertical: 48,
        }}
      >
        <RowView level={"current timezone"} value={"Europe/London"}></RowView>
        <RowView level={"day of the year"} value={"295"}></RowView>
        <RowView level={"day of the week"} value={"5"}></RowView>
        <RowView level={"week number"} value={"42"}></RowView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
