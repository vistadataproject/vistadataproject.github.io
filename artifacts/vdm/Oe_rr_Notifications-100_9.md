---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Oe_rr_Notifications-100_9 

<dl>
<dt>id</dt><dd>Oe_rr_Notifications-100_9</dd>
<dt>fmId</dt><dd>100.9</dd>
<dt>label</dt><dd>Oe/rr Notifications</dd>
<dt>location</dt><dd>^ORD(100.9,</dd>
<dt>description</dt><dd>This file contains data used to generate notifications.  Packages<br/>determine if a notification should be sent then send the patient ID and<br/>notification ID (IEN in this file) to order entry routines.  Based on the<br/>notification IEN, data from this file is used to generate the notification<br/>and help determine its recipients.</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| number | .001 | Number | {::nomarkdown}This is the internal entry number assigned to a notification.  Entries<br/>1 through 9999 are reserved for National release by the OE/RR <br/>Notifications package.<br/> <br/>For local site-defined notifications, the internal entry number must be <br/>specific to your VAMC in the following format:<br/> <br/><your station number><incremental notification number 01-99><br/> <br/>For example, if your site is number 456, your first locally created <br/>notification would be 45601.                         {:/} | IEN |  |  |  | 
| name | .01 | Name | {::nomarkdown}This is the name of the notification.  It should match the text in the<br/>MESSAGE TEXT field as closely as possible (it may be an abbreviated version<br/>of the entry in MESSAGE TEXT.)  This field is displayed to users when<br/>selecting or reviewing entries in this file (100.9).{:/} | STRING |  | REQUIRED, INDEXED |  | 
| package_id | .02 | Package Id | {::nomarkdown}This entry should always be \OR\ to indicate the alert (notification) is <br/>processed by OE/RR.  \OR\ is stuffed via a trigger x-ref in field .01.<br/>This Package ID will have \;DFN;NIEN\ concatenated to the end of it, to<br/>make the XQAID variable which is used by the XQALERT routine to provide a<br/>unique cross-reference.  The order entry notification system will check<br/>the New person file to determine if this message is already pending for<br/>the user.  If it already exists, the user will not receive a second message.<br/> <br/>DFN is the Patient File internal entry number.<br/>NIEN is the Notification File internal entry number.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| message_text | .03 | Message Text | {::nomarkdown}This text will be appended to the Patient last name and last 4 characters of<br/>the social security number to create the order notification text.<br/>(e.g., SMITH (4356): Unsigned orders. - Where \Unsigned orders.\ is the <br/>content of MESSAGE TEXT.)  Text entered into this field is the default text<br/>for notifications where the text message usually comes from the package<br/>(MESSAGE TYPE = PKG).{:/} | STRING |  | REQUIRED, INDEXED |  | 
| message_type | .04 | Message Type | {::nomarkdown}MESSAGE TYPE field is used as a flag to determine where the message text originates.  If from the NOTIFICATION file, MESSAGE TYPE is 'NOT.'  If the message comes from the package, MESSAGE TYPE is 'PKG.'{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>NOT</dt><dd>NOTIFICATION FILE PROVIDES MESSAGE</dd><dt>PKG</dt><dd>PACKAGE PROVIDES A VARIABLE MESSAGE</dd></dl>{:/} | 
| action_flag | .05 | Action Flag | {::nomarkdown}This a mandatory flag used to regulate processing in XQALERT processing.<br/>The flag is set to I to indicate the notification is for INFORMATION ONLY - <br/>no follow-up action is to be taken.  'I' notifications are deleted as each<br/>user reviews them.  'R' notifications have a follow-up action associated<br/>with them.  The user will be taken to another routine or option when they<br/>select a notification with ACTION FLAG = R and a follow-up routine/option<br/>is defined.{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>R</dt><dd>RUN ROUTINE</dd><dt>I</dt><dd>INFORMATION ONLY</dd></dl>{:/} | 
| entry_point | .06 | Entry Point | {::nomarkdown}This is an optional field used to create the XQAROU variable to be used by<br/>the XQALERT routine.  This field represents the TAG in tag^routine. {:/} | STRING |  |  |  | 
| routine_name | .07 | Routine Name | {::nomarkdown}This is an optional variable identifying a routine or tag(field .06)^routine<br/>used to create XQAROU for processing by XQALERT.{:/} | STRING |  |  |  | 
| nonmenu_type_option_action | 1 | Non-menu Type Option Action | {::nomarkdown}This is an optional field used to create the variable XQAOPT for use<br/>by XQALERT.  It should indicate a non-menu type option on the user's<br/>primary or secondary menu, not on the Common menu.  The phantom jump <br/>is used to navigate to the destination option and will check pathway<br/>restrictions in doing so.{:/} | POINTER |  |  | Option-19 | 
| related_package | 1.5 | Related Package | {::nomarkdown}This field contains the name of the package where the notification originates or is triggered (e.g., LAB, MAS, Pharmacy.){:/} | STRING |  |  |  | 
| description | 4 | Description | {::nomarkdown}This field contains free text describing the notification, how it is trig-<br/>gered and what action(s) delete it.{:/} | STRING |  | REQUIRED |  | 
| followup_type | 5 | Follow-up Type | {::nomarkdown}This field contains the type of follow-up action to be taken.  It is used <br/>by the application managing the follow-up action  (e.g. GUI interface) to<br/>initiate the proper follow-up action separate from the underlying data <br/>base and application layers.  Example follow-up types include: report,<br/>e/s, flag.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>2</dt><dd>EXPIRING_ORDER</dd><dt>8</dt><dd>COSIGN_ORDER</dd><dt>1</dt><dd>COSIGN_PN</dd><dt>3</dt><dd>FLAGGED_ORDER</dd><dt>11</dt><dd>UNVERIFIED_MED</dd><dt>7</dt><dd>NEW_ORDER</dd><dt>6</dt><dd>NEW_CONSULT</dd><dt>10</dt><dd>UNSIGN_PN</dd><dt>0</dt><dd>REPORT</dd><dt>9</dt><dd>ES_ORDER</dd><dt>5</dt><dd>UNLINKED</dd><dt>4</dt><dd>ORDER</dd></dl>{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 30th 2017, 8:27:43 pm</p>{:/}