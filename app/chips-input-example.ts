import { Component, ViewChild } from "@angular/core";
import { MatChipInputEvent } from "@angular/material";
import { ENTER, COMMA } from "@angular/cdk/keycodes";

/**
 * @title Chips with input
 */
@Component({
  selector: "chips-input-example",
  templateUrl: "chips-input-example.html",
  styleUrls: ["chips-input-example.css"]
})
export class ChipsInputExample {
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  @ViewChild("chipList") chipList;

  fruits = [{ name: "Lemon" }, { name: "Lime" }, { name: "Apple" }];

  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our fruit
    if ((value || "").trim()) {
      this.fruits.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = "";
    }

    if (this.fruits.length > 3) {
      this.chipList.errorState = true;
    }
  }

  remove(fruit: any): void {
    let index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }

    if (this.fruits.length <= 3) {
      this.chipList.errorState = false;
    }
  }

  setError() {
    this.chipList.errorState = true;
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
