const apiKey =
  "DRZflbR00GnNTdhvWn7QA6EzrobSkta1k2zByPnlZe6IuEjb60s1jou--6soUD3oXPrsliiBQLcVEyzppf20LRdO3xDJzwKElbrG3Pp5BDVn_EjXEtQ0Qj_V8uiHY3Yx";
const Yelp = {
  // * Using Promise
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            console.log(business);
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
            };
          });
        } else {
          console.log("json failed");
        }
      });
  },
};

// // * Using Async
// async search(term, location, sortBy) {
// 	const response = await fetch(
// 		`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
// 		{
// 			headers: {
// 				Authorization: `Bearer ${apiKey}`,
// 			},
// 		}
// 	);
// 	const jsonResponse = await response.json();
// 	if (jsonResponse.businesses) {
// 		jsonResponse.businesses.map((business) => {
// 			return {
// 				id: business.id,
// 				imageSrc: business.image_url,
// 				name: business.name,
// 				address: business.location.address1,
// 				city: business.location.city,
// 				state: business.location.state,
// 				zipCode: business.location.zip_code,
// 				category: business.categories[0].title,
// 				rating: business.rating,
// 				reviewCount: business.review_count
// 			};
// 		});
// 	}
// }

export default Yelp;
