import { get } from '@/utils/request';

/**
 * 获取推荐也轮播图
 * @param {*请求参数} data
 */
const getSlider = data => get('yqq/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg', data);

/**
 * 获取专辑列表
 * @param {*请求参数} data
 */
const getAlbum = data => get('uyqq/cgi-bin/musicu.fcg', data);

export { getSlider, getAlbum };
