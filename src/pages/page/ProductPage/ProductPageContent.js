import {
    Grid,
    Tab,
    Tabs,
    Box,
    Typography,
    Button,
    Divider,
} from "@mui/material";
import { container, divider } from "./ProductPageStyle";
import { useState } from "react";
import PropTypes from "prop-types";
import TabCount from "./TabCount";
import { bgcolor } from "@mui/system";

import TabStar from "./TabStar";

// import TabContext from "@mui/lab/TabContext";
// import TabList from "@mui/lab/TabList";
// import TabPanel from "@mui/lab/TabPanel";

function ProductPageTabs(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel' //輔助功能標示
            hidden={value !== index}
            id={`tab-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

// 屬性驗證
ProductPageTabs.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function allProps(index) {
    return {
        id: `tab-${index}`,
        "aria-controls": `tab-${index}`,
    };
}

export default function ProductPageContent({ post }) {
    const [value, setValue] = useState(0);
    const handleChange = (e, value) => {
        setValue(value);
    };

    return (
        <>
            <Grid
                container
                item
                direction='column'
                justifyContent='center'
                alignItems='center'
                lg={7}
                mt={8}
            >
                <Box mb={100} sx={{ width: "100%" }}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <Tabs value={value} onChange={handleChange} centered>
                            <Tab label='商品描述' {...allProps(0)} />
                            <Tab label='顧客評價' {...allProps(1)} />
                        </Tabs>
                    </Box>
                    <ProductPageTabs value={value} index={0}>
                        <TabCount post={post} />
                    </ProductPageTabs>
                    <ProductPageTabs value={value} index={1}>
                        <TabStar post={post} />
                    </ProductPageTabs>
                </Box>
            </Grid>
        </>
    );
}
