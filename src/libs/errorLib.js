//--- debugging / testing
import * as Sentry from "@sentry/react";

const isLocal = process.env.NODE_ENV === "development";
export function initSentry() {
    if (isLocal) {
        return;
    }
    Sentry.init({ dsn: "7dc42313380f4979a1c575042f293daa@o1115547.ingest.sentry.io/123456" });
}
export function logError(error, errorInfo = null) {
    if (isLocal) {
        return;
    }
    Sentry.withScope((scope) => {
        errorInfo && scope.setExtras(errorInfo);
        Sentry.captureException(error);
    });
}    
export function onError(error) {
    /*---- Removed when implementing Sentry --------
    let message = `Custom: ${error.toString()}`;
    // Auth errors
    if (!(error instanceof Error) && error.message) {
        message = `Custom: ${error.message}`;
    }
    alert(message);
    ----------------------------------------------*/
    let errorInfo = {};
    let message = error.toString();
    // Auth errors
    if (!(error instanceof Error) && error.message) {
        errorInfo = error;
        message = error.message;
        error = new Error(message);
        // API errors
    } else if (error.config && error.config.url) {
        errorInfo.url = error.config.url;
    }
    logError(error, errorInfo);
    alert(message);
}
