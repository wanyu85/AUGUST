import { useEffect, useState } from "react";
import firebase from "../../utils/firebase";
import "firebase/compat/firestore";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

const headerBtn = {
    color: "#2d2b2b",
    fontSize: 15,
    fontWeight: 600,
    "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
    borderRadius: 5,
    "@media (max-width:820px)": {
        display: "none",
    },
};

export default function Topics() {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection("topics")
            .get()
            .then((collectionSnapshot) => {
                const data = collectionSnapshot.docs.map((doc) => {
                    return doc.data();
                });
                // console.log(data);
                setTopics(data);
            });
    }, []);

    return (
        <Grid
            container
            direction='row-reverse'
            justifyContent='center'
            alignItems='center'
            mb={1}
            spacing={{ xs: 5 }}
        >
            {topics.map((topicsData) => {
                return (
                    <Grid
                        item
                        key={topicsData.name}
                        as={Link}
                        to={`/topics/${topicsData.name}`}
                    >
                        <Button sx={headerBtn}>{topicsData.name}</Button>
                    </Grid>
                );
            })}
        </Grid>
    );
}
