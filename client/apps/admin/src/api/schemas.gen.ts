// This file is auto-generated by @hey-api/openapi-ts

export const AdminBadRequestSchema = {
    type: 'object',
    required: ['message3', 'myName'],
    properties: {
        message3: {
            type: 'string'
        },
        myName: {
            type: 'string'
        }
    }
} as const;

export const AdminInternalServerErrorSchema = {
    type: 'object',
    required: ['message2', 'hisName'],
    properties: {
        hisName: {
            type: 'string'
        },
        message2: {
            type: 'string'
        }
    }
} as const;

export const AdminLoginInputSchema = {
    type: 'object',
    required: ['username', 'password', 'fullName'],
    properties: {
        fullName: {
            type: 'string'
        },
        password: {
            type: 'string'
        },
        username: {
            type: 'string'
        }
    }
} as const;

export const AdminLoginResponseSchema = {
    type: 'object',
    required: ['message', 'username', 'yourName'],
    properties: {
        message: {
            type: 'string'
        },
        username: {
            type: 'string'
        },
        yourName: {
            type: 'string'
        }
    }
} as const;

export const SystemInfoSchema = {
    type: 'object',
    required: ['lastCron', 'lastSuccessCron', 'osHostname', 'totalMemory', 'freeMemory', 'osPlatform', 'osVersion', 'upTime', 'cpuUsage'],
    properties: {
        cpuUsage: {
            type: 'number',
            format: 'float'
        },
        freeMemory: {
            type: 'integer',
            format: 'int64',
            minimum: 0
        },
        lastCron: {
            type: 'string',
            format: 'date-time'
        },
        lastSuccessCron: {
            type: 'string',
            format: 'date-time'
        },
        osHostname: {
            type: 'string'
        },
        osPlatform: {
            type: 'string'
        },
        osVersion: {
            type: 'string'
        },
        totalMemory: {
            type: 'integer',
            format: 'int64',
            minimum: 0
        },
        upTime: {
            type: 'integer',
            format: 'int64',
            minimum: 0
        }
    }
} as const;