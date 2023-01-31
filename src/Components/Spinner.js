import loading from "../Spinner-1s-200px.gif";

export default function Spinner(){
    return(
        <div className="text-center">
            <img src={loading} alt="alt" />
        </div>
    )
}