import React from 'react';

const Error = (props) => {
    const { error } = props;

    return (
        <>
            <div className="alert error" role="alert" data-testid="error">
                <div className="icon icon-error" />
                <div className="text">{error}</div>
            </div>
        </>
    );
};

export default Error;
