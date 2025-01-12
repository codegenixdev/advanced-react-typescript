// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example#types-or-interfaces
// Use Interface until You Need Type
// always use interface for public API's definition when authoring a library or 3rd party ambient type definitions, as this allows a consumer to extend them via declaration merging if some definitions are missing.
// consider using type for your React Component Props and State, for consistency and because it is more constrained.
// Classes can extend interface
// types can create union
// interface can augmented
