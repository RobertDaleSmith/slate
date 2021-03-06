/** @jsx h */

import h from '../../helpers/h'

export const schema = {
  blocks: {
    paragraph: {
      text: /^\d*$/,
      normalize: (change, reason, { node }) => {
        if (reason == 'node_text_invalid') {
          node.nodes.forEach(n => change.removeNodeByKey(n.key))
        }
      }
    }
  }
}

export const input = (
  <value>
    <document>
      <paragraph>
        invalid
      </paragraph>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <paragraph />
    </document>
  </value>
)
