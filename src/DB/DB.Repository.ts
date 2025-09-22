import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";



@Injectable()
export abstract class DBRepository<TDocument> {

    constructor(private readonly model: Model<TDocument>) { }

    async create(data: Partial<TDocument>): Promise<TDocument> {
        return this.model.create(data)
    }

    async findOne(filter: any): Promise<TDocument | null> {
        return this.model.findOne(filter)
    }

    async findAll(): Promise<TDocument[]> {
        return this.model.find()
    }

    async update(id: any, document: Partial<TDocument>): Promise<TDocument | null> {
        return this.model.findByIdAndUpdate(id, document, { new: true });
    }

    async delete(id: string): Promise<boolean> {
        return this.model.findByIdAndDelete(id);
    }
}

