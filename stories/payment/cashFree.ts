import EducrackAPI from '@lipihipi/client-sdk';
import swal from 'sweetalert';

interface IpaymentPros {
    productId : string;
    productType: string;
  }

  async function initCashFreePayment(paymentData: IpaymentPros) {
    try {
    const _window = window as any;
    const payload = {
      id: paymentData.productId,
      type: paymentData.productType,
    };
    console.log(payload);
    const { data } = await EducrackAPI.payment.createOrder(payload);
    if(!data.paymentLink){
      swal({
        title: 'Error',
        text: data.reason || 'Server error!',
        icon: 'error',
        dangerMode: false,
      });
    }else{
      _window.location.href = data.paymentLink;
    }

  } catch (err){
    console.log(err);
    swal({
      title: 'Error',
      text: err.message || 'Server error!',
      icon: 'error',
      dangerMode: false,
    });
  }

  }


const Payment = {
  initCashFreePayment : initCashFreePayment
}

export default Payment;