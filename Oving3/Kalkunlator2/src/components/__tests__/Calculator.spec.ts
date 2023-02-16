import Calcualtor from '../Calculator.vue';
import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";

describe("Calculator", () => {
    test("should add two numbers", async () => {
        const wrapper = mount(Calcualtor);
        const fiveButton = wrapper.findAll("button").at(9);
        const plusButton = wrapper.findAll("button").at(3);
        const twoButton = wrapper.findAll("button").at(13);
        await fiveButton.trigger("click");
        await plusButton.trigger("click");
        await twoButton.trigger("click");
        await wrapper.vm.equals();        

        //expect(wrapper.vm.value).toBe("7");
        /*
        wrapper.setData({ firstNumber: 10, secondNumber: 20 });
        wrapper.find("#add").trigger("click");
        expect(wrapper.vm.result).toBe(30);*/
    });

    test("should subtract two numbers", async () => {
        const wrapper = mount(Calcualtor);
        const fiveButton = wrapper.findAll("button").at(9);
        const minusButton = wrapper.findAll("button").at(7);
        const twoButton = wrapper.findAll("button").at(13);

        fiveButton.trigger("click");
        minusButton.trigger("click");
        twoButton.trigger("click");

        await wrapper.vm.equals();        

        expect(wrapper.vm.value).toBe("3");
    });

    test("should multiply two numbers", async () => {
        const wrapper = mount(Calcualtor);
        const fiveButton = wrapper.findAll("button").at(9);
        const multiplyButton = wrapper.findAll("button").at(11);
        const twoButton = wrapper.findAll("button").at(13);
        fiveButton.trigger("click");
        multiplyButton.trigger("click");
        twoButton.trigger("click");

        await wrapper.vm.equals();        

        expect(wrapper.vm.value).toBe("10");
    });

    test("should divide two numbers", async () => {
        const wrapper = mount(Calcualtor);
        const fiveButton = wrapper.findAll("button").at(9);
        const divideButton = wrapper.findAll("button").at(15);
        const twoButton = wrapper.findAll("button").at(13);
        fiveButton.trigger("click");
        divideButton.trigger("click");
        twoButton.trigger("click");

        await wrapper.vm.equals();        

        expect(wrapper.vm.value).toBe("2.5");
    });

    test("should clear the input field", () => {
        const wrapper = mount(Calcualtor);
        const fiveButton = wrapper.findAll("button").at(9);
        const clearButton = wrapper.findAll("button").at(0);
        fiveButton.trigger("click");
        clearButton.trigger("click");

        expect(wrapper.vm.value).toBe("");
    });
});