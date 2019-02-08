import Typography from 'typography';

const typography = new Typography({
  title: 'Defaults',
  baseFontSize: '14px',
  baseLineHeight: 1.5,
  scaleRatio: 2,
  googleFonts: [
    {
      name: 'Nunito',
      styles: ['200', '400', '600', '700', '800']
    }
  ],
  headerFontFamily: ['Nunito', 'Helvetica', 'sans-serif'],
  bodyFontFamily: ['Nunito', 'georgia', 'serif'],
  headerColor: 'inherit',
  bodyColor: 'hsl(0,0%,0%,0.8)',
  headerWeight: '600',
  bodyWeight: '400'
});

export default typography;
