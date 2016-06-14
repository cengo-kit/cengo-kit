module.exports = function (content) {
  return [
  {
    "key":  '{id}',
    "cms":  '@{contextItem}.tblImageGallery.ImageGalleryID',
    "html": content.imageGallery.id
  },
  {
    "key":  '{title}',
    "cms":  '@{contextItem}.tblImageGallery.Title',
    "html": content.imageGallery.title
  },
  {
    "key":  '{fileName}',
    "cms":  '@{contextItem}.tblImageGallery.FileName',
    "html": content.imageGallery.fileName
  },
  {
    "key":  '{description}',
    "cms":  '@{contextItem}.tblImageGallery.Description',
    "html": content.imageGallery.description
  },
  {
    "key":  '{createDate}',
    "cms":  '@{contextItem}.tblImageGallery.Createdate',
    "html": content.imageGallery.createDate
  },
  {
    "key":  '{updateDate}',
    "cms":  '@{contextItem}.tblImageGallery.UpdateDate',
    "html": content.imageGallery.updateDate
  }
];
};
