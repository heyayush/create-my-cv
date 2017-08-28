import React from 'react';
import MyStyles from '../styles/materialUIStyles';
import MenuItem from 'material-ui/MenuItem';

const iconTwitter = {svg: <svg className="icon icon-twitter" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z" fill-rule="nonzero"/></svg>,
	href:"https://twitter.com/web_kill"};
const iconSkype = {svg: <svg className="icon icon-skype" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8.035 12.6c-2.685 0-3.885-1.322-3.885-2.313 0-.51.374-.865.89-.865 1.15 0 .85 1.653 2.995 1.653 1.096 0 1.703-.597 1.703-1.208 0-.368-.18-.775-.904-.954l-2.387-.597C4.524 7.833 4.175 6.79 4.175 5.812c0-2.034 1.91-2.798 3.704-2.798 1.65 0 3.6.916 3.6 2.136 0 .523-.46.827-.97.827-.98 0-.8-1.36-2.78-1.36-.98 0-1.53.444-1.53 1.08 0 .636.77.84 1.44.993l1.76.392c1.93.433 2.42 1.566 2.42 2.633 0 1.652-1.27 2.886-3.82 2.886m7.4-3.26l-.02.09-.03-.16c.01.03.03.05.04.08.08-.45.12-.91.12-1.37 0-1.02-.2-2.01-.6-2.95-.38-.9-.93-1.71-1.62-2.4-.7-.69-1.5-1.24-2.4-1.62C10.01.59 9.02.39 8 .39c-.48 0-.964.047-1.43.137l.08.04-.16-.023.08-.016C5.927.183 5.205 0 4.472 0 3.278 0 2.155.466 1.31 1.313.465 2.16 0 3.286 0 4.483c0 .763.195 1.512.563 2.175l.013-.083.028.16-.04-.077c-.076.43-.115.867-.115 1.305 0 1.022.2 2.014.59 2.948.38.91.92 1.72 1.62 2.41.69.7 1.5 1.24 2.4 1.63.93.4 1.92.6 2.94.6.44 0 .89-.04 1.32-.12l-.08-.04.16.03-.09.02c.67.38 1.42.58 2.2.58 1.19 0 2.31-.46 3.16-1.31.84-.84 1.31-1.97 1.31-3.17 0-.76-.2-1.51-.57-2.18" fill-rule="nonzero"/></svg>,
	href:"#"};

const iconGithub = {svg:<svg className="icon icon-github" aria-labelledby="title" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>,
	href:"https://github.com/ayu15/"};

const iconLinkedin = {svg:<svg className="icon icon-linkedin" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51v1.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fill-rule="nonzero"/></svg>,
	href:"https://www.linkedin.com/in/ayushsharma03/"};

const iconFacebook = {svg:<svg className="icon icon-facebook" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fill-rule="nonzero"/></svg>,
	href:"https://www.facebook.com/ayush.sharma.5015"};

const iconCollection = [iconSkype, iconTwitter, iconGithub,iconLinkedin, iconFacebook];
export default class SocialIcons extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	socialMenuItems(icons) {
		return icons.map((icon, index) => (
			<a href = {icon.href} target="_blank">
			<MenuItem key={index}>
					{icon.svg}
			</MenuItem>
			</a>
		));
	}

	render() {

		return (<div>
				{this.socialMenuItems(iconCollection)}
			</div>
		)
	}
}