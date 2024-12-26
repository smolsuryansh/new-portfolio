const HandWriting = () => {
    return (
      <div className="flex items-center justify-center">
        <svg width="600" height="200" viewBox="0 0 600 200">
          <text
            x="50"
            y="150"
            className="handwriting-animation"
            fontFamily="Beanco-Font"
            fontSize="80"
            fill="#FEECC3"
          >
            Science
          </text>
        </svg>
        <style>
          {`
            .handwriting-animation {
              stroke-dasharray: 1000;
              stroke-dashoffset: 1000;
              animation: draw 3s ease forwards;
            }
  
            @keyframes draw {
              to {
                stroke-dashoffset: 0;
              }
            }
          `}
        </style>
      </div>
    );
  };
  
  export default HandWriting;