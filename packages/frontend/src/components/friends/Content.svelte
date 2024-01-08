<script></script>

<div class="MainContent">
    <div class="MyProfileBlock">
        <img src="/base_profile.jpg" alt="profile Image" />
        <p>
            <b>이름 추가해야됨</b>
        </p>
        <p>상태메시지 추가해야됨</p>
    </div>
    <div class="FriendsBorder">
        <p>친구 41</p>
    </div>

    <h1 style="margin-left:40px">친구 목록 나열</h1>
</div>

<style>
    .MainContent {
        position: absolute;
        top: 110px;
        bottom: 5px;
        width: 100%;
        overflow: auto;
        & li {
            position: relative;
            padding: 20px 100px 20px 180px;
            & img {
                position: absolute;
                top: 18px;
                left: 120px;
                width: 45px;
                height: 45px;
                border-radius: 15px;
                cursor: pointer;
            }
            & p {
                color: #707070;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-height: 19px;
                font-size: 12px;
                & b {
                    color: #000;
                    font-weight: bold;
                    font-size: 14px;
                }
            }
            &:hover {
                background-color: #eaeaeb;
            }
        }
    }
    .MyProfileBlock {
        position: relative;
        padding: 10px 10px 25px 105px;
        & img {
            position: absolute;
            top: 18px;
            left: 42px;
            width: 50px;
            height: 50px;
            border-radius: 15px;
            cursor: pointer;
        }
        & p {
            color: #707070;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            min-height: 19px;
            font-size: 12px;
            & b {
                color: #000;
                font-weight: bold;
                font-size: 14px;
            }
        }
        &:hover {
            background-color: #eaeaeb;
        }
    }
    .FriendsBorder {
        border-top: 0.5px solid #dcdcdc;
        margin: 0px 20px 0 45px;
        padding-top: 10px;
        & p {
            font-size: 15px;
            color: #b4b4b4;
        }
    }
</style>
