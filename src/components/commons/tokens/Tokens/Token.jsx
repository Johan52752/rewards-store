import "./token.css"

export function Token({infoTokens,color}){
    return(
        <div style={{background:color}} className="token">
            <p>{infoTokens}</p>
            <img src="./assets/coin.svg" alt="" />
        </div>
    )
}