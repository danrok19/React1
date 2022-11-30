import ChristmasTree from "./christmasTree";
function ChristmasTreeList(){
    const christmasTreeList = [
        {name: "Świerk", species:"srebny"},
        {name: "Świerk", species:"zielony"},
        {name: "Jodła", species:"kaukaska"}
    ];

    return(
        <div>
            <h4>Nasze choinki na święta: </h4>
            <ul>
                <li><ChristmasTree name = {christmasTreeList[0].name} species = {christmasTreeList[0].species}></ChristmasTree></li>
                <li><ChristmasTree name = {christmasTreeList[1].name} species = {christmasTreeList[1].species}></ChristmasTree></li>
                <li><ChristmasTree name = {christmasTreeList[2].name} species = {christmasTreeList[2].species}></ChristmasTree></li>
            </ul>
        </div>
    )
}
export default ChristmasTreeList;