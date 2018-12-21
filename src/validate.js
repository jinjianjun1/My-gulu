class Validator{
    constructor(){}
    static add(name,fn){
        Validator.prototype[name]=fn
    }
    validate(data, rules){
        let errors = {};
        rules.forEach((rule) => {
            let value = data[rule.key];//value是data中的字段
            if (rule.required) {
                let error = this.required(value);
                if (error) {
                    this.ensureObj(errors, rule.key);
                    errors[rule.key].required = error;
                    return
                }
            }
            //遍历validators并逐一调用对应函数
            let validators = Object.keys(rule).filter(key => key !== 'required' && key !== 'key');
            validators.forEach((validatorKey) => {
                if (this[validatorKey]){
                    let error = this[validatorKey] && this[validatorKey](value, rule[validatorKey]);
                    if (error) {
                        this.ensureObj(errors, rule.key);
                        errors[rule.key][validatorKey] = error;
                    }
                }else {
                    throw `不存在的校验器:${validatorKey}`
                }

            });
        });
        return errors
    }
    required (value)  {
        if (value !== 0 && !value) {
            return '必填'
        }
    };
    pattern  (value, pattern)  {
        if (pattern === 'email') {
            pattern = /^.+@.+$/
        }
        if (pattern.test(value) === false) {
            return '格式不正确'
        }
    };
    minLength (value, minLength)  {
        if (value.length < minLength) {
            return '太短'
        }
    };

    maxLength  (value, maxLength)  {
        if (value.length > maxLength) {
            return '太长'
        }
    };

     ensureObj(obj, key) {
        if (typeof obj[key] !== 'object') {
            obj[key] = {}
        }
    }
}
export default Validator

