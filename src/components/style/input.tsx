import React, { FC, useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { GlobalContext } from "../../contexts/global-context";

interface ResponsiveSearchInputProps {
  value: string;
  placeholder?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  inputRef?: React.RefObject<HTMLInputElement | null>;
}

const ResponsiveSearchInput: FC<ResponsiveSearchInputProps> = ({
  value,
  setValue,
  inputRef,
  placeholder,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const context = useContext(GlobalContext);

  return (
    <TextField
      sx={{
        // Definindo responsividade no sx
        maxWidth: "300px", // Limita o tamanho máximo
        width: "100%", // Preenche 100% da largura disponível
        "@media (max-width: 600px)": {
          maxWidth: "100%", // Se a tela for pequena, ocupa 100% da largura
        },
        backgroundColor:
          context?.theme === "dark" ? context.colors.selection : "",

        "& .MuiInputBase-input": {
          color: context?.theme === "dark" ? context.colors.text : "", // Cor do texto digitado
        },
        borderRadius: "5px",
      }}
      placeholder={!isFocused ? placeholder || "Pesquisar" : ""} // Placeholder quando não está focado
      onFocus={handleFocus} // Quando o input é focado
      onBlur={handleBlur} // Quando o input perde o foco
      label={isFocused ? placeholder || "Pesquisar" : ""} // Label visível somente quando focado
      variant="outlined"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      inputRef={inputRef || null} // Referência do input
    />
  );
};

export default ResponsiveSearchInput;
