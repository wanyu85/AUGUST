import { createContext, useContext, useState } from "react";

const PostContext = createContext();

export function PostProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    // NewPosts
    const [topics, setTopics] = useState([]);
    const [files, setFiles] = useState([]);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [sale, setSale] = useState("");
    const [demo, setDemo] = useState(null);
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState("");
    const [sizeInput, setSizeInput] = useState([]);
    const [colorInput, setColorInput] = useState([]);
    // const [tableData, setTableData] = useState([]);

    const [activeStep, setActiveStep] = useState(0);
    const [loadingSendOut, setLoadingSendOut] = useState(false);
    const [clothes, setClothes] = useState([]);

    const [filesTitle, setFilesTitle] = useState([]);
    const [filesContent, setFilesContent] = useState([]);

    const [submitSuccess, setSubmitSuccess] = useState(false);

    const [openSize, toggleOpenSize] = useState(false);
    const [sizeValue, setSizeValue] = useState(null);
    const [sizeDialogValue, setSizeDialogValue] = useState({
        size: "",
    });

    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        topics,
        setTopics,
        files,
        setFiles,
        title,
        setTitle,
        price,
        setPrice,
        sale,
        setSale,
        demo,
        setDemo,
        open,
        setOpen,
        content,
        setContent,
        sizeInput,
        setSizeInput,
        colorInput,
        setColorInput,
        // tableData,
        // setTableData,
        activeStep,
        setActiveStep,
        loadingSendOut,
        setLoadingSendOut,
        clothes,
        setClothes,
        filesTitle,
        setFilesTitle,
        filesContent,
        setFilesContent,
        submitSuccess,
        setSubmitSuccess,
        openSize,
        toggleOpenSize,
        sizeValue,
        setSizeValue,
        sizeDialogValue,
        setSizeDialogValue,
    };

    return (
        <PostContext.Provider value={value}>{children}</PostContext.Provider>
    );
}

export function usePost() {
    return useContext(PostContext);
}
