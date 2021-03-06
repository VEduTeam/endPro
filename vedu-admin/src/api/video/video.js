import request from '@/utils/request'

export default {
  saveVideoInfo(videoInfo) {
    return request({
      url: `/eduservice/eduVideo/saveInfo`,
      method: 'post',
      data: videoInfo
    })
  },
  getVideoInfoById(videoId) {
    return request({
      url: `/eduservice/eduVideo/getById/${videoId}`,
      method: 'get'
    })
  },
  updateVideoInfoById(videoInfo) {
    return request({
      url: `/eduservice/eduVideo/updateById`,
      method: 'put',
      data: videoInfo
    })
  },
  deleteVideoInfoById(videoId) {
    return request({
      url: `/eduservice/eduVideo/deleteById/${videoId}`,
      method: 'delete'
    })
  },
}
