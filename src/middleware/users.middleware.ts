import { Request, Response, NextFunction } from 'express';
import isEmail from 'validator/lib/isEmail';
import isStrongPassword from 'validator/lib/isStrongPassword';
export const loginValidation = (req: Request, res: Response , next: NextFunction) => {
    const { email, password } = req.body;
    console.log(req.body);
    if (!email || !isEmail(email)) {
        return res.status(400).json({ error: 'Định dạng email không hợp lệ.' });
    } else if (!password || !isStrongPassword(password, { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1})) {
        return res.status(400).json({ error: 'Mật khẩu phải chứa ít nhất 8 ký tự, 1 chữ cái viết thường, 1 chữ cái viết hoa, 1 số và 1 ký tự đặc biệt.' });
    }
    next();
}