import React from "react";
import { Profile } from "./Profile";

import { PersonInputName } from ".";
import { PersonInputBiopic } from ".";
import { PersonInputPicture } from ".";
import { PersonInputDate } from ".";

import default_portrait from "../media/person_FILL0_wght400_GRAD0_opsz48.png";

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
            this.setState({ picture: picture });
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
            <div className="AddPersonMenu">
                <h1>{this.props.title}</h1>
                <form onSubmit={this.handleSubmit}>
                    {menu_items.map(e => e.item({ value: e.value, onChange: e.handler }))}
                    <input
                        type="submit"
                        value={"Add this person"}>
                    </input>
                </form>
            </div>
        )
    }
};