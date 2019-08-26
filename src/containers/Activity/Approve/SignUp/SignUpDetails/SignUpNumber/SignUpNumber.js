/**
 * @summary 报名详情--报名人数
 */
import React from 'react'
import { Table } from 'antd'

import { IntlComponent } from 'Components/Common'

import style from './style.scss'

class SignUpNumber extends IntlComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '手机号',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: '报名时间',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      render: () => {
        return (
          <div>
            <a role="button" onClick={this.clickDel}>删除</a>
          </div>
        )
      }
    },
  ]

  dataSource = [
    {
      name: '罗晓星',
      phoneNumber: '15669154098',
      time: '2016-09-05 15:00',
    },
    {
      name: '罗晓星',
      phoneNumber: '15669154098',
      time: '2016-09-05 15:00',
    },
    {
      name: '罗晓星',
      phoneNumber: '15669154098',
      time: '2016-09-05 15:00',
    },
    {
      name: '罗晓星',
      phoneNumber: '15669154098',
      time: '2016-09-05 15:00',
    },
  ]

  renderPagination = () => {
    return {
      total: 200,
      pageSize: 10,
      size: 'small',
      current: 1,
    }
  }

  render() {
    return (
      <div className={style.signUpNumber}>
        <Table columns={this.columns} dataSource={this.dataSource} size="small" pagination={this.renderPagination()} />
      </div>
    )
  }
}

export default SignUpNumber