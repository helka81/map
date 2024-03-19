import ErrorRepository from '../map.js';

describe('ErrorRepository', () => {
    let errorRepo;

    beforeEach(() => {
        errorRepo = new ErrorRepository();
    });

    test('should translate error code to message', () => {
        errorRepo.addError(404, 'Not found');
        const message = errorRepo.translate(404);
        expect(message).toBe('Not found');
    });

    test('should return "Unknown error" for non-existent error code', () => {
        const message = errorRepo.translate(500);
        expect(message).toBe('Unknown error');
    });
});