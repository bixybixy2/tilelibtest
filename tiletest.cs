using Windows.UI.Notifications;
using Windows.Data.Xml.Dom;

string from = "This is a Name";
string subject = "this is a subject";
string body = "this is a body";

string content = $@"
<tile>
    <visual>
 
        <binding template='TileMedium'>
            <text>{from}</text>
            <text hint-style='captionSubtle'>{subject}</text>
            <text hint-style='captionSubtle'>{body}</text>
        </binding>
 
        <binding template='TileWide'>
            <text hint-style='subtitle'>{from}</text>
            <text hint-style='captionSubtle'>{subject}</text>
            <text hint-style='captionSubtle'>{body}</text>
        </binding>
 
    </visual>
</tile>";

XmlDocument doc = new XmlDocument();
doc.LoadXml(content);

var notification = new TileNotification(doc);