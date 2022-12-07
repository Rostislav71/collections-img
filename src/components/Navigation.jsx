import React from "react";

const listCategory = [
    {name: "Всі"},
    {name: "Гори"},
    {name: "Море"},
    {name: "Архітектура"},
    {name: "Міста"}
]
export const Navigation = ({categoryId , setCategoryId,searchValue ,setSearcValue}) => {
    return (
        <div className="nav">
            <ul className="nav-body">
                {
                    listCategory.map((categ, i) => (
                        <li 
                            className={categoryId === i ? 'active' : '' } key={categ.name}
                            onClick={() => setCategoryId(i)}
                        >
                            {categ.name}
                        </li>
                ))}
            </ul>
            <input value={searchValue} onChange={e => setSearcValue(e.target.value)}  type="text" placeholder="пошук по назві" />
        </div>
    )
}