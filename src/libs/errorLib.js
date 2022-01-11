export function onError(error) {
    let message = `Custom: ${error.toString()}`;
    // Auth errors
    if (!(error instanceof Error) && error.message) {
        message = `Custom: ${error.message}`;
    }
    alert(message);
}