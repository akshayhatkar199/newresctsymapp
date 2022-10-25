import React,{ useState } from 'react'
import { Button, Modal } from 'antd';



const AppWork = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };


  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div id='works' className='block worksBlock '>
        <div className='container-fluid'>
        <div className='titleHolder'>
        <h2> <span>*शाहूपुरी युवक मंडळ* </span></h2>
        <p>*स्थापना : १९७८**व्यापारी पेठ,शाहूपुरी, कोल्हापूर*</p>
        </div>
        <div className ='contentHolder'>
        <Button  onClick={showModal}>
        <i className="fas fa-play"></i>
      </Button>
      </div>
      <Modal title="Build-Tech Solution" open={isModalOpen} onCancel={handleCancel} footer={null}>
        <iframe title="Basic Modal" width='100%' height='350px' src='https://build-tech-solution.herokuapp.com/'></iframe>
      </Modal>
        </div>
    </div>
  )
}

export default AppWork



