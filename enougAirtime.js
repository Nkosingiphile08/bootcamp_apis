export default function enoughAirtime(projectedUsage, availAirtime) {
  let usage = "call,sms,call";
  let available = 54;
  let totalUsage = 0;

  for (let i = 0; i < usage.length; i++) {
    if (usage[i] === "call") {
      totalUsage += 1.88;
    } else if (usage[i] === "sms") {
      totalUsage += 0.75;
    } else if (usage[i] === "data") {
      totalUsage += 12;
    }
  }
  const remainingAirtime = available - totalUsage;
  return remainingAirtime > 0 ? 'R' + remainingAirtime.toFixed(2) : 'R0.00';
}
console.log(enoughAirtime('call,call,call,data,sms,sms,call,data', 50)); 