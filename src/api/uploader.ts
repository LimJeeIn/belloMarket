export async function uploadImage(file: File): Promise<string> {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET || '');

  const response = await fetch(process.env.REACT_APP_CLOUDINARY_URL || '', {
    method: 'POST',
    body: data,
  });

  const json = await response.json();

  return json.url;
}
