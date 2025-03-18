import { useEffect, useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import useApplicationStats from "../../hooks/useApplicationStats.ts";
import { barChart, roleChart, roleDiv } from "./ApplicationSummary.style.ts";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
);

const ApplicationSummary = () => {
    const { totalApplicants, roleStats, loading, applications } =
        useApplicationStats();
    const [chartData, setChartData] = useState<any>(null);

    useEffect(() => {
        if (!loading && applications.length > 0) {
            const dateCountMap: Record<string, number> = {};

            applications.forEach((app) => {
                if (app.createdAt) {
                    const date = app.createdAt.toDate().toLocaleDateString("ko-KR");
                    dateCountMap[date] = (dateCountMap[date] || 0) + 1;
                }
            });

            const sortedDates = Object.keys(dateCountMap).sort(
                (a, b) => new Date(a).getTime() - new Date(b).getTime(),
            );

            setChartData({
                labels: sortedDates,
                datasets: [
                    {
                        label: "지원자 수",
                        data: sortedDates.map((date) => dateCountMap[date]),
                        backgroundColor: "rgba(54, 162, 235, 0.6)",
                        borderColor: "rgba(54, 162, 235, 1)",
                        borderWidth: 1,
                    },
                ],
            });
        }
    }, [applications, loading]);

    // ✅ 자동 색상 생성 함수 (22개 역할까지 지원)
    const generateColors = (count: number) => {
        return Array.from({ length: count }, (_, i) =>
            `hsl(${(i * (360 / count))}, 70%, 60%)`
        );
    };

    const roleLabels = Object.keys(roleStats);
    const roleValues = Object.values(roleStats);
    const colors = generateColors(roleLabels.length);

    const doughnutData = {
        labels: roleLabels,
        datasets: [
            {
                data: roleValues,
                backgroundColor: colors,
                borderColor: colors.map((color) => color.replace('60%', '40%')),
                borderWidth: 1,
            },
        ],
    };

    const doughnutOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "right" as const,
            },
            title: {
                display: true,
                text: "직군별 지원자 비율",
            },
        },
    };

    if (loading) return <p>지원자 통계를 불러오는 중...</p>;

    return (
        <div>
            <h2>지원자 통계</h2>

            <h3>총 지원자 수: {totalApplicants}명</h3>

            <h3>지원 추이</h3>
            {chartData && (
                <Bar
                    data={chartData}
                    options={{
                        responsive: true,
                        plugins: {
                            legend: {
                                position: "top",
                            },
                            title: {
                                display: true,
                                text: "날짜별 지원자 수",
                            },
                        },
                    }}
                    css={barChart}
                />
            )}

            <h3>직군 별 지원자 수</h3>
            <div css={roleDiv}>
                <ul>
                    {roleLabels.map((role, index) => (
                        <li key={role} style={{ color: colors[index] }}>
                            {role}: {roleValues[index]}명
                        </li>
                    ))}
                </ul>

                <Doughnut data={doughnutData} options={doughnutOptions} css={roleChart} />
            </div>
        </div>
    );
};

export default ApplicationSummary;
