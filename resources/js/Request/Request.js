
const Get = async ({url}) => {
    let response = await fetch(`${window.location.origin}/${url}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response;
}

const Insert = async (url, data) => {
    let response = await fetch(`${window.location.origin}/${url}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return response;
}

export {Get, Insert};
