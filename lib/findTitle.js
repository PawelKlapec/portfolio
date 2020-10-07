/**
 * The helper function that recursively look for parent node that contains data-title
 * Returns [String] string value.
 *
 * @param {DOM node} node
 */
export default function findTitle(node) {
  const el = node.parentNode

  if (!el) {
    return
  }

  if (el && el.dataset && el.dataset.title) {
    return el.dataset.title
  }

  return findTitle(el)
}
