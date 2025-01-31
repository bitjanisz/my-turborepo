import './App.css'
import person from '@dp/common-assets/person.jpg'
import {CustomComponent, FirstComp} from "@repo/ui";
// import person from '../../../packages/common-assests/person.jpg'
// import person2 from '@common-assets/person.jpg'

function App() {
  return (
    <>
     test main page
        <img src={'/shared/images.jpeg'}/>
        <img src={person}/>
        <FirstComp/>
        <CustomComponent/>
        {/*<img src={person2}/>*/}
    </>
  )
}

export default App

// function greet() {
//     var message = "Hello, world!"
//     console.log(message)
// }