export function addChildById(tree, parentId, newNode) {
  return tree.map((node) => {
    if (node.id === parentId) {
      return {
        ...node,
        children: [...node.children, newNode],
      };
    }

    return {
      ...node,
      children: node.children
        ? addChildById(node.children, parentId, newNode)
        : [],
    };
  });
}

export function removeNodeById(tree, id) {
  return tree
    .filter((node) => node.id !== id)
    .map((node) => ({
      ...node,
      children: node.children ? removeNodeById(node.children, id) : [],
    }));
}

export function cloneNode(node) {
  return {
    ...node,
    id: Date.now(),
    children: node.children?.map(cloneNode) || [],
  };
}

export function generateChildCode(parentNode) {
  if (!parentNode.code) return "1";

  const base = parentNode.code.toString();
  const count = parentNode.children.length + 1;

  return `${base}${count}`;
}
