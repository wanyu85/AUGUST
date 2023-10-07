import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Button, Stack, Typography } from "@mui/material";

import { theme } from "../HeaderStyle";
import { dataN } from "./dataN";
import NotifyItem from "./NotifyItem";

const checkAllBtn = {
    color: theme.palette.primary.main,
    fontSize: theme.typography.h5,
    fontWeight: "bold",
};

const scrollContainer = {
    overflow: "auto", // 显示滚动条以支持内容滚动
    height: 350,
    width: 330,
};

export default function NewNotifyIcon() {
    const [showAll, setShowAll] = useState(false);

    // 監聽滾動事件
    const handleScroll = (e) => {
        const element = e.target; //滾動事件的觸發目標
        const scrollHeight = element.scrollHeight; // 總高度
        const scrollTop = element.scrollTop; // 相對於滾動容器頂部的距離
        const clientHeight = element.clientHeight; // 可見高度

        if (scrollHeight - scrollTop === clientHeight) {
            setShowAll(true);
        }
    };

    useEffect(() => {
        const scrollContainers =
            document.getElementsByClassName("scrollContainer");
        // 對每個 list 添加滾動的監聽事件
        for (const container of scrollContainers) {
            container.addEventListener("scroll", handleScroll);
        }
        // 關閉時移出滾動的監聽事件
        return () => {
            for (const container of scrollContainers) {
                container.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    return (
        <Box className='scrollContainer' sx={scrollContainer}>
            <Stack
                direction='row'
                justifyContent='space-between'
                pl={2}
                pr={2}
                pt={1}
                pb={1}
                alignItems='center'
            >
                <Typography fontSize={theme.typography.h5} fontWeight='bold'>
                    新通知
                </Typography>
                <Button
                    href='#'
                    variant='text'
                    sx={checkAllBtn}
                    onClick={() => setShowAll(true)}
                >
                    查看全部
                    {dataN.length > 4 && !showAll
                        ? ` (${dataN.length - 4})`
                        : ""}
                </Button>
            </Stack>
            {showAll
                ? dataN.map((item, i) => (
                      <NotifyItem key={i} item={item} loading={false} />
                  ))
                : dataN
                      .slice(-4)
                      .map((item, i) => (
                          <NotifyItem key={i} item={item} loading={false} />
                      ))}
        </Box>
    );
}
