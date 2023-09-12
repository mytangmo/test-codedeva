import { notification, Button, Modal } from "antd";


const handleError = (error) => {
    if (error.response) {
  
      (error.response.data === '') ?
  
          (error.response.statusText === '') ?
              notification.error({
                  message: 'แจ้งเตือน',
                  description: error.response.status,
              })
              :
              notification.error({
                  message: 'แจ้งเตือน',
                  description: error.response.statusText,
              })
          :
          notification.error({
              message: 'แจ้งเตือน',
              description: error.response.data.message,
          })
  
  
  } else if (error.request) {
      notification.error({
          message: 'แจ้งเตือน',
          description: error.request,
      });
  
  } else {
  
      notification.error({
          message: 'แจ้งเตือน',
          description: error.message,
      });
  
  }
  };
  const onFinishFailed = (values) => {
      const [{ errors }] = values.errorFields
      notification.error({
          message: 'กรอกข้อมูลไม่ครบ',
          description: errors,
      });
  };
  const handleSuccess = (response) => {
      notification.success({
          message: 'Notification',
          description: response.data.message,
      });
  }
  const handleErrorMsg = (msg, errors) => {
      notification.error({
          message: msg,
          description: errors,
      });
  }
  
  const handleMsg = (msg) => {
      notification.success({
          message: 'Notification',
          description: msg,
      });
  }
  
  
  export default {
    handleError,
    onFinishFailed,
    handleSuccess,
    handleErrorMsg,
    handleMsg
  };