import { createTheme, styled, alpha } from "@mui/material/styles";
import { Menu, Badge } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#8d7f70", //按鍵深咖
        },
        secondary: {
            main: "#bcb2a6", //奶茶色
        },
        borderColor: "#bcb2a6",
        text: {
            primary: "#606060", // 黑
            secondary: "#BA3939", // 紅
        },
        background: {
            paper: "#f5f5f5", //白
            default: "#e2e0dc", //灰
        },
    },
    // 形狀屬性
    shape: {
        borderRadius: 50,
    },
    typography: {
        h1: {
            fontSize: 35,
        },
        h2: {
            fontSize: 30,
        },
        h3: {
            fontSize: 25,
        },
        h4: {
            fontSize: 20,
        },
        h5: {
            fontSize: 15,
        },
        h6: {
            fontSize: 10,
        },
    },
    components: {
        MuiIcon: {
            styleOverrides: {
                root: {
                    // Match 24px = 3 * 2 + 1.125 * 16
                    boxSizing: "content-box",
                    padding: 3,
                    fontSize: "1.125rem",
                },
            },
        },
    },
    spacing: 8,
});

// 主題樣式
export const blackTheme = (theme) =>
    theme.palette.mode === "light"
        ? "rgb(55, 50, 81)"
        : theme.palette.grey[300];
export const whiteTheme = (theme) =>
    theme.palette.mode === "light" ? "#FAFAFA" : theme.palette.grey[300];

// 導覽列背景
export const appBar = {
    backgroundColor: "#e5e0d8",
};

// 提醒字
export const fontColor = {
    color: "#9e9e9e",
    borderColor: "#9e9e9e",
    "&:hover": {
        color: "#9e9e9e",
        borderColor: "#9e9e9e",
    },
};

// 按鍵
export const bgcStyle = {
    backgroundColor: theme.palette.background.paper,
    "&:hover": {
        backgroundColor: "#e0e0e0", // 灰
    },
    "&:active": {
        backgroundColor: "#e0e0e0",
    },
};

// # 通知、購物車菜單設定
export const StyledHeaderIcon = styled((props) => (
    // 接收 props ，傳回 <Menu> 組件
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        {...props}
    />
))(({ theme }) => ({
    // Paper 根元素樣式
    "& .MuiPaper-root": {
        borderRadius: 10,
        marginTop: theme.spacing(1),
        minWidth: 320,
        // 主題樣式
        color:
            theme.palette.mode === "light"
                ? "rgb(55, 65, 81)"
                : theme.palette.grey[300],
        // 陰影
        boxShadow:
            "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        // 表單列表樣式
        "& .MuiMenu-list": {
            padding: "4px 0",
        },
        // 菜單樣式
        "& .MuiMenuItem-root": {
            // SvgIcon樣式
            "& .MuiSvgIcon-root": {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            // 點擊時樣式
            "&:active": {
                // # alpha (顏色值,透明度值)
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                ),
            },
        },
    },
}));

// 通知、購物車菜單的通知數字
// 解構傳入的參數取得 borderColor 屬性
export const StyledBadge = styled(Badge)(({ bordercolor }) => ({
    // 顯示徽章(badgeContent)上的內容
    "& .MuiBadge-badge": {
        border: `1px solid ${bordercolor}`,
        fontSize: 5,
    },
}));

// 通知、購物車 icon
export const HeaderIconBtn = {
    backgroundColor: bgcStyle,
    borderRadius: theme.shape.borderRadius,
};

// 日期字體
export const dateFont = {
    fontFamily: "Comic Neue",
};
