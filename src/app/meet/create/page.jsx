"use client";

import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Input,
  Card,
  CardMedia,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function CreatePost() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null); // 이미지 파일 상태
  const [error, setError] = useState(""); // 에러 메시지 상태

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setError(""); // 이미지 선택 시 에러 메시지 제거
    }
  };

  const handleSubmit = () => {
    if (!image) {
      setError("이미지를 업로드해주세요.");
      return;
    }

    if (!title.trim() || !content.trim()) {
      setError("제목과 내용을 모두 입력해주세요.");
      return;
    }

    // 게시물 생성 로직 (예: 서버로 데이터 전송)
    console.log("Post created:", { title, content, image });

    // 생성 완료 후 게시판 페이지로 이동
    router.push("/");
  };

  return (
    <Box
      sx={{
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center" }}>
        게시물 생성
      </Typography>

      {image && (
        <Card sx={{ marginBottom: "20px" }}>
          <CardMedia
            component="img"
            image={image}
            alt="Uploaded Preview"
            sx={{ height: "300px", objectFit: "cover" }}
          />
        </Card>
      )}

      <Input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        sx={{ marginBottom: "10px" }}
      />
      {error && (
        <Typography variant="body2" color="error" sx={{ marginBottom: "10px" }}>
          {error}
        </Typography>
      )}

      <TextField
        label="제목"
        variant="outlined"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <TextField
        label="내용"
        variant="outlined"
        fullWidth
        multiline
        rows={5}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit}
      >
        게시물 생성
      </Button>

      <Button
        variant="outlined"
        color="secondary"
        fullWidth
        onClick={() => router.push("/")}
      >
        취소
      </Button>
    </Box>
  );
}
