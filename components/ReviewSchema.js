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
    .test('1-10','rating must be a number between 1-10',
      (val) => {
        return parseInt(val) < 11 && parseInt(val) > 0
      }
    ),
    author : yup.string()
    .min(3)
  })

  export default ReviewSchema;