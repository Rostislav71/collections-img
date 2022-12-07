
import './App.scss';
import React from 'react';
import { Navigation } from './components/Navigation.jsx';
import { Collection } from './components/Collection.jsx';



function App() {
  const [collection , setCollection] = React.useState([]);
  const [isLoading , setIsLoading] = React.useState(true)
  const [searchValue  , setSearcValue] = React.useState(""); 
  const [categoryId, setCategoryId] = React.useState(0);
  

  React.useEffect(() => {
    setIsLoading(true);
    fetch(`https://638cd0f5d2fc4a058a60ba36.mockapi.io/img-data?${
          categoryId ? `category=${categoryId}` : ''
        
        }`,
      )
      .then((res) => res.json())
      .then((json) => {
        setCollection(json);
      }).catch(err => {
        console.warn(err);
        alert("Не вдалось получити інформацію");
      }).finally(()=> setIsLoading(false))
 }, [categoryId])
  
  return (
    <div className="App">
      <div className='wrapper'>
          <h1>Моя колеція фотографій</h1>
          <Navigation categoryId={categoryId} setCategoryId={setCategoryId} setSearcValue={setSearcValue} searchValue={searchValue} />
          <div className='collection-body'>
            {isLoading ? (
                <h2>Завантаження даних</h2>
              ):(
                collection.filter(obg =>{
                  return obg.name.toLowerCase().includes(searchValue.toLowerCase());
               }).map((obg, index) =>(
                 <Collection
                   key={index}
                   name = {obg.name}
                   images = {obg.photos}
                 />
               ))
              )
            }
          </div>
      </div>
    </div>
  );
}

export default App;
