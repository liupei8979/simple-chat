<script></script>

<div class="MainHeader">
    <div class="TitleBlock">
        <h2>친구</h2>
          <i
            class="fas fa-user-plus"
            title="친구 추가"
          />
    </div>
</div>



<style>
    .MainHeader{
        position: fixed;
  top: 0;
  left: 0;
  padding: 20px 20px 0px 120px;
  width: 100%;
  height: 100px;
  background-color: #fff;
  z-index: 1;
  & input {
    border: none;
    outline: none;
    border-radius: 10px;
    background-color: #f6f6f7;
    width: 100%;
    padding: 5px 10px;
    &:focus {
      &::placeholder {
        color: #f6f6f7;
      }
    }
  }
    }
    .TitleBlock{
        position: relative;
  & h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  & i {
    cursor: pointer;
    font-size: 20px;
    position: absolute;
    top: 5px;
    right: 0;
  }
    }
</style>