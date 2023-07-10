import {ref,watch} from 'vue'

export default function(key,value) {
  const data = ref(value)

  if(value) {
    // 无论value是一个对象还是数组，都可以通过setItem进行保存
    window.localStorage.setItem(key,JSON.stringify(value))
  } else {
    data.value = JSON.parse(window.localStorage.getItem(key))
  }

  watch(data,(newValue) =>{
    window.localStorage.setItem(key,JSON.stringify(newValue))
  })

  return data


}