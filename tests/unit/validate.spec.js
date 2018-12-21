import chai, {expect} from 'chai'
import sinonChai from 'sinon-chai'
import Validator from '../../src/validate'

chai.use(sinonChai);

describe('Validator.vue', () => {
    it('存在.', () => {
        expect(Validator).to.exist
    });
    it('required 报错', function () {
        let data = {
            email: ''
        };
        let rules = [{key: 'email', required: 'true'}];
        let validator = new Validator()
        let errors = validator.validate(data, rules);
        expect(errors.email.required).to.eq('必填')
    });
    it('required 通过', function () {
        let data = {
            email: 0
        };
        let rules = [{key: 'email', required: 'true'}];
        let validator = new Validator()
        let errors = validator.validate(data, rules);

        expect(errors.email).to.not.exist
    });
    it('pattern 报错', function () {
        let data = {
            email: '@sds.com'
        };
        let rules = [{key: 'email', pattern: /^.+@.+$/}];
        let validator = new Validator();
        let errors = validator.validate(data, rules);

        expect(errors.email.pattern).to.eq('格式不正确')
    });
    it('pattern 通过', function () {
        let data = {
            email: '231@sds.com'
        };
        let rules = [{key: 'email', pattern: /^.+@.+$/}];
        let validator = new Validator()
        let errors = validator.validate(data, rules);
        expect(errors.email).to.not.exist
    });
    it('pattern email 报错', function () {
        let data = {
            email: '@sds.com'
        };
        let rules = [{key: 'email', pattern: 'email'}];
        let validator = new Validator()
        let errors = validator.validate(data, rules);

        expect(errors.email.pattern).to.eq('格式不正确')

    });
    it('pattern email 通过', function () {
        let data = {
            email: '123@sds.com'
        };
        let rules = [{key: 'email', pattern: 'email'}];
        let validator = new Validator()
        let errors = validator.validate(data, rules);

        expect(errors.email).to.not.exist

    });
    it('required & pattern ', function () {
        let data = {
            email: ''
        };
        let rules = [{key: 'email', pattern: 'email', required: true}];
        let validator = new Validator()
        let errors = validator.validate(data, rules);

        expect(errors.email.required).to.exist
        expect(errors.email.pattern).to.not.exist

    });
    it('pattern & minLength', function () {
        let data = {
            email: ''
        };
        let rules = [{key: 'email', pattern: 'email', minLength: 6}];
        let validator = new Validator()
        let errors = validator.validate(data, rules);

        expect(errors.email.minLength).to.exist
        expect(errors.email.pattern).to.exist

    });
    it('maxLength', function () {
        let data = {
            email: 'sdsdsddddddddddddsdsdsds'
        };
        let rules = [{key: 'email', pattern: 'email', maxLength: 8}];
        let validator = new Validator()
        let errors = validator.validate(data, rules);

        expect(errors.email.maxLength).to.exist

    });
    it('many keys', function () {
        let data = {
            email: 'sdsdsddddddddddddsdsdsds'
        };
        let rules = [
            {key: 'email', required: true, minLength: 5, maxLength: 10, hasDot: true}]
        let fn = () => {
            Validator(data, rules)
        };
        expect(fn).to.throw()
    });
    it('自定义测试hasNumber ', function () {
        let data = {
            email: 'sdasdadas'
        };
        let validator=new Validator();
        validator.hasNumber = (value) => {
            if (!/\d/.test(value)) {
                return '必须含有数字'
            }
        };
        let rules = [
            {key: 'email', required: true, hasNumber: true}
        ];
        let errors;
        let fn = () => {
            errors = validator.validate(data, rules)
        }
        expect(fn).to.not.throw();
        expect(errors.email.hasNumber).to.eq('必须含有数字')
    });
    it('两个validator 互相不影响 ', function () {
        let data = {
            email: 'sdasdadas'
        };
        let validator1=new Validator();
        let validator2=new Validator();
        validator1.hasNumber = (value) => {
            if (!/\d/.test(value)) {
                return '必须含有数字'
            }
        };
        let rules = [
            {key: 'email', required: true, hasNumber: true}
        ];
        let error1;
        let error2;
            let fn1=()=>{
                error1 =validator1.validate(data,rules)
            };
            let fn2=()=>{
                error2 =validator2.validate(data,rules)
            };
        expect(fn1).to.not.throw();
        expect(fn2).to.throw();

    });
    it('在原型上添加方法 ', function () {
        let data = {
            email: 'sdasdadas'
        };
        let validator1=new Validator();
        let validator2=new Validator();
        Validator.add('hasNumber',  (value) => {
            if (!/\d/.test(value)) {
                return '必须含有数字'
            }

        });
        let rules = [
            {key: 'email', required: true, hasNumber: true}
        ];
        let error1;
        let error2;
        let fn1=()=>{
            error1 =validator1.validate(data,rules)
        };
        let fn2=()=>{
            error2 =validator2.validate(data,rules)
        };
        expect(fn1).to.not.throw();
        expect(fn2).to.not.throw();

    });
});
