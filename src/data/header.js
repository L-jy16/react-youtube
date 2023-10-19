import { DiLinux } from 'react-icons/di'
import { DiMozilla } from 'react-icons/di'
import { DiNancy } from 'react-icons/di'
import { AiOutlineRightCircle } from "react-icons/ai";
import { SiGithub } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiNaver } from "react-icons/si";

export const menuText = [
    {
        title: "애니메이션 유튜버",
        icon: <DiLinux />,
        src: "/"
    },
    {
        title: "오늘의 추천 애니",
        icon: <DiMozilla />,
        src: "/Today"
    },
    {
        title: "애니 리뷰 유튜버 추천",
        icon: <DiNancy />,
        src: "/Youtuber"
    }
];

export const keywordText = [
    {
        title: "아카캉",
        icon: <AiOutlineRightCircle />,
        src: "/search/아카캉",
    },
    {
        title: "무비드라이",
        icon: <AiOutlineRightCircle />,
        src: "/search/무비드라이",
    },
    {
        title: "빠퀴",
        icon: <AiOutlineRightCircle />,
        src: "/search/빠퀴",
    },
    {
        title: "미애니마니아",
        icon: <AiOutlineRightCircle />,
        src: "/search/미애니마니아",
    },
    {
        title: "료핸 다이어리",
        icon: <AiOutlineRightCircle />,
        src: "/search/료핸 다이어리",
    },
    {
        title: "리뷰하는 여자_아리꼬",
        icon: <AiOutlineRightCircle />,
        src: "/search/리뷰하는 여자_아리꼬",
    },
    {
        title: "SeoHa",
        icon: <AiOutlineRightCircle />,
        src: "/search/SeoHa",
    },
    {
        title: "애니집합소",
        icon: <AiOutlineRightCircle />,
        src: "/search/애니집합소",
    },
    {
        title: "유니애니",
        icon: <AiOutlineRightCircle />,
        src: "/search/유니애니",
    },
    {
        title: "덕양소",
        icon: <AiOutlineRightCircle />,
        src: "/search/덕양소",
    }
];

export const snsText = [
    {
        tilte: "github",
        src: "https://github.com/L-jy16/react-youtube",
        icon:<SiGithub />
    },
    {
        tilte: "Instagram",
        src: "https://www.instagram.com/jiyoung1159",
        icon:<SiInstagram />
    },
    {
        tilte: "Naver",
        src: "https://blog.naver.com/dlwldud0106",
        icon:<SiNaver />
    },
];