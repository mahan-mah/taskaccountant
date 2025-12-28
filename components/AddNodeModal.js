import { Modal, Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function AddNodeModal({ open, onClose, onSubmit }) {
  const [title, setTitle] = useState("");

  const handleClose = () => {
    setTitle("");
    onClose();
  };

  const submit = () => {
    if (!title.trim()) return;
    onSubmit(title.trim());
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          bgcolor: "#fff",
          p: 3,
          borderRadius: 2,
          width: 320,
          mx: "auto",
          mt: "20%",
        }}
      >
        <Typography mb={2} fontWeight={600}>
          افزودن زیرشاخه
        </Typography>

        <TextField
          fullWidth
          autoFocus
          label="عنوان"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
        />

        <Button fullWidth sx={{ mt: 2 }} onClick={submit}>
          افزودن
        </Button>
      </Box>
    </Modal>
  );
}
