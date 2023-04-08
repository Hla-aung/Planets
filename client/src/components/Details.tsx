interface ImgSrc {
    img: string;
    imgDescription: string;
}

interface Basic {
    volume: string;
    mass: string;
}

export interface Planets {
        id: number;
        name: string;
        description: string;
        planetOrder: number;
        imgSrc: ImgSrc;
        basicDetails: Basic;
}

interface PlanetsProps {
    data: Planets[];
}

const Details = ({data}: PlanetsProps) => {
  return (
    <>
        {data.map((i) => (
            <div key={i.id} style={{margin: "30px"}}>
                <h1>{i.name}, Planet Order: {i.planetOrder}</h1>
                <p>{i.description}</p>
                <div>
                    <h3>Dimensions</h3> 
                    <span>Volume: {i.basicDetails.volume}</span><br />
                    <span>Weight: {i.basicDetails.mass}</span>
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <img src={i.imgSrc.img} alt={i.name} width="1000px" height="auto" style={{margin: "20px auto"}}/>
                    <span style={{color: "CaptionText", fontSize: "12px", fontStyle: "italic"}}>{i.imgSrc.imgDescription}</span>
                </div>
            </div>
        ))}
    </>
  )
}

export default Details