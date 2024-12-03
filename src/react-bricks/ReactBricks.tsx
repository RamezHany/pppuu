import { ReactBricks } from 'react-bricks/frontend'
import config from './config'
import HeroUnit from './bricks/HeroUnit'

const bricks = [HeroUnit]

const ReactBricksApp: React.FC = () => {
  return (
    <ReactBricks
      {...config}
      bricks={bricks}
    />
  )
}

export default ReactBricksApp
