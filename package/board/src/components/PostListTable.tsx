import React from 'react';
import styled from 'styled-components';

export interface IProp {
  posts: IPost[];
}

interface IPost {
  number: number;
  title: string;
  reply: number;
  tag?: string;
  like: number;
  view: number;
  author: string;
  timestamp: string;
}

export const PostListTable = (args: IProp) => {
  return (
    <Table>
      <colgroup>
        <col width="30px" />
        <col width="*" />
        <col width="70px" />
        <col width="100px" />
        <col width="100px" />
      </colgroup>

      <thead>
        <tr>
          <th>#</th>
          <th>제목</th>
          <th>조회수</th>
          <th>글쓴이</th>
          <th>시간</th>
        </tr>
      </thead>

      <tbody>
        {args.posts.map(post => (
          <tr>
            <td>{post.number}</td>
            <td>
              {post.title}
              <span>[{post.reply}]</span>
            </td>
            <td>{post.view}</td>
            <td>{post.author}</td>
            <td>{post.timestamp}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const Table = styled.table`
  width: 1024px;
  border-spacing: 0;
  border-top: 3px solid #1ea7fd;

  tr {
    height: 30px;
  }

  th,
  td {
    padding: 10px;

    span {
      margin-left: 5px;
      font-weight: 600;
    }
  }

  th:first-child,
  td:first-child,
  td:nth-child(n + 3),
  th:nth-child(n + 3) {
    text-align: center;
  }

  thead {
    th {
      text-align: left;
      border-bottom: 2px solid #e2e2e2;
    }
  }

  border-bottom: 2px solid #e2e2e2;
`;
