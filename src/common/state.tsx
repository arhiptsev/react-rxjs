import { createContext } from "react";
import { BehaviorSubject, Subject } from "rxjs";


const INITIAL_STATE = {
    username: 'Test User',
    age: 25,
    online: false,
    notifications: 17,
    messages: 4
};

export const userObservable = new BehaviorSubject<any>(INITIAL_STATE);
export const searchObservable = new Subject();
export const RxContext = createContext({ userObservable, searchObservable });

export const StateProvider = ({ children }) =>
(<RxContext.Provider value={{ userObservable, searchObservable }}>
    {children}
</RxContext.Provider>);