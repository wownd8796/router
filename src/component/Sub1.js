import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Sub1 = () => {
  let { id } = useParams(); //변수(params) 는 해당 key값(useParams) 작성
  let navi = useNavigate();

  setTimeout(() => {
    navi("/");
  }, 5000);
  let data = [
    { id: 0, name: "황금토끼" },
    { id: 1, name: "검정토끼" },
    { id: 2, name: "빨간토끼" },
  ];

  let result = data.filter((res) => {
    return res.id == id;
  });
  //result = [{id:0, name:"황긍토끼"}]
  console.log(result);

  return <div>Sub1에 파라미터값은 {result[0].name} 입니다</div>;
};

export default Sub1;
