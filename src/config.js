const config = {
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
};
export default config;