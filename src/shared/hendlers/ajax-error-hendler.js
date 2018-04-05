export default async function handleErrors(response) {
    if (!response.ok) {
        let message;

        await response.json().then((res) => {
            message = res.Message
        })

        throw Error(message);
    }
    return response;
}