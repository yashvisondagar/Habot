// ReusableButton.tsx
import React from "react";
import Button from "@mui/material/Button";

interface ReusableButtonProps {
  label: string; // Text to display on the button
  onClick?: () => void; // Action when the button is clicked
  borderColor?: string; // Custom border color
  backgroundColor?: string; // Custom background color
  textColor?: string; // Custom text color
}

const ReusableButton: React.FC<ReusableButtonProps> = ({
  label,
  onClick,
  borderColor = "transparent", // Default: no border
  backgroundColor = "#1976d2", // Default: MUI primary button color
  textColor = "#fff", // Default: white text
}) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        border: `2px solid ${borderColor}`,
        backgroundColor: backgroundColor,
        color: textColor,
        "&:hover": {
          backgroundColor: `${backgroundColor}cc`, // Slightly transparent on hover
        },
      }}
    >
      {label}
    </Button>
  );
};

export default ReusableButton;
