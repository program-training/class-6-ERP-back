"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const products_router_1 = __importDefault(require("./api/product/products.router"));
const users_router_1 = __importDefault(require("./api/users/users.router"));
const connections_db_1 = require("./utils/connections.db");
const port = process.env.PORT;
exports.app = (0, express_1.default)();
(0, connections_db_1.connectToDatabase)();
exports.app.use((0, cors_1.default)({ origin: '*' }));
exports.app.use((0, morgan_1.default)('dev'));
exports.app.use(express_1.default.json({ limit: '50mb' }));
exports.app.use('/erp/api/users', users_router_1.default);
exports.app.use('/erp/api/products', products_router_1.default);
exports.app.get('/erp', (req, res) => {
    res.send('Hi we get started !');
});
exports.app.listen(port, () => {
    console.log(`Server listening and running on port ${port}!`);
});
