import Button from "./Title";

function App(){
  const palavras_chaves = [
  {title1: "Tools"}, 
  {title1: "Pricing"}, 
  {title1: "Blog"},
  {title1: "About"},
  {title1: "Customers"},
];

  return (
    <div>
      {palavras_chaves.map((title) => {
        return <Button title1={title.title1} />
      }) }
    </div>
  )
}
export default App;