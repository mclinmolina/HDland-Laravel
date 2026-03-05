import type { Config } from 'tailwindcss'

export default <Config>{
  theme: {
    extend: {
      colors: {
        'primary': '#ec1313',
        'background-light': '#f8f6f6',
        'background-dark': '#221010',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'sans-serif']
      }
    }
  }
}

