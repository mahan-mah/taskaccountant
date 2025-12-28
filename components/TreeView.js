import { useState } from "react";
import TreeNode from "./TreeNode";
import ContextMenu from "./ContextMenu";
import AddNodeModal from "./AddNodeModal";
import useTree from "../hooks/useTree";

export default function TreeView() {
  const { tree, addChild, removeNode, cutNode, copyNode, pasteNode } =
    useTree();

  const [expanded, setExpanded] = useState({});
  const [contextMenu, setContextMenu] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const toggle = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleContextMenu = (e, node) => {
    e.preventDefault();
    setSelectedNode(node);
    setContextMenu({
      mouseX: e.clientX + 2,
      mouseY: e.clientY - 6,
    });
  };

  return (
    <>
      {tree.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
          expanded={expanded}
          toggle={toggle}
          onContextMenu={handleContextMenu}
        />
      ))}

      <ContextMenu
        context={contextMenu}
        onClose={() => setContextMenu(null)}
        onCut={() => {
          cutNode(selectedNode);
          setContextMenu(null);
        }}
        onCopy={() => {
          copyNode(selectedNode);
          setContextMenu(null);
        }}
        onPaste={() => {
          pasteNode(selectedNode);
          setContextMenu(null);
        }}
        onDelete={() => {
          removeNode(selectedNode);
          setContextMenu(null);
        }}
        onAddChild={() => {
          setIsAddModalOpen(true);
          setContextMenu(null);
        }}
      />

      <AddNodeModal
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={(title) => addChild(selectedNode, title)}
      />
    </>
  );
}
