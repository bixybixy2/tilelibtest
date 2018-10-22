

function PinSecondaryTile()
{
    var text = "Text";
    var activationArguments = "myargument";
    var tileId = "12345";
    var logoUri = "";
    var uriSmallLogo = "";

    createSecondaryTile(text, activationArguments, tileId, logoUri, uriSmallLogo)
}

function UnpinSecondaryTile(){
    var tileId = "12345";
    removeSecondaryTile(tileId);
}

function PopNotification()
{
   var headerID = "12345"
   var headerTitle = "Header Title";
   var headerArguments = "";
   var title = "Notification Title";
   var body = "Notification Body";
   var iconImagePath = "https://i.pinimg.com/originals/b4/e6/95/b4e69585f2fb36f76d888dcbcebef494.png";
   var badgeImagePath = "https://i.pinimg.com/originals/b4/e6/95/b4e69585f2fb36f76d888dcbcebef494.png";
   var heroImagePath = "https://img00.deviantart.net/68d9/i/2017/012/d/5/polygon_fox_background_by_nikolayrr-dav49t9.png";
   var inlineImagePath = "https://img00.deviantart.net/68d9/i/2017/012/d/5/polygon_fox_background_by_nikolayrr-dav49t9.png";
   var buttonName = "Hello World";
   var buttonType = "Background";
   var buttonArguments = "";

    uniToast(headerID, headerTitle, headerArguments, title, body, iconImagePath, badgeImagePath, heroImagePath, inlineImagePath, buttonName, buttonType, buttonArguments);
}

function CheckPin(tileId)
{
    var isPinned = Windows.UI.StartScreen.SecondaryTile.exists(tileId);
    console.log(isPinned);
}
/*
new Windows.UI.StartScreen.SecondaryTile()


*/