import React from "react";
import { Link } from "react-router-dom";

const BlogCard: React.FC<{ id: number; title: string; date: string }> = ({ id, title, date }) => {
    const cardStyle: React.CSSProperties = {
        backgroundColor: "#f0f0f0",
        borderRadius: "10px",
        width: "100%",
        maxWidth: "420px",
        height: "250px",
        display: "flex",
    };

    const textContainerStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
    };

    const titleStyle: React.CSSProperties = {
        fontWeight: 600,
        fontSize: "22px",
        margin: "0",
    };

    const dateStyle: React.CSSProperties = {
        fontSize: "14px",
        color: "#777",
        marginBottom: "5px",
    };

    return (
        <Link to={`/article/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: "40px", cursor: "pointer" }}>
                <div style={cardStyle}></div>
                <div style={textContainerStyle}>
                    <p style={dateStyle}>{date}</p>
                    <h2 style={titleStyle}>{title}</h2>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;