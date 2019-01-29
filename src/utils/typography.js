import Typography from 'typography';

/*
 Documented at:
 https://github.com/KyleAMathews/typography.js

 The values below are the defaults.
*/

const typography = new Typography({
  title: 'Defaults',
  baseFontSize: '14px',
  baseLineHeight: 1.5,
  scaleRatio: 2,
  googleFonts: [
    {
      name: 'Nunito',
      styles: ['200', '400', '600', '700', '800']
    },
    {
      name: 'Pacifico',
      styles: ['400']
    }
  ],
  headerFontFamily: ['Pacifico', 'Helvetica', 'sans-serif'],
  bodyFontFamily: ['Nunito', 'georgia', 'serif'],
  headerColor: 'inherit' /* def: inherit */,
  bodyColor: 'hsl(0,0%,0%,0.8)' /* def: hsl(0,0%,0%,0.8) */,
  headerWeight: '400' /* def: bold */,
  bodyWeight: '600' /* def: normal */
});

export default typography;
