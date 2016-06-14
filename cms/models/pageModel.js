module.exports = function (content) {
  return [
  {
    "key":  '{id}',
    "cms":  '@CurrentPage.PageID',
    "html": content.page.id
  },
  {
    "key":  '{title}',
    "cms":  '@CurrentPage.Page',
    "html": content.page.title
  },
  {
    "key":  '{url}',
    "cms":  '@CurrentPage.Url',
    "html": content.page.url
  },
  {
    "key":  '{userId}',
    "cms":  '@CurrentPage.UserId',
    "html": content.page.userId
  },
  {
    "key":  '{template}',
    "cms":  '@CurrentPage.Template',
    "html": content.page.template
  },
  {
    "key":  '{order}',
    "cms":  '@CurrentPage.PageOrder',
    "html": content.page.pageOrder
  },
  {
    "key":  '{updateDate}',
    "cms":  '@CurrentPage.UpdateDate',
    "html": content.page.updateDate
  },
  {
    "key":  '{createDate}',
    "cms":  '@CurrentPage.CreateDate',
    "html": content.page.createDate
  },
  {
    "key":  '{spot}',
    "cms":  '@CurrentPage.PageSpot',
    "html": content.page.createDate
  },
  {
    "key":  '{content}',
    "cms":  '@CurrentPage.PageContent',
    "html": content.page.pageContent
  }
];
};
