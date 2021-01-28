import HeaderBlock from './components/header-block';

const App = () => {
  return (
    <>
      <HeaderBlock 
        title="This is Pocemon Card Game!" 
        hideBackground
        descr="This is new description!"
      />
      <HeaderBlock 
        descr="This is new description!"
      />
    </>
  )
}

export default App;
