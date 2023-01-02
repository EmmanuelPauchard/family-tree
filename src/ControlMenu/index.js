import React from "react";
import { Profile } from "./Profile";

import default_portrait from "../media/person_FILL0_wght400_GRAD0_opsz48.png";

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

function PersonInputName(props) {
    return (
        <PersonInputData key="Full Name" input_text="Full Name">
            <input type="text" value={props.value} onChange={props.onChange} required></input>
        </PersonInputData>
    );
}

function PersonInputBiopic(props) {
    return (
        <PersonInputData key="Biopic" input_text="Biopic">
            <input type="text" value={props.value} onChange={props.onChange} required></input>
        </PersonInputData>
    );
}

function PersonInputDate(props) {
    return (
        <PersonInputData key="Born" input_text="Born">
            <input type="date" value={props.value} onChange={props.onChange} required></input>
        </PersonInputData>
    );
}

function PersonInputPicture(props) {
    return (
        <PersonInputData key="Picture" input_text="Picture">
            <input type="file" onChange={props.onChange}></input>
        </PersonInputData>
    );
}


/**
 * Form that let the user populate information to create a new Person;
 */
export class AddPersonMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            dates: "",
            biopic: "",
            picture: "",
            error: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleDates = this.handleDates.bind(this);
        this.handleBiopic = this.handleBiopic.bind(this);
        this.handlePicture = this.handlePicture.bind(this);
    };

    handleName(e) {
        this.setState({ name: e.target.value })
    };

    handleDates(e) {
        this.setState({ dates: e.target.value })
    };

    handleBiopic(e) {
        this.setState({ biopic: e.target.value })
    };

    handlePicture(e) {
        this.setState({ picture: e.target.value })
    };

    handleSubmit(event) {
        let picture = default_portrait;

        // Provide default picture
        if (this.state.picture === "") {
            this.setState({picture: picture});
        }

        // Todo: check if reference to this.state is dangerous to use here
        this.props.addNode(Profile(this.state));

        // Prevent form from reloading the page
        event.preventDefault();
    };

    render() {
        const menu_items = [
            {
                item: PersonInputName,
                handler: this.handleName,
                value: this.state.name
            },
            {
                item: PersonInputBiopic,
                handler: this.handleBiopic,
                value: this.state.biopic
            },
            {
                item: PersonInputDate,
                handler: this.handleDates,
                value: this.state.dates
            },
            {
                item: PersonInputPicture,
                handler: this.handlePicture,
                value: this.state.picture
            },
        ];

        return (
            <form onSubmit={this.handleSubmit}>
                {menu_items.map(e => e.item({ value: e.value, onChange: e.handler }))}
                <input
                    type="submit"
                    value={"Add this person"}>
                </input>
            </form>
        )
    }
};
