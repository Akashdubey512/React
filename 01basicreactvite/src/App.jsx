import Chai from "./try"
function App() {
const username = "learning react"
  return (
    <>
    <Chai/>
    <p>you can return only one element</p>
     <div>you can wrap many elements in a div or a fragment like this</div>
     <p>{username} variable can only be given in curly braces</p>
     <p>you can only write evaluated expression in these curly braces</p>
    </>
    
  )
}//This is the way in which react  take the 


export default App
