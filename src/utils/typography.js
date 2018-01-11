import Typography from 'typography'
import kirkhamTheme from 'typography-theme-kirkham'


kirkhamTheme.overrideThemeStyles = () => ({
  'a, a:visited': {
    color:          '#0473D0',
    textDecoration: 'none',
    marginBottom:   '2px',
  },
  'a:active,a:hover': {
    outlineWidth: 0,
    borderBottom: '2px dashed #c0c0c0',
    marginBottom: 0,
  },
})

const typography = new Typography(kirkhamTheme)


export default typography