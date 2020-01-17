/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api } from 'lwc';

export default class cBadge extends LightningElement {
    @api label;
    @api iconName;
    @api size;

    connectedCallback() {
        this.classList.add('slds-badge');
    }
}
