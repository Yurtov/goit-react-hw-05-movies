import { BtnSubmit, FormContainer } from './SearchForm.style';

export const SeacrhForm = ({ onSubmit, movieQuery }) => {
  return (
    <FormContainer>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          defaultValue={movieQuery}
        />
        <BtnSubmit type="submit">Search</BtnSubmit>
      </form>
    </FormContainer>
  );
};
