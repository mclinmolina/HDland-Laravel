export default defineAppConfig({
  ui: {
    // In v4, colors are set under 'colors'
    colors: {
      primary: 'red',
      neutral: 'slate'
    },
    // Component defaults now live directly under the component key
    button: {
      defaultVariants: {
        size: 'md',
        color: 'primary',
        variant: 'solid'
      }
    }
  }
})