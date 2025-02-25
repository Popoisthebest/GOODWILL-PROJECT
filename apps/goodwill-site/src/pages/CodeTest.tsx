/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Image7 from "../assets/image 7.png";

const globalStyles = css`
  body {
    background-color: #263747;
    margin: 0;
    padding: 0;
  }
  body,
  html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

const allStyle = css`
  background: #263747;
`;

// ✅ 스타일 적용된 컨테이너 (2열 레이아웃)
const Container = styled.div`
  display: flex;
  gap: 20px;
  background: transparent;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  padding-top: 58px; // AppBar 높이만큼 padding-top 추가
`;

const LeftPanel = styled.div`
  width: 600px;
  background: #263747;
  border-right: 10px solid rgba(55, 72, 93, 1);
  border-top: none;
  margin: 0;
  margin-left: 10px;
  padding: 0;
`;

const RightPanel = styled.div`
  flex: 1;
  background: #263747;
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-left: 1px solid #19232d;
  border-top: none;
  margin: 0;
  padding: 0;
`;
const BottomSpace = styled.div`
  border-top: 1px solid #19232d;
  margin-bottom: 450px;
`;

const containerStyle = css`
  display: flex;
  gap: 3px;
  align-items: center;
  width: 10px;
  margin-left: -10px;
  margin-right: -10px;
  margin-bottom: 200px;
`;
const containerStyle2 = css`
  display: flex;
  gap: 3px;
  margin-top: -24px;
  margin-bottom: 24px;
  align-items: center;
  justify-content: center;
  width: 100%;
  transform: rotate(90deg);
`;

const ediotrTitle = css`
  width: 100%;
  margin: 0;
  font-size: medium;
  padding: 20px;
  border-bottom: 1px solid #19232d;
`;

const barStyle = css`
  width: 1px;
  height: 32px;
  background-color: white;
`;

const Button = styled.button`
  background: #44576c;
  margin-right: 10px;
  color: white;
  padding: 10px 16px;
  border-radius: 4px;
  border: none;
`;

const Subtitle = styled.h2`
  font-size: 15px;
  margin-top: 20px;
  margin-bottom: 25px;
  font-weight: semibold;

  color: white;
`;

const editorStyle = css`
  .monaco-editor,
  .monaco-editor-background,
  .monaco-editor .margin,
  .monaco-scrollable-element,
  .monaco-editor .scrollbar {
    background-color: #263747 !important;
  }

  .minimap,
  .minimap-decorations-layer {
    background-color: #263747 !important;
  }
  .monaco-editor {
    border-bottom: 1px solid #19232d;
    outline: none;
  }

  .monaco-editor .current-line {
    background-color: transparent !important; /* 현재 줄 강조 배경 투명 */
  }

  .monaco-editor .lineHighlightBorder {
    background-color: transparent !important;
  }
`;

const StyledEditor = styled(Editor)`
  ${editorStyle}
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;

// 이미지 스타일
const imageStyle = css`
  border-radius: 10px;
  width: 135.69px;
  height: 110px;
`;

// 문제 설명 스타일
const problemDescriptionStyle = css`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  color: #a5c0c3;
  margin-bottom: 20px;
`;

// 상단 바 스타일
const topBarStyle = css`
  top: 0;
  width: 100%;
  height: 58px;
  background: #263747;
  border-bottom: 1px solid #19232d;
  box-shadow: none;
  padding: 0 12px;
  margin-top: -20px;
  margin-bottom: -58px;
  z-index: 1100;
`;

// 하단 바 스타일
const bottomBarStyle = css`
  position: fixed;
  width: 100%;
  height: 50px;
  left: 0;
  bottom: 0;
  background: #263747;
  border-top: 1px solid #19232d;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
`;

const selectStyle = css`
  background: #44576c;
  justify-content: center;
  padding: 3px;
  padding-left: 10px;
  margin-bottom: 2px;
  margin-top: -4px;
  margin-right: -30px;
  border-radius: 5px;
  color: white;
  width: 110px; /* 너비 조정 */
  height: 40px; /* 높이 조정 */
  font-size: 20px;
  min-width: 0;

  .MuiSelect-root {
    border: none;
    &:before,
    &:after {
      border: none;
    }
  }

  .MuiSelect-select {
    color: white;
    display: flex;
    align-items: center;
    padding-right: 8px;
  }

  .MuiSelect-icon {
    color: white;
    padding-right: 6px;
  }

  .MuiPaper-root {
    background-color: #44576c;
    color: white;
  }
`;

const CodeTest: React.FC = () => {
  const [code, setCode] = useState<string>(
    "function solution() {\n  return 0;\n}"
  );
  const [output, setOutput] = useState<string>("");
  const [language, setLanguage] = useState<string>("javascript");

  const runCode = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(`(${code})()`);
      setOutput(`결과: ${result}`);
    } catch (error) {
      setOutput(`에러 발생: ${error}`);
    }
  };

  const handleLanguageChange = (event: any) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);

    // 언어가 바뀔 때마다 기본 코드 템플릿 변경
    switch (selectedLanguage) {
      case "javascript":
        setCode("function solution() {\n  return 0;\n}");
        break;
      case "python":
        setCode("def solution():\n    return 0");
        break;
      case "java":
        setCode(
          "public class Solution {\n    public static int solution() {\n        return 0;\n    }\n}"
        );
        break;
      case "csharp":
        setCode(
          "public class Solution {\n    public static int Solution() {\n        return 0;\n    }\n}"
        );
        break;
      case "cpp":
        setCode("int solution() {\n    return 0;\n}");
        break;
      case "go":
        setCode("func solution() int {\n    return 0\n}");
        break;
      case "ruby":
        setCode("def solution\n    0\nend");
        break;
      case "php":
        setCode("<?php\nfunction solution() {\n    return 0;\n}");
        break;
      case "typescript":
        setCode("function solution(): number {\n    return 0;\n}");
        break;
      case "swift":
        setCode("func solution() -> Int {\n    return 0\n}");
        break;
      case "kotlin":
        setCode("fun solution(): Int {\n    return 0\n}");
        break;
      case "rust":
        setCode("fn solution() -> i32 {\n    0\n}");
        break;
      case "scala":
        setCode("def solution(): Int = {\n    0\n}");
        break;
      case "r":
        setCode("solution <- function() {\n    return(0)\n}");
        break;
      case "dart":
        setCode("int solution() {\n    return 0;\n}");
        break;
      case "elixir":
        setCode("def solution do\n    0\nend");
        break;
      case "perl":
        setCode("sub solution {\n    return 0;\n}");
        break;
      case "haskell":
        setCode("solution :: Int\nsolution = 0");
        break;
      case "lua":
        setCode("function solution()\n    return 0\nend");
        break;
      case "clojure":
        setCode("(defn solution []\n    0)");
        break;
      case "erlang":
        setCode("solution() -> 0.");
        break;
      case "fsharp":
        setCode("let solution() =\n    0");
        break;
      case "ocaml":
        setCode("let solution () =\n    0");
        break;
      case "sql":
        setCode("SELECT 0;");
        break;
      case "shell":
        setCode("solution() {\n    echo 0\n}");
        break;
      case "powershell":
        setCode("function solution {\n    return 0\n}");
        break;
      case "html":
        setCode(
          "<html>\n  <body>\n    <p>Hello, World!</p>\n  </body>\n</html>"
        );
        break;
      case "css":
        setCode("body {\n    background-color: #f3f4f6;\n}");
        break;
      case "json":
        setCode('{\n    "key": "value"\n}');
        break;
      case "yaml":
        setCode("key: value");
        break;
      case "markdown":
        setCode("# Hello, World!");
        break;
      case "xml":
        setCode("<root>\n  <element>value</element>\n</root>");
        break;
      case "plaintext":
        setCode("Hello, World!");
        break;
      default:
        setCode("function solution() {\n  return 0;\n}");
        break;
    }
  };

  return (
    <>
      <Global styles={globalStyles} />
      <h1 css={allStyle}>
        {/* 상단 바 (AppBar) */}
        <AppBar position="static" css={topBarStyle}>
          <Toolbar sx={{ minHeight: "58px" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              제목을 입력해 주세요.
            </Typography>
            <FormControl
              variant="standard"
              sx={{ minWidth: 120 }}
              css={selectStyle}
            >
              <Select
                labelId="language-select-label"
                id="language-select"
                value={language}
                onChange={handleLanguageChange}
              >
                <MenuItem value="javascript">JavaScript</MenuItem>
                <MenuItem value="python">Python</MenuItem>
                <MenuItem value="java">Java</MenuItem>
                <MenuItem value="csharp">C#</MenuItem>
                <MenuItem value="cpp">C++</MenuItem>
                <MenuItem value="go">Go</MenuItem>
                <MenuItem value="ruby">Ruby</MenuItem>
                <MenuItem value="php">PHP</MenuItem>
                <MenuItem value="typescript">TypeScript</MenuItem>
                <MenuItem value="swift">Swift</MenuItem>
                <MenuItem value="kotlin">Kotlin</MenuItem>
                <MenuItem value="rust">Rust</MenuItem>
                <MenuItem value="scala">Scala</MenuItem>
                <MenuItem value="r">R</MenuItem>
                <MenuItem value="dart">Dart</MenuItem>
                <MenuItem value="elixir">Elixir</MenuItem>
                <MenuItem value="perl">Perl</MenuItem>
                <MenuItem value="haskell">Haskell</MenuItem>
                <MenuItem value="lua">Lua</MenuItem>
                <MenuItem value="clojure">Clojure</MenuItem>
                <MenuItem value="erlang">Erlang</MenuItem>
                <MenuItem value="fsharp">F#</MenuItem>
                <MenuItem value="ocaml">OCaml</MenuItem>
                <MenuItem value="sql">SQL</MenuItem>
                <MenuItem value="shell">Shell</MenuItem>
                <MenuItem value="powershell">PowerShell</MenuItem>
                <MenuItem value="html">HTML</MenuItem>
                <MenuItem value="css">CSS</MenuItem>
                <MenuItem value="json">JSON</MenuItem>
                <MenuItem value="yaml">YAML</MenuItem>
                <MenuItem value="markdown">Markdown</MenuItem>
                <MenuItem value="xml">XML</MenuItem>
                <MenuItem value="plaintext">Plain Text</MenuItem>
              </Select>
            </FormControl>
          </Toolbar>
        </AppBar>

        {/* 메인 컨테이너 */}
        <Container>
          <LeftPanel>
            <Subtitle>문제 설명</Subtitle>
            <p css={problemDescriptionStyle}>
              A 회사의 물류창고에는 알파벳 대문자로 종류를 구분하는 컨테이너가
              세로로 n 줄, 가로로 m줄 총 n x m개 놓여 있습니다. 특정 종류
              컨테이너의 출고 요청이 들어올 때마다 지게차로 창고에서 접근이
              가능한 해당 종류의 컨테이너를 모두 꺼냅니다. 접근이 가능한
              컨테이너란 4면 중 적어도 1면이 창고 외부와 연결된 컨테이너를
              말합니다. <br /> <br /> 최근 이 물류 창고에서 창고 외부와 연결되지
              않은 컨테이너도 꺼낼 수 있도록 크레인을 도입했습니다. 크레인을
              사용하면 요청된 종류의 모든 컨테이너를 꺼냅니다.
            </p>
            <img src={Image7} alt="이미지" css={imageStyle} />
            <p css={problemDescriptionStyle}>
              위 그림처럼 세로로 4줄, 가로로 5줄이 놓인 창고를 예로
              들어보겠습니다. 이때 "A", "BB", "A" 순서대로 해당 종류의 컨테이너
              출고 요
              <br />
              청이 들어왔다고 가정하겠습니다. “A”처럼 알파벳 하나로만 출고
              요청이 들어올 경우 지게차를 사용해 출고 요청이 들어온 순간 접근 가
              <br />
              능한 컨테이너를 꺼냅니다. "BB"처럼 같은 알파벳이 두 번 반복된
              경우는 크레인을 사용해 요청된 종류의 모든 컨테이너를 꺼냅니다.
            </p>
          </LeftPanel>
          <div css={containerStyle}>
            <div css={barStyle} />
            <div css={barStyle} />
            <div css={barStyle} />
          </div>
          <RightPanel>
            <Subtitle css={ediotrTitle}>solution.js</Subtitle>
            <StyledEditor
              language={language}
              value={code}
              onChange={(value) => setCode(value || "")}
              theme="vs-dark"
            />
            <div css={containerStyle2}>
              <div css={barStyle} />
              <div css={barStyle} />
              <div css={barStyle} />
            </div>
            <BottomSpace></BottomSpace>
          </RightPanel>
        </Container>

        {/* 하단 바 (BottomBar) */}
        <div css={bottomBarStyle}>
          <Button>제출하기</Button>
        </div>
      </h1>
    </>
  );
};

export default CodeTest;
