import React from 'react'
import { Link } from 'react-router-dom'

const EducationalTile = () => ({ id, title, author, date, category, content, cover}) => {
  return (
    <div className="flex flex-col w-[full]">
        <Link to={`/educationals/${id}`} className=" border-[3px] w-[vw] p-4 ">
        <img src={`https://savefiles.org/${cover}?shareable_link=493`} alt={title}/>
        <h1 className="pt-1 pb-1 font-bold">{title}</h1>
            <p className="pb-1">{author}</p>
            <p className="pb-1">{date}</p>
            <p className="pb-1">{category}</p>
            <p className="pb-1">{content}</p>
        </Link>
        </div>
  )
}

export default EducationalTile