import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

function CustomButton({
  title,
  onPress,
  titleSize = 20,
  containerStyle,
  disabled = false,
  opacity = 1,
  backgroundColor,
  onPressedBackgroundColor,
  iconElement,
  textColor = "#fff",
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        containerStyle,
        {
          backgroundColor: pressed
            ? onPressedBackgroundColor || "#125280"
            : backgroundColor || "#1C6BA4",
        },
      ]}
      onPress={onPress}
      disabled={disabled}
      opacity={opacity}
    >
      {iconElement ? iconElement : null}
      <Text style={{ color: textColor, fontSize: titleSize }}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 40,
    borderRadius: 8,
    marginVertical: 8,
  },
});

export default CustomButton;
