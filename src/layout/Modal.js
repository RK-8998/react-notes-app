import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

// icons
import CloseIcon from "@mui/icons-material/Close";
import { Stack } from "@mui/system";
import { Avatar, Divider, InputBase } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import VideocamIcon from "@mui/icons-material/Videocam";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "4px solid #333",
  borderRadius: "20px",
  borderColor: "#2ba1f6",
  boxShadow: 20,
  p: 4,
};

function ModalComponent() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack direction={"row"} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography id="modal-title" variant="p" component="h4" textAlign={"center"}>
              Create Post
            </Typography>
          </Stack>
          <div>
            <CloseIcon
              sx={{
                position: "absolute",
                top: 30,
                right: 35,
                backgroundColor: "#dfe6e9",
                borderRadius: 5,
                cursor: "pointer",
              }}
              onClick={handleClose}
            />
          </div>
          <br />
          <Divider />

          <Stack direction={"row"} sx={{ marginTop: 4, gap: 3, alignItems: "center", alignContent: "center" }}>
            <Avatar alt="Remy Sharp" sx={{ bgcolor: "#0984e3" }}>
              RK
            </Avatar>
            <Typography component={"strong"} variant="p">
              Irfan Falak
            </Typography>

            <Stack direction={"row"} sx={{ gap: 1, alignItems: "center", color: "grey" }}>
              <PeopleAltIcon sx={{ fontSize: "20px" }} />
              <Typography component={"p"} variant="p">
                Anyone
              </Typography>
              <ArrowDropDownIcon sx={{ cursor: "pointer" }} />
            </Stack>
          </Stack>
          <br />
          <br />
          <Stack direction={"row"}>
            <InputBase multiline fullWidth placeholder="Write Something..." />
          </Stack>

          {/* Third Section */}
          <Stack
            direction={"row"}
            sx={{
              marginTop: 4,
              padding: "10px",
              border: "1px solid grey",
              borderRadius: 2,
            }}
          >
            <Stack>
              {/* <TextField placeholder="Add to your post" /> */}
              <InputBase placeholder=" Add to your post" />
            </Stack>
            <Stack direction={"row"} sx={{ gap: 2, alignItems: "center" }}>
              <Stack direction={"row"} sx={{ gap: 1, color: "#777777" }}>
                <Typography>Photo</Typography>
                <PhotoSizeSelectActualIcon />
              </Stack>
              <Stack direction={"row"} sx={{ gap: 1, color: "#777777" }}>
                <Typography>Video</Typography>
                <VideocamIcon />
              </Stack>
              <Stack direction={"row"} sx={{ gap: 1, color: "#e02120" }}>
                <EmojiEmotionsIcon />
              </Stack>
            </Stack>
          </Stack>

          {/* Button */}
          <Stack direction={"row"} sx={{ marginTop: 4 }}>
            <Button variant="contained" fullWidth sx={{ backgroundColor: "#ccc" }}>
              POST
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalComponent;
