const dev = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "rp-notes-app-uploads",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://78ciobxa69.execute-api.us-east-1.amazonaws.com/dev",
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_XMKihNemq",
        APP_CLIENT_ID: "3va4nobrhu11rk2tm2rj63o192",
        IDENTITY_POOL_ID: "us-east-1:573732a4-7707-4096-804b-e6c62163408e",
    },
    STRIPE_KEY: "pk_test_51KF30UEbXJ7XFtycrMv2pdpPj7EsobjHmXl62COS6IMtKPgGhzQAeKfpAQ2KEfDrHxLzEwvnjIf8vurd8mIdnddZ00sNDkGhv2",
};
const prod = {
    STRIPE_KEY: "pk_test_51KF30UEbXJ7XFtycrMv2pdpPj7EsobjHmXl62COS6IMtKPgGhzQAeKfpAQ2KEfDrHxLzEwvnjIf8vurd8mIdnddZ00sNDkGhv2",
    s3: {
        REGION: "us-east-1",
        BUCKET: "prod-infrastructure-s3-uploads4f6eb0fd-137516gabu5ab"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://y8pii8aze8.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_g8tDcerZ3",
        APP_CLIENT_ID: "9haeud60u9lkmlkio7a3j7klp",
        IDENTITY_POOL_ID: "us-east-1:47fff5e1-8cab-4d7a-9c9d-58ccaabc16bb"
    }
    };
const config = {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    // Default to dev if not set
    ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};
export default config;