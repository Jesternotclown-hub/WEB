import {accessToken, version} from "./consts.js";

export class Urls {
    constructor() {
        this.url = 'https://api.vk.com/method/'
        this.commonInfo = `access_token=${accessToken}&v=${version}`
    }


    getGroupMembers(groupId) {
        return `${this.url}/groups.getMembers?group_id=${groupId}&fields=photo_400_orig&${this.commonInfo}`
    }
}

