# Fallback States

When fetching data client-side with react query, showing error and loading states can be handled very easily.

## Loading states

Loading states are displayed when data is still being fetched.

```tsx
const { data, isLoading } = trpc.products.getAll.useQuery();

if (isLoading) {
  return <p>Loading...</p>; // Display a loading state
}

// Render content once data is loaded
return <div>{data.title}</div>;
```

React Query automatically tracks loading and fetching states, allowing you to control the UI accordingly.

## Error states

Error states handle when a query fails due to network issues, permissions, or any other unexpected problems.

```tsx
const { data, isError, error } = trpc.products.getAll.useQuery();

if (isError) {
  return <p>Error: {error.message}</p>; // Display error message
}

return <div>{data.title}</div>;
```

## Empty states

If data returns but it’s empty or null, you can manage this case by checking the data’s existence.

```tsx
const { data, isLoading } = trpc.products.getAll.useQuery();

if (isLoading) {
  return <p>Loading...</p>;
}

if (!data) {
  return <p>No data available</p>; // Handle empty data state
}

return <div>{data.title}</div>;
```

## Combining states

For better user experience, combine loading, error, and empty states.

```tsx
const { data, isLoading, isError, error } = trpc.products.getAll.useQuery();

if (isLoading) {
  return <p>Loading...</p>;
}

if (isError) {
  return <p>Error: {error.message}</p>;
}

if (!data) {
  return <p>No data found</p>;
}

return <div>{data.title}</div>;
```
