import React, { useState } from 'react';
import reviews from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
	const [reviewId, setReviewId] = useState(0);
	const randIdFunc = () => {
		const randId = Math.floor(Math.random() * 4);
		setReviewId(randId);
	};

	return (
		<>
			<div className='review'>
				<section className='img-container'>
					<img
						className='person-img'
						src={reviews[reviewId].image}
						alt={reviews[reviewId].name}
					></img>
					<span className='quote-icon'>
						<FaQuoteRight />
					</span>
				</section>
				<h4 className='author'>{reviews[reviewId].name}</h4>
				<p className='job'>{reviews[reviewId].job}</p>
				<p className='info'>{reviews[reviewId].text}</p>
				<div className='button-container'>
					<button
						className='prev-btn'
						onClick={() => {
							reviewId <= 0
								? setReviewId(3)
								: setReviewId(reviewId - 1);
						}}
					>
						<FaChevronLeft />
					</button>
					<button
						className='next-btn'
						onClick={() => {
							reviewId >= 3
								? setReviewId(0)
								: setReviewId(reviewId + 1);
						}}
					>
						<FaChevronRight />
					</button>
				</div>
				<button className='random-btn' onClick={randIdFunc}>
					Surprise Me
				</button>
			</div>
		</>
	);
};

export default Review;
