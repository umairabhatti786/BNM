import { Dimensions } from "react-native";

export const windowWidth = Dimensions.get("screen").width;
export const windowHeight = Dimensions.get("screen").height;

export const formatPhoneNumber = (text) => {
  // Remove non-numeric characters
  const cleaned = ('' + text).replace(/\D/g, '');
  
  // Handle different phone number lengths
  const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

  if (match) {
    const formatted = [
      match[1] ? `(${match[1]}` : '',
      match[2] ? `)-${match[2]}` : '',
      match[3] ? `-${match[3]}` : '',
    ].join('');
    return formatted;
  }
  return text;
};

export const DropDownData = [
    {
      id: 1,
      label: "task1",
      value: "Andrede",
    },
    {
      id: 2,
      label: "task2",
      value: "Herr",
    },
  ];
