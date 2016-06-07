module.exports = function () {
  return [
  {
    "key":  '{id}',
    "cms":  '@{contextItem}.tblImageGallery.ImageGalleryID',
    "html": staticData.imageGallery.id
  },
  {
    "key":  '{title}',
    "cms":  '@{contextItem}.tblImageGallery.Title',
    "html": staticData.imageGallery.title
  },
  {
    "key":  '{fileName}',
    "cms":  '@{contextItem}.tblImageGallery.FileName',
    "html": staticData.imageGallery.fileName
  },
  {
    "key":  '{description}',
    "cms":  '@{contextItem}.tblImageGallery.Description',
    "html": staticData.imageGallery.description
  },
  {
    "key":  '{createDate}',
    "cms":  '@{contextItem}.tblImageGallery.Createdate',
    "html": staticData.imageGallery.createDate
  },
  {
    "key":  '{updateDate}',
    "cms":  '@{contextItem}.tblImageGallery.UpdateDate',
    "html": staticData.imageGallery.updateDate
  }
];
};