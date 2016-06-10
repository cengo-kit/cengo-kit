module.exports = function () {
  return [
  {
    "key":  '{id}',
    "cms":  '@CurrentPage.PageID',
    "html": staticData.page.id
  },
  {
    "key":  '{title}',
    "cms":  '@CurrentPage.Page',
    "html": staticData.page.title
  },
  {
    "key":  '{url}',
    "cms":  '@CurrentPage.Url',
    "html": staticData.page.url
  },
  {
    "key":  '{userId}',
    "cms":  '@CurrentPage.UserId',
    "html": staticData.page.userId
  },
  {
    "key":  '{template}',
    "cms":  '@CurrentPage.Template',
    "html": staticData.page.template
  },
  {
    "key":  '{order}',
    "cms":  '@CurrentPage.PageOrder',
    "html": staticData.page.pageOrder
  },
  {
    "key":  '{updateDate}',
    "cms":  '@CurrentPage.UpdateDate',
    "html": staticData.page.updateDate
  },
  {
    "key":  '{createDate}',
    "cms":  '@CurrentPage.CreateDate',
    "html": staticData.page.createDate
  },
  {
    "key":  '{spot}',
    "cms":  '@CurrentPage.PageSpot',
    "html": staticData.page.createDate
  },
  {
    "key":  '{content}',
    "cms":  '@CurrentPage.PageContent',
    "html": staticData.page.pageContent
  }
];
};
