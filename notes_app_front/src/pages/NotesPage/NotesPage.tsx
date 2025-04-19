import NotesList from "./NotesList/NotesList";
import useNotes from "../../hooks/useNotes";
import { useEffect, useState } from "react";
import { NoteType } from "../../types/noteTypes";
import { mockedNotes } from "../../assets/mockedNotes";

import "./NotesPage.scss";

const NotesPage = () => {
    const [notes, setNotes] = useState<NoteType[]>([]);
    const [canUpdateNotes, setCanUpdateNotes] = useState<boolean>(true);
    const [isCreating, setIsCreating] = useState<boolean>(false);
    const { getNotes, createNote, deleteNote } = useNotes();

    useEffect(() => {
        if (canUpdateNotes) {
            const notes = JSON.parse(JSON.stringify(getNotes()));
            setNotes(notes);
            setCanUpdateNotes(false);
        }
    });

    return (
        <div className="notes-page">
            <h2>Vos Notes !</h2>
            // !! Création de notes ici (toggle + mini-form) !! \\
            <>
                <NotesList
                    notes={mockedNotes}
                    onCreate={createNote}
                    onDelete={deleteNote}
                />
            </>
        </div>
    );
};

export default NotesPage;
