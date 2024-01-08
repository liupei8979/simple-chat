<script lang="ts">
    import { onMount } from 'svelte'

    let pathname = ''

    const btns = [
        {
            title: 'friends',
            url: 'fas fa-user',
            activeUrl: 'fas fa-user',
            route: '/main/friends',
        },

        {
            title: 'chatting',
            url: 'fas fa-comment',
            activeUrl: 'fas fa-comment',
            route: '/main/chatting',
        },
        {
            title: 'logout',
            url: 'fas fa-sign-out-alt',
            activeUrl: 'fas fa-sign-out-alt',
            route: '/',
        },
    ]

    function navigateTo(route: string) {
        location.href = route
    }

    onMount(() => {
        pathname = window.location.pathname
        console.log('Current URL:', pathname)
    })
</script>

<div class="Wrapper">
    <div class="Sidebar">
        {#each btns as btn}
            <div class="menuBtn" on:click={() => navigateTo(btn.route)}>
                <div class="menuInner">
                    <div style="display:flex; align-items:center;">
                        {#if pathname == btn.route}
                            <i class={`${btn.activeUrl} activeIcon`}></i>
                        {:else}
                            <i class={`${btn.url} Icon`}></i>
                        {/if}
                    </div>
                </div>
            </div>
        {/each}
    </div>
    <slot />
</div>

<style>
    /* .Wrapper{
  width:90%;
} */

    .Sidebar {
        position: fixed;
        top: 0;
        left: 0;
        width: 130px;
        height: 100%;
        min-height: 100vh;
        background: #dfdfdf;
        padding-top: 20px;
        z-index: 2;
    }
    .menu {
        display: inline-block;
        width: 100%;
    }

    .menu.active {
        pointer-events: none;
        color: black;
    }
    .menuBtn {
        display: flex;
        align-items: center;
        justify-content: center; /* 수평 중앙 정렬 */
    }

    .menuBtn i {
        padding: 20px;
        font-size: 40px;
        cursor: pointer;
        &:hover {
            color: #888777;
        }
    }
    .activeIcon {
        color: black;
    }
    .Icon {
        color: #a6a7a8;
    }
</style>
