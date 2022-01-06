import { useEffect } from "react"
import championData from "./championData.js"

const Champion = ({champions}) => {

const {data} = championData

 const filterdChampions = champions.filter((item)=> item.championLevel >=5 )
 // console.log(data,'11')
 const getChamp = (id) => {
     for (const property in data) {
      if (data[property]["key"] === id.toString()) {
        return  data[property];
      }
    }
  };

  const getChampImg = (id) => {
    const champInfo = getChamp(id)
    return champInfo.image.full
  }
  const getChampName = (id) => {
      const champInfo = getChamp(id)
      return champInfo.name
  }
  const getChampEngName = (id) => {
      const champEngName = getChamp(id)
      return champEngName.id
  }
 
  getChampImg(1)
// console.log(filterdChampions,'flter')
    return(
        <div>
            {filterdChampions.map((data) => (
                <a onClick={() => window.location.href="https://www.op.gg/champion/" + getChampEngName(data.championId) + "/statistics/top/build"}>
                    <div key={data.championId} style={{
                    display:"inline-block",
                    padding:"5px 10px",
                    borderBottom:"1px solid #ccc"
                }}>
                    {console.log(data.image,'image', data)}
                    <img src={require(`./champion/${getChampImg(data.championId)}`)} alt={data.championId}></img>
                    <p>
                        챔피언 : {getChampName(data.championId)}<br/>
                        NAME : {getChampEngName(data.championId)}<br/>
                        숙련도 레벨 : {data.championLevel} <br/>
                        숙련도 점수 : {data.championPoints}
                    </p>
                </div>
                </a>
            ))}
        </div>
    )
}

export default Champion