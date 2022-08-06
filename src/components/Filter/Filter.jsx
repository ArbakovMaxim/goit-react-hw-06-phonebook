import * as yup from 'yup';
import { TitleBlock } from 'components/Form/Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, getFilter } from 'redux/slice';

let schema = yup.object().shape({
  name: yup.string().required(),
});

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChangeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div>
      <TitleBlock>Find contacts by name</TitleBlock>
      <input
        value={filter}
        type="text"
        name="filter"
        pattern={schema}
        title="only sting"
        onChange={onChangeFilter}
      />
    </div>
  );
};
