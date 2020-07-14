import { useState, useEffect } from 'react';

let _id = 0;
const genId = () => ++_id;

export default function useId(): number {
  const [id, setId] = useState(null);
  useEffect(() => setId(genId()), []);
  return id;
}
