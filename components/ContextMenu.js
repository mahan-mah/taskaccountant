import { Menu, MenuItem } from "@mui/material";

export default function ContextMenu({
  context,
  onClose,
  onCut,
  onCopy,
  onPaste,
  onDelete,
  onAddChild,
}) {
  if (!context) return null;

  return (
    <Menu
      open
      onClose={onClose}
      anchorReference="anchorPosition"
      anchorPosition={{
        top: context.mouseY,
        left: context.mouseX,
      }}
    >
      <MenuItem onClick={onCut}>برش دادن</MenuItem>
      <MenuItem onClick={onCopy}>کپی کردن</MenuItem>
      <MenuItem onClick={onPaste}>پیست کردن</MenuItem>
      <MenuItem onClick={onDelete}>حذف</MenuItem>
      <MenuItem onClick={onAddChild}>افزودن زیرشاخه</MenuItem>
    </Menu>
  );
}
