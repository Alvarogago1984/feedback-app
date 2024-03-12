import { ConteinerApp } from './app.styled';
import { ContentBody, Sidebar } from '../pages/Principal Page';
import { UtilsApp } from './utils/UtilsApp.utils';

function App() {
  const {
    addFeedbackTitleDetail,
    valueApi,
    select,
    upVotesValue,
    setUpVotesValue,
    handleClick,
    valueFetch
  } = UtilsApp();

  return (
    <ConteinerApp>
      <Sidebar handleClick={handleClick} />
      <ContentBody
        addFeedbackTitleDetail={addFeedbackTitleDetail}
        valueApi={valueApi}
        select={select}
        upVotesValue={upVotesValue}
        setUpVotesValue={setUpVotesValue}
        valueFetch={valueFetch}
      />
    </ConteinerApp>
  );
}

export default App;
