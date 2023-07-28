
//a model is a blueprint for the obj we create
//new objs can be created based on the ste up we provide here

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string ) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;

    }

} 