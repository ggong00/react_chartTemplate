import React, { useEffect, useState } from 'react';

const ChartFilters = ({ data, filters, filterSet }) => {
  const [selectList, setSelectList] = useState([]);
  const [innerFilters, setInnerFilters] = useState([...filters]);

  // 초기 선택 키 설정
  useEffect(() => {
    let filterData = [...data];

    const selectList = innerFilters.map(({ key, where }) => {
      const options = [...new Set(filterData.map((ele) => ele[key]))];
      filterData = filterData.filter((ele) => ele[key] == options[0]);

      return { key, where, options, select: options[0] };
    });

    setInnerFilters(selectList);
  }, [filters]);

  // 이후 선택 키 설정
  useEffect(() => {
    let filterData = [...data];

    const selectList = innerFilters.map(({ key, where, select }) => {
      const options = [...new Set(filterData.map((ele) => ele[key]))];

      const find = options.find((ele) => ele == select);

      if (!find) {
        select = options[0];
      }

      filterData = filterData.filter((ele) => ele[key] == select);

      return { key, where, options, select };
    });

    setSelectList(selectList);
  }, [innerFilters]);

  // 필터링 데이터 변경
  useEffect(() => {
    let filterData = [...data];

    selectList.forEach(({ key, where, select }) => {
      if (where == 'eq') {
        filterData = filterData.filter((ele) => ele[key] == select);
      }
    });

    filterSet(filterData);
  }, [selectList]);

  return (
    <div className='filters'>
      {selectList.map(({ key, where, options, select }) => {
        return (
          <select
            key={key}
            select={select}
            onChange={(evt) => {
              const replace = selectList.map((ele) => {
                if (ele.key == key) {
                  ele.select = evt.target.value;
                }

                return ele;
              });

              setInnerFilters(replace);
            }}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      })}
    </div>
  );
};

export default ChartFilters;
