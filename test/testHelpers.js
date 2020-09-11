import assert from "assert";
import {getObjectValue, getObjectJoin} from "../src/pic-ratio-fill/helpers/objectValue";

const testObject = {
    firstName:"jim",
    lastName:"bob",
    location: {
        address1: "123 red neck ville",
        zipCode: "12399",
        mailBox: {
            color: "green",
            height: 3.4,
            bolts: null
        }
    }
};

describe("test get value", () =>{
    it("get first level objects", () =>{
        const first = getObjectValue(testObject, "firstName");
        const last = getObjectValue(testObject, "lastName");
        assert.strictEqual(last, "bob");
        assert.strictEqual(first, "jim");
    });

    it("second level object value", () => {
        const address = getObjectValue(testObject, "location.address1");
        const zip = getObjectValue(testObject, "location.zipCode");
        assert.strictEqual(address, "123 red neck ville");
        assert.strictEqual(zip, "12399");
    });

    it("third level object value", () => {
        const color = getObjectValue(testObject, "location.mailBox.color");
        const height = getObjectValue(testObject, "location.mailBox.height");
        assert.strictEqual(color, "green");
        assert.strictEqual(height, 3.4);
    });
});


describe("get join from object", () =>{
    it("get values from good object", () => {
        const result = getObjectJoin(testObject);
        assert.strictEqual(result, "jim,bob,123 red neck ville,12399,green,3.4,");
    });

    it("pass null", () => {
        const result = getObjectJoin(null);
        assert.strictEqual(result, "");
    });
});