import React, { useState, useEffect } from "react";
import styles from "./nav-bar.module.scss";
import classNames from "classnames/bind";
import LogoBlackImg from "./../logo-black/index";
import { useNavigate } from "react-router-dom";

/*

NavBar(isBackgroundActive = true | false = true)

ColoredWhenScrollNavBar(), 50 스크롤 픽셀 이하일때는(맨 위에 있을 때) isBackgroundActive = false, 이외의 경우 true


*/

const combineClassNames = (...names) => {
  if (names.length === 0) {
    return "";
  }

  const [first, ...extra] = names;
  if (first == null) {
    return combineClassNames(...extra);
  }

  return `${first} ${combineClassNames(...extra)}`;
};

const NavBar2 = ({ isBackgroundActive = true }) => {
  const ss = classNames.bind(styles);
  const navigator = useNavigate();

  return (
    <div
      className={combineClassNames(
        ss("wrapper"),
        isBackgroundActive && ss("wrapper-scroll-down")
      )}
    >
      <div className={ss("navbar-container")}>
        <div className={ss("menu-container")}>
          <LogoBlackImg
            className={combineClassNames(
              ss("logo"),
              isBackgroundActive && ss("logo-scroll-down")
            )}
          />
          <div className={ss("menu-list")}>
            <span onClick={() => navigator("/about")}>About</span>
            <span onClick={() => navigator("/travel")}>Travel</span>
            <span onClick={() => navigator("/manholes")}>Manhole</span>
          </div>
        </div>
        {/* <div className={ss("service-container")}>
          <div className={ss("menu-list")}>
            <span>Sign In</span>
            <span>Sign Up</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

const AutoNavBar2 = () => {
  const [isUp, setIsUp] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const pos = window.scrollY;
      const triggerPos = 50;

      const newIsUp = pos < triggerPos;
      if (newIsUp !== isUp) {
        setIsUp(newIsUp);
      }
    });
  }, [isUp, setIsUp]);

  return <NavBar2 isBackgroundActive={!isUp} />;
};

NavBar2.Auto = AutoNavBar2;

export default NavBar2;

const Navbar = ({ scrollDir, currentPage }) => {
  const ss = classNames.bind(styles);
  const navigator = useNavigate();
  return (
    <div
      className={ss(
        `${scrollDir === "scrolling down" ? "down-wrapper" : "wrapper"}`
      )}
    >
      <div className={ss("navbar-container")}>
        <div className={ss("menu-container")}>
          {scrollDir === "scrolling down" && (
            <LogoBlackImg
              onClick={() => navigator("/")}
              style={{ width: "200px", cursor: "pointer" }}
            />
          )}

          {scrollDir === "scrolling up" && <div className={ss("block")}></div>}
          <div className={ss("menu-list")}>
            <span onClick={() => navigator("/about")}>About</span>
            <span onClick={() => navigator("/travel")}>Travel</span>
          </div>
        </div>
        <div className={ss("service-container")}>
          <div className={ss("menu-list")}>
            <span>Sign In</span>
            <span>Sign Up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// isSomething ? 'class-a' : 'class-b' (X)
// `class-base ${isSomething && 'class-x'}`
// `class-base ${isSomething ? 'class-a' : 'class-b'}

/*
names를 받는데, (string | undefined | null)[]

['item', 'item-selected']
['item', undefined]
[null, undefined, 'highlight', undefined]

`${}`

'null undefined highlight undefined' (X)
'highlight' (O)


1. for를 쓰는 imperative(절차형)
2. 재귀함수를 쓰는 functional(함수형)(O)

fn() {
  // 1(경우의 수)
  {
    return;
  }
  
  // 2
  {
    return;
  }

  // 3
  {
    return;
  }
}

1. 들어왔으면, 어떤 경우의 수라도 거친다.
2. 단 하나의 경우의 수만 거칠 수 있다.

combineClassNames(names) {
  // 1. names가 비어있을 때
  if (names.length === 0) {
    return '';
  }

  // 2. names가 비어있지 않고, 첫 번째 엘리먼트가 null, undefined일 때
  if (names[0] == null) {
    return combineClassNames(names.slice(1, names.length));
  }

  // 3. names가 비어있지 않고, 첫 번째 엘리먼트가 문자열일 때
  // if (typeof names[0] === 'string')

}

입력 값: [null, undefined, 'highlight', undefined] -> input

ccn(input) (=) ccn(input.slice(2, 4))


const first = input[0];
const last = input.slice(1, input.length);

const [first, ...last] = input;
*/

/*
const textList = ['a', 'b', null, 'c'];

# 1
const print = (textList) => {
  for (let i = 0; i < textList.length; ++i) {
    console.log(textList[i]);
  }
};


const print = (textList) => {
  // 1 배열이 비어있을 때

  // 2 전부 통과 되고 온전히 보여줘야하는 아이

  if(textList.length == 0) return;

  const [first, ...extra] = textList;
  console.log(first) // 'a'

  print(extra) // ['b', null, 'c']
};


# 2
입력: ['apple', 'soda', 'coke', 'rice', 'banana', 'coke']
출력: ['fruit', 'drink', 'drink', 'others', 'fruit', 'drink']

입력: []
출력: []

const fruitOrDrink = (items) => {
  const result = [];
  
  for (let i = 0; i < items.length; ++i) {
    if (items[i] === 'apple' || items[i] === 'banana') {
      result.push('fruit');
      break;
    }

    if (items[i] === 'coke' || items[i] === 'soda') {
      result.push('drink');
      break;
    }

    result.push('others');
  }

  return result;
};


const fruitOrDrink = (items) => {

  //1 배열이 비어있을 때
  if(items.length == 0) return [];

  const [first, ...extra] = items;

  //2 첫번째 사과나 바나나 처럼 과일이 오는경우
  if(first == 'apple' || first =='banana') {
    return ['fruit', ...fruitOrDrink(extra)];
  }

  //3 첫번째 콜라나 사이다 처럼 음료가 오는경우
    if(first == 'coke' || first =='soda') {
    return ['drink', ...fruitOrDrink(extra)];
  }
  //4  나머지
  return fruitOrDrink(extra);
};

[...[1, 2, 3]] (=) [1, 2, 3]

['fruit', 
  ...['fruit', 
    ...['drink', 
      ...['drink', 
        ...[

        ]]]]]




# 3
const fruitOrDrinkInString = (items) => {
  let result = '';
  
  for (let i = 0; i < items.length; ++i) {
    if (items[i] === 'apple' || items[i] === 'banana') {
      if (items.length === 0) {
        result = 'fruit';
      } else {
        result += ' fruit';
      }
    }

    if (items[i] === 'coke' || items[i] === 'soda') {
      if (items.length === 0) {
        result = 'drink';
      } else {
        result += ' drink';
      }
    }

    // 둘 다 아닐때는 아무것도 삽입하지 않음.
  }

  return result;
};

const fruitOrDrinkInString = (items) => {

};
*/
