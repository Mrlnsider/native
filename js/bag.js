var girlBag = {
	brand : "Prada",
	accessories : [ "Кошелёк", "Телефон", "Ключи", "Косметичка" ],
  	addAccessories : function (newAccessories) {
   		this.accessories.push (newAccessories)
  	},                   
  	deleteAccessories : function (num) {
    	this.accessories.splice (num, 1)
  	} 
}

girlBag.addAccessories ("Нож")
girlBag.deleteAccessories (2)
console.log (girlBag.accessories)


