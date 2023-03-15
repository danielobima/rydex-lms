import { Box, Button, Stack } from "@mui/material";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  icon: React.ReactNode;
  href: string;
};

const SideNavButton: React.FC<Props> = ({ children, icon, href }) => {
  const selected = window.location.pathname === href;
  return (
    <Box
      component={"a"}
      href={href}
      sx={{
        width: "100%",
        py: 2,
        px: 4,
        textDecoration: "none",
        transition: "all 0.15s",
        ...(selected
          ? {
              bgcolor: "#22aed1",
            }
          : {
              bgcolor: "#22aed140",
              "&:hover": {
                bgcolor: "#22aed170",
              },
            }),
      }}
    >
      <Stack spacing={1} direction="row" color={"white"}>
        {icon}
        {children}
      </Stack>
    </Box>
  );
};

export default SideNavButton;
