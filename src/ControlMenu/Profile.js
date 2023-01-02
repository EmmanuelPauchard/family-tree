
/**
 * Return the react element defining a person's profile as displayed in the map.
 * @param {*} props {name, dates, biopic, pict}
 * @returns <div> element of class Profile
 */
export function Profile(props) {
    return (
        <div className="Profile">
            <div>
                <img className="profile-picture" src={props.picture} alt={props.name} height={100}></img>
            </div>
            <div className="name">
                {props.name}
            </div>
            <div className="birthday">
                {props.dates}
            </div>
            <div className="biopic">
                {props.biopic}
            </div>
        </div>
    )
}