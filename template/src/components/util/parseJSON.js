/**
 * 安全转换JSON对象
 * @param data { String } JSON字符串
 * @return { Object }
 * 
 * Created by gisonyang on 2017/9/11
 */
module.exports = function parseJSON(data){
  if ( !data ) {
    return {};
  }
  var jsonData = {};
  if (typeof data === "object") {
    return data;
  }
  try {
    jsonData = JSON.parse(data);
  } catch (e) {
    console.log("JSON parse error:", e);
    console.log("Plain data:", data);
  }
  if (typeof jsonData === "string") {
    return {}
  }
  return jsonData;
}