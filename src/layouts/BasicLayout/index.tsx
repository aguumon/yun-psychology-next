"use client";

import {LogoutOutlined, QuestionCircleFilled, SearchOutlined,} from '@ant-design/icons';
import {ProLayout,} from '@ant-design/pro-components';
import {Dropdown, Input,} from 'antd';
import React from 'react';
import Image from "next/image";
import {usePathname} from "next/navigation";
import Link from "next/link";
import GlobalFooter from "@/components/GlobalFooter";
import {menus} from "../../../config/menu";
import './index.css'


const SearchInput = () => {
    return (
        <div
            className="searchInput"
            key="SearchOutlined"
            aria-hidden
            style={{
                display: 'flex',
                alignItems: 'center',
                marginInlineEnd: 24,
            }}
            onMouseDown={(e) => {
                e.stopPropagation();
                e.preventDefault();
            }}
        >
            <Input
                style={{
                    borderRadius: 4,
                    marginInlineEnd: 12,
                }}
                prefix={
                    <SearchOutlined />
                }
                placeholder="搜索题目"
                variant="borderless"
            />
        </div>
    );
};

interface Props {
    children : React.ReactNode;
}

export default function BasicLayout({ children }: Props) {

    const pathname = usePathname();

    return (
        <div
            className="BasicLayout"
            id="BasicLayout"
            style={{
                height: '100vh',
                overflow: 'auto',
            }}
        >
                    <ProLayout
                        logo={
                            <Image src="/assets/logo.png"  width={32} height={32} alt="云心理刷题平台"/>
                        }
                        title="云心理刷题平台"
                        layout="top"
                        location={{
                            pathname
                        }}
                        avatarProps={{
                            src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
                            size: 'small',
                            title: '羊羊',
                            render: (props, dom) => {
                                return (
                                    <Dropdown
                                        menu={{
                                            items: [
                                                {
                                                    key: 'logout',
                                                    icon: <LogoutOutlined />,
                                                    label: '退出登录',
                                                },
                                            ],
                                        }}
                                    >
                                        {dom}
                                    </Dropdown>
                                );
                            },
                        }}
                        actionsRender={(props) => {
                            if (props.isMobile) return [];
                            return [
                                <SearchInput key= "search" />,
                                <QuestionCircleFilled key="QuestionCircleFilled" />,
                            ];
                        }}
                        headerTitleRender={(logo, title) => {
                            return (
                                <a>
                                    {logo}
                                    {title}
                                </a>
                            );
                        }}
                        footerRender={() => {
                            return <GlobalFooter />;
                        }}
                        onMenuHeaderClick={(e) => console.log(e)}
                        menuDataRender={()=>{
                                return menus;
                            }
                        }
                        menuItemRender={(item, dom) => (
                            <Link href={item.path || "/"} target={item.target}>{dom}</Link>
                        )}
                    >
                        {children}

                    </ProLayout>
        </div>
    );
};