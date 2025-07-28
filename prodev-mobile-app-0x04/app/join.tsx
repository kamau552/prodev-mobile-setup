import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "@/styles";
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from "@/constants";
import { Link } from "expo-router";

export default function JoinScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Header Section */}
        <View style={styles.navGroup}>
          <Image source={HEROLOGOGREEN} />
        </View>

        {/* Title Section */}
        <Text style={styles.largeText}>Create your</Text>
        <Text style={styles.largeText}>Account</Text>
        <Text style={styles.smallText}>
          Enter your details to create an account.
        </Text>

        {/* Form Section */}
        <View style={styles.formGroup}>
          <View>
            <Text style={styles.placeholderText}>Full Name</Text>
            <TextInput style={styles.inputField} />
          </View>
          
          <View style={{ marginTop: 20 }}>
            <Text style={styles.placeholderText}>Email</Text>
            <TextInput 
              keyboardType="email-address" 
              style={styles.inputField} 
            />
          </View>
          
          <View style={{ marginTop: 20 }}>
            <Text style={styles.placeholderText}>Password</Text>
            <View style={styles.passwordGroup}>
              <TextInput 
                style={{ flex: 1 }} 
                secureTextEntry
              />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Join</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerGroup}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider}></View>
        </View>

        {/* Social Login Buttons */}
        <View style={styles.socialMediaButtonGroup}>
          <TouchableOpacity style={styles.socialMediaButton}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
              <Image source={GOOGLELOGO} />
              <Text style={styles.socialMediaButtonText}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialMediaButton}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
              <Image source={FACEBOOKLOGO} />
              <Text style={styles.socialMediaButtonText}>
                Continue with Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Sign In Link */}
        <View style={styles.subTextGroup}>
          <Text style={styles.subText}>Already have an account?</Text>
          <Link href="/signin" asChild>
            <TouchableOpacity>
              <Text style={styles.subTextJoin}>Sign In</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}