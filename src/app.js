// import express from "express";
// import exphbs from "express-handlebars";
// import indexRoutes from "./routes/index.routes";

// const hbs = create({
//     layoutsDir: path.join(app.get("views"), 'layouts'),
//     defaultLayout: 'main',
//     extname: '.hbs',
// });

// const app = express();


// app.set('views', './views');

// app.engine(".hbs",hbs.engine({
//     extname:".hbs",
// }));

// //Routes
// app.use(indexRoutes);

// export default app;

import express from 'express';
import indexRoutes from './routes/index.routes';
import { create } from 'express-handlebars';
import path from 'path';

const app = express();

app.set('views', path.join(__dirname, 'views'));

app.engine(
    '.hbs', 
    create({
        layoutsDir: path.join(app.get('views'), 'layouts'),
        partialsDir: path.join(app.get('views'), 'partials'),
        defaultLayout: 'main',
        extname: '.hbs',
    }).engine
);


app.set('view engine', '.hbs');

//Routes
app.use(indexRoutes);

export default app;