class Chain{
    constructor(A,B) {
        var options = {
            bodyA: A,
            bodyB: B,
            stiffness: 0.04,
            lenth: 1.3
        }

        this.chain = Constreint.create(options);
        
        World.add(this.chain,world);
    }
}