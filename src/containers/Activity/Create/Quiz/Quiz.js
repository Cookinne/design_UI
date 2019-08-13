/**
 * @summary 精彩活动
 */
import React from 'react'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class Model extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.model}>
        Model
      </div>
    )
  }
}

export default Model