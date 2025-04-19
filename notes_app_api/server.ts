// server
import app from "./app";
import { sequelize } from "./models/notes.model";

const PORT = 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
});
