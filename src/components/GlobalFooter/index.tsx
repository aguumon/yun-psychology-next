"use client";

import React from "react";
import './index.css'

export default function GlobalFooter() {
    const currentYear : number = new Date().getFullYear();
    // 全局公用页脚
    return (
        <div
            className = "global-footer"
        >
            <div>© {currentYear} 云心理刷题平台</div>
            <div>
                <a href="#" target="_blank">
                作者：YuanXiao
                </a>
            </div>
        </div>
    );
}