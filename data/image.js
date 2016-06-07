module.exports = function () {
    return [
        {
            "key": "{id}",
            "cms": "@pages.Image(CurrentPage.Images,'{contextKey}').ImageID",
            "html": staticData.image.id
        },
        {
            "key": "{fileName}",
            "cms": "@pages.Image(CurrentPage.Images,'{contextKey}').FileName",
            "html": staticData.image.fileName
        },
        {
            "key": "{title}",
            "cms": "@pages.Image(CurrentPage.Images,'{contextKey}').Title",
            "html": staticData.image.title
        },
        {
            "key": "{altText}",
            "cms": "@pages.Image(CurrentPage.Images,'{contextKey}').AltText",
            "html": staticData.image.altText
        },
        {
            "key": "{description}",
            "cms": "@pages.Image(CurrentPage.Images,'{contextKey}').Description",
            "html": staticData.image.description
        },
        {
            "key": "{tag}",
            "cms": "@pages.Image(CurrentPage.Images,'{contextKey}').Tag",
            "html": staticData.image.tag
        },
        {
            "key": "{extension}",
            "cms": "@pages.Image(CurrentPage.Images,'{contextKey}').Extension",
            "html": staticData.image.extension
        },
        {
            "key": "{width}",
            "cms": "@pages.Image(CurrentPage.Images,'{contextKey}').W",
            "html": staticData.image.width
        },
        {
            "key": "{height}",
            "cms": "@pages.Image(CurrentPage.Images,'{contextKey}').H",
            "html": staticData.image.height
        }
    ];
};