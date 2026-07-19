export type Tone='success'|'warning'|'danger'|'info'|'muted';
export interface Log{ id:number;time:string;user:string;action:string;module:string;description:string;ip:string;device:string;result:'Success'|'Warning'|'Failed'|'Informational'}
export interface RemoteService{id:string;name:string;status:string;enabled:boolean;port?:number;localIp:string;remoteIp:string;sessions:number;devices:number;auth:string;last:string}
export interface Connection{id:string;user:string;service:string;device:string;ip:string;location:string;connected:string;disconnected:string;duration:string;status:string;auth:string}
export interface Registration{computerName:string;publicIp:string;localIp:string;location:string;domain:string;localUrl:string;port:string;protocol:'HTTP'|'HTTPS'|'TCP';remoteAccess:boolean;domainVerified:boolean;networkDetected:boolean;status:'draft'|'processing'|'registered';tunnelStatus:string;remoteStatus:string;tunnelId?:string;deviceId?:string;registeredAt?:string;latency?:number}
