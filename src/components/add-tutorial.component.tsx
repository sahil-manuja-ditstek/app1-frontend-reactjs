import { useState } from "react";
import TutorialDataService from "../services/tutorial.service";
import ITutorialData from '../types/tutorial.type';
import InputField from './partials/input'

export default function AddTutorial() {
    // eslint-disable-next-line
    const [id, setId] = useState<number | null>(null);
    // eslint-disable-next-line
    const [published, setPublished] = useState<boolean>(false);
    
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [submitted, setSubmitted] = useState<boolean>(false);

    const saveTutorial = () => {
        const data: ITutorialData = {
            title: title,
            description: description
        };
    
        TutorialDataService.create(data)
            .then((response: any) => {
                setId(response.data.id)
                setSubmitted(true)
                setPublished(response.data.published)
                console.log(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }

    const newTutorial = () => {
        setId(null)
        setTitle("")
        setDescription("")
        setPublished(false)
        setSubmitted(false)
    }

    return (
        <div className="submit-form">
        {submitted ? (
            <div>
                <h4>You submitted successfully!</h4>
                <button className="btn btn-success" onClick={newTutorial}>
                    Add
                </button>
            </div>
        ) : (
            <div>
                <InputField 
                    label="Title"
                    id="title"
                    type="text"
                    name="title"
                    class="form-control"
                    value={title}
                    onChange={(value: string) => setTitle(value)}
                />

                <InputField
                    label="Description"
                    id="description"
                    type="text"
                    name="description"
                    class="form-control"
                    value={description}
                    onChange={(value: string) => setDescription(value)}
                />

                <button onClick={saveTutorial} className="btn btn-success">
                    Submit
                </button>
            </div>
        )}
        </div>
    );
}
