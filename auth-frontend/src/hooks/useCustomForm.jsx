
import { useFormik } from 'formik';

const useCustomForm = (initialValues, onSubmit, validationSchema) => {
    const formik = useFormik({
       initialValues,
       validationSchema,
       onSubmit: async (values) => {
        try {
            const data = await onSubmit(values);
            console.log(data, "from the data");
        } catch (error) {
           console.log(error); 
        } 
        alert(JSON.stringify(values, null, 2));
       },
     });

     return { formik }
}

export default useCustomForm