import Kontaktskjema from '../Kontaktskjema.vue';
import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";

describe("Kontaktskjema", () => {
  test("Form displays name, email and message inputs", () => {
      const wrapper = mount(Kontaktskjema);
      const nameInput = wrapper.find('#navn');
      const emailInput = wrapper.find('#epost');
      const messageInput = wrapper.find('#emne');
      expect(nameInput.exists()).toBe(true);
      expect(emailInput.exists()).toBe(true);
      expect(messageInput.exists()).toBe(true);
    }
  );
});