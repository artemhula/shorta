import {
  Box,
  Button,
  Modal,
  ModalClose,
  ModalDialog,
  Typography,
} from '@mui/joy';
import { QRCodeCanvas } from 'qrcode.react';
import { useRef } from 'react';

interface Props {
  url: string;
  open: boolean;
  onClose: () => void;
}

export const QRDialog = ({ open, onClose, url }: Props) => {
  const qrRef = useRef<HTMLCanvasElement>(null);

  const handleDownload = () => {
    const qr = qrRef.current?.toDataURL();
    if (qr) {
      const link = document.createElement('a');
      link.download = `${url}.png`;
      link.href = qr;
      link.click();
    }
    //TODO: implement error
  };

  return (
    <Modal open={open}>
      <ModalDialog layout="center" size="lg" variant="outlined">
        <ModalClose onClick={onClose} />
        <Typography alignSelf={'center'}>Your QR Code</Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            m: 2,
          }}
        >
          <QRCodeCanvas ref={qrRef} value={url} marginSize={3} />
        </Box>
        <Button color="primary" onClick={handleDownload}>
          Download QR
        </Button>
      </ModalDialog>
    </Modal>
  );
};
