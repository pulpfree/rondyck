import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'

import SocialIcon from './SocialIcon'

library.add(faEnvelope, faGithub, faLinkedin, faTwitter)

const SocialMenu = () => (
  <div
    css={{
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginRight: 15,
    }}
  >
    <SocialIcon
      icon={['fab', 'twitter']}
      title="Twitter"
      url="https://twitter.com/pulpfree"
    />
    <SocialIcon
      icon={['fab', 'github']}
      title="Github"
      url="https://github.com/pulpfree"
    />
    <SocialIcon
      icon={['fab', 'linkedin']}
      title="LinkedIn"
      url="https://www.linkedin.com/in/pulpfree/"
    />
    <SocialIcon
      icon={faEnvelope}
      title="Email"
      url="mailto:rond@webbtech.net"
    />
  </div>
)

export default SocialMenu
