import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'

import colors from '../config/colors'

const styles = () => ({
  table: {
    borderCollapse: 'separate',
    borderSpacing: 5,
    width: 500,
    '& th': {
      textAlign: 'left',
    },
    border: `solid 1px ${colors.$darkGray}`,
    borderRadius: 4,
    boxShadow: `1px 2px 2px 1px ${colors.$gray}`,
  },
  tblRow: {
    '& td': {
      borderBottom: `solid 1px ${colors.$lightGray}`,
    },
  },
  proficiencyCell: {
    backgroundColor: colors.$white,
  },
  proficiencyLevel: {
    height: '100%',
    backgroundImage: 'linear-gradient(to right, #FC4C59, #DD0006)',
    margin: 0,
  },
})

const skills = [
  { skill: 'NodeJS', proficiency: 80 },
  { skill: 'Golang', proficiency: 70 },
  { skill: 'React & React Native', proficiency: 70 },
  { skill: 'Graphql', proficiency: 60 },
  { skill: 'AWS Services', proficiency: 60 },
  { skill: 'Docker', proficiency: 70 },
  { skill: 'MongoDB', proficiency: 80 },
  { skill: 'DynamoDB', proficiency: 70 },
  { skill: 'MySQL', proficiency: 70 },
  { skill: 'Terraform', proficiency: 60 },
  { skill: 'Ruby', proficiency: 50 },
]

let ProficencyLevel = ({ classes, level }) => (
  <div
    style={{
      width: `${level}%`,
    }}
    className={classes.proficiencyLevel}
  >
    &nbsp;
  </div>
)
ProficencyLevel.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  level: PropTypes.number.isRequired,
}
ProficencyLevel = withStyles(styles)(ProficencyLevel)


const SkillSet = ({ classes }) => (
  <table className={classes.table}>
    <thead>
      <tr>
        <th css={{ width: '40%' }}>Language/Technology</th>
        <th css={{ width: '60%' }}>Proficiency</th>
      </tr>
    </thead>
    <tbody>
      {skills.map(s => (
        <tr className={classes.tblRow} key={s.skill}>
          <td>{s.skill}</td>
          <td className={classes.proficiencyCell}>
            <ProficencyLevel level={s.proficiency} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)
SkillSet.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
}

export default withStyles(styles)(SkillSet)
