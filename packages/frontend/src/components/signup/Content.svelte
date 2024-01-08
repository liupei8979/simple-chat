<script></script>

<div class="Wrapper">
    <label>
        <h3>이메일</h3>
        <span>
            <input type="text" maxLength="30" />
        </span>
        <p></p>
        <!-- 아이디 관련 경고 메시지가 표시될 곳 -->
    </label>

    <label>
        <h3>비밀번호</h3>
        <span>
            <input type="password" maxLength="30" />
        </span>
        <p></p>
        <!-- 비밀번호 관련 경고 메시지가 표시될 곳 -->
    </label>

    <label>
        <h3>비밀번호 재확인</h3>
        <span>
            <input type="password" maxLength="30" />
        </span>
        <p></p>
        <!-- 비밀번호 재확인 관련 경고 메시지가 표시될 곳 -->
    </label>

    <label>
        <h3>이름</h3>
        <span>
            <input type="text" maxLength="30" />
        </span>
        <p></p>
        <!-- 이름 관련 경고 메시지가 표시될 곳 -->
    </label>

    <button>가입하기</button>
</div>

<style>
    .Wrapper {
        width: 100%;
        & label,
        button {
            display: block;
            width: 80%;
            margin: 0 auto;
        }
        & label span,
        button {
            padding: 16px 5px;
            border: 1px solid #dadada;
        }
        & label {
            margin-bottom: 20px;
        }
        & label span {
            display: block;
            background-color: #fff;
            & input {
                border: none;
                width: 100%;
                outline: 0;
                padding: 0 15px;
            }
        }
        & label h3 {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 5px;
        }

        & button {
            background-color: #ffeb33;
            font-size: 15px;
            font-weight: bold;
            cursor: pointer;
        }
        & p {
            color: red;
        }
    }
</style>
