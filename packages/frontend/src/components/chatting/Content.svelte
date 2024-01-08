<script lang="ts">
    const chatRooms = Array(20).fill({
        name: '방이름',
        date: '2024.01.08',
        preview: '미리 보는 나의 채팅',
        imgSrc: '/chattingRoom.jpeg',
    })
</script>

<div class="Wrapper">
    {#each chatRooms as chatRoom}
        <li>
            <img src={chatRoom.imgSrc} alt="profile Image" />
            <p class="room-block-top">
                <b>{chatRoom.name}</b>
                <span>{chatRoom.date}</span>
            </p>
            <p class="preview">
                {chatRoom.preview}
            </p>
        </li>
    {/each}
</div>

<style>
    .Wrapper {
        position: absolute;
        top: 110px;
        bottom: 5px;
        width: 100%;
        overflow: auto;
        & li {
            position: relative;
            list-style-type: none;
            padding: 8px 100px 20px 105px;
            & img {
                position: absolute;
                top: 18px;
                left: 45px;
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
            & .room-block-top {
                position: relative;
                & span {
                    position: absolute;
                    top: 0;
                    right: 31px;
                }
            }
        }
    }
</style>
