import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>Coza Store | {title}</title>
            <meta name='description' content={description} />
            <meta name='keyword' content={keywords} />
        </Helmet>
    );
}

Meta.defaultProps = {
    title: 'Home',
    description: 'We sell the best products for cheap',
    keywords: 'clothes',
}

export default Meta;
