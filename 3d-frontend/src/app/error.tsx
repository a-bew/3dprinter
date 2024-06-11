'use client'
// app/error.jsx
function Error({ statusCode }: any) {
    return (
      <div>
        <h1>Error</h1>
        <p>An error {statusCode} occurred on server</p>
      </div>
    );
  }
  
  Error.getInitialProps = ({ res, err }:any) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode :  404;
    return { statusCode };
  };
  
  export default Error;