import UseFetch from "."

const UseFetchtHookTest = () => {
    const { data, error, loading } = UseFetch(
        'https://dummyjson.com/products', 
        {}
    );

    return (
        <div>
            <h1>Use Fetch Hook</h1>
            {
                loading ? <h3>Loading data. Please wait...</h3> : null
            }
            {
                error ? <h3>{error}</h3> : null
            }
            {
                data && data.products && data.products.length ? 
                data.products.map(productItem => 
                    <p key={productItem.key}>{productItem.title}</p>
                ) : null
            }
        </div>
    )
}

export default UseFetchtHookTest;