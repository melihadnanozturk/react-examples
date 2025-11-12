import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";

function ControlSummary() {
  const { getValues } = useFormContext();

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <TableContainer sx={{ maxWidth: 300, margin: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography component="subtitle1">Yemek Adı</Typography>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableCell>{getValues("foodName")}</TableCell>
            <TableCell>
              <Button variant="contained" onClick={handleOpen}>
                Detayları gör
              </Button>
            </TableCell>
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Yemek Detayları
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>{getValues("description")}</Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ControlSummary;
