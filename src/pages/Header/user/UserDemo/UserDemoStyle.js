import { Menu } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

// UserDemo.js
export const Icon = styled("div")({
    svg: {
        width: "100%",
        height: "100%",
    },

    path: {
        fill: " #4F4D4D",
    },

    display: "flex",
    width: "20px",
    height: "20px",
});

// 菜單
export const StyledUserDemo = styled((props) => (
    // 接收 props ，傳回 <Menu> 組件
    <Menu
        //Material-UI 中的 Menu 组件陰影效果(默認屬性值為 8)
        elevation={0}
        // 開啟菜單
        anchorOrigin={{
            vertical: "bottom", // 垂直
            horizontal: "right", // 水平
        }}
        // 關閉菜單
        transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        {...props}
    />
))(({ theme }) => ({
    // Paper 根元素樣式
    "& .MuiPaper-root": {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 130,
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
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                ),
            },
        },
    },
}));

// UserDemoItem.js
export const StyledIcon = styled("div")({
    display: "flex",
    alignItems: "center",
    marginRight: 18,

    path: {
        fill: "#4F4D4D",
    },
});
