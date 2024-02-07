import { createFont, variableFont } from '@next/font';

const OpenDyslexic = createFont({
    src: '/public/fonts/OpenDyslexic-Regular.otf', // Path to your font file
    weight: ['400'], // Specify desired font weights (optional)
    variable: variableFont({ // Create a variable font to optimize loading (optional)
      weight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    }),
  });

export const OpenDyslexicFont = OpenDyslexic;