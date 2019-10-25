import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../data/index'
import PathNow from '../components/PathNow'

const Home = props => {
  return (
    <>
      <h1>{props.loginStatus}</h1>
      <PathNow />
      <h1>首頁</h1>
      <div className="list-group">
        {data.map((value, index) => {
          return (
            <Link
              to={'/student/' + value.id}
              className="list-group-item list-group-item-action"
              key={value.id}
            >
              {value.name}
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Home
