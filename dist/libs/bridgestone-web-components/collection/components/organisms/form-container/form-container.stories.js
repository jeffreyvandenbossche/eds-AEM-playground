import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';
import { buttonData, formCheckboxData, formContainerData, formEmailInputData, formNumberInputData, formRadioButtonData, formSelectData, formTextInputData, formTextareaInputData, headerBannerImageData, } from './form-container.data';
import { Mode } from '../../../utils/modes';
const meta = {
  title: 'components/organisms/bs-form-container',
  component: 'bs-form-container',
  args: formContainerData,
};
export default meta;
const Default = {
  render: (args) => html ` <bs-form-container
      action="${args.action}"
      success-redirect="${args.successRedirect}"
      invalid-form-message="${args.invalidFormMessage}"
      submit-error-message="${args.submitErrorMessage}"
    >
      <bs-form-input
        name="${formTextInputData.name}"
        min="${formTextInputData.min}"
        type="${formTextInputData.type}"
        label="${formTextInputData.label}"
        required="${formTextInputData.required}"
        required-message="${formTextInputData.requiredMessage}"
        invalid-message="${formTextInputData.invalidMessage}"
      ></bs-form-input>
      <bs-form-input
        name="${formNumberInputData.name}"
        min="${formNumberInputData.min}"
        value="${formNumberInputData.value}"
        type="${formNumberInputData.type}"
        label="${formNumberInputData.label}"
        required="${formNumberInputData.required}"
        required-message="${formNumberInputData.requiredMessage}"
        invalid-message="${formNumberInputData.invalidMessage}"
      ></bs-form-input>
      <bs-form-input
        name="${formEmailInputData.name}"
        type="${formEmailInputData.type}"
        label="${formEmailInputData.label}"
        required="${formEmailInputData.required}"
        required-message="${formEmailInputData.requiredMessage}"
        invalid-message="${formEmailInputData.invalidMessage}"
      ></bs-form-input>
      <bs-form-select
        name="${formSelectData.name}"
        label="${formSelectData.label}"
        icon="${formSelectData.icon}"
        required="${formSelectData.required}"
        required-message="${formSelectData.requiredMessage}"
        options="${JSON.stringify(formSelectData.options)}"
      ></bs-form-select>
      <bs-form-input
        value="${formTextareaInputData.value}"
        name="${formTextareaInputData.name}"
        type="${formTextareaInputData.type}"
        label="${formTextareaInputData.label}"
        icon="${formTextareaInputData.icon}"
        required="${formTextareaInputData.required}"
        required-message="${formTextareaInputData.requiredMessage}"
        invalid-message="${formTextareaInputData.invalidMessage}"
        rows="${formTextareaInputData.rows}"
        resizeable="${formTextareaInputData.resizeable}"
      ></bs-form-input>
      <bs-form-checkbox
        name="${formCheckboxData.name}"
        required-message="${formCheckboxData.requiredMessage}"
        required="${formCheckboxData.required}"
        label="${formCheckboxData.label}"
        options="${JSON.stringify(formCheckboxData.options)}"
      ></bs-form-checkbox>
      <bs-form-radio-button
        name="${formRadioButtonData.name}"
        required-message="${formRadioButtonData.requiredMessage}"
        required="${formRadioButtonData.required}"
        label="${formRadioButtonData.label}"
        options="${JSON.stringify(formRadioButtonData.options)}"
      ></bs-form-radio-button>
      <bs-button
        mode="${args.mode}"
        text=${buttonData.text}
        href=${buttonData.href}
        target=${buttonData.target}
        type=${buttonData.type}
        action=${buttonData.action}
        variant=${buttonData.variant}
        icon=${buttonData.iconRight}
        is-full-width=${buttonData.isFullWidth}
        is-disabled=${buttonData.isDisabled}
        @bsButtonClick=${action('bsClickAction')}
      ></bs-button>
    </bs-form-container>`,
};
export const Bridgestone = Object.assign(Object.assign({}, Default), { args: {
    mode: Mode.Bridgestone,
  } });
export const Firststop = Object.assign(Object.assign({}, Default), { args: {
    mode: Mode.Firststop,
  } });
export const Thankyou = {
  args: headerBannerImageData,
  render: (args) => html ` <bs-header-banner
      logo=${JSON.stringify(args.logo)}
      label=${args.label}
      image=${JSON.stringify(args.image)}
      header-title=${JSON.stringify(args.headerTitle)}
      subtitle=${args.subtitle}
      button=${JSON.stringify(args.button)}
      variant="${args.variant}"
      video="${JSON.stringify(args.video)}"
      @bsClickAction=${action('bsClickAction')}
    ></bs-header-banner>`,
};
//# sourceMappingURL=form-container.stories.js.map
