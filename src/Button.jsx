import "./Button.css";

function Button({title1, sub1, title2, sub2}){
    return(

        <button className="container">
            <div className="button-um">
            <strong><div className="titulo1">{title1}</div></strong>
            <div className="subtitulo1">{sub1}</div>
            </div>
        
            <div className="button-dois">
            <strong><div className="titulo2">{title2}</div></strong>
            <div className="subtitulo2">{sub2}</div>
            </div>
        </button>
    );
}
export default Button;