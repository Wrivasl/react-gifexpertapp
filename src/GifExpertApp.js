import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

// GifExpertApp
const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball'])

    // const handleAdd = () => {
    //     addCategory([...categories, `Cat ${Math.floor(Math.random() * 10000)}`])
    //     console.log('pushed')
    // }

    return (
      <>
        <AddCategory setCategories = { setCategories }/>

        <h2>GifExpertApp</h2>
        <hr />
        {
            categories.map(category => <GifGrid key={category} category={category}/>)
        }
      </>
    )
}

export default GifExpertApp
