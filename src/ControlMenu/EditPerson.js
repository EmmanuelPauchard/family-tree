/**
 * Return a menu to edit a person's data
 * WIP: this only shows up the selected person's name
 * @param {*} props {selected: string}
 * @returns div element of class EditMenu
 */
export function EditPersonMenu (props) {
        return (
            <div className="EditMenu">
                <h1>Currently Selected</h1>
                <h2>{props.selected}</h2>
            </div>
        );
};