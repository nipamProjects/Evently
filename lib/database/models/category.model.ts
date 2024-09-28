import { model, models, Schema , Document} from "mongoose";

export interface Icategory extends Document{
    id: string;
    name: string;

}

const CategorySchema = new Schema({
    name: {type: String , required: true , unique:true},
})

const Category = models.Category || model('Category' , CategorySchema);

export default Category;