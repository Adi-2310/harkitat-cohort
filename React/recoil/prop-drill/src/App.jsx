import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { Countcontext } from './context'
import { countAtom } from './store/atom/count';

function App() {

  return(
    <>
    <RecoilRoot>
      <Count></Count>
    </RecoilRoot>
    </>
  )
  
}

function Count(){ 
  return <div>
      <Countrenderer/>
       <Buttons />
  </div>
}

function Countrenderer(){
  const count= useRecoilValue(countAtom);

  return <div>
    {count}
  </div>
}

function Buttons(){

  const setCount = useSetRecoilState(countAtom);

  console.log("buttons rerender");

  return <div> 
  <button onClick={()=>{
    setCount(count=>count+1); 
  }}>Increase</button>

  <button onClick={()=>{
    setCount(count=>count-1);
  }}>Decrease </button>
  </div>
}

export default App
