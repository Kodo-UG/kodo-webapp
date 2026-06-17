import React from 'react';
import { Compass, Send, Bookmark, ExternalLink } from "lucide-react";
import { useMediaQuery } from '@uidotdev/usehooks';

const StatsCards = ({ scholarship, appliedCount, favData, referCount }) => {
    const isXl = useMediaQuery('only screen and (min-width:1280px)'); // Extra large screens
    const isLg = useMediaQuery('only screen and (min-width:1024px)'); // Large screens
    const isMd = useMediaQuery('only screen and (min-width:768px)'); // Medium screens

    const cardData = [
        {
            icon: <Compass size={28} color="#007bff" />,
            bgColor: "#cce5ff", // Light Blue
            value: scholarship,
            label: "Matched"
        },
        {
            icon: <Send size={28} color="#28a745" />,
            bgColor: "#d4edda", // Light Green
            value: appliedCount.length,
            label: "Applied"
        },
        {
            icon: <Bookmark size={28} color="#ffc107" />,
            bgColor: "#fff3cd", // Light Yellow
            value: favData.length,
            label: "Favorites"
        },
        {
            icon: <ExternalLink size={28} color="#dc3545" />,
            bgColor: "#f8d7da", // Light Red
            value: referCount || 0,
            label: "Referrals"
        }
    ];

    return (
        <div 
            className="stats-container"
            style={{
                display: "flex",
                // flexWrap: "wrap",
                flexDirection: isMd ? "row" : "column", // Row for XL screens, column otherwise
                justifyContent: "center",
                alignItems: "flex-start", // Align items to the start
                gap: 20,
                marginTop: 20,
                maxWidth: "100%"
            }}
        >
            {cardData.map((item, index) => (
                <div 
                    key={index}
                    className="stats-card"
                    style={{
                        backgroundColor: '#EEEEF7',
                        padding: 20,
                        borderRadius: 20,
                        width: isLg ? "250px" : isMd ? "220px" : "100%", // Responsive width
                        textAlign: "left", // Align text to the start
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start", // Align items to the start
                    }}
                >
                    <div 
                        className="icon-container"
                        style={{
                            backgroundColor: item.bgColor,
                            width: 50,
                            height: 50,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: 10
                        }}
                    >
                        {item.icon}
                    </div>
                    <div className="stats-content">
                        <h2 className="stats-value" style={{ margin: 0 }}>{item.value}</h2>
                        <p className="stats-label" style={{ color: "#555", fontWeight: "bold", margin: 0 }}>
                            {item.label}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsCards;
