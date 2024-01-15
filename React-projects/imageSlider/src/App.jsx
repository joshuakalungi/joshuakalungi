import './App.css'
import ImageSlider from './components/imageSlider'

function App() {

  return (
    <>
      <div>
        {/*ImageSlider element*/}
        <ImageSlider url= {'https://picsum.photos/v2/list'} page= {'1'} limit ={'4'}/>
      </div>
    </>
  )
}

export default App
