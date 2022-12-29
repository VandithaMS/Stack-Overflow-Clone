import React from 'react'
import Leftsidebar from '../../components/Sidebar/Leftsidebar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {

    const TagList = [
        {
            id:1,
            tagName:"python",
            tagDesc:"Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis."
        },
        {
            id:2,
            tagName:"java",
            tagDesc:"Java is the official programming language for Android development, with Java accounting for 46.2 percent of all Android applications."
        },
        {
            id:3,
            tagName:"javascript",
            tagDesc:"Javascript is used by programmers across the world to create dynamic and interactive web content like applications and browsers. "
        },
        {
            id:4,
            tagName:"html",
            tagDesc:"HTML is the standard markup language for creating Web pages."
        },
        {
            id:5,
            tagName:"css",
            tagDesc:"CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers."
        },
        {
            id:6,
            tagName:"mysql",
            tagDesc:"MySQL is an open-source relational database management system. As with other relational databases, MySQL stores data in tables made up of rows and columns."
        },
        {
            id:7,
            tagName:"c",
            tagDesc:"The C language is a high-level, general-purpose programming language. It provides a straightforward, consistent, powerful interface for programming systems."
        }
    ]

  return (
    <div className='home-div1'>
        <Leftsidebar/>
        <div className='home-div2'>
            <h1 className='h1-tag'>Tags</h1>
            <p className='tag-p'>A tag is a keyword or label which categorizes your question with other, similar questions</p>
            <p className='tag-p'>Using the right tag makes it easier for others to find and answer your question</p>
            <div className='tags-list-div'>
                {
                    TagList.map((tag)=>(
                        <TagsList tag={tag} key={tag.id} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Tags