"use client"

import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import BasicLayout from "@/layouts/BasicLayout";
import { useCallback, useEffect} from "react";

const InitLayout: React.FC<
    Readonly<{
        children: React.ReactNode;
    }>
> = ({ children: ReactNode }) =>{
    /**
     * 全局初始化函数，全局调用单次写到这
     */
    // 只创建一次
    const doInit = useCallback(()=>{


    },[])

    // 只执行一次
    useEffect(()=>{
        doInit();
    },[])

    return ReactNode;
};


export default function RootLayout({
                                       children
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="zh-CN">
            <body>
            <AntdRegistry>
                <InitLayout>
                    <BasicLayout>{children}</BasicLayout>
                </InitLayout>
            </AntdRegistry>
            </body>
        </html>
    );
}

