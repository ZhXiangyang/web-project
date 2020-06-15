import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

export default function KDAPieChart(kill, death, assist) {
    return(
        <div>
            <PieChart
            data={[
                { title: 'ASSIST', value: {assist}, color: '#33D4FF' },
                { title: 'DEATH',  value: {death},  color: '#FF3346' },
                { title: 'KILL',   value: {kill},   color: '#49FF33' },
            ]}
            />
        </div>
    )
}

