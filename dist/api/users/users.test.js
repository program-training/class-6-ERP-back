"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const app_1 = require("../../app");
const supertest_1 = __importDefault(require("supertest"));
const connections_db_1 = require("../../utils/connections.db");
(0, globals_1.describe)('API routes', () => {
    const userData = {
        username: "user22@gmail.com",
        password: "Password22",
    };
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield connections_db_1.sequelize.authenticate();
            console.log('Connection has been established successfully.');
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
            throw error;
        }
    }));
    // test('POST /api/users/register', async () => {
    //   const response = await request(app).post('/api/users/register').send(userData);
    //   expect(response.status).toBe(201);
    //   expect(response.body.message).toBe('User created successfully');
    // });
    (0, globals_1.test)('POST /api/users/login', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.app).post('/api/users/login').send(userData);
        (0, globals_1.expect)(response.status).toBe(200);
        (0, globals_1.expect)(response.body).toHaveProperty('token');
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield connections_db_1.sequelize.close();
    }));
});
