import axios from "axios";
import { baseUrl } from "../config/config";

const useNotes = () => {
    //api calls

    const createNote = async () => {
        try {
            const request = await axios.post(`${baseUrl}/notes/create`);
            return request.status;
        } catch (error) {
            console.error(error);
        }
    };

    const getNotes = async () => {
        try {
            const request = await axios.get(`${baseUrl}/notes`);

            if (request.status == 200) {
                return { data: request.data, status: request.status };
            }
        } catch (error) {
            console.error(error);
        }
    };

    const deleteNote = async (noteId: number) => {
        try {
            const request = await axios.delete(
                `${baseUrl}/notes/delete/${noteId}`
            );
            return request.status;
        } catch (error) {
            console.error(error);
        }
    };

    return {
        createNote,
        getNotes,
        deleteNote,
    };
};

export default useNotes;
