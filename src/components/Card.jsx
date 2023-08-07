import React from 'react';

const Card = ({ title, text, image, footer }) => {
	return (
		<div class="col">
			<div class="card">
				<img src={image} class="card-img-top p-4" alt="..." />
				<div class="card-body">
					<h5 class="card-title">{title}</h5>
					<p class="card-text">{text}</p>
				</div>
				<div class="card-footer">
					<small class="text-muted">{footer}</small>
				</div>
			</div>
		</div>
	);
};

export default Card;
