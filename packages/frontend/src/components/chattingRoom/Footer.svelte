<script lang="ts">
    let message = ""; // 메시지 상태
    let btnClassName = ""; // 버튼 클래스 이름
  
    // 폼 제출 이벤트 핸들러
    function handleSubmit(event: Event) {
      event.preventDefault();
      // 제출 로직 추가
    }
  
    // 메시지 변경 이벤트 핸들러
    function onMessageChange(event: Event) {
      const target = event.target as HTMLInputElement;
      message = target.value;
    }
  
    // Enter 키 누름 이벤트 핸들러
    function onEnterPress(event: KeyboardEvent) {
      if (event.key === "Enter") {
        // Enter 키 처리 로직
      }
    }
  </script>
  
  <div class="Wrapper">
    <form on:submit={handleSubmit}>
      <textarea
        bind:value={message}
        autoFocus={true}
        on:change={onMessageChange}
        on:keypress={onEnterPress}
      />
      <button class={btnClassName} type="submit">
        전송
      </button>
      <!-- 로그인 실패 메시지가 표시될 곳 -->
    </form>
  </div>
  
  <style>
    .Wrapper{
        position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  min-height: 80px;
  max-height: 200px;
  overflow: auto;
  padding: 6px;
  z-index: 100;
  background-color: #eeeeee;
  & form {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    & textarea,
    button {
      display: inline-block;
      border: none;
      outline: none;
    }
    & textarea {
      width: 100%;
      resize: none;
      height: 100%;
      margin: 0;
      padding: 20px 20px;
    }
    & button {
      width: 80px;
      height: 72px;
      margin-right:15px;
      background: #ffeb33;
      font-size:15px;
      &.canSubmit {
        cursor: pointer;
        pointer-events: all;
        color: #000;
      }
      &.cannotSubmit {
        pointer-events: none;
        color: #b4b4b4;
      }
    }
  }
    }
  </style>
  