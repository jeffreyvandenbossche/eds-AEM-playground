import { Host, h } from '@stencil/core';
import { deepQuerySelectorAll } from '../../../utils/deepQuerySelectorAll';
/**
 * The form container component.
 */
export class BsFormContainer {
  constructor() {
    this.acceptedRequestStatus = [200, 201];
    this.formHasErrors = false;
    this.isFormSending = false;
    this.submitHasFailed = false;
    this.action = undefined;
    this.invalidFormMessage = undefined;
    this.submitErrorMessage = undefined;
    this.successRedirect = undefined;
  }
  /**
   * Events
   */
  async onBsButtonClickHandler(e) {
    if (e.detail.type === 'submit') {
      this.formHasErrors = false;
      this.submitHasFailed = false;
      this.validateForm().then(() => {
        if (this.isFormValid() && !this.isFormSending) {
          this.isFormSending = true;
          this.submitRequest();
        }
      });
    }
  }
  /**
   * Methods
   */
  async validateForm() {
    this.formHasErrors = false;
    await Promise.all(this.allFields.map((field) => field.validate()));
  }
  isFormValid() {
    this.formHasErrors = this.allFields.map((field) => field.invalid).includes(true);
    return !this.formHasErrors;
  }
  getData() {
    const formData = {};
    this.allFields.forEach((field) => {
      formData[field.name] = field.value;
    });
    return formData;
  }
  async submitRequest() {
    try {
      const response = await fetch(this.action, {
        method: 'POST',
        body: JSON.stringify(this.getData()),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (this.acceptedRequestStatus.includes(response.status)) {
        window.location.href = this.successRedirect;
      }
      else {
        this.submitHasFailed = true;
      }
    }
    catch (_a) {
      this.submitHasFailed = true;
    }
    finally {
      this.isFormSending = false;
    }
  }
  /**
   * Lifecycle hooks
   */
  componentDidLoad() {
    this.allFields = deepQuerySelectorAll('bs-form-field', this.hostElement);
  }
  /**
   * Render
   */
  render() {
    return (h(Host, null, h("form", { class: `form-container ${this.isFormSending ? 'is-sending' : ''}`, action: this.action, method: "dialog" }, h("slot", null), this.formHasErrors && h("p", { class: "form-error" }, this.invalidFormMessage, "\u00A0"), this.submitHasFailed && h("p", { class: "form-error" }, this.submitErrorMessage, "\u00A0"))));
  }
  static get is() { return "bs-form-container"; }
  static get originalStyleUrls() {
    return {
      "$": ["form-container.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["form-container.css"]
    };
  }
  static get properties() {
    return {
      "action": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The endpoint for the submit request."
        },
        "attribute": "action",
        "reflect": false
      },
      "invalidFormMessage": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Message to inform the user there are issues with the filled in values."
        },
        "attribute": "invalid-form-message",
        "reflect": false
      },
      "submitErrorMessage": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Message to inform the usere something went wrong while submitting the form."
        },
        "attribute": "submit-error-message",
        "reflect": false
      },
      "successRedirect": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The page the user is redirected to in case of a successfull submit."
        },
        "attribute": "success-redirect",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "formHasErrors": {},
      "isFormSending": {},
      "submitHasFailed": {}
    };
  }
  static get elementRef() { return "hostElement"; }
  static get listeners() {
    return [{
        "name": "bsButtonClick",
        "method": "onBsButtonClickHandler",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=form-container.js.map
