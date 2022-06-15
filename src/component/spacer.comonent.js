// import React from "react";
// import { View } from "react-native";
import styled from "styled-components/native";

// const TopSmall = styled.View`
//   margin-top: ${(props) => props.theme.space[2]};
// `;
// const TopMedium = styled.View`
//   margin-top: ${(props) => props.theme.space[3]};
// `;
// const TopLarge = styled.View`
//   margin-top: ${(props) => props.theme.space[4]}; ;
// `;
// const LeftSmall = styled.View`
//   margin-left: ${(props) => props.theme.space[2]}; ;
// `;
// const LeftMedium = styled.View`
//   margin-left: ${(props) => props.theme.space[3]};
// `;
// const LeftLarge = styled.View`
//   margin-left: ${(props) => props.theme.space[4]}; ;
// `;

// export const Spacer = ({ variant }) => {
//   if (variant === "top.small") {
//     return <TopSmall />;
//   }
//   if (variant === "top.medium") {
//     return <TopMedium />;
//   }
//   if (variant === "top.large") {
//     return <TopLarge />;
//   }
//   if (variant === "left.small") {
//     return <LeftSmall />;
//   }
//   if (variant === "left.medium") {
//     return <LeftMedium />;
//   }
//   if (variant === "left.large") {
//     return <LeftLarge />;
//   }
// };

const sizeVarriant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVarriant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};
const getVariant = (position, size) =>
  `${positionVarriant[position]}: ${sizeVarriant[size]}`;

export const Spacer = styled.View`
  ${({ position, size }) => getVariant(position, size)}
`;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
