import Calcualtor from '../Calculator.vue';
import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";

describe("Calculator", () => {
    test("should add two numbers", () => {
        const wrapper = mount(Calcualtor);
        const fiveButton = wrapper.findAll("button").at(9);
        const plusButton = wrapper.findAll("button").at(3);
        const twoButton = wrapper.findAll("button").at(13);
        fiveButton.trigger("click");
        plusButton.trigger("click");
        twoButton.trigger("click");

        wrapper.find(".equals-button").trigger("click");

        expect(wrapper.vm.value).toBe("7");
        /*
        wrapper.setData({ firstNumber: 10, secondNumber: 20 });
        wrapper.find("#add").trigger("click");
        expect(wrapper.vm.result).toBe(30);*/
    });

    test("should subtract two numbers", () => {
        const wrapper = mount(Calcualtor);
        const fiveButton = wrapper.findAll("button").at(9);
        const minusButton = wrapper.findAll("button").at(7);
        const twoButton = wrapper.findAll("button").at(13);
        fiveButton.trigger("click");
        minusButton.trigger("click");
        twoButton.trigger("click");

        wrapper.find(".equals-button").trigger("click");

        expect(wrapper.vm.value).toBe("3");
    });

    test("should multiply two numbers", () => {
        const wrapper = mount(Calcualtor);
        const fiveButton = wrapper.findAll("button").at(9);
        const multiplyButton = wrapper.findAll("button").at(11);
        const twoButton = wrapper.findAll("button").at(13);
        fiveButton.trigger("click");
        multiplyButton.trigger("click");
        twoButton.trigger("click");

        wrapper.find(".equals-button").trigger("click");

        expect(wrapper.vm.value).toBe("10");
    });

    test("should divide two numbers", () => {
        const wrapper = mount(Calcualtor);
        const fiveButton = wrapper.findAll("button").at(9);
        const divideButton = wrapper.findAll("button").at(15);
        const twoButton = wrapper.findAll("button").at(13);
        fiveButton.trigger("click");
        divideButton.trigger("click");
        twoButton.trigger("click");

        wrapper.find(".equals-button").trigger("click");

        expect(wrapper.vm.value).toBe("2.5");
    });
});

describe("Calculator", () => {
    test("should clear the input field", () => {
        const wrapper = mount(Calcualtor);
        const fiveButton = wrapper.findAll("button").at(9);
        const clearButton = wrapper.findAll("button").at(0);
        fiveButton.trigger("click");
        clearButton.trigger("click");

        expect(wrapper.vm.value).toBe("");
    });
});