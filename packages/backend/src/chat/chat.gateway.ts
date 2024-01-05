import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";


@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;

    // connectedClients
    // clientId
    // roomUsers

    handleConnection(client: Socket, ...args: any[]): void {
        return;
    }
    // 먼저 local에 데이터가 있는지 확인
    //      없으면 서버에서 state 보내주기
    // 있다면 (A + T = B), 지난 로그인 시간 확인 후 그 이후에 발생한 Event들 순서대로 전달
    handleDisconnect(client: Socket): void {
        return;
    }
    //
    // @SubscribeMessage('Join')
    // 방 이미 존재하면 입장
    // 방 없으면 생성 후 입장

    // @SubscribeMessage('Leave')
    // @SubscribeMessage('Message')
}