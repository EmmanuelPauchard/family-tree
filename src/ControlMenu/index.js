/**
 * Common input handlers to define menus
 * This file defines input handlers that are intended to be used by other components of this module.
 */

/**
 * Internal component to define an input field
 * @param {*} props {input_text: the text accompanying the field, children: the actual HTML input element}
 * @returns
 */
function PersonInputData(props) {
    return (
        <div className="input-family">
            <label>
                {props.input_text}<br />
                {props.children}
                <span className="validity"></span>
            </label>
        </div>
    );
}

/**
 * Controlled component to edit a person's name
 * @param {*} props {value: field's value, onChange: change handler}
 * @returns
 */
export function PersonInputName(props) {
    return (
        <PersonInputData key="Full Name" input_text="Full Name">
            <input type="text" value={props.value} onChange={props.onChange} required></input>
        </PersonInputData>
    );
}

/**
 * Controlled component to edit a person's biopic
 * @param {*} props {value: field's value, onChange: change handler}
 * @returns
 */
export function PersonInputBiopic(props) {
    return (
        <PersonInputData key="Biopic" input_text="Biopic">
            <input type="text" value={props.value} onChange={props.onChange} required></input>
        </PersonInputData>
    );
}

/**
 * Controlled component to edit a person's birthdate
 * @param {*} props {value: field's value, onChange: change handler}
 * @returns
 */
export function PersonInputDate(props) {
    return (
        <PersonInputData key="Born" input_text="Born">
            <input type="date" value={props.value} onChange={props.onChange} required></input>
        </PersonInputData>
    );
}

/**
 * Controlled component to edit a person's picture
 * @param {*} props {onChange: change handler}
 * @returns
 */
export function PersonInputPicture(props) {
    return (
        <PersonInputData key="Picture" input_text="Picture">
            <input type="file" onChange={props.onChange}></input>
        </PersonInputData>
    );
}


