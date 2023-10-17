import React from 'react';
import {Link} from 'react-router-dom';
import Rating from '../Rating/Rating';
const SingleProduct = ({data}) => {
	return (
		<div className="!flex justify-center">
			<div className="new-card card-compact !w-72 md:!w-72 mt-8  mx-3">
				<div className="relative overflow-hidden">
					<Link>
						<img className="h-[300px]" src={data?.img} alt={data?.name} />
					</Link>

					<div className="action-link">
						<div>
							<Link className="text-white hover:text-primary font-bold uppercase transition duration-500">
								Add to Cart
							</Link>
						</div>

						<div>
							<Link
								onClick={() => handleWishList(data?._id)}
								className="tooltip tooltip-left mx-2 text-white hover:text-primary transition duration-500 text-xl"
								data-tip="Add To Wishlist"
							>
								<i className="icon-heart"></i>
							</Link>
						</div>
					</div>
				</div>
				<div className="mt-3">
					<h2 className="card-title">{data?.name}</h2>
				</div>
				<div className="price-rating flex justify-between">
					<Rating rating={data?.rating}></Rating>
					<div className="price mr-3">
						<span className="font-bold text-primary">
							{data.discount_price > 0 ? (
								<>
									<del>${data.main_price}</del> - ${data.discount_price}
								</>
							) : (
								<span>${data.main_price}</span>
							)}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;
