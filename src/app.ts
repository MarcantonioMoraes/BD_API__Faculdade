import { Express } from "express";
import { FaculdadeController } from "./controller/FaculdadeController.js";
import { Description, ExpressInitializer, SwaggerEndpoint, SwaggerInitializer, Title, Version } from "express-swagger-autoconfigure";


@SwaggerInitializer
@SwaggerEndpoint("/docs")
@Description('APP da Faculdade ')
@Version("1.0.0")
@Title("API Faculdade")
export default  class app{
    @ExpressInitializer
    public app!: Express;

    constructor(){
        this.initcontroller();
    }
    private initcontroller(): void {
        new FaculdadeController();
    }
    public getApp(): Express {
        return this.app;
    }
    
};
