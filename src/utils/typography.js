import Typography from 'typography'
import kirkhamTheme from 'typography-theme-kirkham'


kirkhamTheme.overrideThemeStyles = () => ({
  /*'a, a:visited': {
    color:          '#0473D0',
    // color:          'red',
    // textDecoration: 'none',
    // marginBottom:   '2px',
  },
  'a:active,a:hover': {
    outlineWidth: 0,
    borderBottom: '2px dashed #c0c0c0',
    marginBottom: 0,
  },*/
  /*'html, body': {
    'font-size': '20px',
  },
  'p': {
    'font-size': '20px',
  },*/
})

const typography = new Typography(kirkhamTheme)
// const typography = new Typography()

export default typography
