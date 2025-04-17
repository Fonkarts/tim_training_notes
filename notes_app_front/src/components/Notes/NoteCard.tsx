import { NoteType } from "../../types/noteTypes";

type NoteCardPropsType = {
  note: NoteType;
  onDelete?: (id: number) => void;
  onEdit?: (note: NoteType) => void;
  // onSelect?: (id: number) => void;
};

const NoteCard: React.FC<NoteCardPropsType> = ({ note, onDelete, onEdit }) => {
  return (
    <div className="note-card">
      <div className="note-header">
        <h3>{note.title}</h3>
        <small>🕓 {new Date(note.created_at).toLocaleString()}</small>
      </div>

      <p className="note-message">{note.message}</p>

      <div className="note-footer">
        <button onClick={() => onEdit?.(note)}>✏️ Modifier</button>
        <button className="danger" onClick={() => onDelete?.(note.id)}>
          🗑️ Supprimer
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
