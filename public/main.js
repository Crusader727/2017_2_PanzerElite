
import "./main.css";
import { Block } from "./block/block.js";
import router from "./utils/Router";
import LoginView from "./views/LoginView/LoginView";
import RegisterView from "./views/RegisterView/RegisterView";
import MenuView from "./views/MenuView/MenuView";
import ChangeView from "./views/ChangeView/ChangeView";
import ThemeView from "./views/ThemeView/ThemeView";
import GameTypeView from "./views/GameType/GameTypeView";
import GameView from "./views/GameView/GameView";

import routeValidate from "./utils/RouteValidate";
import progressBar from "./modules/load-bar";

progressBar.show();

const app = document.getElementById("application");
document.getElementById("background").style.backgroundImage = "url(../images/wallpaper.jpg)";

const main = new Block("div", { class: "main-container" });
app.appendChild(main.el);

//config
let login = new LoginView(main.el);
let register = new RegisterView(main.el);
let menu = new MenuView(main.el);
let change = new ChangeView(main.el);
let theme = new ThemeView(main.el);
let gameType = new GameTypeView(main.el);
let gameView = new GameView(main.el);


let config = {
	"/login/": {
		view: login
	},
	"/register/": {
		view: register
	},
	"/menu/": {
		view: menu
	},
	"/": {
		view: menu
	},
	"/changepass/": {
		view: change
	},
	"/play/": {
		view: gameType
	},
	"/game/": {
		view: gameView
	}
};

routeValidate(document.location.pathname, router, true);

router.init(main.el, config);
router.startListen();

progressBar.hide();

