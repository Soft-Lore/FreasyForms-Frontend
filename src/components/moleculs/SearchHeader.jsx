import React from 'react'

export default function SearchHeader() {
  return (
    <article className="background-content">
        <div className="search-content">
            <div className="search-content__titles">
                <h1>¿Que estas Buscando?</h1>
                <h3>Encuentra encuestas y formularios de todo tipo.</h3>
            </div>
            <div className="search-content__searcher">
                <input type="search" name="searcher" id="searcher" placeholder="Buscar" />
                <select name="filter" id="filter">
                    <option value="option1">Option 1</option>
                    <option value="option1">Option 2</option>
                    <option value="option1">Option 3</option>
                    <option value="option1">Option 4</option>
                </select>
            </div>
        </div>
    </article>
  )
}
