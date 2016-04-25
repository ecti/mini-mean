// Controllers
import homeController from '../controllers/home';

export default function(app) {
    app.route('/').get((req, res, next) => {
        res.render('index');
    });

    app.route('/about').get((req, res, next) => {
        res.send('The about page.');
    });
}
