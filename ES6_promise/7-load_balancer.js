/**
 * Returns the value of the first resolved promise
 * @param {Promise} chinaDownload - Promise for China download
 * @param {Promise} USDownload - Promise for US download
 * @return {Promise} A Promise that resolves to the value of the first resolved promise
 */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
