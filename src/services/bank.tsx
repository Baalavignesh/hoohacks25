const createRequest = async (request: any) => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/bank/createbankrequest`, {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response.json();
};

const getAllRequests = async (username: string) => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/bank/getbankrequest/${username}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response.json();
};      

const getSpecificBloodGroup = async (bloodGroup: string) => {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/bank/getspecificbloodgroup/${bloodGroup}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response.json();
};

const GetUsersWithinRadius = async (latitude: number, longitude: number, radius: number, bloodGroup: string) => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/bank/getuserswithinradius`, {
        method: "POST",
        body: JSON.stringify({ latitude, longitude, radius, bloodGroup }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response.json();
};

export { createRequest, getAllRequests, getSpecificBloodGroup, GetUsersWithinRadius };