function importAll(r) {
  return r.keys().map(r)
}

// TODO: cleanup for more robust, simpler key name creating
const getImageKeyName = (filename) => filename.match(/[^/]*$/)[0].match(/^([^.]+)/)[0]

const ImageUtil = {
  create() {
    const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/))
    const imagesManifest = images.reduce((accImageManifest, currImage) => {
      accImageManifest[getImageKeyName(currImage)] = currImage
      return accImageManifest
    }, {})
    const imageUtil = {
      getImage(filename) {
        try {
          return imagesManifest[filename]
        } catch (err) {
          console.error(`problem getting ${filename}, ERR: ${err}`)
          return ''
        }
      }
    }
    return imageUtil
  }
}

// exporting singleton
export default ImageUtil.create()