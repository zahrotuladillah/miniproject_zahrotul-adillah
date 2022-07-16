import { PieChart } from "react-minimal-pie-chart";

export default function Pie (props){
    const {value, ifMin} = props
    return(
        <div>
        {ifMin === 1 
        &&
            <PieChart
                data={[
                    { title: 'One', value: value, color: '#B5F0A6' },
                    { title: 'Two', value: 100-value, color: '#c7c7c7' }
                ]}
                label={({ dataEntry }) => dataEntry.value}
                labelStyle={{
                    fontSize: "5px"
                }}
                animate={true}
            className="pie"/>
        }
        {ifMin === 2 
        &&
            <PieChart
                data={[
                    { title: 'One', value: value, color: '#F0A6A6' },
                    { title: 'Two', value: 100-value, color: '#F0A6A6' }
                ]}
                label={({ dataEntry }) => dataEntry.value}
                labelStyle={{
                    fontSize: "5px"
                }}
                animate={true}
            className="pie"/>
        }
        {ifMin === 3
        &&
            <PieChart
                data={[
                    { title: 'One', value: value, color: '#B5F0A6' },
                    { title: 'Two', value: 100-value, color: '#B5F0A6' }
                ]}
                label={({ dataEntry }) => dataEntry.value}
                labelStyle={{
                    fontSize: "5px"
                }}
                animate={true}
            className="pie"/>
            
        }
        </div>
    )
}