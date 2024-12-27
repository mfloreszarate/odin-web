import React from "react";
import Modal from "react-modal";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


interface ImageGalleryModalProps {
  images: { original: string; thumbnail: string }[]; // Define la estructura de las imágenes
  title: string,
  isOpen: boolean,
  isClose: (bool: boolean) => void
}

const ImageGalleryModal: React.FC<ImageGalleryModalProps> = ({ images, title, isOpen, isClose }: ImageGalleryModalProps) => {


  const handleClose = () => {
    isClose(true)
  }

  return (
    <div>
      <span > {isOpen.toString()}</span>

      <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
        contentLabel="Galería de Imágenes"
        ariaHideApp={false}
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.8)", zIndex: 1000 },
          content: { inset: "10%", padding: 0, border: "none", background: "none" },
        }}
      >
        <button onClick={handleClose} style={{ position: "absolute", top: 10, right: 10, zIndex: 10 }}>
          X
        </button>
        <ImageGallery items={images} />
      </Modal>
    </div>
  );
};

export default ImageGalleryModal;
