
export const getObjectValue = (targetObject, fieldName) => {
    if(fieldName) {
        const childFields = fieldName.split('.');
        //get to the property value by iterating through the object structure
        let propValue = targetObject;
        for (let index in childFields) {
            // noinspection JSUnfilteredForInLoop
            propValue = propValue[childFields[index]];
        }
        return propValue === undefined || propValue === null ? "" : propValue;
    } else return targetObject === undefined || targetObject === null ? "" : targetObject;
};

export const getObjectJoin = (targetObject) => {
    return targetObject &&
        (Object.values(targetObject).map((item) => typeof(item) === "object" ? getObjectJoin(item) : item).join()) || "";
};