import React, { useState } from 'react'
import Page from '../atoms/Page'
import {Row , Col, Button, Space, Card, Table , Typography, Modal, Input , Form} from 'antd'
import styled from 'styled-components'
import Chart from 'react-apexcharts'


const {PageWrapper} = Page
const {Title , Text} = Typography
const {useForm} = Form

const CardStyled = styled(Card)` text-align:center`


const forestEstimationColumns = [
    {
        "title":"Tree Type",
        "dataIndex": "treeType",
        "key": 0
    },
    {
        "title":"Soil Type",
        "dataIndex": "soilType",
        "key": 3
    }
    ,
    {
        "title":"Number of Trees",
        "dataIndex": "noOfTrees",
        "key": 1
    },
    {
        "title":"Coverage Area",
        "dataIndex": "coverageArea",
        "key": 2
    },
    {
        "title":"Time To Grow",
        "dataIndex": "timeToGrow",
        "key": 3
    }
 
]


const causeOfEmissionColumns = [
    {title: "Amount of Emission (kg)" , dataIndex:"amountOfEmission" , key:0 , width:300},
    {title: "Cause of Emission" , dataIndex:"causeOfEmission" , key:1 , width:300}, 
    {title: "Suggestions" , dataIndex:"suggestions" , key:2},
]

const data = {
    "projectName": "ABC Cement",
    "projectType": "Cement Manufacture",
    "emissionEstimation": 12.2,
    "energyRequirement": 12.2,
    'numberOfTrees':100,
    "forestEstimation":[
        [
            {"treeType": "Bamboo" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
            {"treeType": "OOO" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
            {"treeType": "Bamboo" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
            {"treeType": "Bamboo" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
            {"treeType": "OOO" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
            {"treeType": "Bamboo" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
            {"treeType": "Bamboo" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
            {"treeType": "OOO" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
            {"treeType": "Bamboo" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
            {"treeType": "Bamboo" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
            {"treeType": "OOO" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
            {"treeType": "Bamboo" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
        ]
        ,
        [
            {"treeType": "Bamboo" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
            {"treeType": "BBB" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
            {"treeType": "Bamboo" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
        ],
        [
            {"treeType": "Bamboo" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
            {"treeType": "CCC" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
            {"treeType": "Bamboo" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
        ]
    ]
    ,
    "emissionBreakDown":[
        {"amountOfEmission": 1000 , "causeOfEmission":"Energy Consumption", "suggestions":"Use energy effectify"},
        {"amountOfEmission": 1000 , "causeOfEmission":"Energy Consumption", "suggestions":"Use energy effectify"},
    ],
    "energyBreakdown":[
        {"source": "Coal" , "amount": 5000},
        {"source": "Wind" , "amount": 5000},
        {"source": "Solar" , "amount": 5000},
        {"source": "Hydro" , "amount": 5000}
    ]
    ,
    "timeline":[
        {"netEmission": 1000 , "month":1},
        {"netEmission": 700 , "month":2},
        {"netEmission": 500 , "month":3},
        {"netEmission": 200 , "month":4},
        {"netEmission": 10 , "month":5},
    ]
}


const EmissionReport = () => {

    const [forestOption, setForestOption] = useState(1)
    const [chartOptions, setChartOptions] = useState({
            chart: {
              id: 'apexchart-example'
            },
            xaxis: {categories: data.timeline.map(v => v.month) , title:"Month Number" }
          })
    const [chartData , setChartData] = useState(
        [{
            name: 'Net Emission',
            data:  data.timeline.map(v => v.netEmission)
         }]
    )


    return (
        <PageWrapper>
            <Row style={{margin:"40px 0px"}}>
                <Col span={16}>
                    <Title level={2}>{data.projectName} - {data.projectType}</Title>
                </Col>
                <Col span={8} >
                    <Space  style={{justifyContent:"right" , width:"100%"}}>
                        <Button>Update Parameters</Button>
                        <Button type='primary' >Save Report</Button>
                    </Space>
                </Col>
            </Row>
            <Row style={{margin:"40px 0px"}} gutter={24} >
                <Col span={12}>
                    <Row gutter={12}>
                        <Col  span={8}>
                            <CardStyled  title="Emission (Est)">
                                {data.emissionEstimation}
                            </CardStyled>
                        </Col>
                        <Col span={8}>
                            <CardStyled  title="Energy Requirement">
                                {data.energyRequirement}
                            </CardStyled>
                        </Col>
                        <Col span={8}>
                            <CardStyled  title="Number of Trees (Est)">
                                {data.numberOfTrees}
                            </CardStyled>
                        </Col>
                    </Row>
                   
                    <Row style={{margin:"40px 0px"}} justify='end'>
                        <Table 
                            style={{width:"100%" , height:"350px"}}
                            // title={() => <Title style={{textAlign:"center"}} level={5}>Forest Estimation</Title>}
                            columns = {forestEstimationColumns}
                            dataSource={data.forestEstimation[forestOption - 1]}
                            pagination={ data.forestEstimation[forestOption - 1].length > 5 &&  {defaultPageSize:5} }>
                        </Table>
                    </Row>
                    <Row justify='center'>
                        <Col style={{paddingTop:"10px"}} > 
                        <Space>
                            <Text>Switch Forestration Options</Text>   
                            {data.forestEstimation.map((_, index) => <Button type='dashed' size='small' shape='circle' onClick={()=>setForestOption(index+1) }>{index + 1}</Button>)}   
                        </Space>
                        </Col>
                    </Row>
                </Col>
                <Col span={12}>         
                        <Card  title="Net Emission over time">
                            <Chart options={chartOptions} series={chartData}></Chart>
                        </Card>    
                </Col>
            </Row>
            <Row style={{margin:"40px 0px"}} justify="space-around" align="middle" gutter={24}>

                <Col span={3}>
                    <Card title="Total Energy">
                        {data.energyRequirement}
                    </Card>

                </Col>
                <Col><Text>=</Text></Col>
                {data.energyBreakdown.map(
                    (val , index) => {
                    if (index + 1 === data.energyBreakdown.length){
                        return <><Col span={3}> <Card title={val.source}>{val.amount}</Card>  </Col></>
                    }else{
                        return <><Col span={3}> <Card title={val.source}>{val.amount}</Card>  </Col> <Col><Text>+</Text></Col></>
                    }
                    
                    
                    }
                )}
            </Row>
            <Row style={{margin:"40px 0px"}}>
                <Col span={24}>
                    <Table 
                        style={{width:"100%"}}
                        // title={() => <Title style={{textAlign:"center"}} level={5}>Forest Estimation</Title>}
                        columns = {causeOfEmissionColumns}
                        dataSource={data.emissionBreakDown}
                        pagination={false}>
                    </Table>
                </Col>
            </Row>
                    <SaveReport 
                        visible={true}
                        onCreate={(values)=> alert(JSON.stringify(values))}           
                    ></SaveReport>
        </PageWrapper>
    )

}


const SaveReport  = ({visible, onCreate, onCancel}) => {
    const [form] = useForm()

    return (
    <Modal visible={visible}  title="Save Report" okText="Save" cancelText="Cancel" 
    onCancel={onCancel} 
    onOk={
        () => {
            form
              .validateFields()
              .then((values) => {
                form.resetFields();
                onCreate(values);
              })
              .catch((info) => {
                console.log('Validate Failed:', info);
              });
          }
    } >

    <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: 'Please input the title of collection!',
            },
          ]}
        >
          <Input />
        </Form.Item>
    </Form>
    </Modal>
    )
}


export default EmissionReport