import { css } from "@emotion/react";

export const listContainer = css`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const searchBar = css`
    display: block;
    padding: 10px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 8px;
    outline: none;
    font-size: 14px;
    margin-bottom: 10px;
    background-color: #f9f9f9;
    box-sizing: border-box;
`;

export const applicantCard = css`
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #fff;
    border-radius: 8px;
    border: 1px solid #ddd;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #f5f5f5;
    }
`;

export const checkbox = css`
    margin: 0 40px 0 5px;
`;

export const columnStyle = css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
`;

/* ✅ 항목별 너비 설정 */
export const nameColumn = css`
  flex: 1;
  min-width: 120px;
`;

export const studentIdColumn = css`
  flex: 1;
  min-width: 100px;
`;

export const emailColumn = css`
  flex: 1.5;
  min-width: 180px;
`;

export const phoneColumn = css`
  flex: 1;
  min-width: 130px;
`;

export const roleColumn = css`
  flex: 2.5;
  min-width: 160px;
`;

export const specialApplicationColumn = css`
  flex: 1;
  min-width: 80px;
  text-align: center;
`;

export const dateColumn = css`
  flex: 1.5;
  min-width: 120px;
  text-align: center;
`;
