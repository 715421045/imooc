
//根据用户身份type、以及用户是否有头像avatar,计算所需要跳转到的路由地址
export function getRedirectPath({type, avatar}) {
    let url = (type == 'boss') ? '/boss' : '/genius';
    if(!avatar) {
        url += 'info';
    };
    return url;
}