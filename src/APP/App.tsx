import './App.module.css'
import {RepositoryList} from "../Components/RepositoryList";
import {InputSearchRepository} from "../Components/InputSearchRepository";
import styles from './App.module.css'
import {Paginator} from "../Components/Paginator";

function App() {

    return (
        <div className={styles.layout__container}>
            <InputSearchRepository/>
            <RepositoryList/>
            <Paginator totalCount={20} currentPage={1} pageSize={5} onPageChange={() => {}}/>
        </div>
    )
}

export default App
