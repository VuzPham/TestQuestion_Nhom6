import QuestionsList from "~/components/QuestionForm/QuestionsList";
import classNames from "classnames/bind";
import styles from './Home.module.scss'
import { useState } from "react";

const cx = classNames.bind(styles);

function Home() {

   const [isAddModalOpen, setIsAddModalOpen] = useState(false);

   const handleAdd = () => {
       setIsAddModalOpen(true);
   };

   const handleCloseAddModal = () => {
       setIsAddModalOpen(false);
   };

    return (
       <div className={cx('wrapper')}>
           <QuestionsList 
                isAddModalOpen={isAddModalOpen} 
                setIsAddModalOpen={setIsAddModalOpen} 
                onAdd={handleAdd}
            />
       </div>
    );
}

export default Home;