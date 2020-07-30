import {
  Code,Label,Menu,Page
} from '../grp-types'

import code from './codes'
import general from './general'
import label from './labels'
import menu from './menus'
import page from './pages'


export default {
  ...general,
  [Code]: code,
  [Label]: label,
  [Menu]: menu,
  [Page]: page
};
