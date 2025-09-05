import WaterIcon from '@mui/icons-material/Water';
import InsightsIcon from '@mui/icons-material/Insights';
import OpacityIcon from '@mui/icons-material/Opacity';
import GrassIcon from '@mui/icons-material/Grass';
import BenefitCard from './BenefitCard';

function Benefits() {
    const benefits = [
        { id: 1, icono: <WaterIcon></WaterIcon>, title: "Non Toxic", text: "Benefits of using non-toxic ingredients in your everyday products and learn about the harmful effects of toxin."},
        { id: 2, icono: <InsightsIcon></InsightsIcon>, title: "Custom Scents", text: "Learn about the diverse ingredients used to create unique and personalized fragrances."},
        { id: 3, icono: <OpacityIcon></OpacityIcon>, title: "Refillable", text: "Discover the convenience and sustainability of refillable perfume options."},   
        { id: 4, icono: <GrassIcon></GrassIcon>, title: "100% Vegan", text: "Indulge in luxurious 100% vegan perfumes that are cruelty-free and environmentally conscious."}
    ]
    return (
        <div className='w-full h-[48rem] px-40 py-32 bg-black flex flex-row justify-center'>
            
            {benefits.map((benefit, index) => {
                return (
                    <BenefitCard id={benefit.id}
                    index={index}
                    icono={benefit.icono}
                    title={benefit.title}
                    text={benefit.text}></BenefitCard>
                )
            })}
        </div>
    )
}

export default Benefits;