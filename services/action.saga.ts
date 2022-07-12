export interface IActionSaga {
    type: string;
    payload?: any;
    onSuccess: Function;
    onFailure: Function;
    onFinally: Function;
}

class eActionSata {
    type: string = '';
    payload?: any = {};
    onSuccess?: Function = () => { };
    onFailure?: Function = () => { };
    onFinally?: Function = () => { };
}

export const ActionSaga = (e: eActionSata) => {
    return {
        type: e.type,
        payload: e.payload || {},
        onSuccess: (data: any) => e.onSuccess && e.onSuccess(data),
        onFailure: (data: any) => {
            console.error(data)
            e.onFailure && e.onFailure(data);
        },
        onFinally: (data: any) => e.onFinally && e.onFinally(data)
    }
}