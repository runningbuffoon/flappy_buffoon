function Collision() {
    
    this.detect = function(object1,object2){
                
        var largeur = object1.dimension.width + object2.dimension.width;
        var variationX = object2.position.x + object2.dimension.width -  object1.position.x;
        
        if (variationX < largeur) {
            var hauteur = object1.dimension.height + object2.dimension.height;
            var variationY = object2.position.x + object2.dimension.height - object1.position.y;
            if  (variationY < hauteur) {
                return true;
            } else {
                return false;
            }
        }
    }
}
