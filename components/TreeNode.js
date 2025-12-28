import { Box, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function TreeNode({
  node,
  expanded = {},
  toggle,
  onContextMenu,
  level = 0,
}) {
  if (!node) return null;

  const isOpen = !!expanded[node.id];
  const codeNum = node.code ? parseInt(node.code, 10) : null;

  let bgColor = "#FFFFFF";
  let textColor = "#333";

  if (!node.code || codeNum < 10) {
    bgColor = "#FFB74D";
    textColor = "#3E2723";
  } else if (codeNum >= 100 && codeNum < 10000) {
    bgColor = "#BBDEFB";
    textColor = "#0D47A1";
  } else if (codeNum >= 10000) {
    bgColor = "#C8E6C9";
    textColor = "#1B5E20";
  }

  return (
    <Box ml={level * 2}>
      <Box
        display="flex"
        alignItems="center"
        onClick={() => toggle(node.id)}
        onContextMenu={(e) => onContextMenu?.(e, node)}
        sx={{
          p: 1.2,
          borderRadius: 2,
          cursor: "pointer",
          mb: 0.5,
          bgcolor: bgColor,
          color: textColor,
          boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
          "&:hover": {
            filter: "brightness(0.95)",
            transform: "translateX(-4px)",
          },
          transition: "all 0.2s ease",
        }}
      >
        {node.children.length > 0 ? (
          isOpen ? (
            <ArrowDropDownIcon />
          ) : (
            <ArrowRightIcon />
          )
        ) : (
          <Box width={24} />
        )}

        <Typography ml={1} fontWeight={700}>
          {node.code && `${node.code} `}
          {node.title}
        </Typography>
      </Box>

      {isOpen &&
        node.children.map((child) => (
          <TreeNode
            key={child.id}
            node={child}
            expanded={expanded}
            toggle={toggle}
            onContextMenu={onContextMenu}
            level={level + 1}
          />
        ))}
    </Box>
  );
}
