import BaseView from "../BaseView";
import loginFields from "./login.js";
import { Block } from "../../block/block";
import router from "../../utils/Router";
import UserService from "../../services/user-service";
import progressBar from "../../modules/load-bar";

let userService = new UserService();

export default class LoginView extends BaseView {
	constructor(parentNode) {
		const view = new Block("div", { class: "form hidden" });
		super(view.el);
		this.view = view;
		this.parentNode = parentNode;
		this.parentNode.appendChild(this.view.el);
		this._appendChildren();
		this._buttonsInit();
	}

	_appendChildren() {
		loginFields.forEach(key => {
			let ch = new Block(key.elemType, key);
			this.view.el.appendChild(ch.el);
			this[key.name] = ch;
		});
	}

	_buttonsInit() {
		this.loginBtn.setCallback(() => {
			progressBar.show();
			userService.login(this.nick.el.value,
				this.password.el.value)
				.then(() => {
					router.go(this.loginBtn.el.getAttribute("href"));
					this.warning.hide();
					progressBar.hide();
				})
				.catch(err => {
					this.warning.setAttributes({ value: err });
					this.warning.show();
					progressBar.hide();
				});
		});
		this.changeformBtn.setCallback(() => {
			this.warning.hide();
			router.go(this.changeformBtn.el.getAttribute("href"), false);
		});
	}
}