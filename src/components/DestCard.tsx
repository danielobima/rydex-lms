import { Stack, Typography } from "@mui/material";

type Props = {
  icon: React.ReactNode;
  text: string;
  href: string;
  subtitle: string;
};
const DestCard: React.FC<Props> = ({ icon, href, text, subtitle }) => {
  return (
    <Stack
      href={href}
      component={"a"}
      sx={{
        width: "33.33%",
        maxWidth: "320px",
        bgcolor: "white",
        height: "160px",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 10px 20px 10px rgba(0, 0, 0, 0.1)",
        py: 3,
        borderRadius: "12px",
        textDecoration: "none",
      }}
      spacing={3}
    >
      {icon}
      <Stack>
        <Typography sx={{ color: "#0D4C6F", fontWeight: 500 }}>
          {text}
        </Typography>
        <Typography sx={{ color: "#444" }} variant="body2">
          {subtitle}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default DestCard;
