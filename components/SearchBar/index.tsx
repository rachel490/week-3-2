import React from 'react';
import { FiSearch } from 'react-icons/fi';
import * as S from './styled';

function SearchBar() {
  return (
    <S.Form>
      <S.Input type="text" placeholder="검색어를 입력해주세요" />
      <button>
        <FiSearch size="20" />
      </button>
    </S.Form>
  );
}

export default SearchBar;
