import { NoteType } from "../../types/noteTypes";
import useNotes from "../../hooks/useNotes";
import "./NotesCard.scss";

type NoteCardPropsType = {
    note: NoteType;
    onCreate?: () => void;
    onDelete?: (noteId: number) => void;
    // onEdit?: (note: NoteType) => void;
    // onSelect?: (id: number) => void;
};

const NoteCard: React.FC<NoteCardPropsType> = ({
    note,
    onCreate,
    onDelete,
}) => {
    return (
        <div className="note-card">
            <div className="note-header">
                <h3>{note.title}</h3>
                <small> 🕓 {new Date(note.created_at).toLocaleString()}</small>
            </div>

            <p className="note-message">{note.message}</p>

            <div className="note-footer">
                <button onClick={() => console.log("edit")}>✏️ Modifier</button>
                {onDelete && (
                    <button
                        className="danger"
                        onClick={() => onDelete(note.id)}
                    >
                        {" "}
                        🗑️ Supprimer
                    </button>
                )}
            </div>
        </div>
    );
};

export default NoteCard;
