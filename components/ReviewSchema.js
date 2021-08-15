import * as yup from 'yup';

const ReviewSchema = yup.object({
    title : yup.string()
    .required()
    .min(3)
    ,
    review : yup.string()
    .required()
    .min(6)
    ,
    rating : yup.string()
    .required()
    .test('1-5','rating must be a number between 1-5',
      (val) => {
        return parseInt(val) < 6 && parseInt(val) > 1
      }
    )
  })

  export default ReviewSchema;