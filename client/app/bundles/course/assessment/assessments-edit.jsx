import React from 'react';
import { render } from 'react-dom';
import ProviderWrapper from 'lib/components/ProviderWrapper';
import storeCreator from './store';
import AssessmentEditPage from './pages/AssessmentEdit';
import { categoryAndTabTitle } from './utils';

$(document).ready(() => {
  const mountNode = document.getElementById('assessment-edit');
  if (mountNode) {
    const dataAttr = mountNode.getAttribute('data');
    const data = JSON.parse(dataAttr);
    const store = storeCreator({});
    const tabAttr = data.tab_attributes;
    const currentTab = {
      tab_id: data.attributes.tab_id,
      title: categoryAndTabTitle(tabAttr.category_title, tabAttr.tab_title, tabAttr.only_tab),
    };

    const Page = () => (
      <ProviderWrapper store={store}>
        <AssessmentEditPage
          modeSwitching={data.mode_switching}
          gamified={data.gamified}
          folderAttributes={data.folder_attributes}
          conditionAttributes={data.condition_attributes}
          initialValues={{
            ...data.attributes,
            tabs: [currentTab],
            password_protected: !!data.attributes.password,
          }}
        />
      </ProviderWrapper>
    );

    render(
      <Page />,
      mountNode
    );
  }
});
