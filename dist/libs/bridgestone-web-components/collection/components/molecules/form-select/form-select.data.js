import { IconName } from '../../atoms/icon/icon.types';
export const formSelectData = {
  required: true,
  requiredMessage: 'This field is required',
  icon: IconName.CaretDownward,
  label: 'Fill in your preferred appointment date and time.',
  name: 'Appointment',
  options: [
    { value: '', text: 'none' },
    { value: '2', text: 'two', selected: true },
    { value: '3', text: 'three' },
    { value: '4', text: 'four' },
    { value: '5', text: 'five' },
    { value: '6', text: 'six' },
    { value: '7', text: 'seven' },
  ],
};
//# sourceMappingURL=form-select.data.js.map
