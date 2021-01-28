import Header from './components/header';
import LayoutTemplate from './components/layout-template';
import Footer from './components/footer';

const App = () => {
  return (
    <>
      <Header 
        title="React Marathon"
        descr="This is Homework-2!"
      />
      <LayoutTemplate />
      <Footer />
    </>
  )
}

export default App;