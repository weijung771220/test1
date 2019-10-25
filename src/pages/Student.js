import React from 'react'
import { data } from '../data/index'
import PathNow from '../components/PathNow'

const Student = props => {
  let studentData = null
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === +props.match.params.id) {
      studentData = data[i]
    }
  }

  if (!studentData) {
    return (
      <>
        <div>該筆資料不存在</div>
        <button
          type="button"
          onClick={() => {
            props.history.push('/')
          }}
        >
          回首頁
        </button>
      </>
    )
  }

  return (
    <>
      <h1>{props.loginStatus}</h1>
      <PathNow />
      <h1>學生詳細資料</h1>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-header">{studentData.id}</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{studentData.name}</li>
          <li className="list-group-item">{studentData.birth}</li>
        </ul>
      </div>
      <button
        type="button"
        onClick={() => {
          props.history.push('/')
        }}
      >
        回首頁
      </button>
    </>
  )
}

export default Student
