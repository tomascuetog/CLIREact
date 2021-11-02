import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";

export function ItemDetail({ details }) {
  return (
    <div className="item-detail">
      <div className="item-detail-img">
        <img className="detail-img" src={details.img} alt={details.name} />
      </div>
      <div className="detalle">
        <h1>{details.name}</h1>
        <p className="descripcion">{details.descripcion}</p>
        <p>${details.precio}</p>
        <ItemCount stock={10} initial={1} />
      </div>
    </div>
  );
}