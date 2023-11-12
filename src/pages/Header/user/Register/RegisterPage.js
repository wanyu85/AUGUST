import { DialogContent } from "@mui/material";

import TitleComponent from "../TitleComponent";
import FormikRegister from "./FormikRegister";
import { UserDialog } from "../userStyle";

export default function RegisterPage({ open, handleClose }) {
    return (
        <>
            <UserDialog
                onClose={handleClose}
                aria-labelledby='dialog-title'
                open={open}
            >
                <TitleComponent open={open} handleClose={handleClose} />
                <DialogContent>
                    <FormikRegister />
                </DialogContent>
            </UserDialog>
        </>
    );
}
