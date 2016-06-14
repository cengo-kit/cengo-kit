module.exports = function (content) {
    return [
        {
            "key": "{id}",
            "cms": "@pages.Image(CurrentPage.Images,'{contextKey}').ImageID",
            "html": content.image.id
        },
        {
            "key": "{fileName}",
            "cms": "@pages.Image(CurrentPage.Images,'{contextKey}').FileName",
            "html": content.image.fileName
        },
        {
            "key": "{title}",
            "cms": "@pages.Image(CurrentPage.Images,'{contextKey}').Title",
            "html": content.image.title
        },
        {
            "key": "{altText}",
            "cms": "@pages.Image(CurrentPage.Images,'{contextKey}').AltText",
            "html": content.image.altText
        },
        {
            "key": "{description}",
            "cms": "@pages.Image(CurrentPage.Images,'{contextKey}').Description",
            "html": content.image.description
        },
        {
            "key": "{tag}",
            "cms": "@pages.Image(CurrentPage.Images,'{contextKey}').Tag",
            "html": content.image.tag
        },
        {
            "key": "{extension}",
            "cms": "@pages.Image(CurrentPage.Images,'{contextKey}').Extension",
            "html": content.image.extension
        },
        {
            "key": "{width}",
            "cms": "@pages.Image(CurrentPage.Images,'{contextKey}').W",
            "html": content.image.width
        },
        {
            "key": "{height}",
            "cms": "@pages.Image(CurrentPage.Images,'{contextKey}').H",
            "html": content.image.height
        }
    ];
};
