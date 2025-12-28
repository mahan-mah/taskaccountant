import { useState } from "react";
import initialTree from "../data/initialTree";
import {
  addChildById,
  removeNodeById,
  cloneNode,
  generateChildCode,
} from "../utils/TreeHelpers";

export default function useTree() {
  const [tree, setTree] = useState(initialTree);
  const [clipboard, setClipboard] = useState(null);

  const addChild = (parentNode, title) => {
    const newNode = {
      id: Date.now(),
      code: generateChildCode(parentNode),
      title,
      children: [],
    };

    setTree((prev) => addChildById(prev, parentNode.id, newNode));
  };

  const removeNode = (node) => {
    if (node.children?.length) return;
    setTree((prev) => removeNodeById(prev, node.id));
  };

  const cutNode = (node) => {
    if (node.children?.length) return;
    setClipboard({ node, type: "cut" });
    removeNode(node);
  };

  const copyNode = (node) => {
    setClipboard({ node: cloneNode(node), type: "copy" });
  };

  const pasteNode = (parentNode) => {
    if (!clipboard) return;

    const pastedNode = {
      ...clipboard.node,
      id: Date.now(),
      code: generateChildCode(parentNode),
    };

    setTree((prev) => addChildById(prev, parentNode.id, pastedNode));

    if (clipboard.type === "cut") setClipboard(null);
  };

  return {
    tree,
    addChild,
    removeNode,
    cutNode,
    copyNode,
    pasteNode,
  };
}
