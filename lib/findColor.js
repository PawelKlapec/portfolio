/**
 * The helper function that recursively look for parent node that contains data-color
 * Returns [String] hex color value.
 *
 * @param {DOM node} node
 */
export default function findColor(node) {
  const el = node.parentNode

  if (!el) {
    return
  }

  if (el && el.dataset && el.dataset.color) {
    return el.dataset.color
  }

  return findColor(el)
}
