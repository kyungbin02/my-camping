"use client";

import React from "react";
import { Grid, Card, CardMedia, Typography, Box, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function PhotoGallery() {
  const photos = [
    { id: 1, image: "/images/다운로드.jpg", alt: "사진 1" },
    { id: 2, image: "/images/다운로드55 (1).jpg", alt: "사진 1" },
    { id: 3, image: "/images/im562652ages.jpg", alt: "사진 1" },
    { id: 4, image: "/images/image566s.jpg", alt: "사진 1" },
    { id: 6, image: "/images/다운로드.jpg", alt: "사진 1" },
    { id: 7, image: "/images/다운로드55 (1).jpg", alt: "사진 1" },
    { id: 8, image: "/images/im562652ages.jpg", alt: "사진 1" },
    { id: 9, image: "/images/image566s.jpg", alt: "사진 1" },

  ];

  return (
    <Box
      sx={{
        padding: "20px",
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      {/* 제목 */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          mb: 4,
          color: "#28a745",
        }}
      >
        사진첩
      </Typography>

      {/* 사진첩 */}
      <Grid container spacing={2}>
        {photos.map((photo) => (
          <Grid item xs={6} sm={4} key={photo.id}>
            <Card
              sx={{
                boxShadow: 2,
                borderRadius: "8px",
                overflow: "hidden",
                "&:hover": { transform: "scale(1.03)", transition: "0.3s" },
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={photo.image}
                alt={photo.alt}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* 등록 버튼 */}
      <IconButton
        sx={{
          position: "fixed",
          bottom: "16px",
          right: "16px",
          backgroundColor: "#28a745",
          color: "white",
          width: "60px",
          height: "60px",
          boxShadow: 3,
          borderRadius: "50%",
          "&:hover": { backgroundColor: "#218838" },
        }}
      >
        <AddCircleIcon sx={{ fontSize: "36px" }} />
      </IconButton>
    </Box>
  );
}
