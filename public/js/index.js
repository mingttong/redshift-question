/**
 * Created by lenovo on 2017/5/12.
 */

const { DatePicker } = antd;

function disabledDate(current) {

  // 范围为今天到2017年8月31日

  let startTime = Date.now() - 86400;
  let endTime = new Date('2017-09-01').getTime();

  // can not select days before today and today
  return current && (current.valueOf() < startTime || current.valueOf() > endTime);
}

ReactDOM.render(
<div>
<DatePicker
format="YYYY-MM-DD"
disabledDate={disabledDate}
showTime
/>
<br />
  </div>,
  document.getElementById('example')
);