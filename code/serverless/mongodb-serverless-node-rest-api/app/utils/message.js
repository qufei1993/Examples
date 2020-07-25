module.exports = {
    success: data => ({
        statusCode: 200,
        body: JSON.stringify({
            code: 0,
            message: 'SUCCESS',
            data,
        }),
    }),

    error: (code, message) => {
        return {
            statusCode: 200,
            body: JSON.stringify({
                code: code || 1000,
                message: message || '未知错误',
            })
        }
    }
}