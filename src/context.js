import react,{createContext, useState} from "react";
import {QuestionsData} from './components/QeustionsDataSciences';
export const QeustionsContext = createContext();
export const QeustionsPorvider = (props) => {
    const [qeustionsData2, setQeustionsData2] = useState(QuestionsData);
    return(
        <QeustionsContext.Provider value={[qeustionsData2, setQeustionsData2]}>
            {props.children}
        </QeustionsContext.Provider>
    );
}