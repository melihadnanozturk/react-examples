import { Box, Container, Paper, Typography } from "@mui/material";

//submit işlemi nasıl olur ?
export default function Form({ title, onSubmit, children, maxWidth }) {
  return (
    <Container maxWidth={maxWidth}>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", mb: 3 }}
      >
        {title}
      </Typography>

      <Paper sx={{ p: 4 }}>
        {/* burada üst taraftan gelecek onSubmit methodunu burada kullanabiliriz :) */}
        {/* submit butonunda sorun olabilir, kontorl sağlanması gerekebilir :) */}
        <Box component="form" onSubmit={onSubmit}>
          <div>{children}</div>
        </Box>
      </Paper>
    </Container>
  );
}
