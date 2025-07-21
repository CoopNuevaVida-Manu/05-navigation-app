import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";
import React from "react";
import { SafeAreaView, View } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <Link href={"/products"} asChild>
          <CustomButton color="primary">Productos</CustomButton>
        </Link>
        <CustomButton color="primary" onPress={() => router.push("/products")}>
          Productos
        </CustomButton>
        {/* <Text>Home</Text>

        <Link className="mb-5" href={"/products"}>Productos</Link>
        <Link className="mb-5" href={"/profile"}>Perfil</Link>
        <Link className="mb-5" href={"/settings"}>Ajustes</Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
