import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  Stack,
} from "@mui/material";

function DialogsPage() {
  const [inputOpen, setInputOpen] = React.useState(false);
  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const [alertOpen, setAlertOpen] = React.useState(false);
    const [formOpen, setFormOpen] = React.useState(false);


  const [name, setName] = React.useState("");
    const [formData, setFormData] = React.useState({ fullName: "", email: "" });


  return (
    <div style={{ padding: 20 }}>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" onClick={() => setInputOpen(true)}>
          Open Input Dialog
        </Button>
        <Button variant="outlined" onClick={() => setConfirmOpen(true)}>
          Open Confirm Dialog
        </Button>
        <Button variant="outlined" onClick={() => setAlertOpen(true)}>
          Open Alert Dialog
        </Button>
        <Button variant="outlined" onClick={() => setFormOpen(true)}>
          Open Form Dialog
        </Button>
      </Stack>

      <p>Entered Name: {name}</p>

      <Dialog open={inputOpen} onClose={() => setInputOpen(false)}>
        <DialogTitle>Enter Name</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setInputOpen(false)}>Cancel</Button>
          <Button onClick={() => setInputOpen(false)}>Save</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
        <DialogTitle>Delete Confirmation</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this item?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmOpen(false)}>No</Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              alert("Item deleted!");
              setConfirmOpen(false);
            }}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={alertOpen} onClose={() => setAlertOpen(false)}>
        <DialogTitle>Information</DialogTitle>
        
        <DialogActions>
          <Button onClick={() => setAlertOpen(false)}>
            OK
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={formOpen} onClose={() => setFormOpen(false)}>
        <DialogTitle>Register</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Full Name"
            type="text"
            fullWidth
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setFormOpen(false)}>Cancel</Button>
          <Button
            variant="contained"
            onClick={() => {
              alert(`Submitted: ${formData.fullName}, ${formData.email}`);
              setFormOpen(false);
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogsPage;
