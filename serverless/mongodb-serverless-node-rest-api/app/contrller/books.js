const message = require('../utils/message');

class Books {
    constructor(BooksModel) {
        this.BooksModel = BooksModel;
    }

    /**
     * 创建 Book 数据
     * @param {*} event 
     */
    async create(event) {
        const params = JSON.parse(event.body);

        try {
            const result = await this.BooksModel.create({
                name: params.name,
                id: params.id,
            });
        
            return message.success(result);
        } catch (err) {
            console.error(err);

            return message.error(err.code, err.message);
        }
    }

    /**
     * 更新
     * @param {*} event 
     */
    async update(event) {
        try {
            const result = await this.BooksModel.findOneAndUpdate({ id: event.pathParameters.id }, {
                $set: JSON.parse(event.body),
            }, { 
                $upsert: true,
                new: true
            });
        
            return message.success(result);
        } catch (err) {
            console.error(err);

            return message.error(err.code, err.message);
        }
    }

    /**
     * 查找所有 Books 数据
     * @param {*} event 
     */
    async find() {
        try {
            const result = await this.BooksModel.find();

            return message.success(result);
        } catch (err) {
            console.error(err);

            return message.error(err.code, err.message);
        }
    }

    /**
     * 查询一条数据
     * @param {*} event 
     */
    async findOne(event) {
        try {
            const result = await this.BooksModel.findOne({
                id: event.pathParameters.id
            });

            return message.success(result);
        } catch (err) {
            console.error(err);

            return message.error(err.code, err.message);
        }
    }

    /**
     * 删除一条数据
     * @param {*} event 
     */
    async deleteOne(event) {
        try {
            const result = await this.BooksModel.deleteOne({
                id: event.pathParameters.id
            });

            if (result.deletedCount === 0) {
                return message.error(1010, '数据未找到！可能已被删除！');
            }

            return message.success(result);
        } catch (err) {
            console.error(err);

            return message.error(err.code, err.message);
        }
    }
}

module.exports = Books;