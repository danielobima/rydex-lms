import { Stack, Typography } from "@mui/material";

type Props = { icon: React.ReactNode; text: string; href: string };

const DashboardIconCard: React.FC<Props> = ({ icon, text, href }) => {
  return (
    <Stack
      sx={{
        width: "137px",
        height: "161px",
        bgcolor: "white",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 10px 20px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "14px",
        textDecoration: "none",
      }}
      spacing={3}
      component="a"
      href={href}
    >
      {icon}
      <Typography color="#0D4C6F">{text}</Typography>
    </Stack>
  );
};

export default DashboardIconCard;
