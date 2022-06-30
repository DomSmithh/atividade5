import Button from "./Button";

function App(){
  const botao = [
    {
      title1: "PREVIOUS",
      sub1: "JQUERY: DETECT UPDATE OF HTML ELEMENT",
    },
    {
      title2: "NEXT",
      sub2: "RAILS + DEVISE WORKING WITH MULTIPLE MODELS"
    },
  ];

  return (
    <div>
      {botao.map((button) => {
        return <Button key={button}
                title1={button.title1}
                sub1={button.sub1}
                title2={button.title2}
                sub2={button.sub2}
                />;
      }) };
    </div>
  )
}
export default App;