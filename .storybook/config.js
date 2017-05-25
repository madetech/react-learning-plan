import { configure } from '@kadira/storybook'

function loadStories () {
  const requireStories = require.context('../components', true, /stories\.js$/)
  const children = requireStories.keys()

  children.forEach(requireStories)
}

configure(loadStories, module)
