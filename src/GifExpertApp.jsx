import { cloneElement, useState } from "react";
import { AddCategory,GifGrid } from "./components";
export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);
  // console.log(categories);

  const onAddCategory = (newCategory) => {
    // categories.push(newCategory); // No utilizar 
    // console.log(newCategory);
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
    // setCategories(cat => [...cat, 'Naruto']);// destructurando

  }
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={event => onAddCategory(event)}
      />

      {
        categories.map(category =>
        (
          <GifGrid
            key={category}
            category={category} />
        )
        )
      }
    </>
  )
}
