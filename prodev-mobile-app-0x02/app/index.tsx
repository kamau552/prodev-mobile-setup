import { Text, View, StyleSheet, Image, ImageBackground, Dimensions, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("@/assets/images/background-image.png")}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.container}>
            <View style={styles.companyLogo}>
              <Image source={require("@/assets/images/Logo.png")} />
            </View>

            <View style={styles.textGroup}>
              <Text style={styles.textLarge}>Find your favorite place here</Text>
              <Text style={styles.textSmall}>The best prices for over 2 </Text>
              <Text style={styles.textSmall}>million properties worldwide</Text>
            </View>

            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
              <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button}>
                  <Text style={{ ...styles.textSmall, color: "black" }}>Join here</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.transparentButton}>
                  <Text style={styles.textSmall}>Sign In</Text>
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: "center", paddingVertical: 20 }}>
                <Text style={{ color: "white" }}>Continue to home</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    objectFit: "cover",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,

  },
  companyLogo: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 40,
  },
  textGroup: {
    alignItems: "center",
    marginBottom: 60,
  },
  textLarge: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  textSmall: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 24,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 25,
    marginRight: 10,
  },
  transparentButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "white",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 25,
  },
});