<script lang="ts">
    function handleSubmit(event: SubmitEvent) {
        // 기본 폼 제출 동작 방지
        event.preventDefault()

        // 로직 추가 (예: API 호출)

        // 로그인 성공 시 /main/friends로 이동
        window.location.href = '/main/friends'
    }
</script>

<div class="Wrapper">
    <form on:submit={handleSubmit}>
        <input type="text" placeholder="계정" maxLength="30" />
        <input type="password" autoComplete="new-password" placeholder="비밀번호" maxLength="30" />
        <button type="submit">
            <span>로그인</span>
        </button>

        <!-- 로그인 실패 메시지가 표시될 곳 -->
    </form>
    <ul>
        <li>
            <a href="/signup">회원 가입</a>
        </li>
    </ul>
</div>

<style>
    .Wrapper {
        width: 100%;
        height: 330px;
        padding-top: 30px;
        & input {
            display: block;
            margin: 0 auto;
            padding: 10px 5px;
            width: 230px;
            border: 1px solid #dcdcdc;
            &:first-child {
                border-bottom: none;
            }
            &::placeholder {
                color: #a2a2a2;
            }
        }
        & button {
            position: relative;
            display: block;
            margin: auto;
            margin-top: 5px;
            padding: 10px 5px;
            width: 230px;
            border: 1px solid #000;
            color: #fff;
            background-color: #423630;
            outline: none;
            @keyframes iconLotate {
                0% {
                    transform: rotate(0deg);
                }
                50% {
                    transform: rotate(180deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }
            & i {
                position: absolute;
                top: 15px;
                right: 10px;
                color: #5c5c5c;
                animation: iconLotate 1.5s linear infinite;
            }
            &:hover {
                background-color: #594941;
                cursor: pointer;
            }
            &:active {
                background-color: #423630;
            }
            &.disabled {
                color: #969696;
                background: #e2e2e2;
                pointer-events: none;
                border: 1px solid #dcdcdc;
            }
        }
        & p {
            padding-top: 20px;
            text-align: center;
            color: red;
        }
        & ul {
            list-style-type: none;
            text-align: center;
            margin-top: 70px;
            margin-right: 40px;
            & a {
                text-decoration: none;
                color: #5a5a5a;
            }
        }
    }
</style>
