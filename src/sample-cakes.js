const cakes = {
	cake1: {
	   name:"Ocean delight",
	   image:"/public/cakeImages/1.jpg",
	   desc: "A dash of hot chockolate on icing",
	   availability : {
		1:{size:"10in",
		   price: 2500,
		   status: "available"
		   }
	   }
	},

	cake2: {
	   name:"Ruff and tumble",
	   image:"../public/cakeImages/2.jpg",
	   desc: "fondant icing with soft middle",
	   availability : {
		1:{size:"10in",
		   price: 3000,
		   status: "available"
		   }
	   }
	},

	cake3: {
	   name:"Shokoloko bangoshe",
	   image:"../public/cakeImages/7.jpg",
	   desc: "shokolade und reis",
	   availability : {
		1:{size:"10in",
		   price: 2500,
		   status: "available"
		   }
	   }
	},

	cake4: {
	   name:"Desert Mushy",
	   image:"../public/cakeImages/6.jpg",
	   desc: "unconventional cake baking at work",
	   availability : {
		1:{size:"10in",
		   price: 1700,
		   status: "available"
		   }
	   }
	},

	cake5: {
	   name:"Raging fire",
	   image:"../public/cakeImages/5.jpg",
	   desc: "Motolov cake walking on water",
	   availability : {
		1:{size:"10in",
		   price: 1500,
		   status: "unavailable"
		   }
	   }
	}
};


export default cakes;