export default function totalPhoneBill(billList) {
let bill = billList.split(', ');
let totalBill = 0;

for (let i=0; i<bill.length; i++){
  if (bill[i]== 'call') {
    totalBill += 2.75;
  } else if (bill[i] === 'sms') {
   totalBill += 0.65;
  }          
} return 'R' + totalBill.toFixed(2);
}
console.log(totalPhoneBill('call, sms, call, sms, sms'));