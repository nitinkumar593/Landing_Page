const requiredEnvVars = ['VITE_PUBLIC_KEY', 'VITE_SERVICE_ID', 'VITE_TEMPLATE_ID','VITE_SITE_KEY'];

requiredEnvVars.forEach((key) => {
    if (!import.meta.env[key]) {
        throw new Error(`Missing required environment variable: ${key}`);
    }
});

const config = {
    publicKey: import.meta.env.VITE_PUBLIC_KEY,
    serviceId: import.meta.env.VITE_SERVICE_ID,
    templateId: import.meta.env.VITE_TEMPLATE_ID,
    siteKey: import.meta.env.VITE_SITE_KEY
};

export default config;