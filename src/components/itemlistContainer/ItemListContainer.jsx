import Card from "./Item";
import Flex from "../Flex/flex";


function ItemListcontainer(){

    const products = [
        {
          img: "../imgs/play5.jpg",
          id: 1,
          title: "Play Station 5",
          detail: "Consola ultima generacion",
          price: 250000,
        },
        {
          img: "../imgs/lavarropas_samsung.jpeg",
          id: 2,
          title: "Lavarropas ELA0F2",
          detail: "Lavarropas 7kg 1000rpm",
          price: 136000,
        },
        {
          img: "../imgs/placard.jpg",
          id: 3,
          title: "Placard Premium",
          detail: "2 Puertas 2m x 1.4m",
          price: 50000,
        },
        {
          img: "../imgs/play5.jpg",
          id: 4,
          title: "Play Station 5",
          detail: "Consola ultima generacion",
          price: 250000,
        },
        {
          img: "../imgs/play5.jpg",
          id: 5,
          title: "Play Station 5",
          detail: "Consola ultima generacion",
          price: 250000,
        },
      ];
    return(

        <Flex>
            { products.map ( (itemIterado) => { return <Card key={itemIterado.id} item = {itemIterado}/>;})

            }
        </Flex>
       
    )
}
export default ItemListcontainer;