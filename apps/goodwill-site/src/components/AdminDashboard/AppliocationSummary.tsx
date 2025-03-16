import useApplicationStats from "../../hooks/useApplicationStats.ts";

const ApplicationSummary = () => {
    const { totalApplicants, roleStats, loading } = useApplicationStats();

    if (loading) return <p>지원자 통계를 불러오는 중...</p>;

    return (
        <div>
            <h2>지원자 통계</h2>
            <h3>총 지원자 수: {totalApplicants}명</h3>

            <h3>직군 별 지원자 수</h3>
            <ul>
                {Object.entries(roleStats).map(([role, count]) => (
                    <li key={role}>
                        {role}: {count}명
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ApplicationSummary;
