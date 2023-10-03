import React, { useState } from 'react';
import { uploadImage } from '../api/uploader';
import Button from '../components/ui/Button';
import useProducts from '../hooks/useProducts';
import styled from 'styled-components';

const NewProductSection = styled.section`
  width: 100%;
  text-align: center;
  margin: auto;
  padding: 1rem;
  max-width:850px;
}
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const SuccessMessage = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const ImagePreview = styled.img`
  width: 24rem;
  margin: auto;
  margin-bottom: 0.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-left: 0.75em;
  padding-right: 0.75em;
`;

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();
  const { addProduct } = useProducts();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      console.log(files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file) //
      .then((url) => {
        addProduct.mutate(
          { product, url },
          {
            onSuccess: () => {
              setSuccess('성공적으로 제품이 추가되었습니다.');
              setTimeout(() => {
                setSuccess(null);
              }, 4000);
            },
          },
        );
      })
      .finally(() => setIsUploading(false));
  };

  return (
    <NewProductSection>
      <Title>새로운 제품 등록</Title>
      {success && <SuccessMessage>✅ {success}</SuccessMessage>}
      {file && (
        <ImagePreview src={URL.createObjectURL(file)} alt="local file" />
      )}
      <Form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          value={product.title ?? ''}
          placeholder="제품명"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={product.price ?? ''}
          placeholder="가격"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          value={product.category ?? ''}
          placeholder="카테고리"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={product.description ?? ''}
          placeholder="제품 설명"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="options"
          value={product.options ?? ''}
          placeholder="옵션들(콤마(,)로 구분)"
          required
          onChange={handleChange}
        />
        <Button
          text={isUploading ? '업로드중...' : '제품 등록하기'}
          disabled={isUploading}
        />
      </Form>
    </NewProductSection>
  );
}
