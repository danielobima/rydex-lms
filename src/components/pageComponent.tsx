import { Stack, SxProps } from "@mui/material";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
  sx?: SxProps;
  spacing?: number;
};
const PageComponent: FC<Props> = ({ children, sx, spacing }) => {
  return (
    <Stack
      sx={{
        width: "calc(100% - 13rem)",
        px: 4,
        py: 4,
        overflow: "auto",
        ...sx,
      }}
      spacing={spacing ?? 2}
    >
      {children}
    </Stack>
  );
};
export default PageComponent;
