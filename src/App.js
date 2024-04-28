import './App.css';
import ChartTemplate from './chartjsTemplate/ChartTemplate';
import jsonData1 from './자원순환마루_전국 도시규모별 종량제 봉투 폐기물의 삼성분 정보.json';

function App() {
  return (
    <div className='App'>
      <div style={{ width: 500, height: 500 }}>
        <ChartTemplate
          data={jsonData1.filter(
            (ele) =>
              ele['HOME_NAME2'] != '평균' && ele['HOME_NAME'] != '전체평균'
          )}
          filters={[
            { key: 'HOME_NAME', where: 'eq' },
            { key: 'HOME_NAME2', where: 'eq' },
            { key: 'DATA_NAME', where: 'eq' },
          ]}
          option={{
            xAxis: { dataKey: 'YEAR' },
            yAxis: {},
            bar: [
              {
                dataKey: 'DIAPER',
                name: '기저귀',
                stackId: 'stack1',
                fill: '#8884d8',
              },
              {
                dataKey: 'FOOD',
                name: '음식',
                stackId: 'stack1',
                fill: '#7884d8',
              },
              {
                dataKey: 'LEATHER',
                name: '가죽',
                stackId: 'stack1',
                fill: '#6884d8',
              },
              {
                dataKey: 'PAPER',
                name: '종이',
                stackId: 'stack1',
                fill: '#5884d8',
              },
              {
                dataKey: 'PLASTIC',
                name: '플라스틱',
                stackId: 'stack1',
                fill: '#4884d8',
              },
              {
                dataKey: 'RUBBER',
                name: '고무',
                stackId: 'stack1',
                fill: '#3884d8',
              },
              {
                dataKey: 'TEXTILE',
                name: '직물',
                stackId: 'stack1',
                fill: '#2884d8',
              },
              {
                dataKey: 'WOOD',
                name: '목재',
                stackId: 'stack1',
                fill: '#1884d8',
              },
            ],
            line: [
              {
                dataKey: 'AVERAGE',
                name: '평균',
                stroke: 'red',
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

export default App;
