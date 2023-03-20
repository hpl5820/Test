import React, { useState, useEffect } from 'react';

export default function Demo() {
  const [like, setLike] = useState(0);

  useEffect(() => {console.log(like)},[like]);

  const handleClick = () => {
    setLike(like + 2);
  };

  const getLikeValue = () => {
    setTimeout(() => {
      alert(like);
    }, 2000);
  };

  return (
    <div>
      <button onClick={handleClick}>+</button>
      <button>{like} 👍</button>
      <button onClick={getLikeValue}>获得like值</button>
    </div>
  );
}
