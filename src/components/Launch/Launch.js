import './Launch.css'

const Launch = (props) => {
    const {mission_name, launch_year, mission_patch_small} = props
    return (
        <div className={'container'}>
            <div>
                <h4>Mission name:{mission_name}</h4>
                <h5>Launch Year: {launch_year}</h5>
            </div>
            <img src={mission_patch_small} alt={'ddd'}/>
        </div>
    )
}
export default Launch;