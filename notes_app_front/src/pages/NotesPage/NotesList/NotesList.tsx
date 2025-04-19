import NoteCard from "../../../components/Notes/NoteCard";
import { NoteType } from "../../../types/noteTypes";

type NotesListPropsType = {
    notes: Array<NoteType>;
    onCreate: () => void;
    onDelete: (noteId: number) => void;
};

const NotesList: React.FC<NotesListPropsType> = ({
    notes,
    onCreate,
    onDelete,
}) => {
    // console.log(notes);
    return (
        <div className="notes-page__list">
            {notes.length > 0 &&
                notes.map((note: NoteType) => {
                    return (
                        <div key={`note${note.id}`}>
                            <NoteCard
                                note={note}
                                onCreate={onCreate}
                                onDelete={onDelete}
                            />
                        </div>
                    );
                })}
        </div>
    );
};

export default NotesList;
