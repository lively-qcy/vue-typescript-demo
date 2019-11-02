
//数据类型
let title: string;
title = "vue-typescript";

let nameof = 'xiaoqiu';

let goodsId: string[];
goodsId = ['1', '2']

/**
 * 函数参数、可选值、默认值
 * @param msg 
 * @param age 
 * @param defaults 
 */
function hello(msg: string, age?: number, defaults: string = '123'): string {
    return msg;
}

class BaseComp {

}
// ts中的类
class TestComp extends BaseComp {
    //访问修饰符
    private name = 'test';          //内部访问
    protected attr = 'attr';        //派生类也可访问
    readonly data = 'data';         //只读
    static access = 'access';       //静态访问
    //构造函数：初始化成员变量
    //参数加上修饰符，能够定义并初始化一个属性 == this.cons
    constructor(private cons = 'cons') {
        super();
    }
    //方法，也可以加上一些修饰符
    private show() {

    }
    //存取器:暴露存取数据时可添加的额外逻辑；在vue里面可以用作计算属性
    get getName() { return this.name };
    set setName(val: string) { this.name = val };
}

/**
 * const testComp = new TestComp();
 * testComp.getName // 直接访问
 */

//接口 - 约束
interface IResponse {
    isSuccess: Boolean,
    msg: string
}
function printResponse(res: IResponse) {
    console.log(res.msg);
}
const resData = { isSuccess: true, msg: 'ok' };
printResponse(resData);

// 泛型 - 接口继承
interface IResponseData<T> extends IResponse {
    data: T
}
//封装异步：
function getDataAsync<T>(): Promise<IResponseData<T>> {
    const resData: any = { data: "async", isSuccess: true, msg: '' };
    return Promise.resolve<IResponseData<T>>(resData);
}
function getData<T>(): IResponseData<T> {
    const resData: any = { name: 'xiaoqiu' };
    //返回接口约束格式
    return {
        isSuccess: true,
        msg: 'ok',
        data: resData
    };
}
async function Call() {
    console.log(await getDataAsync());
}
Call();
console.log(getData());