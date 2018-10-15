function createSecondaryTile(text, activationArguments, tileId = null, logoUri = null, uriSmallLogo = null) {
    var currentTime = new Date();
    logoUri = logoUri || new Windows.Foundation.Uri("ms-appx:///images/Square150x150Logo.png");
    uriSmallLogo = uriSmallLogo || new Windows.Foundation.Uri("ms-appx:///images/Square44x44Logo.png");
    var newTileDesiredSize = Windows.UI.StartScreen.TileOptions.showNameOnLogo;
    tileId = tileId || activationArguments;

    var tile;
    try {
        tile = new Windows.UI.StartScreen.SecondaryTile(tileId, text, text, activationArguments,
            newTileDesiredSize, logoUri);
    } catch (e) {
        //Utils.error('failed to create secondary tile', e);
        return;
    }
    var element = document.body;
    if (element) {
        var selectionRect = element.getBoundingClientRect();
        var buttonCoordinates = { x: selectionRect.left, y: selectionRect.top, width: selectionRect.width, height: selectionRect.height };
        var placement = Windows.UI.Popups.Placement.above;
        return new Promise((resolve, reject) => {
            try {
                tile.requestCreateForSelectionAsync(buttonCoordinates, placement).done((isCreated) => {
                    if (isCreated) {
                        resolve(true);
                    } else {
                        reject(false);
                    }
                });
            } catch (e) {
                //Utils.error('failed to create secondary tile', e);
                reject(false);
            }
        });
    } else {
        //Utils.debug('No element to place (shall I pin a tile) question above:' + elementId);
        return new Promise(async (resolve, reject) => {
            reject(false);
        });
    }
}

// document.addEventListener("DOMContentLoaded", createSecondaryTile, false);


// TOAST


function showToastNotification(headerID, headerTitle, headerArguments, title, body, iconImagePath, badgeImagePath, heroImagePath, inlineImagePath, buttonName, buttonType, buttonArguments) {
// Original Code
    if (!window.Windows) return Promise.resolve(false);

    var imageUrl = /*window.location.protocol + '//' + window.location.host +*/ heroImagePath;

    // Create ToastNotification as XML Doc
    var toastXml = new Windows.Data.Xml.Dom.XmlDocument();
    toastXml.loadXml(toastNotificationXmlTemplate);

    // 'Hero' Image
    //HeroImage = new ToastGenericHeroImage() 
    //{ Source = imageUrl }

    // Update the background image
    var images = toastXml.getElementsByTagName('image');
        // 'Hero' image on top of notification
    images[0].setAttribute('placement', "hero");
    images[0].setAttribute('src' , imageUrl);
        // Inline image below notification
    images[1].setAttribute('src' , inlineImagePath);
        // Icon image to the left.
    images[2].setAttribute('placement', "appLogoOverride");
    images[2].setAttribute('hint-crop', "circle");
    images[2].setAttribute('src', iconImagePath);
        // Badge image 

    var header = toastXml.getElementsByTagName('header');
    header[0].setAttribute('id', headerID);
    header[0].setAttribute('title', headerTitle); 
    header[0].setAttribute('arguments', headerArguments);
    
    // Set notification texts
    var textNodes = toastXml.getElementsByTagName('text');
    textNodes[0].innerText = title;
    textNodes[1].innerText = body;

    // Set actions
    var actions = toastXml.getElementsByTagName('action');
    actions[0].setAttribute('content', buttonName)
    actions[0].setAttribute('activationType', buttonType)
    actions[0].setAttribute('arguments', buttonArguments)



    // Create a toast notification from the XML, then create a ToastNotifier object to send the toast.
    var toast = new Windows.UI.Notifications.ToastNotification(toastXml);
    Windows.UI.Notifications.ToastNotificationManager.createToastNotifier().show(toast); 
}
    
var toastNotificationXmlTemplate =
`<toast>
    <header id="" title="" arguments=""/>
        <visual>
        <binding template="ToastGeneric">
            <text hint-maxLines="1"></text>
            <text></text>
            <image placement="" src=""/>
            <image src=""/>
            <image placement="" hint-crop="" src=""/>
        </binding>
        </visual>
        <actions>
        <action/>
        
        </actions>
</toast>`;
    
// Toast Function to switch between web & app

// Creates notifications
// On Windows uses Toast notification
// On web uses Web Notifications
// headerID
// headerTitle
// ...
function uniToast(headerID, headerTitle, headerArguments, title, body, iconImagePath, badgeImagePath, heroImagePath, inlineImagePath, buttonName, buttonType, buttonArguments) {
    if (window.Windows)
    {
        showToastNotification(headerID, headerTitle, headerArguments, title, body, iconImagePath, badgeImagePath, heroImagePath, inlineImagePath, buttonName, buttonType, buttonArguments)
    } 
    else
    {
        var options = {body: body, image: heroImagePath}
        var notification = new Notification (title, options)
    }
}

