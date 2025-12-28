"use client";

import { useState } from "react";
import { Box, Typography } from "@mui/material";
import TreeView from "../components/TreeView";
import ContextMenu from "../components/ContextMenu";
import useTree from "../hooks/useTree";

export default function Home() {
  const {
    tree,
    cutNode,
    copyNode,
    pasteNode,
    addChild,
    removeNode,
    clipboard,
  } = useTree();

  const [expanded, setExpanded] = useState({});
  const [context, setContext] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);

  const toggle = (id) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  const handleContextMenu = (e, node) => {
    e.preventDefault();
    setSelectedNode(node);
    setContext({ mouseX: e.clientX, mouseY: e.clientY });
  };

  const handleAddChild = () => {
    if (!selectedNode) return;

    const title = prompt("عنوان زیرشاخه را وارد کنید:");
    if (!title || !title.trim()) return;

    addChild(selectedNode.id, title.trim());
    setContext(null);
  };

  return (
    <Box p={4} minHeight="100vh" bgcolor="#FEF597">
      <Typography variant="h5" mb={2}>
        پنل حامی کت
      </Typography>

      <TreeView
        tree={tree}
        expanded={expanded}
        toggle={toggle}
        onContextMenu={handleContextMenu}
      />

      {selectedNode && (
        <ContextMenu
          context={context}
          onClose={() => setContext(null)}
          node={selectedNode}
          clipboard={clipboard}
          onCut={() => cutNode(selectedNode)}
          onCopy={() => copyNode(selectedNode)}
          onPaste={() => pasteNode(selectedNode.id)}
          onDelete={() => removeNode(selectedNode)}
          onAddChild={handleAddChild}
        />
      )}
    </Box>
  );
}
