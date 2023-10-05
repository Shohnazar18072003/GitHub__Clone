//user page
import { ENDPOINT, LIMIT } from "./const.js";
import fetch from "./fetch.js";

const userPage = document.querySelector(".user-page");

const query = new URLSearchParams(location.search);

const userName = query.get("name");

async function getCountries() {
  try {
    // userPage.innerHTML = "Loading...";

    let user = await fetch(`${ENDPOINT}users/${userName}`);
    let user1 = await fetch(`${ENDPOINT}users/${userName}/repos`);
    const [userInfo, repo] = await Promise.all([user, user1]);
    console.log(user);
    console.log(repo[1]);
    userPage.innerHTML += `
    <div>
    <div class="menu">
      <div class="menu-left">
        <img src="../image/menu.png" alt="" />
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 0C24.84 0 32 7.16 32 16C31.9991 19.3524 30.947 22.6201 28.9917 25.3432C27.0364 28.0664 24.2763 30.1077 21.1 31.18C20.3 31.34 20 30.84 20 30.42C20 29.88 20.02 28.16 20.02 26.02C20.02 24.52 19.52 23.56 18.94 23.06C22.5 22.66 26.24 21.3 26.24 15.16C26.24 13.4 25.62 11.98 24.6 10.86C24.76 10.46 25.32 8.82 24.44 6.62C24.44 6.62 23.1 6.18 20.04 8.26C18.76 7.9 17.4 7.72 16.04 7.72C14.68 7.72 13.32 7.9 12.04 8.26C8.98 6.2 7.64 6.62 7.64 6.62C6.76 8.82 7.32 10.46 7.48 10.86C6.46 11.98 5.84 13.42 5.84 15.16C5.84 21.28 9.56 22.66 13.12 23.06C12.66 23.46 12.24 24.16 12.1 25.2C11.18 25.62 8.88 26.3 7.44 23.88C7.14 23.4 6.24 22.22 4.98 22.24C3.64 22.26 4.44 23 5 23.3C5.68 23.68 6.46 25.1 6.64 25.56C6.96 26.46 8 28.18 12.02 27.44C12.02 28.78 12.04 30.04 12.04 30.42C12.04 30.84 11.74 31.32 10.94 31.18C7.75328 30.1193 4.98147 28.082 3.01778 25.3573C1.05409 22.6325 -0.00176096 19.3586 2.20462e-06 16C2.20462e-06 7.16 7.16 0 16 0Z" fill="#F0F6FC"/>
        </svg>
        <h5>${user.login}</h5>
      </div>
      <div class="menu-right">
        <img src="${user.avatar_url}" alt="" />
      </div>
    </div>
    <div class="user-header">
  
    <h2>
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
      <path d="M0.5 1.75C0.5 1.55109 0.579018 1.36033 0.71967 1.21967C0.860322 1.07902 1.05109 1 1.25 1H5.503C6.73 1 7.82 1.59 8.503 2.501C8.85212 2.03428 9.30542 1.65553 9.82677 1.39494C10.3481 1.13434 10.9231 0.999109 11.506 1H15.751C15.9499 1 16.1407 1.07902 16.2813 1.21967C16.422 1.36033 16.501 1.55109 16.501 1.75V12.25C16.501 12.4489 16.422 12.6397 16.2813 12.7803C16.1407 12.921 15.9499 13 15.751 13H11.244C10.9485 13 10.6559 13.0582 10.383 13.1713C10.11 13.2843 9.86193 13.4501 9.653 13.659L9.031 14.28C8.89038 14.4205 8.69975 14.4993 8.501 14.4993C8.30225 14.4993 8.11163 14.4205 7.971 14.28L7.349 13.659C7.14007 13.4501 6.89203 13.2843 6.61904 13.1713C6.34606 13.0582 6.05347 13 5.758 13H1.25C1.05109 13 0.860322 12.921 0.71967 12.7803C0.579018 12.6397 0.5 12.4489 0.5 12.25V1.75ZM7.751 12.074L7.755 7.001L7.753 4.748C7.75247 4.15161 7.51518 3.57983 7.09328 3.15831C6.67138 2.73678 6.09939 2.5 5.503 2.5H2V11.5H5.757C6.46243 11.5 7.15355 11.6989 7.751 12.074ZM9.255 4.75L9.251 12.072C9.84813 11.6981 10.5385 11.4999 11.243 11.5H15V2.5H11.505C10.9083 2.5 10.336 2.73706 9.91401 3.15901C9.49205 3.58097 9.255 4.15327 9.255 4.75Z" fill="#8B949E"/>
    </svg>
    Overview
  </h2>
  <h2>
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
      <path d="M0.0468765 2.5C0.0468765 1.83696 0.310269 1.20107 0.779109 0.732233C1.24795 0.263392 1.88384 0 2.54688 0L11.2969 0C11.4958 0 11.6866 0.0790176 11.8272 0.21967C11.9679 0.360322 12.0469 0.551088 12.0469 0.75V13.25C12.0469 13.4489 11.9679 13.6397 11.8272 13.7803C11.6866 13.921 11.4958 14 11.2969 14H8.79688C8.59796 14 8.4072 13.921 8.26655 13.7803C8.12589 13.6397 8.04688 13.4489 8.04688 13.25C8.04688 13.0511 8.12589 12.8603 8.26655 12.7197C8.4072 12.579 8.59796 12.5 8.79688 12.5H10.5469V10.5H2.54688C2.34996 10.5 2.15743 10.5582 1.99344 10.6672C1.82945 10.7762 1.70129 10.9312 1.62504 11.1128C1.54878 11.2943 1.52783 11.4943 1.56481 11.6878C1.60178 11.8812 1.69503 12.0594 1.83288 12.2C1.90182 12.2704 1.95623 12.3537 1.99298 12.4451C2.02974 12.5365 2.04814 12.6343 2.04712 12.7328C2.0461 12.8313 2.02568 12.9287 1.98703 13.0193C1.94838 13.1099 1.89227 13.1921 1.82188 13.261C1.75149 13.3299 1.66821 13.3843 1.57679 13.4211C1.48538 13.4579 1.38762 13.4763 1.2891 13.4752C1.19058 13.4742 1.09322 13.4538 1.00259 13.4152C0.911953 13.3765 0.82982 13.3204 0.760876 13.25C0.302588 12.7829 0.0461692 12.1544 0.0468765 11.5V2.5ZM10.5469 1.5H2.54688C2.28166 1.5 2.02731 1.60536 1.83977 1.79289C1.65223 1.98043 1.54688 2.23478 1.54688 2.5V9.208C1.86222 9.0702 2.20274 8.99937 2.54688 9H10.5469V1.5ZM3.04688 12.25C3.04688 12.1837 3.07322 12.1201 3.1201 12.0732C3.16698 12.0263 3.23057 12 3.29688 12H6.79688C6.86318 12 6.92677 12.0263 6.97365 12.0732C7.02054 12.1201 7.04688 12.1837 7.04688 12.25V15.5C7.04688 15.5464 7.03395 15.5919 7.00954 15.6314C6.98513 15.6709 6.95021 15.7028 6.90868 15.7236C6.86715 15.7444 6.82067 15.7532 6.77443 15.749C6.72818 15.7448 6.68402 15.7279 6.64688 15.7L5.19688 14.613C5.15367 14.5804 5.10101 14.5627 5.04688 14.5627C4.99274 14.5627 4.94008 14.5804 4.89688 14.613L3.44688 15.7C3.40973 15.7279 3.36557 15.7448 3.31933 15.749C3.27309 15.7532 3.2266 15.7444 3.18507 15.7236C3.14355 15.7028 3.10862 15.6709 3.08421 15.6314C3.05981 15.5919 3.04688 15.5464 3.04688 15.5V12.25Z" fill="#8B949E"/>
    </svg>
    Repositories
    <span>${user.public_repos}</span>
  </h2>
  <h2>
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
    <path d="M0.6875 1.75C0.6875 0.784 1.4715 0 2.4375 0H14.9375C15.9035 0 16.6875 0.784 16.6875 1.75V14.25C16.6875 14.7141 16.5031 15.1592 16.1749 15.4874C15.8467 15.8156 15.4016 16 14.9375 16H2.4375C1.97337 16 1.52825 15.8156 1.20006 15.4874C0.871874 15.1592 0.6875 14.7141 0.6875 14.25V1.75ZM7.1875 6.5V14.5H14.9375C15.0038 14.5 15.0674 14.4737 15.1143 14.4268C15.1612 14.3799 15.1875 14.3163 15.1875 14.25V6.5H7.1875ZM15.1875 5V1.75C15.1875 1.6837 15.1612 1.62011 15.1143 1.57322C15.0674 1.52634 15.0038 1.5 14.9375 1.5H7.1875V5H15.1875ZM2.1875 6.5V14.25C2.1875 14.388 2.2995 14.5 2.4375 14.5H5.6875V6.5H2.1875ZM5.6875 5V1.5H2.4375C2.3712 1.5 2.30761 1.52634 2.26072 1.57322C2.21384 1.62011 2.1875 1.6837 2.1875 1.75V5H5.6875Z" fill="#8B949E"/>
  </svg>
    Projects
  </h2>
  <h2>
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
    <path d="M9.34675 0.391953L14.5968 3.43695C15.1368 3.75095 15.4688 4.32695 15.4688 4.95095V11.049C15.4688 11.3556 15.3882 11.6568 15.2352 11.9226C15.0822 12.1883 14.862 12.4091 14.5968 12.563L9.34675 15.608C9.08 15.7627 8.77711 15.8441 8.46875 15.8441C8.16039 15.8441 7.8575 15.7627 7.59075 15.608L2.34075 12.563C2.0755 12.4091 1.85533 12.1883 1.70229 11.9226C1.54925 11.6568 1.46872 11.3556 1.46875 11.049V4.95095C1.46875 4.32695 1.80075 3.74995 2.34075 3.43695L7.59075 0.391953C7.8575 0.237242 8.16039 0.155762 8.46875 0.155762C8.77711 0.155762 9.08 0.237242 9.34675 0.391953ZM8.34375 1.68995L3.71375 4.37495L8.46875 7.13295L13.2238 4.37495L8.59375 1.68995C8.55581 1.66781 8.51268 1.65615 8.46875 1.65615C8.42482 1.65615 8.38169 1.66781 8.34375 1.68995ZM2.96875 5.67695V11.049C2.96875 11.139 3.01575 11.22 3.09375 11.265L7.71875 13.948V8.43195L2.96875 5.67695ZM9.21875 13.948L13.8438 11.265C13.8817 11.2431 13.9132 11.2116 13.9351 11.1737C13.9571 11.1358 13.9687 11.0928 13.9688 11.049V5.67695L9.21875 8.43195V13.948Z" fill="#8B949E"/>
  </svg>
    Packages
  </h2>
  <h2>
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
    <path d="M8.01555 0.25C8.15556 0.24991 8.2928 0.289014 8.41174 0.362887C8.53068 0.43676 8.62657 0.542452 8.68855 0.668L10.5705 4.483L14.7805 5.095C14.919 5.11511 15.0491 5.17355 15.1561 5.26372C15.2631 5.35388 15.3427 5.47218 15.386 5.60523C15.4292 5.73829 15.4344 5.8808 15.401 6.01665C15.3675 6.1525 15.2967 6.27628 15.1965 6.374L12.1505 9.344L12.8695 13.536C12.8929 13.6738 12.8772 13.8154 12.8244 13.9449C12.7716 14.0743 12.6838 14.1865 12.5707 14.2687C12.4576 14.3509 12.3238 14.3999 12.1844 14.4102C12.045 14.4205 11.9055 14.3917 11.7815 14.327L8.01555 12.347L4.24955 14.327C4.12573 14.392 3.98621 14.4211 3.84674 14.411C3.70726 14.4009 3.57338 14.352 3.46023 14.2699C3.34707 14.1877 3.25914 14.0755 3.20636 13.946C3.15358 13.8165 3.13806 13.6749 3.16155 13.537L3.88155 9.343L0.833545 6.374C0.733112 6.27632 0.662045 6.15247 0.628397 6.01647C0.59475 5.88047 0.599867 5.73777 0.64317 5.60453C0.686472 5.47129 0.766229 5.35284 0.873401 5.26261C0.980573 5.17238 1.11088 5.11397 1.24955 5.094L5.45955 4.483L7.34255 0.668C7.40452 0.542452 7.50041 0.43676 7.61935 0.362887C7.73829 0.289014 7.87553 0.24991 8.01555 0.25ZM8.01555 2.695L6.63055 5.5C6.57676 5.6089 6.49733 5.70311 6.39909 5.77453C6.30085 5.84595 6.18673 5.89244 6.06655 5.91L2.96955 6.36L5.20955 8.544C5.2967 8.62886 5.3619 8.73365 5.39953 8.84933C5.43716 8.96501 5.44609 9.0881 5.42555 9.208L4.89755 12.292L7.66655 10.836C7.77418 10.7794 7.89395 10.7499 8.01555 10.7499C8.13714 10.7499 8.25692 10.7794 8.36455 10.836L11.1345 12.292L10.6045 9.208C10.584 9.0881 10.5929 8.96501 10.6306 8.84933C10.6682 8.73365 10.7334 8.62886 10.8205 8.544L13.0605 6.361L9.96455 5.911C9.84436 5.89344 9.73024 5.84695 9.632 5.77553C9.53376 5.70411 9.45433 5.6099 9.40055 5.501L8.01555 2.695Z" fill="#8B949E"/>
  </svg>
    Starts
  </h2>
    </div>
    <div class="user__account container">
    <div class="user__account-info">
       <img src="${user.avatar_url}" alt="account-image">
       <h4>${user.name}</h4>
       <h6>${user.login}</h6>
       <p>${user.bio ? user.bio : ""}</p>
       <button>Edit profile</button>
       <div class="follow">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="16" viewBox="0 0 17 12" fill="none">
             <path
                d="M2.49993 3.49994C2.49986 2.91982 2.64399 2.34877 2.91936 1.83816C3.19473 1.32755 3.5927 0.893404 4.07748 0.574757C4.56226 0.25611 5.11865 0.0629611 5.69659 0.0126823C6.27454 -0.0375964 6.85591 0.0565721 7.38844 0.286718C7.92096 0.516864 8.38792 0.875769 8.74733 1.33115C9.10674 1.78654 9.34732 2.32412 9.44742 2.89554C9.54753 3.46697 9.50403 4.05431 9.32084 4.60476C9.13764 5.1552 8.8205 5.65147 8.39793 6.04894C9.19474 6.4356 9.88655 7.0087 10.4147 7.71965C10.9429 8.4306 11.2918 9.25843 11.4319 10.1329C11.4474 10.2303 11.4435 10.3296 11.4205 10.4255C11.3975 10.5213 11.3559 10.6116 11.298 10.6913C11.2401 10.771 11.1671 10.8386 11.0831 10.8901C10.9991 10.9416 10.9057 10.976 10.8084 10.9914C10.7111 11.0069 10.6117 11.003 10.5159 10.98C10.4201 10.957 10.3298 10.9154 10.25 10.8575C10.1703 10.7996 10.1028 10.7266 10.0513 10.6426C9.99981 10.5586 9.96536 10.4653 9.94993 10.3679C9.79994 9.42825 9.31986 8.57281 8.5959 7.95524C7.87193 7.33767 6.95152 6.99842 5.99993 6.99842C5.04834 6.99842 4.12793 7.33767 3.40396 7.95524C2.68 8.57281 2.19992 9.42825 2.04993 10.3679C2.03443 10.4653 1.99992 10.5586 1.94837 10.6425C1.89681 10.7265 1.82922 10.7995 1.74946 10.8573C1.66969 10.9152 1.57931 10.9568 1.48348 10.9797C1.38765 11.0026 1.28824 11.0064 1.19093 10.9909C1.09362 10.9754 1.00032 10.9409 0.916344 10.8894C0.832372 10.8378 0.759377 10.7702 0.701526 10.6905C0.643675 10.6107 0.602101 10.5203 0.579179 10.4245C0.556257 10.3287 0.552434 10.2293 0.56793 10.1319C0.708265 9.25776 1.05731 8.4303 1.58546 7.71971C2.11362 7.00911 2.80532 6.43634 3.60193 6.04994C3.2536 5.72287 2.97608 5.32782 2.78653 4.8892C2.59698 4.45059 2.49944 3.97776 2.49993 3.49994ZM11.4999 1.99994C12.0809 2.00035 12.6493 2.16941 13.1361 2.48659C13.6229 2.80378 14.0072 3.25545 14.2423 3.78679C14.4773 4.31813 14.5531 4.90628 14.4604 5.47984C14.3677 6.05341 14.1104 6.58773 13.7199 7.01794C14.3286 7.32013 14.8694 7.74298 15.3095 8.26079C15.7496 8.77859 16.0798 9.38052 16.2799 10.0299C16.3196 10.156 16.3251 10.2903 16.2961 10.4192C16.267 10.5482 16.2044 10.6671 16.1145 10.764C16.0246 10.8609 15.9107 10.9323 15.7844 10.9709C15.658 11.0095 15.5236 11.014 15.3949 10.9839C15.2664 10.954 15.1479 10.8907 15.0516 10.8005C14.9552 10.7103 14.8843 10.5963 14.8459 10.4699C14.6667 9.89015 14.3401 9.36679 13.898 8.95103C13.456 8.53526 12.9136 8.24132 12.3239 8.09794C12.1602 8.05841 12.0145 7.9649 11.9104 7.83247C11.8062 7.70004 11.7497 7.53641 11.7499 7.36794V7.01594C11.7498 6.87631 11.7887 6.73943 11.8622 6.6207C11.9357 6.50198 12.0409 6.40613 12.1659 6.34394C12.4691 6.1937 12.7126 5.94537 12.8568 5.63929C13.001 5.33321 13.0375 4.98737 12.9603 4.65793C12.8832 4.32849 12.6969 4.03481 12.4318 3.82459C12.1667 3.61437 11.8383 3.49996 11.4999 3.49994C11.301 3.49994 11.1103 3.42093 10.9696 3.28027C10.8289 3.13962 10.7499 2.94886 10.7499 2.74994C10.7499 2.55103 10.8289 2.36027 10.9696 2.21961C11.1103 2.07896 11.301 1.99994 11.4999 1.99994ZM5.99993 1.49994C5.73359 1.49392 5.46873 1.54117 5.22091 1.63891C4.97308 1.73666 4.74728 1.88293 4.55676 2.06915C4.36624 2.25536 4.21484 2.47776 4.11146 2.72329C4.00807 2.96882 3.95478 3.23252 3.95471 3.49893C3.95465 3.76534 4.00781 4.02907 4.11107 4.27465C4.21433 4.52024 4.36562 4.74271 4.55604 4.92902C4.74647 5.11533 4.9722 5.26171 5.21998 5.35958C5.46775 5.45745 5.73259 5.50483 5.99893 5.49894C6.52149 5.48739 7.01877 5.27172 7.3843 4.8981C7.74984 4.52449 7.95458 4.02262 7.95471 3.49993C7.95485 2.97724 7.75035 2.47527 7.385 2.10147C7.01965 1.72768 6.52249 1.51176 5.99993 1.49994Z"
                fill="#8B949E" />
          </svg>
          <h5><span>${user.followers}</span> followers <span>${user.following}</span> following</h5>
       </div>
       <div class="location">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
             <path d="M13.0961 11.5961L9.56108 15.1321C9.42178 15.2715 9.25638 15.3821 9.07433 15.4575C8.89228 15.5329 8.69714 15.5718 8.50008 15.5718C8.30302 15.5718 8.10788 15.5329 7.92583 15.4575C7.74378 15.3821 7.57838 15.2715 7.43908 15.1321L3.90408 11.5961C3.30046 10.9925 2.82163 10.276 2.49492 9.48739C2.16822 8.69878 2.00005 7.85355 2 6.99994C1.99995 6.14634 2.16804 5.30109 2.49465 4.51244C2.82127 3.7238 3.30002 3.00721 3.90358 2.40359C4.50713 1.79997 5.22367 1.32114 6.01228 0.994436C6.80089 0.667734 7.64612 0.499558 8.49973 0.499512C9.35333 0.499465 10.1986 0.667549 10.9872 0.994166C11.7759 1.32078 12.4925 1.79954 13.0961 2.40309C13.6998 3.00668 14.1786 3.72328 14.5053 4.51195C14.832 5.30062 15.0002 6.14593 15.0002 6.99959C15.0002 7.85326 14.832 8.69856 14.5053 9.48723C14.1786 10.2759 13.6998 10.9925 13.0961 11.5961ZM12.0361 3.46409C11.0983 2.52629 9.82634 1.99843 8.50008 1.99843C7.17382 1.99843 5.90189 2.52529 4.96408 3.46309C4.02627 4.4009 3.49942 5.67283 3.49942 6.99909C3.49942 8.32535 4.02627 9.59729 4.96408 10.5351L8.50008 14.0701L12.0361 10.5361C12.5005 10.0718 12.8689 9.52053 13.1203 8.91381C13.3716 8.3071 13.501 7.65681 13.501 7.00009C13.501 6.34337 13.3716 5.69308 13.1203 5.08637C12.8689 4.47966 12.5005 3.9284 12.0361 3.46409ZM8.50008 9.00009C8.23374 9.00611 7.96888 8.95887 7.72105 8.86112C7.47323 8.76337 7.24743 8.6171 7.05691 8.43089C6.86639 8.24467 6.71499 8.02227 6.61161 7.77675C6.50822 7.53122 6.45493 7.26751 6.45486 7.0011C6.4548 6.7347 6.50796 6.47096 6.61122 6.22538C6.71448 5.9798 6.86577 5.75732 7.05619 5.57102C7.24662 5.38471 7.47235 5.23832 7.72012 5.14045C7.9679 5.04258 8.23274 4.9952 8.49908 5.00109C9.02164 5.01265 9.51891 5.22832 9.88445 5.60193C10.25 5.97554 10.4547 6.47741 10.4549 7.0001C10.455 7.52279 10.2505 8.02476 9.88515 8.39856C9.5198 8.77236 9.02263 8.98827 8.50008 9.00009Z" fill="#8B949E"/>
           </svg>
           <h6>${user.location}</h6>
       </div>
       <div class="blog">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
             <path d="M8.27518 3.27518L9.52518 2.02518C9.8502 1.70016 10.2361 1.44234 10.6607 1.26644C11.0854 1.09053 11.5405 1 12.0002 1C12.4598 1 12.915 1.09053 13.3396 1.26644C13.7643 1.44234 14.1502 1.70016 14.4752 2.02518C14.8002 2.3502 15.058 2.73606 15.2339 3.16072C15.4098 3.58538 15.5004 4.04053 15.5004 4.50018C15.5004 4.95983 15.4098 5.41498 15.2339 5.83964C15.058 6.2643 14.8002 6.65016 14.4752 6.97518L11.9752 9.47518C11.6502 9.80022 11.2643 10.0581 10.8397 10.234C10.415 10.4099 9.95984 10.5004 9.50018 10.5004C9.04052 10.5004 8.58537 10.4099 8.1607 10.234C7.73604 10.0581 7.35019 9.80022 7.02518 9.47518C6.89277 9.33292 6.82067 9.14487 6.82402 8.95055C6.82738 8.75623 6.90594 8.57078 7.04318 8.43318C7.18078 8.29594 7.36623 8.21738 7.56055 8.21402C7.75486 8.21067 7.94292 8.28277 8.08518 8.41518C8.27079 8.60137 8.49132 8.7491 8.73414 8.8499C8.97695 8.9507 9.23727 9.00258 9.50018 9.00258C9.76308 9.00258 10.0234 8.9507 10.2662 8.8499C10.509 8.7491 10.7296 8.60137 10.9152 8.41518L13.4152 5.91518C13.7722 5.53623 13.9676 5.0331 13.9598 4.51252C13.952 3.99194 13.7418 3.49485 13.3737 3.12671C13.0055 2.75856 12.5084 2.54831 11.9878 2.54056C11.4673 2.5328 10.9641 2.72816 10.5852 3.08518L9.33518 4.33518C9.19292 4.46759 9.00486 4.53969 8.81055 4.53633C8.61623 4.53298 8.43078 4.45442 8.29318 4.31718C8.15594 4.17958 8.07738 3.99413 8.07402 3.79981C8.07067 3.60549 8.14277 3.41744 8.27518 3.27518ZM3.58518 12.9152C3.77079 13.1014 3.99132 13.2491 4.23414 13.3499C4.47695 13.4507 4.73727 13.5026 5.00018 13.5026C5.26308 13.5026 5.5234 13.4507 5.76622 13.3499C6.00903 13.2491 6.22957 13.1014 6.41518 12.9152L7.66518 11.6652C7.80744 11.5328 7.99549 11.4607 8.18981 11.464C8.38413 11.4674 8.56957 11.5459 8.70718 11.6832C8.84442 11.8208 8.92298 12.0062 8.92633 12.2005C8.92969 12.3949 8.85759 12.5829 8.72518 12.7252L7.47518 13.9752C7.15016 14.3002 6.7643 14.558 6.33964 14.7339C5.91498 14.9098 5.45983 15.0004 5.00018 15.0004C4.07187 15.0004 3.18159 14.6316 2.52518 13.9752C1.86877 13.3188 1.5 12.4285 1.5 11.5002C1.5 10.5719 1.86877 9.68159 2.52518 9.02518L5.02518 6.52518C5.35019 6.20014 5.73604 5.9423 6.1607 5.76638C6.58537 5.59047 7.04052 5.49993 7.50018 5.49993C7.95984 5.49993 8.41499 5.59047 8.83965 5.76638C9.26432 5.9423 9.65017 6.20014 9.97518 6.52518C10.1076 6.66744 10.1797 6.85549 10.1763 7.04981C10.173 7.24413 10.0944 7.42958 9.95718 7.56718C9.81957 7.70442 9.63413 7.78298 9.43981 7.78633C9.24549 7.78969 9.05744 7.71759 8.91518 7.58518C8.72957 7.39899 8.50903 7.25126 8.26622 7.15046C8.0234 7.04966 7.76308 6.99777 7.50018 6.99777C7.23727 6.99777 6.97695 7.04966 6.73414 7.15046C6.49132 7.25126 6.27079 7.39899 6.08518 7.58518L3.58518 10.0852C3.39899 10.2708 3.25126 10.4913 3.15046 10.7341C3.04966 10.977 2.99777 11.2373 2.99777 11.5002C2.99777 11.7631 3.04966 12.0234 3.15046 12.2662C3.25126 12.509 3.39899 12.7296 3.58518 12.9152Z" fill="#8B949E"/>
           </svg>
           <a href="${user.blog}">${user.blog}</a>
       </div>
    </div>
    <div class="user__account-project">
    
       <div class="alert alert-primary" role="alert">
          <div>
          You unlocked new Achievements with private contributions! Show them off by including private contributions in your Profile in <span>settings</span>.
          </div>
          <svg onclick="alertClose()" class="alert-close" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M0.220317 0.719814C0.360942 0.579363 0.551566 0.500474 0.750317 0.500474C0.949067 0.500474 1.13969 0.579363 1.28032 0.719814L4.50032 3.93981L7.72032 0.719814C7.81199 0.621089 7.92859 0.548918 8.05784 0.510904C8.18709 0.47289 8.3242 0.47044 8.45472 0.503813C8.58525 0.537187 8.70435 0.605147 8.79949 0.700534C8.89463 0.795921 8.96228 0.915204 8.99532 1.04581C9.02873 1.17619 9.0264 1.31316 8.98857 1.44233C8.95073 1.57149 8.87879 1.68807 8.78032 1.77981L5.56032 4.99981L8.78032 8.21981C8.87904 8.31149 8.95121 8.42809 8.98923 8.55734C9.02724 8.68659 9.02969 8.8237 8.99632 8.95422C8.96294 9.08474 8.89498 9.20385 8.7996 9.29899C8.70421 9.39413 8.58493 9.46178 8.45432 9.49481C8.32394 9.52823 8.18697 9.5259 8.05781 9.48807C7.92864 9.45023 7.81206 9.37829 7.72032 9.27981L4.50032 6.05981L1.28032 9.27981C1.13806 9.41222 0.950003 9.48433 0.755686 9.48097C0.561369 9.47761 0.37592 9.39906 0.238317 9.26181C0.101073 9.12421 0.0225179 8.93876 0.0191612 8.74444C0.0158045 8.55013 0.087908 8.36208 0.220317 8.21981L3.44032 4.99981L0.220317 1.77981C0.0798662 1.63919 0.000976562 1.44856 0.000976562 1.24981C0.000976562 1.05106 0.0798662 0.860439 0.220317 0.719814Z" fill="#58A6FF"/>
          </svg>
        </div>
        <div class="repo-header">
        <h4>Repositories</h4>
        <h6>Customize your pins</h6>
        </div>
        <div class="repos">
        <div class="repo-row">
        <h4>
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
          <path d="M2.5 2.5C2.5 1.83696 2.76339 1.20107 3.23223 0.732233C3.70108 0.263392 4.33696 0 5 0L13.75 0C13.9489 0 14.1397 0.0790176 14.2803 0.21967C14.421 0.360322 14.5 0.551088 14.5 0.75V13.25C14.5 13.4489 14.421 13.6397 14.2803 13.7803C14.1397 13.921 13.9489 14 13.75 14H11.25C11.0511 14 10.8603 13.921 10.7197 13.7803C10.579 13.6397 10.5 13.4489 10.5 13.25C10.5 13.0511 10.579 12.8603 10.7197 12.7197C10.8603 12.579 11.0511 12.5 11.25 12.5H13V10.5H5C4.80308 10.5 4.61056 10.5582 4.44657 10.6672C4.28257 10.7762 4.15442 10.9312 4.07816 11.1128C4.00191 11.2943 3.98096 11.4943 4.01793 11.6878C4.0549 11.8812 4.14816 12.0594 4.286 12.2C4.35495 12.2704 4.40935 12.3537 4.44611 12.4451C4.48287 12.5365 4.50126 12.6343 4.50024 12.7328C4.49922 12.8313 4.4788 12.9287 4.44016 13.0193C4.40151 13.1099 4.34539 13.1921 4.275 13.261C4.20461 13.3299 4.12133 13.3843 4.02992 13.4211C3.93851 13.4579 3.84075 13.4763 3.74222 13.4752C3.6437 13.4742 3.54634 13.4538 3.45571 13.4152C3.36508 13.3765 3.28295 13.3204 3.214 13.25C2.75571 12.7829 2.49929 12.1544 2.5 11.5V2.5ZM13 1.5H5C4.73478 1.5 4.48043 1.60536 4.29289 1.79289C4.10536 1.98043 4 2.23478 4 2.5V9.208C4.31534 9.0702 4.65586 8.99937 5 9H13V1.5ZM5.5 12.25C5.5 12.1837 5.52634 12.1201 5.57322 12.0732C5.62011 12.0263 5.6837 12 5.75 12H9.25C9.31631 12 9.37989 12.0263 9.42678 12.0732C9.47366 12.1201 9.5 12.1837 9.5 12.25V15.5C9.5 15.5464 9.48707 15.5919 9.46266 15.6314C9.43826 15.6709 9.40333 15.7028 9.3618 15.7236C9.32028 15.7444 9.27379 15.7532 9.22755 15.749C9.18131 15.7448 9.13714 15.7279 9.1 15.7L7.65 14.613C7.60679 14.5804 7.55413 14.5627 7.5 14.5627C7.44587 14.5627 7.39321 14.5804 7.35 14.613L5.9 15.7C5.86286 15.7279 5.81869 15.7448 5.77245 15.749C5.72621 15.7532 5.67972 15.7444 5.6382 15.7236C5.59667 15.7028 5.56175 15.6709 5.53734 15.6314C5.51293 15.5919 5.5 15.5464 5.5 15.5V12.25Z" fill="#8B949E"/>
        </svg>
        ${user1[0].name}
        <span>${user1[0].visibility}</span>
        </h4>
        <h5>${user1[0].description ? user1[0].description : " ..."}</h5>
        <div class="repo-footer">
        <h4>${user1[0].language}</h4>
        <h4>
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
          <path d="M8.26555 0.25C8.40556 0.24991 8.5428 0.289014 8.66174 0.362887C8.78068 0.43676 8.87657 0.542452 8.93855 0.668L10.8205 4.483L15.0305 5.095C15.169 5.11511 15.2991 5.17355 15.4061 5.26372C15.5131 5.35388 15.5927 5.47218 15.636 5.60523C15.6792 5.73829 15.6844 5.8808 15.651 6.01665C15.6175 6.1525 15.5467 6.27628 15.4465 6.374L12.4005 9.344L13.1195 13.536C13.1429 13.6738 13.1272 13.8154 13.0744 13.9449C13.0216 14.0743 12.9338 14.1865 12.8207 14.2687C12.7076 14.3509 12.5738 14.3999 12.4344 14.4102C12.295 14.4205 12.1555 14.3917 12.0315 14.327L8.26555 12.347L4.49955 14.327C4.37573 14.392 4.23621 14.4211 4.09674 14.411C3.95726 14.4009 3.82338 14.352 3.71023 14.2699C3.59707 14.1877 3.50914 14.0755 3.45636 13.946C3.40358 13.8165 3.38806 13.6749 3.41155 13.537L4.13155 9.343L1.08355 6.374C0.983112 6.27632 0.912045 6.15247 0.878397 6.01647C0.84475 5.88047 0.849867 5.73777 0.89317 5.60453C0.936472 5.47129 1.01623 5.35284 1.1234 5.26261C1.23057 5.17238 1.36088 5.11397 1.49955 5.094L5.70955 4.483L7.59255 0.668C7.65452 0.542452 7.75041 0.43676 7.86935 0.362887C7.98829 0.289014 8.12553 0.24991 8.26555 0.25ZM8.26555 2.695L6.88055 5.5C6.82676 5.6089 6.74733 5.70311 6.64909 5.77453C6.55085 5.84595 6.43673 5.89244 6.31655 5.91L3.21955 6.36L5.45955 8.544C5.5467 8.62886 5.6119 8.73365 5.64953 8.84933C5.68716 8.96501 5.69609 9.0881 5.67555 9.208L5.14755 12.292L7.91655 10.836C8.02418 10.7794 8.14395 10.7499 8.26555 10.7499C8.38714 10.7499 8.50692 10.7794 8.61455 10.836L11.3845 12.292L10.8545 9.208C10.834 9.0881 10.8429 8.96501 10.8806 8.84933C10.9182 8.73365 10.9834 8.62886 11.0705 8.544L13.3105 6.361L10.2145 5.911C10.0944 5.89344 9.98024 5.84695 9.882 5.77553C9.78376 5.70411 9.70433 5.6099 9.65055 5.501L8.26555 2.695Z" fill="#8B949E"/>
        </svg>
        ${user1[0].stargazers_count}
        </h4>
        </div>
        </div>

        <div class="repo-row">
        <h4>
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
          <path d="M2.5 2.5C2.5 1.83696 2.76339 1.20107 3.23223 0.732233C3.70108 0.263392 4.33696 0 5 0L13.75 0C13.9489 0 14.1397 0.0790176 14.2803 0.21967C14.421 0.360322 14.5 0.551088 14.5 0.75V13.25C14.5 13.4489 14.421 13.6397 14.2803 13.7803C14.1397 13.921 13.9489 14 13.75 14H11.25C11.0511 14 10.8603 13.921 10.7197 13.7803C10.579 13.6397 10.5 13.4489 10.5 13.25C10.5 13.0511 10.579 12.8603 10.7197 12.7197C10.8603 12.579 11.0511 12.5 11.25 12.5H13V10.5H5C4.80308 10.5 4.61056 10.5582 4.44657 10.6672C4.28257 10.7762 4.15442 10.9312 4.07816 11.1128C4.00191 11.2943 3.98096 11.4943 4.01793 11.6878C4.0549 11.8812 4.14816 12.0594 4.286 12.2C4.35495 12.2704 4.40935 12.3537 4.44611 12.4451C4.48287 12.5365 4.50126 12.6343 4.50024 12.7328C4.49922 12.8313 4.4788 12.9287 4.44016 13.0193C4.40151 13.1099 4.34539 13.1921 4.275 13.261C4.20461 13.3299 4.12133 13.3843 4.02992 13.4211C3.93851 13.4579 3.84075 13.4763 3.74222 13.4752C3.6437 13.4742 3.54634 13.4538 3.45571 13.4152C3.36508 13.3765 3.28295 13.3204 3.214 13.25C2.75571 12.7829 2.49929 12.1544 2.5 11.5V2.5ZM13 1.5H5C4.73478 1.5 4.48043 1.60536 4.29289 1.79289C4.10536 1.98043 4 2.23478 4 2.5V9.208C4.31534 9.0702 4.65586 8.99937 5 9H13V1.5ZM5.5 12.25C5.5 12.1837 5.52634 12.1201 5.57322 12.0732C5.62011 12.0263 5.6837 12 5.75 12H9.25C9.31631 12 9.37989 12.0263 9.42678 12.0732C9.47366 12.1201 9.5 12.1837 9.5 12.25V15.5C9.5 15.5464 9.48707 15.5919 9.46266 15.6314C9.43826 15.6709 9.40333 15.7028 9.3618 15.7236C9.32028 15.7444 9.27379 15.7532 9.22755 15.749C9.18131 15.7448 9.13714 15.7279 9.1 15.7L7.65 14.613C7.60679 14.5804 7.55413 14.5627 7.5 14.5627C7.44587 14.5627 7.39321 14.5804 7.35 14.613L5.9 15.7C5.86286 15.7279 5.81869 15.7448 5.77245 15.749C5.72621 15.7532 5.67972 15.7444 5.6382 15.7236C5.59667 15.7028 5.56175 15.6709 5.53734 15.6314C5.51293 15.5919 5.5 15.5464 5.5 15.5V12.25Z" fill="#8B949E"/>
        </svg>
        ${user1[1].name}
        <span>${user1[1].visibility}</span>
        </h4>
        <h5>${user1[1].description ? user1[1].description : " ..."}</h5>
        <div class="repo-footer">
        <h4>${user1[1].language}</h4>
        <h4>
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
          <path d="M8.26555 0.25C8.40556 0.24991 8.5428 0.289014 8.66174 0.362887C8.78068 0.43676 8.87657 0.542452 8.93855 0.668L10.8205 4.483L15.0305 5.095C15.169 5.11511 15.2991 5.17355 15.4061 5.26372C15.5131 5.35388 15.5927 5.47218 15.636 5.60523C15.6792 5.73829 15.6844 5.8808 15.651 6.01665C15.6175 6.1525 15.5467 6.27628 15.4465 6.374L12.4005 9.344L13.1195 13.536C13.1429 13.6738 13.1272 13.8154 13.0744 13.9449C13.0216 14.0743 12.9338 14.1865 12.8207 14.2687C12.7076 14.3509 12.5738 14.3999 12.4344 14.4102C12.295 14.4205 12.1555 14.3917 12.0315 14.327L8.26555 12.347L4.49955 14.327C4.37573 14.392 4.23621 14.4211 4.09674 14.411C3.95726 14.4009 3.82338 14.352 3.71023 14.2699C3.59707 14.1877 3.50914 14.0755 3.45636 13.946C3.40358 13.8165 3.38806 13.6749 3.41155 13.537L4.13155 9.343L1.08355 6.374C0.983112 6.27632 0.912045 6.15247 0.878397 6.01647C0.84475 5.88047 0.849867 5.73777 0.89317 5.60453C0.936472 5.47129 1.01623 5.35284 1.1234 5.26261C1.23057 5.17238 1.36088 5.11397 1.49955 5.094L5.70955 4.483L7.59255 0.668C7.65452 0.542452 7.75041 0.43676 7.86935 0.362887C7.98829 0.289014 8.12553 0.24991 8.26555 0.25ZM8.26555 2.695L6.88055 5.5C6.82676 5.6089 6.74733 5.70311 6.64909 5.77453C6.55085 5.84595 6.43673 5.89244 6.31655 5.91L3.21955 6.36L5.45955 8.544C5.5467 8.62886 5.6119 8.73365 5.64953 8.84933C5.68716 8.96501 5.69609 9.0881 5.67555 9.208L5.14755 12.292L7.91655 10.836C8.02418 10.7794 8.14395 10.7499 8.26555 10.7499C8.38714 10.7499 8.50692 10.7794 8.61455 10.836L11.3845 12.292L10.8545 9.208C10.834 9.0881 10.8429 8.96501 10.8806 8.84933C10.9182 8.73365 10.9834 8.62886 11.0705 8.544L13.3105 6.361L10.2145 5.911C10.0944 5.89344 9.98024 5.84695 9.882 5.77553C9.78376 5.70411 9.70433 5.6099 9.65055 5.501L8.26555 2.695Z" fill="#8B949E"/>
        </svg>
        ${user1[1].stargazers_count}
        </h4>
        </div>

        
        </div>
        <div class="repo-row">
        <h4>
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
          <path d="M2.5 2.5C2.5 1.83696 2.76339 1.20107 3.23223 0.732233C3.70108 0.263392 4.33696 0 5 0L13.75 0C13.9489 0 14.1397 0.0790176 14.2803 0.21967C14.421 0.360322 14.5 0.551088 14.5 0.75V13.25C14.5 13.4489 14.421 13.6397 14.2803 13.7803C14.1397 13.921 13.9489 14 13.75 14H11.25C11.0511 14 10.8603 13.921 10.7197 13.7803C10.579 13.6397 10.5 13.4489 10.5 13.25C10.5 13.0511 10.579 12.8603 10.7197 12.7197C10.8603 12.579 11.0511 12.5 11.25 12.5H13V10.5H5C4.80308 10.5 4.61056 10.5582 4.44657 10.6672C4.28257 10.7762 4.15442 10.9312 4.07816 11.1128C4.00191 11.2943 3.98096 11.4943 4.01793 11.6878C4.0549 11.8812 4.14816 12.0594 4.286 12.2C4.35495 12.2704 4.40935 12.3537 4.44611 12.4451C4.48287 12.5365 4.50126 12.6343 4.50024 12.7328C4.49922 12.8313 4.4788 12.9287 4.44016 13.0193C4.40151 13.1099 4.34539 13.1921 4.275 13.261C4.20461 13.3299 4.12133 13.3843 4.02992 13.4211C3.93851 13.4579 3.84075 13.4763 3.74222 13.4752C3.6437 13.4742 3.54634 13.4538 3.45571 13.4152C3.36508 13.3765 3.28295 13.3204 3.214 13.25C2.75571 12.7829 2.49929 12.1544 2.5 11.5V2.5ZM13 1.5H5C4.73478 1.5 4.48043 1.60536 4.29289 1.79289C4.10536 1.98043 4 2.23478 4 2.5V9.208C4.31534 9.0702 4.65586 8.99937 5 9H13V1.5ZM5.5 12.25C5.5 12.1837 5.52634 12.1201 5.57322 12.0732C5.62011 12.0263 5.6837 12 5.75 12H9.25C9.31631 12 9.37989 12.0263 9.42678 12.0732C9.47366 12.1201 9.5 12.1837 9.5 12.25V15.5C9.5 15.5464 9.48707 15.5919 9.46266 15.6314C9.43826 15.6709 9.40333 15.7028 9.3618 15.7236C9.32028 15.7444 9.27379 15.7532 9.22755 15.749C9.18131 15.7448 9.13714 15.7279 9.1 15.7L7.65 14.613C7.60679 14.5804 7.55413 14.5627 7.5 14.5627C7.44587 14.5627 7.39321 14.5804 7.35 14.613L5.9 15.7C5.86286 15.7279 5.81869 15.7448 5.77245 15.749C5.72621 15.7532 5.67972 15.7444 5.6382 15.7236C5.59667 15.7028 5.56175 15.6709 5.53734 15.6314C5.51293 15.5919 5.5 15.5464 5.5 15.5V12.25Z" fill="#8B949E"/>
        </svg>
        ${user1[2].name}
        <span>${user1[2].visibility}</span>
        </h4>
        <h5>${user1[2].description ? user1[2].description : " ..."}</h5>
        <div class="repo-footer">
        <h4>${user1[2].language}</h4>
        <h4>
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
          <path d="M8.26555 0.25C8.40556 0.24991 8.5428 0.289014 8.66174 0.362887C8.78068 0.43676 8.87657 0.542452 8.93855 0.668L10.8205 4.483L15.0305 5.095C15.169 5.11511 15.2991 5.17355 15.4061 5.26372C15.5131 5.35388 15.5927 5.47218 15.636 5.60523C15.6792 5.73829 15.6844 5.8808 15.651 6.01665C15.6175 6.1525 15.5467 6.27628 15.4465 6.374L12.4005 9.344L13.1195 13.536C13.1429 13.6738 13.1272 13.8154 13.0744 13.9449C13.0216 14.0743 12.9338 14.1865 12.8207 14.2687C12.7076 14.3509 12.5738 14.3999 12.4344 14.4102C12.295 14.4205 12.1555 14.3917 12.0315 14.327L8.26555 12.347L4.49955 14.327C4.37573 14.392 4.23621 14.4211 4.09674 14.411C3.95726 14.4009 3.82338 14.352 3.71023 14.2699C3.59707 14.1877 3.50914 14.0755 3.45636 13.946C3.40358 13.8165 3.38806 13.6749 3.41155 13.537L4.13155 9.343L1.08355 6.374C0.983112 6.27632 0.912045 6.15247 0.878397 6.01647C0.84475 5.88047 0.849867 5.73777 0.89317 5.60453C0.936472 5.47129 1.01623 5.35284 1.1234 5.26261C1.23057 5.17238 1.36088 5.11397 1.49955 5.094L5.70955 4.483L7.59255 0.668C7.65452 0.542452 7.75041 0.43676 7.86935 0.362887C7.98829 0.289014 8.12553 0.24991 8.26555 0.25ZM8.26555 2.695L6.88055 5.5C6.82676 5.6089 6.74733 5.70311 6.64909 5.77453C6.55085 5.84595 6.43673 5.89244 6.31655 5.91L3.21955 6.36L5.45955 8.544C5.5467 8.62886 5.6119 8.73365 5.64953 8.84933C5.68716 8.96501 5.69609 9.0881 5.67555 9.208L5.14755 12.292L7.91655 10.836C8.02418 10.7794 8.14395 10.7499 8.26555 10.7499C8.38714 10.7499 8.50692 10.7794 8.61455 10.836L11.3845 12.292L10.8545 9.208C10.834 9.0881 10.8429 8.96501 10.8806 8.84933C10.9182 8.73365 10.9834 8.62886 11.0705 8.544L13.3105 6.361L10.2145 5.911C10.0944 5.89344 9.98024 5.84695 9.882 5.77553C9.78376 5.70411 9.70433 5.6099 9.65055 5.501L8.26555 2.695Z" fill="#8B949E"/>
        </svg>
        ${user1[2].stargazers_count}
        </h4>
        </div>
        </div>

        <div class="repo-row">
        <h4>
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
          <path d="M2.5 2.5C2.5 1.83696 2.76339 1.20107 3.23223 0.732233C3.70108 0.263392 4.33696 0 5 0L13.75 0C13.9489 0 14.1397 0.0790176 14.2803 0.21967C14.421 0.360322 14.5 0.551088 14.5 0.75V13.25C14.5 13.4489 14.421 13.6397 14.2803 13.7803C14.1397 13.921 13.9489 14 13.75 14H11.25C11.0511 14 10.8603 13.921 10.7197 13.7803C10.579 13.6397 10.5 13.4489 10.5 13.25C10.5 13.0511 10.579 12.8603 10.7197 12.7197C10.8603 12.579 11.0511 12.5 11.25 12.5H13V10.5H5C4.80308 10.5 4.61056 10.5582 4.44657 10.6672C4.28257 10.7762 4.15442 10.9312 4.07816 11.1128C4.00191 11.2943 3.98096 11.4943 4.01793 11.6878C4.0549 11.8812 4.14816 12.0594 4.286 12.2C4.35495 12.2704 4.40935 12.3537 4.44611 12.4451C4.48287 12.5365 4.50126 12.6343 4.50024 12.7328C4.49922 12.8313 4.4788 12.9287 4.44016 13.0193C4.40151 13.1099 4.34539 13.1921 4.275 13.261C4.20461 13.3299 4.12133 13.3843 4.02992 13.4211C3.93851 13.4579 3.84075 13.4763 3.74222 13.4752C3.6437 13.4742 3.54634 13.4538 3.45571 13.4152C3.36508 13.3765 3.28295 13.3204 3.214 13.25C2.75571 12.7829 2.49929 12.1544 2.5 11.5V2.5ZM13 1.5H5C4.73478 1.5 4.48043 1.60536 4.29289 1.79289C4.10536 1.98043 4 2.23478 4 2.5V9.208C4.31534 9.0702 4.65586 8.99937 5 9H13V1.5ZM5.5 12.25C5.5 12.1837 5.52634 12.1201 5.57322 12.0732C5.62011 12.0263 5.6837 12 5.75 12H9.25C9.31631 12 9.37989 12.0263 9.42678 12.0732C9.47366 12.1201 9.5 12.1837 9.5 12.25V15.5C9.5 15.5464 9.48707 15.5919 9.46266 15.6314C9.43826 15.6709 9.40333 15.7028 9.3618 15.7236C9.32028 15.7444 9.27379 15.7532 9.22755 15.749C9.18131 15.7448 9.13714 15.7279 9.1 15.7L7.65 14.613C7.60679 14.5804 7.55413 14.5627 7.5 14.5627C7.44587 14.5627 7.39321 14.5804 7.35 14.613L5.9 15.7C5.86286 15.7279 5.81869 15.7448 5.77245 15.749C5.72621 15.7532 5.67972 15.7444 5.6382 15.7236C5.59667 15.7028 5.56175 15.6709 5.53734 15.6314C5.51293 15.5919 5.5 15.5464 5.5 15.5V12.25Z" fill="#8B949E"/>
        </svg>
        ${user1[3].name}
        <span>${user1[3].visibility}</span>
        </h4>
        <h5>${user1[3].description ? user1[3].description : " ..."}</h5>
        <div class="repo-footer">
        <h4>${user1[3].language}</h4>
        <h4>
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
          <path d="M8.26555 0.25C8.40556 0.24991 8.5428 0.289014 8.66174 0.362887C8.78068 0.43676 8.87657 0.542452 8.93855 0.668L10.8205 4.483L15.0305 5.095C15.169 5.11511 15.2991 5.17355 15.4061 5.26372C15.5131 5.35388 15.5927 5.47218 15.636 5.60523C15.6792 5.73829 15.6844 5.8808 15.651 6.01665C15.6175 6.1525 15.5467 6.27628 15.4465 6.374L12.4005 9.344L13.1195 13.536C13.1429 13.6738 13.1272 13.8154 13.0744 13.9449C13.0216 14.0743 12.9338 14.1865 12.8207 14.2687C12.7076 14.3509 12.5738 14.3999 12.4344 14.4102C12.295 14.4205 12.1555 14.3917 12.0315 14.327L8.26555 12.347L4.49955 14.327C4.37573 14.392 4.23621 14.4211 4.09674 14.411C3.95726 14.4009 3.82338 14.352 3.71023 14.2699C3.59707 14.1877 3.50914 14.0755 3.45636 13.946C3.40358 13.8165 3.38806 13.6749 3.41155 13.537L4.13155 9.343L1.08355 6.374C0.983112 6.27632 0.912045 6.15247 0.878397 6.01647C0.84475 5.88047 0.849867 5.73777 0.89317 5.60453C0.936472 5.47129 1.01623 5.35284 1.1234 5.26261C1.23057 5.17238 1.36088 5.11397 1.49955 5.094L5.70955 4.483L7.59255 0.668C7.65452 0.542452 7.75041 0.43676 7.86935 0.362887C7.98829 0.289014 8.12553 0.24991 8.26555 0.25ZM8.26555 2.695L6.88055 5.5C6.82676 5.6089 6.74733 5.70311 6.64909 5.77453C6.55085 5.84595 6.43673 5.89244 6.31655 5.91L3.21955 6.36L5.45955 8.544C5.5467 8.62886 5.6119 8.73365 5.64953 8.84933C5.68716 8.96501 5.69609 9.0881 5.67555 9.208L5.14755 12.292L7.91655 10.836C8.02418 10.7794 8.14395 10.7499 8.26555 10.7499C8.38714 10.7499 8.50692 10.7794 8.61455 10.836L11.3845 12.292L10.8545 9.208C10.834 9.0881 10.8429 8.96501 10.8806 8.84933C10.9182 8.73365 10.9834 8.62886 11.0705 8.544L13.3105 6.361L10.2145 5.911C10.0944 5.89344 9.98024 5.84695 9.882 5.77553C9.78376 5.70411 9.70433 5.6099 9.65055 5.501L8.26555 2.695Z" fill="#8B949E"/>
        </svg>
        ${user1[3].stargazers_count}
        </h4>
        </div>
        </div>
     
        </div>
        <p>Show more</p>
 </div>
    </div>
          `;

   
  } catch (err) {
    alert(err);
  }
}

getCountries();

