class Food
{
    constructor()
    {
        this.foodStock = 0;
        this.lastFed = 0;
        this.image = loadImage("Milk.png");
    }

    getFoodStock()
    {
        return this.foodStock;
    }

    updateFoodStock(foodStock)
    {
        this.foodStock = foodStock;
    }

    deductFood()
    {
        if(this.foodStock > 0)
        {
            this.foodStock = this.foodStock -1;
        }
    }

    display()
    {
        imageMode(CENTER);
        image(this.image,250,250,100,100);

        if(this.foodStock != 0)
        {
            for(var i = 0; i<this.foodStock; i++)
            {
                if(i%10 == 0)
                {
                    x = 80;
                    y = y + 50
                }

                image(this.image,x,y,100,100);
                x = x + 30
            }
        }
    }
}