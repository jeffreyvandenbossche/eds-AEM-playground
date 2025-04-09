import { ButtonType, ButtonVariant } from '../../atoms/button/button.types';
import { Variant } from '../header-banner/header-banner.types';
import { TitleColor, TitleTag, TitleVariant } from '../../atoms/title/title.types';
import { IconName } from '../../atoms/icon/icon.types';
import { InputType } from '../../molecules/form-input/form-input.types';
import { DEFAULT_IMAGE_16_9 } from '../../atoms/image/image.data';
export const formContainerData = {
  action: 'https://httpbin.org/post',
  successRedirect: '/?path=/story/components-organisms-bs-form-container--thankyou',
  invalidFormMessage: 'We cannot submit the form because some fields have not been properly filled in.',
  submitErrorMessage: 'Something went wrong while trying to submit the form. Please try again later.',
};
export const formTextInputData = {
  required: false,
  min: '3',
  requiredMessage: 'The name field is required.',
  invalidMessage: 'The provided name should be between 3 and 10 characters long.',
  label: 'Name',
  name: 'name',
  type: InputType.Text,
};
export const formNumberInputData = {
  required: false,
  min: '12',
  requiredMessage: 'The age field is required.',
  invalidMessage: 'The provided age value should be above 12.',
  label: 'Age',
  name: 'age',
  type: InputType.Number,
};
export const formEmailInputData = {
  required: true,
  min: '5',
  max: '',
  requiredMessage: 'The email field is required.',
  invalidMessage: 'This should be a valid email.',
  label: 'Email',
  name: 'email',
  type: InputType.Email,
};
export const formSelectData = {
  required: true,
  requiredMessage: 'This field is required',
  icon: IconName.CaretDownward,
  label: 'How many tyres do you need?',
  name: 'tyres',
  options: [
    { value: '', text: 'none', selected: true, disabled: true },
    { value: '2', text: 'two' },
    { value: '3', text: 'three' },
    { value: '4', text: 'four' },
    { value: '5', text: 'five' },
    { value: '6', text: 'six' },
    { value: '7', text: 'seven' },
  ],
};
export const formTextareaInputData = {
  required: true,
  requiredMessage: 'The checkbox is required.',
  invalidMessage: 'The question field should be between 10 and 255 characters long.',
  icon: IconName.CaretDownward,
  label: 'Please ask you question.',
  name: 'question',
  type: InputType.Textarea,
  rows: 3,
  resizeable: true,
};
export const formCheckboxData = {
  requiredMessage: 'The checkbox is required.',
  name: 'Terms & Conditions',
  required: true,
  label: 'I agree with the Terms & Conditions',
  options: [
    {
      text: 'Email',
    },
    {
      value: 'phone',
      text: 'Phone',
    },
    {
      value: 'pigeon',
      text: 'Postal pigeon',
    },
  ],
};
export const formRadioButtonData = {
  requiredMessage: 'The checkbox is required.',
  name: 'correspondance',
  required: true,
  label: 'Contact me by:',
  options: [
    {
      value: 'email',
      text: 'Email',
    },
    {
      value: 'phone',
      text: 'Phone',
    },
    {
      value: 'pigeon',
      text: 'Postal pigeon',
      selected: true,
    },
  ],
};
export const buttonData = {
  text: 'Submit',
  type: ButtonType.Submit,
  variant: ButtonVariant.Primary,
  iconRight: IconName.ArrowForward,
  isFullWidth: false,
  isDisabled: false,
};
export const thankyouData = {
  src: 'https://s7g10.scene7.com/is/image/bridgestoneeudev/bs_website_contentpage_psr_d_1920x635?qlt=95&amp;ts=1690981514131&amp;dpr=off',
  srcset: 'https://s7g10.scene7.com/is/image/bridgestoneeudev/bs_website_contentpage_psr_d_1920x635?qlt=95&amp;wid=200&amp;ts=1690981514131&amp;dpr=off 200w,https://s7g10.scene7.com/is/image/bridgestoneeudev/bs_website_contentpage_psr_d_1920x635?qlt=95&amp;wid=400&amp;ts=1690981514131&amp;dpr=off 400w,https://s7g10.scene7.com/is/image/bridgestoneeudev/bs_website_contentpage_psr_d_1920x635?qlt=95&amp;wid=1080&amp;ts=1690981514131&amp;dpr=off 1080w,https://s7g10.scene7.com/is/image/bridgestoneeudev/bs_website_contentpage_psr_d_1920x635?qlt=95&amp;wid=1920&amp;ts=1690981514131&amp;dpr=off 1920w',
  width: '1920',
  height: 635,
  imageSizes: '1080px, 1920px, 400px, 200px',
  altText: 'Test image',
  itemprop: 'contentUrl',
  cover: false,
  title: 'Thank you for your question',
  tag: TitleTag.H1,
  variant: TitleVariant.None,
  color: TitleColor.Black,
  text: "We'll do our best to contact you within 3 business days.",
};
export const headerBannerImageData = {
  image: DEFAULT_IMAGE_16_9,
  headerTitle: {
    tag: TitleTag.H1,
    text: 'Thank you for your question',
    color: TitleColor.Black,
    variant: TitleVariant.None,
  },
  subtitle: "We'll do our best to contact you within 3 business days.",
  variant: Variant.Image,
};
//# sourceMappingURL=form-container.data.js.map
