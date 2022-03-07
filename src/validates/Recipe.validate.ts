import { ErrorApi } from './../utils/HandleError';
import { RecipeModelInput } from './../Types/Recipe';
const RecipeValidateCreate = (data: RecipeModelInput) => {
    if (!data.title) throw ErrorApi.BadRequest('Công thức cần tiêu đề');
    if(data.title&&data.title.length<2) throw ErrorApi.BadRequest('Tiêu đề phải dài hơn 2 ký tự');
    if (!data.idUser) throw ErrorApi.BadRequest('Công thức cần người tạo');
    if (!data.img) throw ErrorApi.BadRequest('Yêu cầu hình ảnh');
    if (data.ingredients?.length! <= 0) {
        throw ErrorApi.BadRequest('Yêu cầu thành phần');
    }
    if (Object.keys(data.totalRecipe!).length < 4) {
        throw ErrorApi.BadRequest('Yêu cầu tổng số dinh dưỡng');
    }
    if (data.data?.length! <= 0) {
        throw ErrorApi.BadRequest('Yêu cầu các bước cụ thể');
    }
};


const RecipeValidate = {
    RecipeValidateCreate,
};
export default RecipeValidate;
