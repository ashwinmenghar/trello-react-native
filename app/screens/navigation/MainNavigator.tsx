// MainNavigator.tsx

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import BoardList from "../BoardList";
import CardList from "../CardList";
import { ParamsList } from "../../types/paramList";

const Stack = createNativeStackNavigator<ParamsList>();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Board">
        <Stack.Screen name="Board" component={BoardList} />
        <Stack.Screen
          name="CardList"
          // @ts-ignore
          component={CardList}
          options={({
            route,
          }: {
            route: RouteProp<ParamsList, "CardList">;
          }): NativeStackNavigationOptions => ({
            title: route.params.title,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
