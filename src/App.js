import Header from './components/Header';

function App() {
  const personData = [{
    name:"name:Jamaldin",
    surname:"surname:Abdumutalib uulu",
    age:"age:22",
    car:"mers",
  },
{
  name:"name:Malika",
  surname:"surname:Abdumutalib kyzy",
  age:"age:19",
  car:"maybach",
},
{
  name:"name:Nurbolot",
  surname:"surname:Erkinbekov",
  age:"age:17",
  car:"velik",
}]
  return (
    <div className="header">
     <Header data={personData}></Header>
    </div>
  );
}

export default App;
