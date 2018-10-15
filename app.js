

function PinSecondaryTile()
{
    var text = "Text";
    var activationArguments = "my argument";
    var tileId = "12345";
    var logoUri = "";
    var uriSmallLogo = "";

    createSecondaryTile(text, activationArguments)
}

function PopNotification()
{
    uniToast(
    /* Marked with & are for web app only*/
    /*                          Header ID&*/ "12345",
    /*                       Header Title&*/ "The Header Title",
    /*                   Header Arguments&*/ "", 
    /*                 Notification Title */ "The Title", 
    /*             Notification Body Text */ "The Body", 
    /*                           Icon Url */ "https://i.pinimg.com/originals/b4/e6/95/b4e69585f2fb36f76d888dcbcebef494.png",
    /*                          Badge Url?*/ "https://i.pinimg.com/originals/b4/e6/95/b4e69585f2fb36f76d888dcbcebef494.png", 
    /*                           Hero Url */ "https://img00.deviantart.net/68d9/i/2017/012/d/5/polygon_fox_background_by_nikolayrr-dav49t9.png", 
    /*                         Inline Url&*/ "https://img00.deviantart.net/68d9/i/2017/012/d/5/polygon_fox_background_by_nikolayrr-dav49t9.png",
    /*                        Action Name&*/ "Hello World",
    /*                        Action Type&*/ "Background",
    /*                   Action Arguments&*/ ""
    /*                                    */
    /*                                    */
    /*                                    */
    /*                                    */
    );
}