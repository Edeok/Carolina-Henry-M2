

export default function Card(props) {
   return (
      <div>
         <button onClick={props.onClick}>X</button>
         <h2>{props.name}</h2>
         <h4>{props.species}</h4>
         <h5>{props.gender}</h5>
         <img  src={props.image} alt="" />
      </div>
   );
}
