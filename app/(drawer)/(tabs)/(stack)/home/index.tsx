import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { Link, router, useNavigation } from "expo-router";
import React from "react";
import { SafeAreaView, View } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <SafeAreaView>
      <View className="px-10 mt-7">
        <CustomButton
          className="mb-2"
          color="primary"
          onPress={() => router.push("/products")}
        >
          Productos
        </CustomButton>

        <CustomButton
          className="mb-2"
          color="secondary"
          onPress={() => router.push("/profile")}
        >
          Perfil
        </CustomButton>

        <CustomButton
          className="mb-2"
          color="tertiary"
          onPress={() => router.push("/settings")}
        >
          Ajustes
        </CustomButton>

        <Link href={"/products"} asChild>
          <CustomButton className="mb-2" variant="text-only" color="primary">
            Productos
          </CustomButton>
        </Link>

        <CustomButton onPress={onToggleDrawer}>abrir menu</CustomButton>
        {/* <Text>Home</Text>

        <Link className="mb-5" href={"/products"}>Productos</Link>
        <Link className="mb-5" href={"/profile"}>Perfil</Link>
        <Link className="mb-5" href={"/settings"}>Ajustes</Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
